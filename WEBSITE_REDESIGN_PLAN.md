# Lymo AI Website Redesign Plan
## Inspired by Artlist.io

---

## 📋 Project Overview

This document outlines a complete redesign of the Lymo AI landing page, drawing inspiration from artlist.io's clean, modern, and professional design aesthetic. The goal is to create an intuitive, conversion-focused experience that showcases our AI content generation capabilities while guiding users toward sign-up.

---

## 🎯 Key Objectives

1. **Modernize the UI** - Adopt artlist.io's clean, minimalist aesthetic
2. **Interactive Demo Sections** - Add "AI Images", "AI Videos", and "AI Image Studios" with app-like UI
3. **Seamless CTA Flow** - "Generate for Free" buttons that redirect to signup
4. **Hero Video Section** - Large, impactful video showcase on landing
5. **Maintain Core Elements** - Keep the 3 existing video showcases
6. **Mobile-First Design** - Ensure perfect responsiveness across all devices
7. **Improved Navigation** - Simplified, clean navigation inspired by artlist.io

---

## 🎨 Design Inspiration from Artlist.io

### Visual Elements to Adopt:
- **Clean Hero Section** with large, serif typography
- **Gradient backgrounds** (soft pinks, greens, blues)
- **Minimalist navigation** with clear hierarchy
- **Bold CTA buttons** (yellow/gold primary color)
- **Spacious layouts** with generous whitespace
- **Subtle animations** on scroll and hover
- **Professional product screenshots** with modern UI frames

### Color Palette Adjustments:
```
Primary CTA: #F6E05E (Yellow/Gold) - Keep current
Secondary: Soft pastels and gradients
Background: Light with gradient overlays (move away from dark theme)
Text: Dark on light for better readability
Accents: Subtle pinks, purples, and blues
```

---

## 📐 New Page Structure

### 1. **Navigation Bar**
```
Current Issues:
- Dark themed
- Cluttered with multiple links

New Design (Artlist-inspired):
┌─────────────────────────────────────────────────────────────┐
│ [Lymo Logo]  AI Video | AI Image | AI Studios | More ▼    │
│                              [Pricing] [Sign In] [Start Free Now] │
└─────────────────────────────────────────────────────────────┘

Features:
- Clean, light background with subtle backdrop blur
- Simplified navigation items
- Prominent "Start Free Now" CTA (yellow button)
- Dropdown "More" menu for additional links
- Language switcher in dropdown or profile menu
- Sticky on scroll
```

**Implementation:**
- Remove fixed sale banner (or make it less intrusive)
- Cleaner logo presentation
- Single-line navigation on desktop
- Hamburger menu on mobile
- Remove "Business" as separate nav item, integrate into dropdown

---

### 2. **Hero Section - "The Wow Factor"**

```
New Hero Layout:
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                  [BACKGROUND VIDEO ELEMENT]                   │
│                  (User will upload stunning video)            │
│                                                               │
│              Create any video you can imagine                 │
│                                                               │
│                    [Start Free Now] CTA                       │
│                                                               │
│         Soft gradient overlay (pink/purple/green)             │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Typography:
- Large serif or elegant sans-serif (60-80px on desktop)
- Center-aligned
- Text color: White with subtle shadow
- Simplified messaging - one powerful headline
- Remove rotating text, keep it static and impactful
```

**Implementation Details:**
- Full-width background video (60-70vh height)
- Video autoplay, loop, muted
- Gradient overlay for text legibility
- Single, bold headline inspired by artlist.io
- Remove all the floating cards and complex animations
- One prominent CTA button (yellow)
- Scroll indicator at bottom

**Remove:**
- Trust badges (move to stats section)
- Multiple CTAs (keep only "Start Free Now")
- Complex interactive demo in hero
- Floating performance cards
- Dual-column layout

---

### 3. **Quick Stats Banner**

```
After hero, before main content:
┌─────────────────────────────────────────────────────────────┐
│   100K+ Creators  |  4.9/5 Rating  |  10M+ Videos Created   │
└─────────────────────────────────────────────────────────────┘

- Clean, minimal design
- Light background
- Simple icons or numbers
- One-line stats
```

