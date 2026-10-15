# renew portfolio: handoff brief
*v1, 2026-10-16. Source of truth for the Claude Code build.*

## 1. Summary
- **What:** the Open Earth portfolio's structure and type, re-skinned with a palette inspired by renew's site, content retargeted to one application.
- **For whom:** renew (Renew Earth – Nature Solutions), Senior Product Manager. Reader: a CPO or founder skimming for 60 seconds.
- **Must prove:** biologist turned PM, 6+ years in nature and geospatial data products, owns requirements, scientists as users, UX/UI strength, builds the product function.
- **Live URL:** https://pablourrutia-pm.github.io/renew/ (new repo `pablourrutia-pm/renew`). The Open Earth site stays untouched.
- **Status:** copy final except the [CONFIRM] items. Use-case link pending.

## 2. Page structure
A single-page app with hash routes, same as Open Earth. Header: "PU" mark + PABLO URRUTIA, menu (☰) with Selected Work, How I Work, About, Contact, and a Full / TL;DR switch top right.
1. **Home** `#/`: hero (label, H1, intro, 3 buttons) → "curated for renew" badge → Featured work (4 cards) → Next up teaser → What I do chips → footer.
2. **Selected Work** `#/work`: intro + 6 cards (4 featured + Design Systems + AI Pilot).
3. **Case pages** `#/work/<slug>`: trase, encore, coclico, ice-logistics, design-system, ai-pilot.
4. **How I Work** `#/how`: 5 capabilities + "Why renew".
5. **About** `#/about`: story, honest framing, why this role, timeline, education.
6. **Contact** `#/contact`.
7. **TL;DR mode**: a light, text-only, image-free version of the whole site, one page.
Footer on every view: human line, email, and "✳ TL;DR VERSION: a lighter, text-only read, toggle top right."

## 3. Final copy

### Home
- **Label:** ✳ PABLO URRUTIA · SENIOR PRODUCT MANAGER
- **H1:** Product manager for {nature data products} that scientists and businesses use.  *(braces = accent colour)*
- **Intro:** I'm a biologist turned product manager. For 6+ years I've turned field science and geospatial data into products people use: owning requirements, working shoulder to shoulder with scientists, engineers and designers, and making data-dense maps and dashboards readable. Today I run product for ENCORE Insights at Global Canopy.
- **Buttons:** VIEW SELECTED WORK → (filled) · HOW I WORK · GET IN TOUCH
- **Badge:** ✳ A PORTFOLIO CURATED FOR · renew *(name as plain text in a pill, no logo)*
- **Section label:** ✳ FEATURED WORK

**Cards** (meta / title / one line):
1. VIZZUALITY · PRODUCT DESIGN & DEVELOPMENT / **Trase** / Supply-chain transparency on geospatial data. Turned user research into a context-first flow and data cards: search completion and engagement rose.
2. GLOBAL CANOPY · PRODUCT & DESIGN / **ENCORE Insights** / Nature-risk intelligence for finance. I run product end to end: requirements, prototypes and the design system.
3. EU PROJECT · VIZZUALITY / **CoCliCo** / A European coastal climate-risk platform. Turned stakeholder interviews into personas, user stories and map requirements.
4. VIZZUALITY · BRITISH ANTARCTIC SURVEY / **Ice Logistics Portal** / Polar sea-ice navigation on Copernicus EO data. Led discovery and design, mapping requirements to data layers.

**Next up:**
- Label: ✳ NEXT UP · A USE CASE FOR RENEW
- Title: Site nature snapshot
- Body: Rather than only telling you how I'd work, I'm showing it. A small working prototype for one real site in Spain: open, multi-taxa biodiversity records on a map, plus a data-completeness view that shows which species groups are under-recorded. Scoped like a PM, with the brief and decisions in the open. Landing this week.
- Link: [USE-CASE LINK] (disabled state until filled)

**What I do (chips):** Requirements & user stories · Scientists as users · Data quality & completeness · UX/UI & data visualisation · Maps & geospatial products · Cross-functional delivery · Product operations · AI-assisted prototyping

**Footer human line:** Built in Granada, between a morning swim and too much coffee.

