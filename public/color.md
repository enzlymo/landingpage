Lymo SaaS Dark Theme Colors for Landing Page

This document provides the complete dark theme color palette from your Lymo SaaS application for use on your landing page.

## 🎨 Core Dark Theme Colors

### Background & Surfaces
```css
/* Main Backgrounds */
--background: hsl(215, 28%, 8%);           /* #0F1419 - Main dark background */
--card: hsl(217, 19%, 11%);               /* #1A202C - Dark card background */
--sidebar: hsl(222, 47%, 8%);             /* #161B22 - Sidebar dark background */

/* Surface Variations */
--popover: hsl(217, 19%, 11%);            /* Dark popover backgrounds */
--secondary: hsl(215, 25%, 15%);          /* Dark secondary surfaces */
--muted: hsl(215, 25%, 15%);              /* Muted backgrounds */
--accent: hsl(215, 25%, 15%);             /* Accent backgrounds */
--input: hsl(215, 25%, 15%);              /* Input field backgrounds */
```

### Text Colors
```css
/* Text Hierarchy */
--foreground: hsl(210, 12%, 95%);         /* #F7FAFC - Light primary text */
--card-foreground: hsl(210, 12%, 95%);    /* Light text on cards */
--secondary-text: hsl(217, 10%, 65%);     /* #A0AEC0 - Gray secondary text */
--muted-text: hsl(217, 10%, 45%);         /* #718096 - Muted text */
--muted-foreground: hsl(217, 10%, 65%);   /* Muted text on surfaces */
```

### Brand Colors (Dark Theme Optimized)
```css
/* Primary Brand Colors */
--brand-yellow: #F6E05E;                  /* Keep brand yellow - works on dark */
--brand-dark: #E2E8F0;                    /* Light version for dark theme */
--primary: hsl(217, 91%, 60%);            /* #60A5FA - Lighter blue for dark */
--primary-blue: #60A5FA;                  /* Lighter blue for dark theme */
--dark-blue: #3B82F6;                     /* Standard blue */
--purple-accent: #A78BFA;                 /* Lighter purple for dark theme */
```

### Interactive Elements
```css
/* Borders & Outlines */
--border: hsl(215, 25%, 18%);             /* #2D3748 - Subtle borders */
--ring: hsl(217, 91%, 60%);               /* Focus rings */

/* Status Colors */
--success: #10B981;                       /* Success green */
--warning: #F59E0B;                       /* Warning orange */
--error: #EF4444;                         /* Error red */
--info: #06B6D4;                          /* Info cyan */
--destructive: hsl(0, 62.8%, 50.6%);     /* Destructive actions */
```

## 🌟 Signature Lymo Gradients

### Main Background Gradient
```css
.bg-lymo-gradient {
  background: linear-gradient(135deg, 
    hsl(222, 84%, 4.9%) 0%,     /* Very dark blue-gray */
    hsl(222, 47%, 11%) 25%,     /* Dark blue-gray */
    hsl(222, 47%, 14%) 50%,     /* Medium dark */
    hsl(222, 47%, 11%) 75%,     /* Dark blue-gray */
    hsl(222, 84%, 4.9%) 100%    /* Very dark blue-gray */
  );
}
```

### Sidebar Gradient (Premium Look)
```css
.bg-sidebar-gradient {
  background: radial-gradient(ellipse at top left, 
    hsl(222, 47%, 11%) 0%,      /* Dark blue-gray center */
    hsl(222, 84%, 4.9%) 40%,    /* Very dark blue */
    hsl(222, 84%, 4.9%) 60%,    /* Very dark blue */
    hsl(222, 47%, 8%) 100%      /* Darker edge */
  );
}
```