---

### 4. **Interactive Demo Section - "AI Videos"**

```
Section Title: AI Video Studio
Subtitle: Create professional videos in seconds

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Mock App Interface - Video Studio]                          │
│  ┌──────────────────────────────────────────────────┐        │
│  │  Enter Product URL                                │        │
│  │  [https://amazon.com/product...]                  │        │
│  │                                                    │        │
│  │  Choose Style:                                    │        │
│  │  [Avatar] [Product Demo] [Viral Content]         │        │
│  │                                                    │        │
│  │  Voice: [Dropdown]  Music: [Dropdown]            │        │
│  │                                                    │        │
│  │          [Generate for Free] → (To Signup)        │        │
│  └──────────────────────────────────────────────────┘        │
│                                                               │
│  Right side: Preview of 3 existing videos (grid layout)      │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Features:
- Resembles actual app interface (like screenshots 2-3 shown)
- Clean, white/light background
- Professional form inputs
- "Generate for Free" button that redirects to signup
- On mobile: Stack vertically
```

**Implementation:**
- Build component that looks like actual app UI
- Use screenshots from app as reference
- All form fields are functional-looking but non-functional
- onClick of "Generate for Free" → redirect to `https://app.lymo.me`
- Keep the 3 existing videos displayed in grid below or beside

---

### 5. **Interactive Demo Section - "AI Images"**

```
Section Title: AI Image Studio
Subtitle: Transform products into stunning visuals

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Mock App Interface - Image Studio]                          │
│  ┌──────────────────────────────────────────────────┐        │
│  │  Describe your image                              │        │
│  │  [Text area: "e.g., A professional product        │        │
│  │   photo of a sleek wireless headphone..."]       │        │
│  │                                                    │        │
│  │  Model: [Seedream 3 / FLUX Kontext]              │        │
│  │  Aspect Ratio: [1:1] [16:9] [9:16]               │        │
│  │                                                    │        │
│  │          [Generate for Free] → (To Signup)        │        │
│  └──────────────────────────────────────────────────┘        │
│                                                               │
│  Example Gallery: Show 4-6 AI-generated product images       │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Features:
- Resembles screenshot 4 (AI Images interface)
- Shows model selection, aspect ratio options
- Monthly limit indicator (visual only)
- Gallery of example outputs
```

**Implementation:**
- Component styled to match app UI (screenshot 4)
- Text to Image tab design
- All inputs visual only, non-functional
- "Generate for Free" redirects to signup
- Example gallery below using existing generated images

---

### 6. **Interactive Demo Section - "AI Image Studio"**

```
Section Title: Complete Image Studio
Subtitle: Text to Image & Image to Image transformations

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Tabbed Interface]                                           │
│  [Text to Image] [Image to Image]                            │
│                                                               │
│  If Text to Image selected:                                  │
│  - Description field                                          │
│  - Model selection                                            │
│  - Aspect ratio                                               │
│  - [Generate for Free] button                                │
│                                                               │
│  If Image to Image selected:                                 │
│  - Upload area (visual only)                                  │
│  - Transformation options                                     │
│  - [Generate for Free] button                                │
│                                                               │
│  Right Panel: "My Creations"                                  │
│  - "Your generated images will appear here"                   │
│  - Auto-saved to Library message                              │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Features:
- Full app UI recreation (screenshot 4)
- Both tabs functional in UI but redirects on generate
- Clean, professional interface
```

---

### 7. **The 3 Videos Showcase** *(Keep Current Content)*

```
Section Title: See AI in Action
Subtitle: Real videos created by our AI

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Video 1]          [Video 2]          [Video 3]             │
│  Avatar Marketing   Product Demo       Viral Content         │
│                                                               │
│  Each video card:                                             │
│  - Thumbnail/poster                                           │
│  - Play on hover (desktop)                                    │
│  - Tap to play (mobile)                                       │
│  - Title and short description                                │
│  - Badge indicating video type                                │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Changes from current:
- Lighter card backgrounds
- More whitespace
- Simplified descriptions
- Modern card design
- Keep all existing functionality
```

