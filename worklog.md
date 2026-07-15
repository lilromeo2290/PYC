# Progressive Youth Club, Ho — Project Worklog

> Single shared, append-only work log for the PYC Club website project.
> All agents and contributors MUST read this file before working and append a
> new section after each push.

- **Repository:** https://github.com/lilromeo2290/PYC
- **Branch:** `main`
- **Local path:** `/home/z/my-project`
- **Framework:** Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui

---

## Commit & Push Protocol (READ FIRST)

Every change set MUST be committed and pushed to GitHub using the shared script:

```bash
# Auto-generated commit message
/home/z/my-project/scripts/push-to-github.sh

# Custom commit message
/home/z/my-project/scripts/push-to-github.sh "feat: add volunteer signup form"

# Push without touching the worklog (rare — only for tiny fixes)
/home/z/my-project/scripts/push-to-github.sh "chore: typo" --no-edit
```

### Rules

1. **Never** write the GitHub PAT into any committed file. The token lives
   only in `/home/z/my-project/.github-token` (gitignored, chmod 600) and is
   injected transiently into the remote URL by the push script.
2. **Never** commit `.env`, `.github-token`, `node_modules/`, `.next/`,
   `dev.log`, or `upload/`. The `.gitignore` already excludes them — do not
   override with `git add -f`.
3. **Always** append a new `## Push — <timestamp>` section to this file
   after each push (the script does this automatically unless `--no-edit`
   is passed).
4. **Always** use clear, conventional commit prefixes:
   - `feat:` new feature
   - `fix:` bug fix
   - `style:` visual / CSS only
   - `refactor:` code restructure, no behavior change
   - `content:` text / copy updates
   - `chore:` tooling, deps, config
   - `docs:` worklog / README
5. **Before** starting work, read the most recent `## Push` sections below
   to understand what the previous agent / session changed.

### Token rotation

If the push script reports `HTTP 401` / "Bad credentials":

1. Generate a new PAT at https://github.com/settings/tokens
   (scopes: `repo`, `workflow`).
2. Replace the contents of `/home/z/my-project/.github-token`:
   ```bash
   echo "ghp_NEW_TOKEN" > /home/z/my-project/.github-token
   chmod 600 /home/z/my-project/.github-token
   ```
3. Re-run the push script. No code changes needed.

---

## Project Structure (quick reference)

```
src/app/
  layout.tsx        — Poppins + Inter fonts, SEO metadata, PYC favicon
  page.tsx          — Composes all 12+ sections + scroll-reveal hook
  globals.css       — PYC brand tokens (royal blue + gold), animations
src/components/pyc/
  logo.tsx          — Official uploaded emblem (badge + wordmark variants)
  button.tsx        — PYCButton with 6 brand variants
  navbar.tsx        — Sticky transparent nav + mobile Sheet
  hero.tsx          — Full-screen hero with animated stat cards
  about.tsx         — Mission, vision, 7 core values
  programs.tsx      — 8 program cards
  impact.tsx        — 6 animated counters on dark blue
  projects.tsx      — Featured projects grid
  stories.tsx       — Testimonial slider
  events.tsx        — Alternating timeline
  volunteer.tsx     — Full-width CTA
  donate.tsx        — Interactive donation amounts
  gallery.tsx       — Filterable masonry gallery
  news.tsx          — Blog cards
  partners.tsx      — Scrolling logo carousel
  contact.tsx       — Form + map + contact info
  footer.tsx        — Mega footer with newsletter
  floating-actions.tsx — Scroll progress + Donate FAB + back-to-top
  section-header.tsx   — Reusable section header
  use-scroll-reveal.ts — IntersectionObserver hook
public/
  pyc-logo.png          — Full native-size brightened emblem
  pyc-logo-512.png      — 512×512 square for navbar / hero chip
  pyc-favicon.png       — 64×64 browser tab icon
  pyc-apple-icon.png    — 180×180 Apple touch icon
  pyc-og-image.png      — 1200×630 social share card
scripts/
  optimize-logo.js      — Sharp pipeline to brighten + resize the logo
  push-to-github.sh     — Commit & push script (token-aware)
```

