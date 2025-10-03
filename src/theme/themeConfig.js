/**
 * Ant Design Theme Configuration
 * Based on Ameritas Design System
 * 
 * Typography Guidelines:
 * - Font Family: Lato (Regular 400, Bold 700)
 * - Headings: 125% line height
 * - Body Text: 150% line height
 * - Text Alignment: Left justified
 * - Responsive: 20% reduction from Large to Medium breakpoint
 * - Title Caps: Page titles, form labels, table headings (excluding a, is, of, for, the)
 */

export const themeConfig = {
  token: {
    // Typography
    fontFamily: "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 16, // Base font size
    
    // Font Sizes
    fontSizeHeading1: 40,
    fontSizeHeading2: 32,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 18,
    
    // Line Heights
    lineHeight: 1.5, // 150% for body text
    lineHeightHeading1: 1.25, // 125% for headings
    lineHeightHeading2: 1.25,
    lineHeightHeading3: 1.25,
    lineHeightHeading4: 1.25,
    lineHeightHeading5: 1.25,
    
    // Colors - Placeholder values, update with your brand colors
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',
    
    // Border
    borderRadius: 8,
    
    // Spacing
    controlHeight: 40,
    controlHeightSM: 32,
    controlHeightLG: 48,
  },
  components: {
    Typography: {
      fontWeightStrong: 700,
      titleMarginBottom: '0.5em',
      titleMarginTop: '1.2em',
    },
    Button: {
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
    },
  },
};

// Text Style Constants (from Design System)
export const TEXT_STYLES = {
  // Headings
  H1_REGULAR: {
    fontSize: '2.5rem', // 40px
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H1_BOLD: {
    fontSize: '2.5rem', // 40px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H2_REGULAR: {
    fontSize: '2rem', // 32px
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H2_BOLD: {
    fontSize: '2rem', // 32px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H3_REGULAR: {
    fontSize: '1.5rem', // 24px
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H3_BOLD: {
    fontSize: '1.5rem', // 24px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H4_REGULAR: {
    fontSize: '1.25rem', // 20px
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H4_BOLD: {
    fontSize: '1.25rem', // 20px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H5_REGULAR: {
    fontSize: '1.125rem', // 18px
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  H5_BOLD: {
    fontSize: '1.125rem', // 18px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  
  // Body Text
  BODY_REGULAR: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  BODY_BOLD: {
    fontSize: '1rem', // 16px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  BODY_SMALL_REGULAR: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  BODY_SMALL_BOLD: {
    fontSize: '0.875rem', // 14px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  
  // Graph Subtitle
  GRAPH_SUBTITLE_REGULAR: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  GRAPH_SUBTITLE_BOLD: {
    fontSize: '0.75rem', // 12px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  
  // Navigation & Links
  GLOBAL_NAV: {
    fontSize: '0.625rem', // 10px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  HYPERLINK: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  TEXT_BUTTON: {
    fontSize: '0.875rem', // 14px
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    textTransform: 'uppercase',
  },
};