**Keep:**
- All 3 existing videos (bb97578d and 3bff4339 mp4 files)
- Play on hover/tap functionality
- Video descriptions

**Update:**
- Card styling to match new design
- Lighter color scheme
- Remove excess UI elements

---

### 8. **How It Works - 3 Steps**

```
Section Title: How It Works
Subtitle: Create professional content in 3 simple steps

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│   [1]                  [2]                  [3]               │
│   Enter Product        Customize           Generate           │
│                                                               │
│   Paste URL or         Choose style,       AI creates your   │
│   describe content     voice, format       professional      │
│                                            content            │
│                                                               │
│   [Screenshot 1]       [Screenshot 2]      [Screenshot 3]    │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Changes:
- Keep current 3-step structure
- Update visuals to match new design
- Lighter backgrounds
- Use actual app screenshots (from screenshots 2-4 provided)
- Remove content type switcher (simplify)
```

**Keep:**
- 3-step framework
- Screenshots of actual app
- Clear, concise descriptions

**Update:**
- Lighter color scheme
- More whitespace
- Simpler layout without switcher

---

### 9. **Product Transformation Showcase**

```
Keep current ProductTransformationShowcase component but:
- Update colors to lighter theme
- Add more breathing room
- Ensure mobile responsiveness
- Match new design aesthetic
```

---

### 10. **Trust & Social Proof**

```
New Section: Trusted by Creators Worldwide

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  "This tool has transformed how we create content"           │
│  - Creator Name, Company                                      │
│                                                               │
│  [Creator Avatar] [Creator Avatar] [Creator Avatar]          │
│                                                               │
│  Simple testimonial carousel or grid                          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

### 11. **Pricing Teaser** *(New Section)*

```
Section Title: Choose Your Plan
Subtitle: Start free, upgrade when you're ready

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│   [Free]              [Starter]           [Pro]              │
│   $0/month            $29/month           $99/month          │
│                                                               │
│   • 5 videos          • 50 videos         • Unlimited        │
│   • 10 images         • 100 images        • Priority         │
│   • Basic features    • All features      • API access       │
│                                                               │
│   [Start Free]        [Get Started]       [Contact Sales]    │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Features:
- Clean pricing cards
- Light backgrounds
- Clear value proposition
- All CTAs redirect to signup
```

---

### 12. **Final CTA Section**

```
Simplified hero-style CTA:

┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                Ready to create amazing content?               │
│                                                               │
│                    [Start Free Now]                           │
│                                                               │
│              No credit card required • Cancel anytime         │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Changes:
- Remove gradient background (or soften it significantly)
- Cleaner, more minimal
- Single CTA
- Light background with subtle gradient
```

---

### 13. **Footer**

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  [Logo]                                                       │
│                                                               │
│  Product          Company          Resources        Legal     │
│  AI Video         About            Blog             Privacy   │
│  AI Image         Careers          Help Center      Terms     │
│  AI Studio        Contact          API Docs         Cookies   │
│                                                               │
│  [Social Icons]                                               │
│                                                               │
│  © 2025 Lymo AI. All rights reserved.                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘

Changes:
- More organized structure
- Light background
- Better information architecture
- Add missing sections (Blog, About, Careers - even if placeholder)
```

---

## 🎨 Design System Updates

### Typography
```css
/* Headings - Elegant and Modern */
H1 (Hero): 60-80px, Weight 300-400, Serif or elegant sans-serif
H2 (Sections): 40-48px, Weight 400-500
H3 (Cards): 24-28px, Weight 600
Body: 16-18px, Weight 400
Small: 14px, Weight 400

Font Families:
- Consider: Inter, Playfair Display, or similar elegant fonts
- Match artlist.io's refined typography
```