---

## Push History

<!--
  Newest entries appended at the BOTTOM by the push script.
  Manual entries should follow the same format:

  ## Push — YYYY-MM-DD HH:MM:SS UTC
  - **Commit message:** …
  - **Branch:** main
  - **Author:** …
  - **Commit SHA:** …
  - **Files changed:** …
  - **Repository:** https://github.com/lilromeo2290/PYC
  ### Summary of changes in this push
  …
-->

## Push — 2026-07-14 03:55:00 UTC (pending)

- **Commit message:** Initial commit — full PYC Club website with brand identity
- **Branch:** main
- **Local commit SHA:** d35fdfe
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token provided in chat was invalid (HTTP 401).
  GitHub likely auto-revoked it via secret-scanning. Awaiting a fresh PAT.

### How to complete this push (when a valid token is available)

```bash
# 1. Generate a new PAT at https://github.com/settings/tokens
#    Scopes needed: repo (and workflow if you add CI later)

# 2. Write it to the gitignored token file
echo "ghp_NEW_TOKEN_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token

# 3. Push (the script will validate the token first, then push)
/home/z/my-project/scripts/push-to-github.sh "Initial commit — full PYC Club website with brand identity"
```

### Summary of changes staged for this push

- Premium NGO website for Progressive Youth Club, Ho (PYC Club).
- 12+ sections: hero, about, programs, impact, projects, stories, events,
  volunteer, donate, gallery, news, partners, contact, footer.
