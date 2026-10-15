#!/usr/bin/env node
// Decode the Open Earth portfolio (a Claude Design "bundler" export) into plain asset files.
// Usage: node scripts/extract-bundle.js <openearth/index.html> <out-dir>
//
// The bundle holds a JSON manifest of base64 (sometimes gzipped) assets keyed by uuid,
// plus an HTML template that references them by uuid and also inlines the case-study
// images as data: URIs. This script writes:
//   <out-dir>/pu-mark.png, about-scuba.png      named manifest assets
//   <out-dir>/fonts/DepartureMono.woff2         the self-hosted mono face
//   <out-dir>/<case>-<n>.<ext>                  case gallery images, deduplicated
//   <out-dir>/ds-doc-<n>.png                    design-system documentation slides
//   <out-dir>/hero-bg.png                       the old hero texture (not used by renew)
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const [src, outDir] = process.argv.slice(2);
if (!src || !outDir) {
  console.error('Usage: node scripts/extract-bundle.js <bundle.html> <out-dir>');
  process.exit(1);
}

const html = fs.readFileSync(src, 'utf8');
function block(type) {
  const m = html.match(new RegExp('<script type="__bundler/' + type + '"[^>]*>([\\s\\S]*?)</script>'));
  if (!m) throw new Error('Missing __bundler/' + type + ' block');
  return m[1];
}

const manifest = JSON.parse(block('manifest'));
let template = block('template');
try { template = JSON.parse(template); } catch (_) { /* already raw HTML */ }

function decode(entry) {
  const bytes = Buffer.from(entry.data, 'base64');
  return entry.compressed ? zlib.gunzipSync(bytes) : bytes;
}
function write(rel, bytes) {
  const file = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, bytes);
  console.log(rel.padEnd(28) + String(bytes.length).padStart(9) + ' B');
}

// 1. Named manifest assets, located by how the template uses them.
function uuidBefore(marker) {
  const i = template.indexOf(marker);
  if (i < 0) return null;
  const m = template.slice(i).match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
  return m && manifest[m[0]] ? m[0] : null;
}
const named = {
  'fonts/DepartureMono.woff2': uuidBefore("font-family: 'Departure Mono';"),
  'pu-mark.png': uuidBefore('<img src="'),
};
// The scuba photo's src precedes its alt, so look it up from the <img> tag directly.
const scuba = template.match(/<img src="([0-9a-f-]{36})" alt="Pablo, scuba diving"/);
if (scuba) named['about-scuba.png'] = scuba[1];
for (const [rel, uuid] of Object.entries(named)) {
  if (!uuid) { console.warn('Not found: ' + rel); continue; }
  write(rel, decode(manifest[uuid]));
}

// 2. Inline data: URIs inside the case list. Each belongs to the nearest preceding `id: '<case>'`
//    and to the nearest preceding key (img / gallery / carousel).
const SLUG = { ice: 'ice', coclico: 'coclico', trase: 'trase', encore: 'encore', 'design-system': 'ds', 'ai-pilot': 'ai-pilot' };
const EXT = { png: 'png', avif: 'avif', jpeg: 'jpg', webp: 'webp' };
const seen = new Set();
const counters = {};
const re = /data:image\/(png|avif|jpeg|webp);base64,([A-Za-z0-9+/=]+)/g;
let m;
while ((m = re.exec(template))) {
  const before = template.slice(0, m.index);
  const caseMatch = [...before.matchAll(/\bid: '([a-z-]+)'/g)].pop();
  const keyMatch = [...before.matchAll(/\b(img|gallery|carousel|setHero|src)\s*[:=]/g)].pop();
  const key = keyMatch ? keyMatch[1] : '';
  const bytes = Buffer.from(m[2], 'base64');
  const hash = crypto.createHash('sha1').update(bytes).digest('hex');
  if (seen.has(hash)) continue;
  seen.add(hash);

  let base;
  if (key === 'setHero') base = 'hero-bg';
  else if (key === 'src' || !caseMatch) continue; // client logos for the old application: not reused
  else if (key === 'carousel') base = 'ds-doc';
  else base = SLUG[caseMatch[1]];
  if (!base) continue;

  counters[base] = (counters[base] || 0) + 1;
  const name = base === 'hero-bg' ? 'hero-bg' : base + '-' + counters[base];
  write(name + '.' + EXT[m[1]], bytes);
}