### Selected Work
- Label: ✳ SELECTED WORK. H1: A curated selection of work
- Intro: The projects with the most interesting problems, decisions and craft behind them. There's more where these came from: get in touch if you'd like to see other projects.
- Cards 5 and 6:
  - DESIGN SYSTEMS · GLOBAL CANOPY · ENCORE / **Design Systems & Documentation** / Creating and documenting the ENCORE design system: consistency for the team, and docs that teach users how to read the data.
  - CURRENT · GLOBAL CANOPY / **AI Pilot & Use-Case Library** / Global Canopy's internal AI pilot: a use-case library, prompt system, policies and enablement, so a whole organisation adopts AI responsibly.

### Case pages
Port the six Open Earth case pages **as written** (back link, eyebrow, meta, title, tag chips, TL;DR, What I did, impact, Why it matters, images). Edits only:
- Replace every em dash: bullet markers become a styled "→" or "·"; dashes inside sentences become commas or colons.
- Trase page: keep the impact list. It is the only outcome evidence on the site.
- ENCORE page: keep "part of the front-end code". Do **not** name the lead designer: "with Ailsa, the lead designer" becomes "with the lead designer".
- Design System page: keep the token-audit figures (11 drift points, 142 → 38 tokens, ~24 dev-hours a quarter). Confirmed.
- Add a "See it live →" link on these case pages: Trase https://trase.earth · ENCORE https://encorenature.org (label it "ENCORE, the public tool": ENCORE Insights itself is Global Canopy's product) · CoCliCo https://www.coclicoservices.eu · Ice Logistics https://www.vizzuality.com/project/ice-logistics-portal

### How I Work
- Label: ✳ HOW I WORK. H1: Science-first, evidence-led
- Intro: Five capabilities, each backed by the work. I connect scientists, engineers and designers, and turn what they know into products people can use.
1. **Requirements from science.** I define requirements at every level, from PRDs down to testable items, grounded in evidence. I turn interviews, analytics and scientific input into clear product decisions. *CoCliCo personas & user stories · Trase research → product changes · ENCORE*
2. **Product, UI & data visualisation.** Conceptualisation, UI design, and making data-dense dashboards and maps readable. *Ice Logistics · Trase data cards · ENCORE heatmaps · Mongabay*
3. **Delivery & product operations.** I set up how product work actually runs: lifecycle, backlog, governance and the weekly mechanics that keep multi-partner delivery moving. *GC product lifecycle · Open Forests · CoCliCo work package · Jira / Asana / Notion*
4. **AI prototyping & design systems.** AI-assisted prototyping lets a team test ideas faster and frees designers to polish. Design systems keep growing products consistent. *ENCORE design system · Global Canopy AI pilot*
5. **Product communications.** Explaining what a product does, and to whom, is half the job. I turn features into stories people act on. *LandGriffon · CoCliCo · MIRACA*
- **✳ WHY RENEW. H2: Where I want to build next.** This portfolio is curated for renew. renew starts where my career started: field science, transects and species counts. It turns that science into decision-grade data for business, which is the gap between scientific rigour and ease of use I've worked on for six years. And I want to do it inside a product team: designers, data scientists and domain experts I can learn from, and one product to build over time.

### About
- Label: ✳ ABOUT. H1: From biology to nature data products
- Story: port the Open Earth "About" paragraph as is (BSc Biology, scuba instructor and dive-centre operations, Kanban by necessity, Vizzuality, Global Canopy).
- **The honest framing** (keep verbatim): My strength is coordination, product and delivery: I connect partners with scientific and engineering teams, keep complex multi-partner work moving, and translate science into products people use. I stay close to the engineering and requirement-writing work, and I leave the deep technical decisions to the specialists who own them.
- **✳ WHY THIS ROLE** (replaces the CityCatalyst paragraph): I've spent six years leading the delivery of nature and geospatial data products, from Trase to the British Antarctic Survey's Ice Logistics Portal, and today ENCORE Insights. renew's mix is the one I know best: field scientists as users, business clients as customers, and data that has to be both rigorous and readable. Working from Spain, I'm happy to work UK hours.
- **Timeline:** port, but fix dates to match the CV: Vizzuality **2020** (not 2022); Prodigioso Volcán 2018; scuba instructor 2015. Keep entries in chronological order.
- Education & certifications: port as is.

### Contact
- Label: ✳ CONTACT. H1: Let's talk.
- Body: Open to senior product roles in nature and climate data. Remote from Spain, happy to work UK hours.
- Rows: EMAIL pablodelmares@gmail.com → · LINKEDIN linkedin.com/in/pablo-urrutia → · LOCATION Spain, remote-first, UK hours.

