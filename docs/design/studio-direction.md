# Useable Studio design direction

Approved brief: “Good ideas. Made useable.” Portfolio and project inquiries, inspired by the typography, contrast, and scroll rhythm of https://landonorris.com/.

## Design system

- Colors: navy `#071426`, paper `#f4f5ef`, lime `#d9ff79`, mint `#a7dbcd`; no overlay on product screens.
- Typography: DM Sans, tightly tracked large headings; Georgia italic for emphasis. Body text 17–20px on desktop, 16–18px mobile. Section labels 11px with 0.14em tracking.
- Composition: 1440px maximum content width, 48–64px desktop gutters, 22px mobile. Open editorial sections; two equal product showcases; thin dividing lines; 4px buttons, 8px scenes.
- Order: navy hero → paper product stories → paper studio statement/process → navy project starting points → lime contact → navy footer.
- Hero copy: “Good ideas. Made useable.” / “We design and build software that makes everyday work easier.”
- Navigation: Work, Studio, Let’s talk. Primary CTA: Tell us about your project. Secondary CTA: Explore our work.
- Motion: a short entrance, one-time section reveals, restrained device transforms on hover. Ordinary document scrolling. Respect reduced motion; content remains available without JS.
- Contact: existing hello@useable.studio email link and project inquiry CTA. No form backend is required.
- Architecture: server-rendered content, a shared device frame and product scene, small client components only for menu and reveal observation.

## Concept and asset generation

Four coordinated concept screenshots and two separate scene backgrounds were made with the built-in image generation tool. References are kept in `concepts/`. Native HTML supplies all marketing copy, navigation, controls, and product labels. Real App Store screenshots replace the illustrative app UI in the concepts.

Shared concept prompt: “High-fidelity agency-quality desktop website section for Useable Studio. Oversized editorial typography, deep navy #071426, soft paper #F4F5EF, lime #D9FF79, mint #A7DBCD. Tightly tracked sans headings, Georgia-like italic accents, generous gutters, open layouts, thin rules, 4px buttons. No invented metrics, testimonials, extra hero eyebrow, or unrelated content. All website text and controls will be native HTML/CSS.”

Section prompts:
1. Hero: navy opening with approved headline and copy, two real product phones at right, subtle outlined U, simple header and bottom studio/product row.
2. Work: “Built for the real world.” Two large scenes: Grassr in forest green/grass; Cleanr on mint with towels and spray bottle. Real product screens, open descriptive copy and two links below each.
3. Studio: “We build it. We use it. We care.” Editorial statement and three steps: understand the problem, make the useful thing, keep making it better.
4. Contact: navy project-fit accordions; lime “What have you been wanting to build?” invitation; email CTA and minimal footer.

Background edit prompts: extract each photographic scene from the work concept into a standalone portrait background; remove phones, screens, all text, labels and website framing. Grassr: dark forest green with grass in the bottom 40%. Cleanr: muted mint wall, stone counter, white towels left, clear unlabeled spray bottle right. Keep the center clear for the real screenshot. Preserve palette and lighting.

## Product screenshot provenance

Retrieved from the products’ public US App Store listings on September 8, 2026 via Apple’s lookup endpoint; these are product imagery with demonstration content, not claims about customer results.

- Grassr: https://apps.apple.com/us/app/grassr/id6758737552 — dashboard and schedule screenshots.
- Cleanr: https://apps.apple.com/us/app/cleanr-business-management/id6776069251 — dashboard and schedule screenshots.

Sources and exact downloaded asset URLs are recorded in `asset-sources.json`. Files are optimized as WebP for the static Next.js export.
