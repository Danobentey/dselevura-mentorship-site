You are my senior frontend engineer. Build me a $10,000 production-grade minimalist website for the **Dselevura Mentorship Program** using **React + Next.js** with **TailwindCSS**. Make sure to follow best practices for performance, SEO, and accessibility. Use latest stable versions of all libraries.

The goal is a professional admissions + marketing site. No backend logic yet. Use forms that can be wired to services like Formspree, Airtable, or Google Sheets for submissions. Later we will build a student portal.  

## Branding & Style
- Colors:
  - Electric Blue (#0B6FFF) → primary  
  - Teal (#00C2A8) → accent  
  - Warm Orange (#FF7A18) → CTA color  
  - Charcoal (#0F172A) → text  
  - Off-white (#F8FAFC) → background  
- Fonts: Montserrat (headlines), Inter (body).  
- Layout: modern, bold, fully responsive.  
- Imagery:
  - Use authentic photos of African youth (Pexels, Unsplash, or licensed stock).  
  - For dev, use placeholders with `next/image`.  
  - Document where final licensed assets will be sourced.  
- Style: clean, mentor-like voice with bold CTAs.  

## Pages & Structure
1. **Home**
   - Hero: headline “Build the skills. Ship real projects. Land the job.”  
   - CTA button → Admissions form.  
   - Sections: Differentiators, Program highlights, Testimonials, Partners.  

2. **About**
   - Mission, Vision, Executive Summary.  

3. **Programs**
   - **Training Bootcamp (Beginner)**: 2 projects + certificate.  
   - **Mentorship Bootcamp (Advanced)**: 3 projects, certificate, internship opportunities.  
   - Timeline graphics for each program.  
   - CTA → Apply Now.  

4. **Portfolio & Outcomes**
   - Grid of student project thumbnails (placeholder).  
   - Alumni success stories (cards with quotes).  

5. **Community & Alumni**
   - Slack/Discord links, event highlights, alumni support.  

6. **Mentors**
   - Grid layout: photo, name, expertise, LinkedIn link.  

7. **Admissions**
   - Multi-step form (Name, Email, Phone, Program Interest, Motivation, Skill Level, Payment Option).  
   - Form submission → Formspree placeholder endpoint.  
   - **Validation Rules:**
     - Required: name, email, program interest.  
     - Email → valid email format.  
     - Phone → numeric, country code optional.  
     - Motivation → max 500 characters.  
   - Show inline error messages, accessibility-friendly (ARIA).  
   - Success/failure states included.  

8. **Blog**
   - List of posts (dummy content with correct structure).  
   - Single post page template.  

9. **Contact**
   - Simple form (name, email, message).  
   - WhatsApp button, email, office address.  

## Content Strategy
- **Tone:** confident, supportive, direct (mentor voice).  
- **Structure:**  
  - Headlines: short, bold, action-oriented.  
  - Body: 2–3 lines per idea, avoid jargon.  
  - CTA every scroll depth.  
  - Testimonials: student name, photo, role/title, 1–2 line quote.  
- **SEO:** integrate keywords like “African tech mentorship,” “bootcamp Africa,” “career in tech Africa.”  

## Technical Requirements
- Next.js with file-based routing.  
- TailwindCSS for styling (mobile-first).  
- Component-driven: Navbar, Footer, Hero, CTA buttons, Cards, Forms.  
- Performance targets:  
  - Lighthouse ≥ 90 for Performance/SEO/Accessibility.  
  - Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms.  
- SEO:  
  - Meta tags, OpenGraph, Twitter cards.  
  - Schema.org metadata for Courses/Programs.  
- Use `next/image` for optimized images.  
- Accessibility: alt text, color contrast, keyboard nav.  

## Deliverables
1. Scaffold Next.js project with TailwindCSS configured.  
2. Build all pages above with placeholder content.  
3. Create reusable UI components (Hero, Form, MentorCard, TestimonialCard).  
4. Implement Admissions + Contact forms with client-side validation.  
5. Add SEO meta config + favicon.  
6. Optimize for Core Web Vitals & Lighthouse targets.  
7. Document setup in README.md (including image asset strategy).  

Now:  
- Generate the Next.js project scaffold.  
- Build the page routes.  
- Create reusable UI components.  
- Implement the multi-step Admissions form with validation.  
- Add placeholders for content/images that can be replaced later.  