- Brand system: royal blue (#1F2E8A) + soft gold (#D4AF37) + light gray.
- Poppins (display) + Inter (body) loaded via `next/font`.
- Custom PYC button variants, sticky transparent nav with mobile sheet,
  scroll-reveal animations, animated counters, glassmorphism on small cards,
  floating donate button, back-to-top, scroll progress bar.
- Official uploaded logo integrated in navbar, hero chip, footer, favicon,
  apple-touch-icon, and OpenGraph share card. Logo brightened via sharp
  pipeline (+18% brightness, +28% saturation, +8% contrast).
- ESLint passes with zero errors. Dev server runs cleanly on port 3000.
- Browser-verified: navigation, mobile menu, contact form, gallery filter,
  donation amount selection — all working with no console errors.
- `.gitignore` excludes node_modules, .next, .env, dev.log, .github-token,
  upload/, skills/, examples/, .zscripts/.
- Reusable `scripts/push-to-github.sh` for token-aware commits & pushes.
- This worklog file establishing the commit/push protocol.
- Pre-existing scaffold files (.zscripts/, examples/, mini-services/,
  db/custom.db, .env, download/README.md) removed from git tracking.

---

## Push — 2026-07-14 04:10:00 UTC (pending — token invalid)

- **Commit message:** feat: remove Impact, Success Stories, News & Blog, and footer newsletter strip
- **Branch:** main
- **Local commit SHA:** 64d5bd1
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token in `/home/z/my-project/.github-token` is still
  the invalid one (HTTP 401). Run the push script after dropping in a fresh PAT.

### Summary of changes in this push

Per user request, removed four sections from the home page:

1. **Our Impact** — the dark-blue animated-counter section (Communities Reached,
   Scholarships Awarded, Trees Planted, Volunteers, Beneficiaries, Campaigns).
2. **Success Stories** — the auto-advancing testimonial slider.
3. **News & Blog** — the 3-post grid of latest articles.
4. **"Stay connected with our mission"** — the newsletter subscribe strip at the
   top of the footer.

Dependent cleanup:

- Removed the `News` link from `NAV_LINKS` in `navbar.tsx` (affects both the
  desktop horizontal menu and the mobile Sheet drawer).
- Removed the now-broken `News & Blog` and `Success Stories` entries from the
  footer Resources column, replaced with `Gallery` and `Events` so the column
  still has 6 links.
- Removed the unused `ArrowRight` import from `footer.tsx` (was only used by
  the newsletter Subscribe button).
- Removed the `Impact`, `Stories`, and `News` imports from `page.tsx`.

Home page now flows: Hero → About → Programs → Projects → Events → Volunteer →
Donate → Gallery → Partners → Contact → Footer.

Verification:

- `bun run lint` passes with zero errors.
- Dev server compiles cleanly, no console errors or warnings.
- Browser-verified: all four target strings (`Stay connected with our mission`,
  `Success Stories`, `Our Impact`, `News & Blog`) no longer appear anywhere on
  the page. Navbar links now: Home / About / Programs / Projects / Gallery /
  Events / Volunteer / Donate / Contact.

Files changed: 3 files, 2 insertions(+), 45 deletions(-)
- `src/app/page.tsx`
- `src/components/pyc/footer.tsx`
- `src/components/pyc/navbar.tsx`

### How to complete this push

```bash
echo "ghp_FRESH_PAT_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token
/home/z/my-project/scripts/push-to-github.sh "feat: remove Impact, Stories, News, and footer newsletter" --no-edit
```

---

## Push — 2026-07-14 04:25:00 UTC (pending — token invalid)

- **Commit message:** fix: navbar menu text invisible over hero
- **Branch:** main
- **Local commit SHA:** 70afc4d
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token in `/home/z/my-project/.github-token` is still
  the invalid one (HTTP 401). Run the push script after dropping in a fresh PAT.

### Summary of changes in this push

**Problem:** At the top of the page (hero in view), the desktop nav links used
`text-[#0E1530]/80` (dark navy) and the logo wordmark used `text-brand` (also
dark navy). Both were nearly invisible against the dark blue hero overlay and
only became readable once the user scrolled past the hero.

**Fix:**
- Desktop nav links now switch to `text-white/90` with a subtle text-shadow
  when the page is at the top, and back to `text-[#0E1530]/80` once scrolled.
- Logo wordmark now renders in the `white` variant (white PYC + gold Club +
  white/70 subtitle) when not scrolled, and the standard `full` variant
  (dark navy) once scrolled.
- Added a subtle `bg-gradient-to-b from-black/35 via-black/15 to-transparent`
  scrim behind the transparent navbar so white text has guaranteed contrast
  over any hero image area.
- Mobile hamburger button now has `ring-1 ring-white/20` for better visibility.
- Bumped scrolled navbar bg from `/85` to `/90` for slightly stronger contrast.

**Verification (via VLM + Agent Browser):**
- Top of page: menu items, logo wordmark, and Donate Now button all clearly
  readable against the dark hero.
- Scrolled: dark navy text on white navbar, clean and professional.
- Mobile (375px): logo + hamburger visible at top of hero.

Files changed: 1 file, 15 insertions(+), 7 deletions(-)
- `src/components/pyc/navbar.tsx`

### How to complete this push

```bash
echo "ghp_FRESH_PAT_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token
/home/z/my-project/scripts/push-to-github.sh "fix: navbar menu text invisible over hero" --no-edit
```

---

## Push — 2026-07-14 04:45:00 UTC (pending — token invalid)

- **Commit message:** feat: add Our History, Leadership, Music album, and Digital Media sections under About
- **Branch:** main
- **Local commit SHA:** 96ce7c4
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token in `/home/z/my-project/.github-token` is still
  the invalid one (HTTP 401). Run the push script after dropping in a fresh PAT.

### Summary of changes in this push

Added a new `AboutHistory` component (`src/components/pyc/about-history.tsx`)
with four rich storytelling subsections that sit right after the existing About
intro, all under the `#about` menu anchor:

1. **Our History** — founding date 14th February 2007 (registered under the laws
   of Ghana), story of growth from small gathering to influential social club,
   image with glass-card founding-date badge, 3 stat cards (2007 founded,
   17+ years, Ewe community served).

2. **Leadership & Growth** — spotlight card for Mr. Francis Aba (Founder &
   Leader) with 'FA' initials avatar + gold star badge, two paragraphs about
   visionary leadership, 6 leadership quality chips.

3. **Preserving Our Culture Through Music** — dark navy section with gold
   accents, album feature card with 'Nu Gawoe Nye Mawu Drado Di Nam' title,
   'Award Winning' gold badge, 3 stat tiles, CTA buttons.

4. **Promoting Culture Through Digital Media** — PYC Online Radio banner with
   red 'Live' indicator, 5 purpose cards (Global Broadcasting, Song
   Preservation, Ewe Heritage, Community Engagement, Talent Showcase), reach
   callout, Borborbor Festival callout (gold gradient box) with trophy icon.

All content uses the exact text provided by the user, formatted into rich
paragraphs per the Content Depth Rule.

**Verification (via VLM + Agent Browser):**
- Our History: heading, founding date, stat cards, body text all visible.
- Leadership: Mr. Francis Aba spotlight card with avatar and quality chips.
- Music: album title 'Nu Gawoe Nye Mawu Drado Di Nam', Award Winning badge,
  dark blue + gold premium design confirmed.
- Digital Media: PYC Online Radio banner with Live indicator, 5 purpose cards,
  Borborbor Festival callout with trophy icon all visible.
- ESLint passes with zero errors, no console errors.

Files changed: 2 files, 563 insertions(+)
- `src/components/pyc/about-history.tsx` (new)
- `src/app/page.tsx` (added import + component placement)

### How to complete this push

```bash
echo "ghp_FRESH_PAT_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token
/home/z/my-project/scripts/push-to-github.sh "feat: add Our History, Leadership, Music, and Digital Media sections under About" --no-edit
```

---

## Push — 2026-07-14 04:55:00 UTC (pending — token invalid)

- **Commit message:** feat: remove Donate menu item and rename About to About Us
- **Branch:** main
- **Local commit SHA:** 7976209
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token in `/home/z/my-project/.github-token` is still
  the invalid one (HTTP 401). Run the push script after dropping in a fresh PAT.

### Summary of changes in this push

Per user request, two small navbar changes in `src/components/pyc/navbar.tsx`:

1. **Removed the `Donate` entry** from `NAV_LINKS`. This affects both the
   desktop horizontal menu and the mobile Sheet drawer.
2. **Renamed `About` to `About Us`** in `NAV_LINKS` (label only — the href
   still points to `#about`, so all anchor scrolling still works).

Intentionally preserved:
- The gold **"Donate Now"** CTA button in the navbar (top-right) — this is a
  call-to-action, not a menu item.
- The **"Donate Now"** and **"Join as Volunteer"** CTA buttons at the bottom
  of the mobile Sheet drawer.
- The full `#donate` section on the home page (with the interactive amount
  selector) — the Donate Now buttons still scroll there.
- The **"Donate"** link in the footer Resources column.

**Verification:**
- Desktop navbar: Home / About Us / Programs / Projects / Gallery / Events /
  Volunteer / Contact + gold "Donate Now" button.
- Mobile Sheet drawer: same 8 links + "Donate Now" and "Join as Volunteer"
  CTA buttons at bottom.
- `#donate` section still present on the page (confirmed via DOM query).
- ESLint passes clean, no console errors.

Files changed: 1 file, 1 insertion(+), 2 deletions(-)
- `src/components/pyc/navbar.tsx`

### How to complete this push

```bash
echo "ghp_FRESH_PAT_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token
/home/z/my-project/scripts/push-to-github.sh "feat: remove Donate menu item and rename About to About Us" --no-edit
```

---

## Push — 2026-07-14 05:05:00 UTC (pending — token invalid)

- **Commit message:** feat: clear all About Us write-up — remove About and AboutHistory sections
- **Branch:** main
- **Local commit SHA:** a7bf032
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token in `/home/z/my-project/.github-token` is still
  the invalid one (HTTP 401). Run the push script after dropping in a fresh PAT.

### Summary of changes in this push

Per user request ("clear all write up under About Us"), removed ALL written
content under the About Us section.

**Removed from `src/app/page.tsx`:**
- `<About />` component — the original About intro (mission, vision, 7 core
  values, image collage, stat badges).
- `<AboutHistory />` component — the 4 subsections added in a previous turn
  (Our History, Leadership & Growth, Preserving Culture Through Music,
  Promoting Culture Through Digital Media).

The component files (`about.tsx`, `about-history.tsx`) are kept on disk but
no longer imported, so they're inert. They can be restored easily if the user
wants to bring back any of the content.

**Page now flows:** Hero → Programs → Projects → Events → Volunteer → Donate →
Gallery → Partners → Contact → Footer.

**Note:** The "About Us" link remains in the navbar and footer Quick Links,
but the `#about` anchor no longer exists on the page — clicking it will not
scroll anywhere until new About Us content is added.

**Verification:**
- All target strings confirmed absent from the DOM: Our Mission, Our Vision,
  CORE VALUES, "small gathering", "Francis Aba", "Nu Gawoe", "PYC Online
  Radio", "Borborbor Festival".
- Sections on page: home, programs, projects, events, volunteer, donate,
  gallery, (partners), contact.
- ESLint passes clean, no console errors.

Files changed: 1 file, 4 deletions(-)
- `src/app/page.tsx`

### How to complete this push

```bash
echo "ghp_FRESH_PAT_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token
/home/z/my-project/scripts/push-to-github.sh "feat: clear all About Us write-up" --no-edit
```

---

## Push — 2026-07-14 05:25:00 UTC (pending — token invalid)

- **Commit message:** feat: add About Us dropdown submenu with Our History, Vision and Mission, Our Core Values
- **Branch:** main
- **Local commit SHA:** 2fdb955
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token in `/home/z/my-project/.github-token` is still
  the invalid one (HTTP 401). Run the push script after dropping in a fresh PAT.

### Summary of changes in this push

**Navbar** (`src/components/pyc/navbar.tsx`):
- Converted "About Us" from a plain link to a dropdown trigger with a
  ChevronDown icon.
- **Desktop:** CSS group-hover dropdown showing 3 submenu items in a white card
  with soft shadow, gold underline animation on the parent link.
- **Mobile Sheet drawer:** "About Us" is now a toggle button that expands /
  collapses the 3 submenu items inline (left-border indent + chevron rotation).
- Submenu links: Our History (`#our-history`), Vision and Mission
  (`#vision-mission`), Our Core Values (`#core-values`).

**About section** (`src/components/pyc/about.tsx`):
- Completely rewritten as a single `<section id="about">` wrapper containing
  three anchored subsections:
  1. **#our-history** — founding story (14th Feb 2007), image with glass badge,
     3 stat tiles (2007 / 17+ years / Ewe community).
  2. **#vision-mission** — two cards side by side: Mission (brand-gradient icon)
     and Vision (gold-gradient icon), each with rich text.
  3. **#core-values** — 7 value cards in a grid (Integrity, Leadership,
     Community, Service, Inclusion, Innovation, Accountability) plus an 8th
     gold CTA tile linking to `#volunteer`.