### Color Palette
```css
/* Light Theme Palette */
--primary-bg: #FFFFFF
--secondary-bg: #F7FAFC
--accent-yellow: #F6E05E
--accent-orange: #F59E0B
--text-primary: #1A202C
--text-secondary: #718096
--border: #E2E8F0

/* Gradient Overlays (for hero video) */
--gradient-overlay: linear-gradient(135deg, 
  rgba(246, 224, 94, 0.2) 0%, 
  rgba(251, 207, 232, 0.3) 50%, 
  rgba(165, 243, 252, 0.2) 100%
)

/* Soft Pastels (inspired by artlist.io) */
--soft-pink: #FBD5EC
--soft-purple: #E9D5FF
--soft-blue: #BFDBFE
--soft-green: #BBF7D0
```

### Spacing
```css
/* Artlist-style generous whitespace */
--section-padding: 120px 0 (desktop)
--section-padding-mobile: 80px 0
--container-max-width: 1280px
--content-max-width: 1024px
```

### Buttons
```css
/* Primary CTA */
.btn-primary {
  background: linear-gradient(135deg, #F6E05E, #F59E0B);
  color: #1A202C;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(246, 224, 94, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(246, 224, 94, 0.6);
}

/* Secondary CTA */
.btn-secondary {
  background: transparent;
  border: 2px solid #1A202C;
  color: #1A202C;
  /* Similar styling to primary */
}
```

### Cards
```css
.card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
```

---

## 📱 Mobile Responsiveness

### Breakpoints
```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
Large Desktop: > 1440px
```

### Mobile-Specific Changes

**Navigation:**
- Hamburger menu
- Full-screen overlay menu
- Large, tappable links
- CTA button always visible

**Hero:**
- Video still prominent (40-50vh)
- Larger text (40-48px)
- Stack elements vertically
- Single CTA button

**Demo Sections:**
- Stack app interface mockups vertically
- Larger form inputs (min 44px height for touch)
- Full-width elements
- Simplified layouts

**Video Cards:**
- Single column layout
- Larger tap targets
- Simplified controls
- Auto-play on scroll into view option

**3 Steps:**
- Single column
- Larger icons and text
- More padding between steps

**Footer:**
- Single column layout
- Collapsible sections
- Simplified link structure

---

## 🔧 Technical Implementation

### File Structure
```
app/
├── page.tsx (main landing page - COMPLETE REWRITE)
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx (NEW)
│   │   ├── Footer.tsx (NEW)
│   │   └── MobileMenu.tsx (NEW)
│   ├── hero/
│   │   ├── HeroSection.tsx (NEW)
│   │   └── HeroVideo.tsx (NEW)
│   ├── demo/
│   │   ├── AIVideoStudio.tsx (NEW)
│   │   ├── AIImageStudio.tsx (NEW)
│   │   └── AIImageStudioComplete.tsx (NEW)
│   ├── sections/
│   │   ├── StatsBar.tsx (NEW)
│   │   ├── VideoShowcase.tsx (UPDATE)
│   │   ├── HowItWorks.tsx (UPDATE)
│   │   ├── PricingTeaser.tsx (NEW)
│   │   ├── Testimonials.tsx (NEW)
│   │   └── FinalCTA.tsx (UPDATE)
│   └── ui/
│       ├── Button.tsx (UPDATE)
│       ├── Card.tsx (UPDATE)
│       └── VideoCard.tsx (KEEP & UPDATE)
├── styles/
│   ├── globals.css (UPDATE - light theme)
│   └── theme.css (UPDATE)
└── lib/
    └── useTranslations.ts (KEEP)
```

### New Components Needed

1. **Navigation.tsx**
   - Clean, minimal navigation
   - Dropdown menus
   - Sticky behavior
   - Mobile-responsive

2. **HeroVideo.tsx**
   - Background video component
   - Gradient overlay
   - Optimized loading
   - Fallback image

3. **AIVideoStudio.tsx**
   - App-like UI mockup
   - Form inputs (visual only)
   - "Generate for Free" CTA → signup redirect
   - Integration with 3 video showcases

4. **AIImageStudio.tsx**
   - Text to Image interface mockup
   - Model selection UI
   - Aspect ratio selector
   - Example gallery

