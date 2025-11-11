# Design Guidelines: Lexus-Inspired Car Dealership

## Design Approach
**Reference-Based Approach**: Inspired by Lexus official website aesthetics - premium automotive luxury with sophisticated minimalism, refined elegance, and professional polish.

## Core Design Principles
- **Premium Automotive Luxury**: High-end feel with sophisticated visual hierarchy
- **Floating Elements**: Content blocks appear as elevated cards with soft shadows against full-screen backgrounds
- **Smooth Refinement**: All interactions feature elegant transitions and animations

## Layout System

**Spacing**: Tailwind units of 4, 6, 8, 12, 16 for consistent rhythm (p-4, m-8, gap-6, etc.)

**Header Structure**:
- Fixed top navigation with centered logo
- Hamburger menu icon (left) - triggers vertical slide-in navigation
- Search icon and shopping cart (right aligned)
- Clean, minimal header with subtle backdrop blur

**Hero Section**:
- Full-width edge-to-edge image occupying 50vh (50% of viewport height)
- Smooth entrance animation (fade-in with subtle upward motion)
- No text overlay on hero image

**Content Flow** (below hero):
1. Dealership name - large, bold typography aligned left
2. Attractive tagline - positioned directly below name
3. Vehicle carousel section - interactive product showcase
4. Dealership description text block
5. Navigation buttons section (e.g., "Marcas/Brands")

**Floating Content Blocks**:
- All text and image containers styled as elevated rectangles
- Soft shadows (shadow-lg to shadow-xl)
- Subtle rounded corners (rounded-lg)
- Background with slight transparency or solid luxury tones

## Typography

**Font Families**: 
- Primary: 'Poppins' (elegant, modern)
- Alternative: 'Montserrat' or 'Roboto'
- Load via Google Fonts CDN

**Hierarchy**:
- Dealership Name: text-5xl to text-7xl, font-bold
- Tagline: text-xl to text-2xl, font-light
- Section Headings: text-3xl to text-4xl, font-semibold
- Body Text: text-base to text-lg, font-normal
- Navigation: text-sm to text-base, font-medium

## Component Library

**Side Navigation Menu**:
- Vertical menu sliding from left
- Smooth slide-in/slide-out animation
- Overlay backdrop when open
- Close on click outside or hamburger toggle
- Full-height menu panel

**Vehicle Carousel**:
- Horizontal scrollable cards
- Navigation arrows (left/right)
- Smooth slide transitions
- Product data easily editable from app.js array
- Each card: vehicle image, name, brief specs, CTA button

**Buttons**:
- Primary: Solid backgrounds with hover lift effect
- Secondary: Outlined with hover fill
- Blur background for buttons on images (backdrop-blur-sm)
- No custom hover states on blurred buttons (natural button behavior)

**Cards/Product Blocks**:
- Floating appearance with shadow-md to shadow-xl
- Hover: subtle scale transform (scale-105)
- Smooth transitions on all interactions

**Icons**:
- Use Font Awesome or Heroicons via CDN
- Search, Shopping Cart, Hamburger Menu, Carousel Arrows

## Color Philosophy
**Lexus-Inspired Palette**:
- **Primary Blacks**: Deep charcoal backgrounds (#0A0A0A, #1A1A1A)
- **Sophisticated Grays**: #2C2C2C, #3A3A3A, #E5E5E5
- **Metallic Silvers**: #C0C0C0, #D3D3D3 for accents
- **Luxury Accents**: Gold (#C9A961, #B8860B) or Deep Blue (#1E3A5F, #2C5282)
- **Text**: White (#FFFFFF) on dark, Dark gray (#1A1A1A) on light
- **Glass Effects**: Semi-transparent overlays with backdrop blur

## Animations & Transitions

**Hero Entrance**:
- Fade-in with upward motion (translateY)
- Duration: 1.2s ease-out

**Menu Animation**:
- Slide-in from left: transform translateX(-100%) to translateX(0)
- Backdrop fade-in simultaneously
- Duration: 0.3s ease-in-out

**Carousel**:
- Smooth slide transitions between vehicles
- Duration: 0.5s ease-in-out
- Subtle fade for transitioning elements

**Buttons & Cards**:
- Hover scale: transform scale(1.05)
- Shadow expansion on hover
- Duration: 0.2s ease
- Color transitions: 0.3s ease

## Responsive Design

**Breakpoints**:
- Mobile: < 640px (single column, stacked layout)
- Tablet: 640px - 1024px (adjusted spacing, 2-column where appropriate)
- Desktop: > 1024px (full layout)

**Mobile Adaptations**:
- Hero maintains 50vh on mobile
- Dealership name scales to text-4xl
- Carousel becomes swipeable
- Menu full-width overlay
- Floating blocks maintain soft shadows, reduced padding

## Images

**Hero Image**:
- Large, high-impact automotive photography
- Professional dealership or luxury vehicle showcase
- Full-width, 50vh height, object-fit: cover
- Position: Top of page, edge-to-edge

**Carousel Images**:
- Multiple luxury vehicles (5-8 products)
- High-quality product photography
- Consistent aspect ratio across all carousel items
- Professional automotive photography style

**Background**:
- Full-screen subtle texture or gradient (luxury automotive feel)
- Dark base with metallic gradient accents

## Accessibility
- Semantic HTML structure
- ARIA labels for navigation controls
- Keyboard navigation for carousel and menu
- Sufficient contrast ratios for all text
- Focus indicators on interactive elements

## Code Organization
- HTML: Clean semantic structure with BEM-style classes
- CSS: Organized by component sections with clear comments
- JavaScript: Modular functions for menu, carousel, and interactions
- Product data in easily editable array structure in app.js