**Page** (`src/app/page.tsx`):
- Re-added `<About />` after `<Hero />`.

**Verification:**
- Desktop: dropdown appears on hover with 3 submenu items (confirmed via DOM
  query + VLM).
- Mobile: tapping "About Us" expands inline submenu (confirmed via VLM
  screenshot).
- All 3 anchors exist and scroll correctly.
- Each section visually verified via VLM: founding date visible, Mission/Vision
  cards with icons, 7 core values in grid.
- ESLint passes clean, no console errors.

Files changed: 3 files, 325 insertions(+), 131 deletions(-)
- `src/components/pyc/navbar.tsx`
- `src/components/pyc/about.tsx`
- `src/app/page.tsx`

### How to complete this push

```bash
echo "ghp_FRESH_PAT_HERE" > /home/z/my-project/.github-token
chmod 600 /home/z/my-project/.github-token
/home/z/my-project/scripts/push-to-github.sh "feat: About Us dropdown submenu with Our History, Vision and Mission, Core Values" --no-edit
```

---

## Push — 2026-07-14 05:35:00 UTC (✓ SUCCESS)

- **Commit message:** feat: About Us dropdown submenu + multiple iterations (see worklog for full history)
- **Branch:** main
- **Latest SHA pushed:** 55997dc
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ✅ PUSHED — all queued commits successfully landed on origin/main.

