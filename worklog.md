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
- **Author:** PYC Club <pycclub@users.noreply.github.com>
- **Repository:** https://github.com/lilromeo2290/PYC
- **Status:** ⏳ BLOCKED — token provided in chat was invalid (HTTP 401).
  Awaiting a fresh PAT to be written to `/home/z/my-project/.github-token`.

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
  upload/, download/, .zscripts/.
- Reusable `scripts/push-to-github.sh` for token-aware commits & pushes.
- This worklog file establishing the commit/push protocol.