5. **AIImageStudioComplete.tsx**
   - Tabbed interface (Text to Image / Image to Image)
   - Full app UI recreation
   - Side panel for creations
   - Generate button with redirect

6. **StatsBar.tsx**
   - Simple stats display
   - Animated counters
   - Clean, minimal design

7. **PricingTeaser.tsx**
   - 3-tier pricing cards
   - Feature comparison
   - CTAs to signup

8. **Testimonials.tsx**
   - Creator testimonials
   - Avatar display
   - Carousel or grid layout

### Components to Update

1. **VideoCard.tsx**
   - Lighter theme styling
   - More whitespace
   - Simplified hover effects

2. **HowItWorks** section
   - Remove content type switcher
   - Update styling
   - Use app screenshots

3. **ProductTransformationShowcase**
   - Update colors
   - Light theme adaptation
   - Better spacing

4. **Footer**
   - Complete restructure
   - More organized
   - Light theme

### Components to Remove/Deprecate

1. Complex rotating text in hero (simplify)
2. Floating performance cards
3. Heavy sale banner (simplify or remove)
4. Overly complex animations
5. Dark theme styling

---

## 🎬 Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Set up new color system (light theme)
- [ ] Update typography system
- [ ] Create new Button and Card components
- [ ] Build new Navigation component
- [ ] Build new Footer component
- [ ] Set up new layout structure

### Phase 2: Hero Section (Week 1)
- [ ] Design and implement new Hero layout
- [ ] Integrate background video capability
- [ ] Create gradient overlay system
- [ ] Simplify CTA messaging
- [ ] Mobile responsiveness
- [ ] Add scroll indicator

### Phase 3: Interactive Demo Sections (Week 2)
- [ ] Build AIVideoStudio component
- [ ] Build AIImageStudio component
- [ ] Build AIImageStudioComplete component
- [ ] Implement "Generate for Free" redirects
- [ ] Add app UI styling
- [ ] Mobile optimization
- [ ] Integration with existing videos

### Phase 4: Content Sections (Week 2)
- [ ] Update Video Showcase section
- [ ] Update How It Works section
- [ ] Build Stats Bar component
- [ ] Build Testimonials section
- [ ] Build Pricing Teaser section
- [ ] Update Product Transformation section

### Phase 5: Polish & Optimization (Week 3)
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] Animation refinement
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Load time optimization
- [ ] SEO updates for new structure

### Phase 6: Content & Testing (Week 3)
- [ ] Content review and updates
- [ ] Translation updates (EN/SV)
- [ ] User testing
- [ ] Conversion tracking setup
- [ ] Analytics verification
- [ ] Final QA

---

## 📊 Success Metrics

### Key Performance Indicators (KPIs)
- Signup conversion rate increase by 40%+
- Time on page increase by 25%+
- Mobile bounce rate decrease by 30%+
- "Generate for Free" click-through rate > 15%
- Video engagement (plays) increase by 50%+
- Page load time < 2.5s

### Tracking Points
1. Hero CTA clicks
2. Demo section interactions ("Generate for Free")
3. Video play rates
4. Scroll depth
5. Mobile vs. Desktop engagement
6. Exit pages
7. Form interaction (even if non-functional)

---

## 🎯 Conversion Optimization

### Strategic CTA Placement
1. **Hero Section**: Primary CTA above fold
2. **After each demo section**: "Generate for Free" → Signup
3. **After video showcase**: "Try It Yourself" → Signup
4. **Pricing teaser**: Multiple tier options → Signup
5. **Final CTA**: Last chance before footer
6. **Navigation**: Persistent "Start Free Now" button

### Messaging Hierarchy
- **Primary**: "Start Free Now" / "Generate for Free"
- **Secondary**: "Try It Yourself" / "Get Started"
- **Tertiary**: "Learn More" / "See Examples"

### Friction Reduction
- No email signup in demos (direct redirect)
- Instant access messaging
- Clear "No credit card" messaging
- One-click access to app
- Fast page loads

---

## 🔍 SEO Considerations