### What landed in this push

This was a bulk push of all work accumulated while the previous PAT was
invalid. Commits pushed (newest first):

1. `55997dc` docs: append worklog entry for About Us submenu
2. `2fdb955` feat: add About Us dropdown submenu with Our History, Vision and Mission, Our Core Values
3. `f706899` docs: append worklog entry for About Us content clearance
4. `a7bf032` feat: clear all About Us write-up — remove About and AboutHistory sections
5. `a97eff0` docs: append worklog entry for navbar menu changes
6. `7976209` feat: remove Donate menu item and rename About to About Us
7. `229964a` docs: append worklog entry for About History sections
8. `96ce7c4` feat: add Our History, Leadership, Music album, and Digital Media sections under About
9. `79439cf` docs: append worklog entry for navbar visibility fix
10. `70afc4d` fix: navbar menu text invisible over hero
11. `d936cef` docs: append worklog entry for removed-sections push
12. `64d5bd1` feat: remove Impact, Success Stories, News & Blog, and footer newsletter strip
13. `b5d0355` docs: update worklog with token-rotation instructions
14. `d35fdfe` Initial commit — full PYC Club website with brand identity

### Token rotation note

The previous PAT (`ghp_L25...`) was auto-revoked by GitHub's secret-scanning
after it appeared in chat. A fresh PAT was generated by the user, written to
`/home/z/my-project/.github-token` (gitignored, chmod 600), validated against
GitHub's API (HTTP 200 + push permission confirmed on lilromeo2290/PYC), and
then used by `scripts/push-to-github.sh` to push all queued work.