### TL;DR version (text only)
> **Pablo Urrutia · Senior Product Manager.** Biologist turned product manager, 6+ years in nature and geospatial data products. Spain, remote, UK hours.
> **Now:** Product Manager, ENCORE Insights (Global Canopy): nature-risk data for finance. Also built Global Canopy's product lifecycle and led its AI pilot.
> **Before:** Vizzuality 2020–2024 (PM to Project Lead): Trase, CoCliCo, Ice Logistics Portal, Mongabay. Open Forests 2024–25: product and operations foundations.
> **Proof:** Trase research → context-first flow and data cards, search completion and engagement up. CoCliCo interviews → personas and user stories for the map. Ice Logistics: discovery and design on Copernicus EO data.
> **What I do:** requirements, scientists as users, data quality, UX/UI and data visualisation, cross-functional delivery, product operations.
> **For renew:** a site nature snapshot use case, landing this week: [USE-CASE LINK]
> **Contact:** pablodelmares@gmail.com · linkedin.com/in/pablo-urrutia

## 4. Visual spec
**Direction (decided 2026-10-16):** keep Pablo's structure, type and PU mark; re-skin the palette with inspiration from renewearth.com (deep aubergine purple, violet accent, warm orange, bright multi-taxa colours, alternating dark and light bands). Inspired by, never a copy: no renew logo, no spiral, no hummingbird imagery, no Inter. The page must still read as Pablo's.
renew's own values (read from their live CSS): purple #433468, white, slate #F8FAFC, ink #020617, slate text #334155, orange #FF9F40; type Inter / Manrope.

| Token | Value |
|---|---|
| Canvas (dark bands) | #2A2145 (deeper than renew's purple, so text contrast holds) |
| Card surface on dark | #433468 |
| Light band background | #F8FAFC (alternate: hero dark → featured work light → next up dark → chips light → footer dark) |
| Card surface on light | #FFFFFF, 1px border #E2E8F0 |
| Text on dark: primary / secondary / faint | #EEEAF7 / #C9C0DE / rgba(238,234,247,0.55) |
| Text on light: primary / secondary | #020617 / #334155 |
| Accent text on dark (H1 highlight, labels, card meta) | #B79CFF (6.6:1 on canvas) |
| Accent on light (links, card meta) | #6D4FD1 (5.4:1 on #F8FAFC) |
| Primary button | fill #6D4FD1, white text (5.7:1), radius 999px |
| Secondary accent (sparingly: "Next up" label, one highlight per view) | #FF9F40 (7.3:1 on canvas) |
| Focus ring | 2px #FF9F40, offset 2px |
| Multi-taxa chip palette (What I do chips, case tags; nod to species groups) | teal #3A9E8F · green #5BAF3C · yellow #E8B931 · pink #D63A7A · blue #3B5BDB *(sampled by eye from renew's taxon icons: tint at 15% for chip fill, full colour for a 8px dot; text stays primary)* |
| PU mark | recolour to #B79CFF on dark, #6D4FD1 on light. No gradient. |
| Display font | Space Grotesk 600–700 (Google Fonts) |
| Body font | Hanken Grotesk 400–500 (Google Fonts) |
| Mono / labels / buttons / nav | Departure Mono 400–700 (self-host from the Open Earth bundle; OFL) |
| H1 | 34px mobile / 42px desktop, weight 700, line-height ~1.04, letter-spacing -0.85px |
| H2 / H3 / card title | 22px / 18px / 19px weight 600 |
| Body / hero intro | 17px / 18px, line-height 1.55 |
| Labels | 12–13px mono uppercase, letter-spacing 0.1–0.2em (renew uses wide tracking: 2.8px at 14px) |
| Radii | sm 6 · md 12 · card 20 · image 28 · pill 999 (px). Images get large rounded corners, as on renew's site |
| Spacing | 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 (px); gutter 24px; generous vertical padding per band (80–96px desktop) |
| Widths | container 1080px; content 720px; text 680px |
| TL;DR mode | light only: #F8FAFC background, #020617 text, #6D4FD1 links |