### Page Title Updates
```
Lymo AI - Create Professional AI Videos, Images & Content in Seconds
```

### Meta Description
```
Transform any product into viral videos and stunning images with AI. 
Create professional content in 3 simple steps. Start free - no credit card required.
```

### H1 Strategy
```
Main H1: "Create any video you can imagine"
(Simple, powerful, artlist-inspired)
```

### Structured Data
- Keep existing JSON-LD
- Update product schema
- Add VideoObject schema for showcased videos
- Add FAQPage schema

---

## 🌐 Internationalization

### Language Support (Keep Current)
- English (EN)
- Swedish (SV)

### New Translation Keys Needed
```javascript
{
  hero: {
    title: "Create any video you can imagine",
    cta: "Start Free Now"
  },
  demo: {
    video: {
      title: "AI Video Studio",
      subtitle: "Create professional videos in seconds",
      cta: "Generate for Free"
    },
    image: {
      title: "AI Image Studio",
      subtitle: "Transform products into stunning visuals",
      cta: "Generate for Free"
    },
    imageStudio: {
      title: "Complete Image Studio",
      subtitle: "Text to Image & Image to Image transformations",
      cta: "Generate for Free"
    }
  },
  howItWorks: {
    title: "How It Works",
    step1: {...},
    step2: {...},
    step3: {...}
  },
  pricing: {
    title: "Choose Your Plan",
    subtitle: "Start free, upgrade when you're ready"
  }
}
```

---

## 🚀 Launch Checklist

### Pre-Launch
- [ ] Design approved
- [ ] All components built
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] Accessibility checked
- [ ] Translations complete
- [ ] SEO updated
- [ ] Analytics configured
- [ ] User testing complete

### Launch Day
- [ ] Deploy to production
- [ ] Monitor analytics
- [ ] Check all CTAs working
- [ ] Verify video playback
- [ ] Test mobile experience
- [ ] Monitor page speed
- [ ] Check conversion tracking

### Post-Launch (Week 1)
- [ ] Analyze user behavior
- [ ] A/B test hero variations
- [ ] Optimize slow sections
- [ ] Gather user feedback
- [ ] Fix any bugs
- [ ] Refine CTAs based on data

---

## 💡 Future Enhancements

### Phase 2 Features (Post-Launch)
1. **Interactive Product Demo**: Actual functional demo before signup
2. **Use Case Filtering**: E-commerce, Social Media, Ads, etc.
3. **Video Template Gallery**: Browse examples by industry
4. **AI Generation Preview**: Show "mock" generation process
5. **Pricing Calculator**: ROI calculator for businesses
6. **Customer Logos**: Brand trust badges
7. **Blog Integration**: Content marketing
8. **Comparison Page**: vs. competitors

### Advanced Features
1. **Personalization**: Dynamic content based on traffic source
2. **Chat Widget**: AI-powered sales assistant
3. **Product Tours**: Interactive onboarding preview
4. **Webinar Integration**: Live demo sessions
5. **Affiliate Program**: Partner showcase

---

## 📝 Content Requirements

### Copy Needed
- [ ] New hero headline (finalize with team)
- [ ] Demo section descriptions
- [ ] Feature descriptions (simplified)
- [ ] Testimonials (3-5 real customer quotes)
- [ ] Pricing tier details
- [ ] FAQ content
- [ ] About page content

### Visual Assets Needed
- [ ] Hero background video (user will provide)
- [ ] App screenshots (use existing + capture new ones)
- [ ] Demo interface mockups (high-res)
- [ ] Creator testimonial avatars
- [ ] Company logos (if adding social proof)
- [ ] Icons (ensure license)

### Video Assets
- [ ] Keep existing 3 videos
- [ ] Optimize video files for web
- [ ] Create poster images
- [ ] Consider adding more examples

---

## 🎨 Design Mockup Notes