The token is NEVER persisted in `.git/config` — the push script injects it
transiently into the remote URL and strips it via `trap` on exit.

---
## Push — 2026-07-14 04:42:20 UTC

- **Commit message:** feat: remove hero heading, 4 stat cards, and volunteer avatar stack from homepage
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** c5911379c5f6fb7f689eee0f44a2cd6f165cb597
- **Files changed:**  1 file changed, 29 insertions(+), 153 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
c591137 feat: remove hero heading, 4 stat cards, and volunteer avatar stack from homepage
 src/components/pyc/hero.tsx | 182 +++++++-------------------------------------
 1 file changed, 29 insertions(+), 153 deletions(-)
```

---
## Push — 2026-07-14 04:44:08 UTC

- **Commit message:** feat: rename Programs menu to What We Do in navbar and footer
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** ad42d298311d0a2e3b6c64d167670adc7f4e0692
- **Files changed:**  2 files changed, 2 insertions(+), 2 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
ad42d29 feat: rename Programs menu to What We Do in navbar and footer
 src/components/pyc/footer.tsx | 2 +-
 src/components/pyc/navbar.tsx | 2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)
```

---
## Push — 2026-07-14 04:48:36 UTC

- **Commit message:** feat: add Executives submenu and section under About Us
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** a33e27ab6e38ac88441d8b3783ef947e6a3a3b69
- **Files changed:**  3 files changed, 273 insertions(+)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
a33e27a feat: add Executives submenu and section under About Us
 src/app/page.tsx                  |   2 +
 src/components/pyc/executives.tsx | 270 ++++++++++++++++++++++++++++++++++++++
 src/components/pyc/navbar.tsx     |   1 +
 3 files changed, 273 insertions(+)
```

---
## Push — 2026-07-14 04:55:17 UTC

- **Commit message:** feat: expand Our History with leadership, music, digital media, and Borborbor Festival content
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 472069a8b2e625a14763ed8eede6a423123d3578
- **Files changed:**  1 file changed, 415 insertions(+), 5 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
472069a feat: expand Our History with leadership, music, digital media, and Borborbor Festival content
 src/components/pyc/about.tsx | 420 ++++++++++++++++++++++++++++++++++++++++++-
 1 file changed, 415 insertions(+), 5 deletions(-)
```

---
## Push — 2026-07-14 05:02:12 UTC

- **Commit message:** content: update Vision and Mission with exact user-provided text
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 44bfffd0080769176507aa651846e36fb4a80386
- **Files changed:**  1 file changed, 18 insertions(+), 11 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
44bfffd content: update Vision and Mission with exact user-provided text
 src/components/pyc/about.tsx | 29 ++++++++++++++++++-----------
 1 file changed, 18 insertions(+), 11 deletions(-)