## 5. Assets
| Asset | Status | Path in new repo |
|---|---|---|
| "PU" logo mark | have, inside Open Earth bundle | assets/pu-mark.png |
| Departure Mono woff2 | have, inside bundle (or departuremono.com, OFL) | assets/fonts/DepartureMono.woff2 |
| Trase images (3) | have, inside bundle | assets/trase-1..3.png |
| ENCORE images (3) | have, inside bundle | assets/encore-1..3.png |
| CoCliCo images (2) | have, inside bundle | assets/coclico-1..2.png |
| Ice Logistics images (2, AVIF) | have, inside bundle | assets/ice-1..2.avif |
| Design-system images (11, incl. 8 doc slides) | have, inside bundle | assets/ds-*.png |
| AI pilot image | have, inside bundle | assets/ai-pilot.png |
| Card thumbnails | have, inside bundle | assets/thumb-*.png |
| renew use-case screenshot | missing (built this weekend) | assets/usecase.png |
| Public case links | have (section 3, Case pages) | in case pages |
| og:image for link previews | missing (optional) | assets/og.png |

Extract existing images from the Open Earth bundle; don't re-create them.

## 6. Open questions and [CONFIRM] list
Resolved 2026-10-16: footer line yes; ENCORE keeps front-end code, no designer name; design-system figures confirmed; Vizzuality from 2020; all public links in.
Still open:
1. [USE-CASE LINK] and assets/usecase.png, once the mini-project is built.
2. Scuba timeline year (brief assumes 2015, per the CV). [CONFIRM]

## 7. Claude Code build prompt
```text
ROLE
You are a senior front-end developer and product designer. You build fast, accessible, dependency-free personal sites and ship them to GitHub Pages. You follow a brief exactly and flag anything missing instead of inventing it.

TASK
Build Pablo Urrutia's portfolio site for his renew application, from docs/brief.md in this repo, and get it ready to publish on GitHub Pages:
1. Extract the reusable assets (images, logo, Departure Mono font) from the old portfolio bundle
2. Build one self-contained index.html (inline CSS and JS) that implements the brief's structure, copy and visual spec
3. Add a README.md and publish via GitHub Pages
4. Report what's done and every placeholder left

CONTEXT
- docs/brief.md is the single source of truth: page structure (section 2), final copy (3), visual spec (4), assets (5), open questions (6). Read it fully before writing code.
- Repo: pablourrutia-pm/renew, served at https://pablourrutia-pm.github.io/renew/
- Old portfolio: https://github.com/pablourrutia-pm/openearth (live at https://pablourrutia-pm.github.io/openearth/). Its index.html is a Claude Design "bundler" export: a JSON manifest of base64-encoded (possibly gzip-compressed) assets plus a template. Clone or download it and write a small script to decode the manifest and save the images and the Departure Mono font into assets/. The six case pages' copy and images live in that bundle too: port them as the brief says. Don't modify the openearth repo.

CONSTRAINTS
- One index.html with inline CSS and JS. No frameworks, no build step, no npm runtime dependencies. Google Fonts allowed for Space Grotesk and Hanken Grotesk; self-host Departure Mono from assets/fonts.
- Hash routing: #/, #/work, #/work/<slug>, #/how, #/about, #/contact. Back and forward buttons must work. Each view sets document.title.
- TL;DR toggle: a real <button> with aria-pressed, switching to a light-theme, text-only, image-free single page of the TL;DR copy. Remember the choice in localStorage (wrapped in try/catch).
- Use the brief's copy verbatim. Don't add claims, numbers or clients. Leave [CONFIRM] and [USE-CASE LINK] items as visible placeholders, styled so they're easy to spot, and list them in your report.
- No em dashes anywhere in the visible text.
- Accessibility: semantic landmarks, one h1 per view, alt text on every image, visible keyboard focus using the focus-ring token, WCAG AA contrast, prefers-reduced-motion respected. Works at 375px with no horizontal scroll.
- Lazy-load images below the fold; convert PNGs over 400 KB to WebP.
- Add meta description, og:title, og:description, and a favicon from the PU mark.

FORMAT
1. Files: index.html, README.md (5 lines: what, live link, contact), assets/, docs/brief.md (unchanged), scripts/extract-bundle.js (the extraction script)
2. Commit with a clear message, push to main, enable Pages (Settings → Pages → Deploy from branch: main, root) or tell Pablo the exact clicks if you can't
3. Final report in chat: live URL, a checklist of what's done, and the list of placeholders still to fill
```
