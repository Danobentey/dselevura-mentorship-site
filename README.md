# Dselevura Mentorship Program Website

Production-grade marketing & admissions site scaffold built with Next.js (App Router) + TailwindCSS.

## Tech Stack
- Next.js 14 App Router
- React 18
- TypeScript
- TailwindCSS 3

## Branding
Colors defined in `tailwind.config.js`:
- Primary: #0B6FFF
- Accent: #00C2A8
- CTA: #FF7A18
- Charcoal: #0F172A
- Off-white: #F8FAFC

Fonts via Google Fonts using `next/font`: Montserrat (headings), Inter (body).

## Structure
```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Home
  about/
  programs/
  portfolio/
  community/
  mentors/
  admissions/
  blog/
    [slug]/
  contact/
components/
  layout/           # Navbar, Footer
  ui/               # Reusable UI components (Hero, Cards, MultiStepAdmissionsForm)
```

## Forms
- Admissions multi-step form at `/admissions` with client-side validation.
- Contact form placeholder at `/contact` (currently alerts, replace with integration).
- To integrate Formspree: replace placeholder endpoint in `MultiStepAdmissionsForm.tsx`.

## Image Assets Strategy
- Temporary placeholders under `public/images/`.
- Replace with licensed or sourced imagery from: Unsplash (African tech/education), Pexels (authentic youth collaboration). Document final attributions in this README.
- Use `next/image` with remotePatterns allowlist (`next.config.mjs`).
- Current placeholders:
  - `hero-placeholder.svg` (hero backdrop)
  - `mentor-placeholder.svg` (mentor avatar)
  - `project-placeholder.svg` (portfolio tile)
  - `og-default.svg` (Open Graph social share)

## SEO & Performance
- Base metadata in `app/layout.tsx`.
- Per-page overrides via `export const metadata`.
- Added JSON-LD (`Course` + `Organization`) injected in root layout.
- Automated sitemap (`app/sitemap.ts`) & robots (`app/robots.ts`).
- Plan: add page-level canonical overrides & program-specific schema.
- Tailwind for lean CSS; leverage image optimization; minimal JS for fast LCP.

## Development
Install dependencies then run dev server:
```
npm install
npm run dev
```

## Deployment

### 1. Vercel (Recommended)
1. Push this repo to GitHub.
2. Import in Vercel dashboard.
3. Framework preset: Next.js (auto-detected).
4. Environment variables: (none yet required) – add later for form endpoints / analytics.
5. Builds produce standalone output automatically (see `next.config.mjs`).

### 2. Docker
Build and run the production image:
```
docker build -t dselevura-site .
docker run -p 3000:3000 dselevura-site
```
Navigate to http://localhost:3000

### 3. Node Server (Bare metal / VM)
```
npm ci
npm run build
npm start
```

### 4. Performance Checklist Before Launch
- Run `npm run build` and inspect bundle analyzer (add plugin if needed) for large deps.
- Verify Lighthouse scores (>=90) locally using Chrome DevTools Lighthouse.
- Replace SVG placeholders with compressed real images (AVIF/WEBP where possible).
- Ensure CSP updated to remove `'unsafe-inline'` once inline scripts are gone.
- Add analytics script with `defer` or via Next Script strategy.

### 5. Environment / Secrets (Future)
- `FORMSPREE_ENDPOINT` to move endpoint out of code.
- `ANALYTICS_KEY` for analytics provider.
- Add `.env.local` (excluded from VCS) for local overrides.

## Accessibility
- Forms use labels, aria-invalid, and inline error messaging.
- Color contrast adheres to accessible palette.
- Focus styles via `.focus-ring` utility class.

## Next Steps / TODO
- Add JSON-LD schema for programs.
- Replace placeholder images & add alt text specificity.
- Add analytics & monitoring.
- Implement dynamic blog CMS integration.
- Add tests (Jest/Testing Library) for form validation.
- Add sitemap.xml & robots.txt.
- Harden Lighthouse budgets & CI.

## License
Internal project scaffold. Rights reserved.