```

---
## Push — 2026-07-14 05:06:31 UTC

- **Commit message:** content: update Core Values with 8 user-specified values (Unity, Love, Respect, Integrity, Teamwork, Cultural Preservation, Community Service, Mutual Support)
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 6ec927dcc9cfdd4a51b47b0b7de621bc0c2222a7
- **Files changed:**  1 file changed, 9 insertions(+), 23 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
6ec927d content: update Core Values with 8 user-specified values (Unity, Love, Respect, Integrity, Teamwork, Cultural Preservation, Community Service, Mutual Support)
 src/components/pyc/about.tsx | 32 +++++++++-----------------------
 1 file changed, 9 insertions(+), 23 deletions(-)
```

---
## Push — 2026-07-14 05:15:15 UTC

- **Commit message:** feat: add Our Motto submenu and section under About Us — 'We Stand For Support'
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 9f723a9a4539cfdf9e3002c5168355f95b9b8e56
- **Files changed:**  2 files changed, 102 insertions(+)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
9f723a9 feat: add Our Motto submenu and section under About Us — 'We Stand For Support'
 src/components/pyc/about.tsx  | 101 ++++++++++++++++++++++++++++++++++++++++++
 src/components/pyc/navbar.tsx |   1 +
 2 files changed, 102 insertions(+)
```

---
## Push — 2026-07-14 05:25:35 UTC

- **Commit message:** content: update Our Motto section with full user-provided text (foundation explanation, Looking Ahead, beacon-of-hope closing)
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** b19aa8fd4d984851516561341c91aec4e972f532
- **Files changed:**  1 file changed, 47 insertions(+), 39 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
b19aa8f content: update Our Motto section with full user-provided text (foundation explanation, Looking Ahead, beacon-of-hope closing)
 src/components/pyc/about.tsx | 86 ++++++++++++++++++++++++--------------------
 1 file changed, 47 insertions(+), 39 deletions(-)
```

---
## Push — 2026-07-14 05:32:41 UTC

- **Commit message:** content: replace placeholder executives with actual 11 PYC leadership team (Chairman, Vice Chairman, Secretaries, Treasurer, Organisers, Transport, Woman Organisers)
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 000b100bf0fee03a19343b10443b6e7844a62814
- **Files changed:**  1 file changed, 106 insertions(+), 45 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
000b100 content: replace placeholder executives with actual 11 PYC leadership team (Chairman, Vice Chairman, Secretaries, Treasurer, Organisers, Transport, Woman Organisers)
 src/components/pyc/executives.tsx | 151 ++++++++++++++++++++++++++------------
 1 file changed, 106 insertions(+), 45 deletions(-)
```

---
## Push — 2026-07-14 13:43:04 UTC

- **Commit message:** content: update phone numbers to 054 073 7813 and 024 371 7212 in contact section and footer
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 6a17e3c8e0ec0e51d008e2b99b62f6b6ac7a8306
- **Files changed:**  102 files changed, 59 insertions(+), 22 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
6a17e3c content: update phone numbers to 054 073 7813 and 024 371 7212 in contact section and footer
 .gitignore                              |   0
 Caddyfile                               |   0
 bun.lock                                |   0
 components.json                         |   0
 db/custom.db                            | Bin
 eslint.config.mjs                       |   0
 mini-services/.gitkeep                  |   0
 next.config.ts                          |   0
 package.json                            |   0
 postcss.config.mjs                      |   0
 prisma/schema.prisma                    |   0
 public/logo.svg                         |   0
 public/pyc-apple-icon.png               | Bin
 public/pyc-favicon.png                  | Bin
 public/pyc-favicon.svg                  |   0
 public/pyc-logo-512.png                 | Bin
 public/pyc-logo.png                     | Bin
 public/pyc-logo.svg                     |   0
 public/pyc-og-image.png                 | Bin
 public/robots.txt                       |   0
 scripts/optimize-logo.js                |   0
 src/app/api/route.ts                    |   0
 src/app/globals.css                     |   0
 src/app/layout.tsx                      |   0
 src/app/page.tsx                        |   0
 src/components/pyc/about-history.tsx    |   0
 src/components/pyc/about.tsx            |   0
 src/components/pyc/button.tsx           |   0
 src/components/pyc/contact.tsx          |  70 +++++++++++++++++++++++---------
 src/components/pyc/donate.tsx           |   0
 src/components/pyc/events.tsx           |   0
 src/components/pyc/executives.tsx       |   0
 src/components/pyc/floating-actions.tsx |   0
 src/components/pyc/footer.tsx           |  11 +++--
 src/components/pyc/gallery.tsx          |   0
 src/components/pyc/hero.tsx             |   0
 src/components/pyc/impact.tsx           |   0
 src/components/pyc/logo.tsx             |   0
 src/components/pyc/navbar.tsx           |   0

---
## Push — 2026-07-14 14:19:58 UTC

- **Commit message:** content: remove 'Want to meet the team in person' CTA strip from Executives section
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** f1a52ce3530370a2affc896202ebc3bfd2c90c46
- **Files changed:**  1 file changed, 17 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
f1a52ce content: remove 'Want to meet the team in person' CTA strip from Executives section
 src/components/pyc/executives.tsx | 17 -----------------
 1 file changed, 17 deletions(-)
```

