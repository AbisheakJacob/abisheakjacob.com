# Extensive Documentation: Architecture & Data Integration

## Technical Architecture Overview
The personal website is built on **Next.js 16.2.1** utilizing the **App Router**, with **React 19.2**.
The visual aesthetics are powered by **Tailwind CSS v4** and several headless accessibility components from **Radix UI** combined with robust animation libraries like **Framer Motion** and **TailwindCSS-Animate**.

### Directory Structure
- `/app/`: Contains the primary routing logic, specifically `/app/page.tsx` for the home page layout.
- `/components/`: Contains all modular React architecture components. These were ported heavily from the *Adithya* template. Key components include:
    - `Navbar.tsx` & `hover-navbar.tsx` for navigation.
    - Component wrappers natively styled such as `project-card.tsx` and `interactive-skills.tsx`.
    - Magic UI animated components within `components/magicui/` to generate rich glowing and text transitions.
    - Custom tailored Section wrappers `components/ui/section.tsx` that adhere to printing aesthetics and standard margins.
- `/data/`: Contains **`resume-data.tsx`**, the absolute central nervous system for your website's content.
- `/lib/`: Contains utility functions (such as `cn` tailored for Tailwind class merging) vital for the dynamic UI logic.
- `/docs/`: Contains guides, checklists, and next steps for the end-user (you).

## How Data Intersects with the UI
You will notice that `app/page.tsx` maintains *almost zero* hardcoded static strings.
Instead, it exclusively imports the `RESUME_DATA` constant from `@/data/resume-data.tsx`.
The `.tsx` extension there allows the file to mix JavaScript objects with TS typing, enabling React Icons to be tied directly to social links organically.

If you edit the array `RESUME_DATA.work`, the `WorkTimeline` component inside `app/page.tsx` will automatically re-render sequentially, injecting new entries with automated staggering animations.

## Transitions & Animations
- **NameAnimation**: During the standard render of the Home Page, the `NameAnimation` overlay will intercept the screen for exactly 2.2 seconds. This overlay utilizes `Framer Motion` for presence detection and orchestrates the `HyperText` component to randomly randomize letters before spelling out your name.
- **Scroll Spy**: The main layout leverages scroll-padding and Intersection observers (via native CSS and Framer tracking) to highlight where you are reading.
- **Micro-interactions**: Components like the `Avatar` dynamically scale slightly on hover utilizing Framer Motion's "spring" behavior, generating a fluid "bounce".

## Build Mechanics
The platform is fully statically generatable via `npm run build`. 
By relying heavily on `"use client"` where necessary for animations while keeping the bulk DOM pre-rendered natively, the page retains maximum SEO scores (as augmented by the rich `metadata` generation in `app/layout.tsx`).