### Figma/Design File Structure
```
Pages:
1. Desktop - Home (1440px)
2. Tablet - Home (768px)
3. Mobile - Home (375px)
4. Components Library
5. Style Guide

Frames:
- Navigation (all states)
- Hero Section (with video overlay)
- Demo Sections (AI Video, AI Image, AI Studio)
- Video Showcase
- How It Works
- Pricing Teaser
- Footer
- Mobile Menu
```

---

## 🔧 Technical Stack (No Changes)

### Current Tech Stack to Keep
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion (if needed, keep minimal)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

### New Additions Needed
- **Video Player**: Native HTML5 (no library needed)
- **Form Validation**: react-hook-form (for future real forms)
- **Analytics**: Existing Google Analytics (ensure events configured)

---

## 📞 Questions to Resolve

### User Inputs Needed
1. ✅ Hero background video - User will set up
2. ❓ Exact copy for new hero headline (use artlist's style?)
3. ❓ Customer testimonials (real or placeholder?)
4. ❓ Pricing tiers final (Free/Starter/Pro correct?)
5. ❓ Translation updates for new sections
6. ❓ Should we keep sale banner or remove entirely?
7. ❓ Any specific artlist.io features to prioritize?
8. ❓ Timeline preference (aggressive 3 weeks or longer?)

### Design Decisions
1. ❓ Exact color of gradient overlay on hero video
2. ❓ Font choice (stick with Inter or add serif for headlines?)
3. ❓ Animation intensity (minimal like artlist or keep some?)
4. ❓ Testimonial source (where to get authentic ones?)
5. ❓ Mobile video hero (keep video or static image?)

---

## 🎯 Key Takeaways

### Must-Have Features
1. ✅ Clean, minimal navigation (artlist-style)
2. ✅ Hero video with elegant overlay
3. ✅ 3 interactive demo sections (Video, Image, Studio)
4. ✅ "Generate for Free" CTAs → Signup
5. ✅ Keep 3 existing videos
6. ✅ Mobile-first responsive design
7. ✅ Light theme (major shift from current dark)

### Core Design Principles
- **Simplicity**: Less is more
- **Clarity**: Clear CTAs and messaging
- **Elegance**: Refined, professional aesthetic
- **Conversion**: Every section drives to signup
- **Mobile**: Perfect mobile experience

### Inspiration Sources
- **Primary**: Artlist.io homepage
- **Secondary**: Modern SaaS landing pages (Linear, Vercel, Framer)
- **Video Showcases**: Product Hunt, Loom

---

## 📅 Recommended Timeline

### Aggressive Timeline (3 Weeks)
- **Week 1**: Foundation + Hero
- **Week 2**: Demo sections + Content updates
- **Week 3**: Polish + Testing + Launch

### Conservative Timeline (6 Weeks)
- **Week 1-2**: Design + Foundation
- **Week 3-4**: Core sections build
- **Week 5**: Polish + Content
- **Week 6**: Testing + Launch

**Recommendation**: Start with 3-week aggressive timeline, extend if needed.

---

## 📋 Immediate Next Steps

1. **Review this plan** - Get team approval
2. **Gather assets** - Hero video, testimonials, screenshots
3. **Start with foundation** - Color system, typography, button components
4. **Build navigation first** - Sets tone for entire redesign
5. **Hero section next** - Biggest impact element
6. **Weekly check-ins** - Review progress, adjust as needed

---

## ✅ Final Notes

This redesign represents a significant shift from the current dark, feature-heavy design to a clean, light, conversion-focused experience inspired by artlist.io. The key is maintaining simplicity while showcasing the power of the AI tools through interactive, app-like demos that seamlessly drive users to sign up.

The three demo sections (AI Videos, AI Images, AI Image Studio) will act as the core differentiator, giving users a taste of the actual product while the "Generate for Free" CTAs create low-friction conversion points throughout the page.

Mobile optimization is critical - artlist.io excels at mobile, and we must match that standard. Every section should work beautifully on small screens.

---

**Document Version**: 1.0  
**Created**: January 4, 2026  
**Last Updated**: January 4, 2026  
**Status**: Draft - Awaiting Approval

---

*Ready to transform your landing page? Let's build something amazing! 🚀*