---
## Push — 2026-07-14 14:37:11 UTC

- **Commit message:** fix: make build config deployment-platform friendly

The previous build configuration was sandbox-specific and caused deployment
failures on platforms like Vercel/Netlify:

1. package.json build script had sandbox-only 'cp' commands that failed
   on deployment platforms.
2. package.json start script used 'bun .next/standalone/server.js' which
   deployment platforms don't use.
3. The standalone output mode is sandbox-specific.

Changes:
- Simplified 'build' script to just 'next build' (works everywhere)
- Moved sandbox-only file copying to 'postbuild' script with a guard
  (only runs if .next/standalone exists, i.e. in sandbox with output:standalone)
- Changed 'start' script to 'next start -p 3000' (standard Next.js)
- Kept output: 'standalone' in next.config.ts (sandbox needs it; Vercel
  ignores it and uses its own deployment mechanism)

Verified:
- bun run lint: passes clean
- bun run build: compiles successfully in 16.2s, generates all 4 pages
- postbuild script correctly copies static files to standalone dir
- Dev server runs correctly in sandbox
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 4b0c4df365cdb7a88ab24d229030e1758150c2fb
- **Files changed:**  2 files changed, 3 insertions(+), 3 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
4b0c4df fix: make build config deployment-platform friendly
 next.config.ts | 1 -
 package.json   | 5 +++--
 2 files changed, 3 insertions(+), 3 deletions(-)
```

---
## Push — 2026-07-15 14:03:13 UTC

- **Commit message:** content: replace Privacy Policy/Terms of Service with 'Developed and Designed by CLIPE233 ENGINEERS' linking to clipe233eng.net
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 268f05013e7478af72f98ab28de25bb9094e2c7e
- **Files changed:**  1 file changed, 11 insertions(+), 11 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
268f050 content: replace Privacy Policy/Terms of Service with 'Developed and Designed by CLIPE233 ENGINEERS' linking to clipe233eng.net
 src/components/pyc/footer.tsx | 22 +++++++++++-----------
 1 file changed, 11 insertions(+), 11 deletions(-)
```

---
## Push — 2026-07-15 14:12:56 UTC

- **Commit message:** feat: limit home gallery to 6 photos with 'View Full Gallery' button linking to new /gallery page
- **Branch:** main
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Commit SHA:** 1159ead7c110ed70beaa33b2eda0c5dd5c050af1
- **Files changed:**  3 files changed, 119 insertions(+), 26 deletions(-)
- **Repository:** https://github.com/lilromeo2290/PYC

### Summary of changes in this push

```
1159ead feat: limit home gallery to 6 photos with 'View Full Gallery' button linking to new /gallery page
 src/app/gallery/page.tsx       | 53 +++++++++++++++++++++++++
 src/app/page.tsx               |  2 +-
 src/components/pyc/gallery.tsx | 90 ++++++++++++++++++++++++++++++------------
 3 files changed, 119 insertions(+), 26 deletions(-)
```
