{
  "color_palette": {
    "name": "HYROS AIR Design System",
    "version": "1.0",
    "description": "Vibrant rainbow-spectrum palette inspired by HYROS AIR's dynamic, AI-focused branding",
    
    "primary_colors": {
      "rainbow_spectrum": {
        "description": "Core rainbow gradient colors used in hero elements and brand identity",
        "colors": {
          "electric_red": "#FF3366",
          "vibrant_orange": "#FF6633", 
          "sunshine_yellow": "#FFCC33",
          "electric_lime": "#66FF33",
          "cyan_bright": "#33CCFF",
          "electric_blue": "#3366FF",
          "vivid_purple": "#6633FF",
          "magenta_pop": "#CC33FF"
        },
        "usage": ["hero_backgrounds", "accent_elements", "cta_highlights", "brand_identity"],
        "css_gradient": "radial-gradient(circle, #FF3366, #FF6633, #FFCC33, #66FF33, #33CCFF, #3366FF, #6633FF, #CC33FF)"
      },
      
      "brand_blue": {
        "description": "Professional blue tones for trust and technology",
        "colors": {
          "primary_blue": "#4F46E5",
          "deep_blue": "#3730A3",
          "electric_blue": "#6366F1",
          "sky_blue": "#0EA5E9"
        },
        "usage": ["primary_buttons", "links", "tech_elements"]
      },
      
      "brand_yellow": {
        "description": "Primary brand yellow from logo - energetic and optimistic",
        "colors": {
          "primary_yellow": "#F4D03F",
          "bright_yellow": "#F7DC6F",
          "golden_yellow": "#F1C40F",
          "deep_yellow": "#D4AC0D",
          "pale_yellow": "#FCF3CF"
        },
        "usage": ["logo_elements", "accent_highlights", "energy_elements", "call_attention"]
      }
    },
    
    "secondary_colors": {
      "gradient_transitions": {
        "description": "Softer transition colors for subtle gradients",
        "colors": {
          "coral_pink": "#FF8A95",
          "peach_orange": "#FFB366",
          "golden_yellow": "#FFE066",
          "mint_green": "#66FFB3",
          "aqua_blue": "#66E5FF",
          "lavender_blue": "#8A95FF",
          "orchid_purple": "#B366FF",
          "rose_pink": "#FF66CC"
        },
        "usage": ["subtle_backgrounds", "hover_states", "gradient_midpoints"]
      }
    },
    
    "neutral_colors": {
      "backgrounds": {
        "description": "Clean, modern backgrounds that let colors pop",
        "colors": {
          "pure_white": "#FFFFFF",
          "soft_gray": "#F8FAFC",
          "light_gray": "#F1F5F9",
          "medium_gray": "#E2E8F0",
          "dark_section": "#0F172A",
          "charcoal": "#1E293B"
        },
        "usage": ["page_backgrounds", "card_backgrounds", "section_dividers"]
      },
      
      "text_colors": {
        "description": "High-contrast text colors for optimal readability",
        "colors": {
          "primary_text": "#0F172A",
          "secondary_text": "#475569", 
          "muted_text": "#64748B",
          "light_text": "#94A3B8",
          "inverse_text": "#FFFFFF",
          "accent_text": "#4F46E5"
        },
        "usage": ["headings", "body_text", "captions", "labels"]
      }
    },
    
    "semantic_colors": {
      "success": {
        "primary": "#10B981",
        "light": "#6EE7B7",
        "dark": "#047857"
      },
      "warning": {
        "primary": "#F59E0B",
        "light": "#FCD34D", 
        "dark": "#D97706"
      },
      "error": {
        "primary": "#EF4444",
        "light": "#FCA5A5",
        "dark": "#DC2626"
      },
      "info": {
        "primary": "#3B82F6",
        "light": "#93C5FD",
        "dark": "#1D4ED8"
      }
    },
    
    "gradient_presets": {
      "hero_rainbow": {
        "type": "radial-gradient",
        "css": "radial-gradient(ellipse at center, #FF3366 0%, #FF6633 15%, #FFCC33 30%, #66FF33 45%, #33CCFF 60%, #6633FF 75%, #CC33FF 100%)",
        "usage": "Hero sections, major brand elements"
      },
      
      "subtle_rainbow": {
        "type": "linear-gradient", 
        "css": "linear-gradient(135deg, rgba(255,51,102,0.1) 0%, rgba(255,204,51,0.1) 25%, rgba(102,255,51,0.1) 50%, rgba(51,204,255,0.1) 75%, rgba(204,51,255,0.1) 100%)",
        "usage": "Background overlays, subtle accents"
      },
      
      "blue_tech": {
        "type": "linear-gradient",
        "css": "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
        "usage": "Buttons, tech elements, CTAs"
      },
      
      "warm_accent": {
        "type": "linear-gradient",
        "css": "linear-gradient(45deg, #FF6633 0%, #FFCC33 100%)",
        "usage": "Warm highlights, energy elements"
      },
      
      "yellow_highlight": {
        "type": "linear-gradient",
        "css": "linear-gradient(135deg, #F4D03F 0%, #F7DC6F 100%)",
        "usage": "Brand accents, logo highlights, attention elements"
      },
      
      "yellow_to_orange": {
        "type": "linear-gradient",
        "css": "linear-gradient(45deg, #F4D03F 0%, #FF6633 100%)",
        "usage": "Warm brand transitions, energetic elements"
      }
    },
    
    "color_usage_guidelines": {
      "primary_usage": {
        "rainbow_gradients": "Use sparingly for maximum impact - hero sections, brand elements, key CTAs",
        "blue_tones": "Professional elements, primary actions, navigation",
        "neutrals": "Backgrounds, text, cards, structural elements"
      },
      
      "accessibility": {
        "contrast_ratios": {
          "aa_normal": "4.5:1 minimum for normal text",
          "aa_large": "3:1 minimum for large text (18px+)",
          "aaa": "7:1 for enhanced accessibility"
        },
        "color_blind_safe": "Ensure sufficient contrast independent of hue",
        "focus_indicators": "Use high contrast colors for focus states"
      },
      
      "brand_hierarchy": {
        "dominant": "Rainbow gradients (10-15% of design)",
        "primary": "Blue tones (20-25% of design)",
        "secondary": "Neutral grays (60-70% of design)",
        "accent": "Semantic colors (<5% of design)"
      }
    },
    
    "component_color_mapping": {
      "buttons": {
        "primary_cta": "blue_tech gradient or electric_blue solid",
        "secondary_cta": "outlined with primary_blue",
        "accent_cta": "rainbow gradient (use sparingly)",
        "yellow_accent": "primary_yellow solid for brand emphasis",
        "ghost_button": "transparent with primary_text"
      },
      
      "cards": {
        "background": "pure_white with subtle shadow",
        "border": "light_gray or none",
        "hover_state": "subtle_rainbow overlay at 5% opacity"
      },
      
      "navigation": {
        "background": "pure_white or soft_gray",
        "links": "primary_text with primary_blue hover",
        "active_state": "electric_blue or gradient accent"
      },
      
      "hero_sections": {
        "background": "hero_rainbow gradient",
        "text": "inverse_text (white)",
        "cta": "pure_white background with primary_text"
      }
    },
    
    "dark_mode_variants": {
      "description": "Alternative palette for dark mode implementations",
      "backgrounds": {
        "primary_dark": "#0F172A",
        "secondary_dark": "#1E293B",
        "elevated_dark": "#334155"
      },
      "rainbow_dark": {
        "description": "Toned-down rainbow colors for dark backgrounds",
        "colors": {
          "red_dark": "#FF6B8A",
          "orange_dark": "#FF9466",
          "yellow_dark": "#FFD666",
          "green_dark": "#8AFF66",
          "cyan_dark": "#66D9FF",
          "blue_dark": "#6B8AFF",
          "purple_dark": "#9466FF",
          "magenta_dark": "#D666FF"
        }
      }
    }
  }
}