### Brand Text Gradient
```css
.text-lymo-brand {
  background: linear-gradient(135deg, #F6E05E 0%, #2D3748 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Hero Accent Gradient
```css
.text-hero-accent {
  background: linear-gradient(to right, #F6E05E, #F59E0B, #F6E05E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## 🎯 Usage Guidelines for Landing Page

### Primary Sections
```css
/* Hero Section */
background: linear-gradient(135deg, 
  hsl(222, 84%, 4.9%) 0%, 
  hsl(222, 47%, 11%) 50%, 
  hsl(222, 84%, 4.9%) 100%
);

/* Feature Cards */
background: hsl(217, 19%, 11%);           /* Card background */
border: 1px solid hsl(215, 25%, 18%);    /* Subtle border */

/* Navigation */
background: hsl(215, 28%, 8%);            /* Main background */
border-bottom: 1px solid hsl(215, 25%, 18%);
```

### Button Styles
```css
/* Primary CTA Button */
.btn-primary {
  background: linear-gradient(135deg, #F6E05E 0%, #F59E0B 100%);
  color: #111827;
  border: none;
}

/* Secondary Button */
.btn-secondary {
  background: hsl(217, 19%, 11%);
  color: hsl(210, 12%, 95%);
  border: 1px solid hsl(215, 25%, 18%);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: hsl(210, 12%, 95%);
  border: 1px solid hsl(215, 25%, 18%);
}
```

### Typography
```css
/* Headings */
h1, h2, h3 {
  color: hsl(210, 12%, 95%);              /* Primary text */
}

/* Body Text */
p, span {
  color: hsl(217, 10%, 65%);              /* Secondary text */
}

/* Muted Text */
.text-muted {
  color: hsl(217, 10%, 45%);              /* Muted text */
}
```

## 🔧 CSS Custom Properties Setup

Add this to your landing page CSS:

```css
:root {
  /* Dark Theme Base */
  --bg-primary: hsl(215, 28%, 8%);
  --bg-secondary: hsl(217, 19%, 11%);
  --bg-tertiary: hsl(215, 25%, 15%);
  
  /* Text Colors */
  --text-primary: hsl(210, 12%, 95%);
  --text-secondary: hsl(217, 10%, 65%);
  --text-muted: hsl(217, 10%, 45%);
  
  /* Brand Colors */
  --brand-yellow: #F6E05E;
  --brand-blue: #60A5FA;
  --brand-purple: #A78BFA;
  
  /* Borders */
  --border-primary: hsl(215, 25%, 18%);
  --border-secondary: hsl(215, 25%, 15%);
  
  /* Status Colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #06B6D4;
}
```

## 🎨 Color Combinations That Work

### High Contrast (Accessibility Friendly)
- **White text** on `hsl(215, 28%, 8%)` - Main backgrounds
- **Primary text** `hsl(210, 12%, 95%)` on `hsl(217, 19%, 11%)` - Cards
- **Brand yellow** `#F6E05E` on `hsl(215, 28%, 8%)` - CTAs

### Subtle Combinations
- **Secondary text** `hsl(217, 10%, 65%)` on `hsl(217, 19%, 11%)` - Card content
- **Muted text** `hsl(217, 10%, 45%)` on `hsl(215, 25%, 15%)` - Subtle info

### Accent Combinations
- **Brand blue** `#60A5FA` with **Brand yellow** `#F6E05E` - Primary actions
- **Purple accent** `#A78BFA` with **Brand yellow** `#F6E05E` - Premium features

## 🌈 Hex Color Quick Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Main Background | `#0F1419` | Page background |
| Card Background | `#1A202C` | Feature cards, modals |
| Sidebar Background | `#161B22` | Navigation, sidebars |
| Primary Text | `#F7FAFC` | Headings, important text |
| Secondary Text | `#A0AEC0` | Body text, descriptions |
| Muted Text | `#718096` | Captions, disabled text |
| Brand Yellow | `#F6E05E` | CTAs, highlights |
| Brand Blue | `#60A5FA` | Links, interactive elements |
| Purple Accent | `#A78BFA` | Premium features, AI elements |
| Border Color | `#2D3748` | Subtle dividers |
| Success Green | `#10B981` | Success states |
| Warning Orange | `#F59E0B` | Warnings, attention |
| Error Red | `#EF4444` | Errors, destructive actions |

This color palette will give your landing page the exact same professional, modern dark theme look as your SaaS application! 🚀
