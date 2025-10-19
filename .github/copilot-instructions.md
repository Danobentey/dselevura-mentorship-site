# Dselevura Mentorship Website - AI Coding Instructions

## Architecture Overview
This is a **Next.js 15 App Router** marketing/admissions site for an African tech mentorship program. Key architectural decisions:
- **App Router with file-based routing** in `app/` (not Pages Router)
- **TailwindCSS** with custom design system (no component library)
- **TypeScript** with strict typing for forms and metadata
- **Standalone deployment** target for Docker/production
- **SEO-first** with structured data and performance optimization

## Essential File Structure
```
app/                    # App Router pages
├── layout.tsx          # Root layout with fonts, metadata, JSON-LD
├── page.tsx           # Homepage
├── [page]/page.tsx    # Static marketing pages
├── admissions/        # Multi-step form page
└── blog/[slug]/       # Dynamic blog routes

components/
├── layout/            # Navbar, Footer (persistent across routes)
├── ui/                # Form components, Hero, Cards
└── Providers.tsx      # Client-side context (currently minimal)

lib/seo.ts             # Metadata helpers and structured data
```

## Design System & Styling Patterns

### Color Palette (tailwind.config.js)
- **primary**: Electric blue (0B6FFF)
- **accent**: Teal (00C2A8) 
- **cta**: Warm orange for buttons (FF7A18)
- **charcoal**: Text color (0F172A)
- **offwhite**: Background color (F8FAFC)

### Typography Convention
- **Headings**: `font-heading` (Montserrat) + `font-semibold`
- **Body**: `font-body` (Inter) - applied globally in `globals.css`
- Font loading: `next/font/google` with `display: swap` for performance

### Component Patterns
- **Focus management**: Use `.focus-ring` utility class for consistent focus styles
- **Responsive containers**: Use `.container-responsive` for consistent max-width + padding
- **Form validation**: Client-side with `aria-invalid`, `aria-describedby` for errors
- **Mobile-first**: All components built with Tailwind's mobile-first breakpoints

## Form Architecture
The `MultiStepAdmissionsForm.tsx` demonstrates the project's form patterns:
- **State management**: Single state object with TypeScript interface
- **Validation**: Inline validation with immediate error clearing on input
- **Accessibility**: Proper ARIA attributes, fieldsets, error associations
- **Multi-step UX**: Progressive disclosure with step tracking
- **Integration ready**: Formspree endpoint placeholder (search for 'your-placeholder')

## SEO & Performance Strategies

### Metadata System
- **Base metadata** in `app/layout.tsx` with OpenGraph + Twitter cards
- **Per-page overrides** using `export const metadata` in page components
- **SEO utilities** in `lib/seo.ts` for consistent metadata generation
- **Structured data**: JSON-LD for Course and Organization schemas

### Image Strategy
- **next/image** with `remotePatterns` for Unsplash/Pexels (see `next.config.mjs`)
- **Placeholder system**: SVG placeholders in `/public/images/` for development
- **Alt text conventions**: Descriptive alt text focusing on African tech context

## Development Workflows

### Key Commands
- `npm run dev` - Development server with fast refresh
- `npm run build` - Production build with bundle analysis
- `npm run lint` - ESLint with Next.js config
- `docker build -t dselevura-site .` - Production Docker image

### Local Development
- **Placeholder content**: Most content is production-ready except image assets
- **Form testing**: Admissions form submits to placeholder endpoint (will error)
- **Hot reload**: App Router provides granular hot reloading for components

## Security & Headers
Security headers in `next.config.mjs` include:
- **CSP**: Currently allows `unsafe-inline` for development (remove for production)
- **Image sources**: Restricted to self + approved external domains
- **HTTPS enforcement**: HSTS headers for production

## Critical Dependencies
- **clsx**: Conditional CSS classes (preferred over classnames)
- **Minimal bundle**: No UI library dependencies - custom components only
- **Font optimization**: Google Fonts via Next.js font optimization

## Deployment Targets
- **Primary**: Vercel (optimized for App Router)
- **Docker**: Standalone output configured
- **Static export**: Not configured (requires server functions for forms)

## Common Modification Patterns

### Adding New Pages
1. Create `app/[page-name]/page.tsx`
2. Add route to `navItems` in `components/layout/Navbar.tsx`
3. Export metadata using `lib/seo.ts` helpers

### Form Integration
- Replace `https://formspree.io/f/your-placeholder` in form components
- Update CSP in `next.config.mjs` for new form endpoints
- Test validation rules match business requirements

### Content Updates
- Marketing copy follows "mentor voice" tone (confident, supportive, direct)
- Image replacements should maintain alt text describing African tech context
- CTA buttons use `cta` color consistently

## Performance Targets
- **Lighthouse scores**: ≥90 for Performance/SEO/Accessibility
- **Core Web Vitals**: LCP <2.5s, CLS <0.1, FID <100ms
- **Bundle analysis**: Monitor for large dependencies before adding libraries