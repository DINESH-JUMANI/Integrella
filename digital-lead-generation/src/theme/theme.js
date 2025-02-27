// Theme configuration with CSS variables
export const theme = {
  light: {
    // Colors
    '--primary-color': '#4882BC',    // Main color (60%)
    '--secondary-color': '#7B55A3',  // Secondary color (30%)
    '--tertiary-color': '#5DB272',   // Accent color (10%)
    '--accent-color': '#f5c23d',
    '--background-color': '#ffffff',
    '--surface-color': '#f5f5f5',
    '--text-primary': '#333333',
    '--text-secondary': '#666666',
    '--border-color': '#e0e0e0',
    '--error-color': '#d32f2f',
    '--success-color': '#388e3c',
    '--shadow-color': 'rgba(0, 0, 0, 0.1)',

    // Spacing
    '--spacing-xs': '0.25rem',    // 4px
    '--spacing-sm': '0.5rem',     // 8px
    '--spacing-md': '1rem',       // 16px
    '--spacing-lg': '1.5rem',     // 24px
    '--spacing-xl': '2rem',       // 32px
    '--spacing-2xl': '3rem',      // 48px
    '--spacing-3xl': '4rem',      // 64px

    // Typography
    '--font-size-xs': '0.75rem',  // 12px
    '--font-size-sm': '0.875rem', // 14px
    '--font-size-md': '1rem',     // 16px
    '--font-size-lg': '1.25rem',  // 20px
    '--font-size-xl': '1.5rem',   // 24px
    '--font-size-2xl': '2rem',    // 32px
    '--font-size-3xl': '2.5rem',  // 40px

    // Border Radius
    '--border-radius-sm': '4px',
    '--border-radius-md': '8px',
    '--border-radius-lg': '16px',
    '--border-radius-full': '9999px',

    // Container
    '--container-sm': '640px',
    '--container-md': '768px',
    '--container-lg': '1024px',
    '--container-xl': '1280px',
  },
  dark: {
    // Colors
    '--primary-color': '#5992CC',    // Lighter primary for dark mode
    '--secondary-color': '#8B65B3',  // Lighter secondary for dark mode
    '--tertiary-color': '#6DC282',   // Lighter tertiary for dark mode
    '--accent-color': '#f7d05d',
    '--background-color': '#121212',
    '--surface-color': '#1e1e1e',
    '--text-primary': '#ffffff',
    '--text-secondary': '#b3b3b3',
    '--border-color': '#333333',
    '--error-color': '#f44336',
    '--success-color': '#4caf50',
    '--shadow-color': 'rgba(0, 0, 0, 0.3)',

    // Spacing (same as light theme)
    '--spacing-xs': '0.25rem',
    '--spacing-sm': '0.5rem',
    '--spacing-md': '1rem',
    '--spacing-lg': '1.5rem',
    '--spacing-xl': '2rem',
    '--spacing-2xl': '3rem',
    '--spacing-3xl': '4rem',

    // Typography (same as light theme)
    '--font-size-xs': '0.75rem',
    '--font-size-sm': '0.875rem',
    '--font-size-md': '1rem',
    '--font-size-lg': '1.25rem',
    '--font-size-xl': '1.5rem',
    '--font-size-2xl': '2rem',
    '--font-size-3xl': '2.5rem',

    // Border Radius (same as light theme)
    '--border-radius-sm': '4px',
    '--border-radius-md': '8px',
    '--border-radius-lg': '16px',
    '--border-radius-full': '9999px',

    // Container (same as light theme)
    '--container-sm': '640px',
    '--container-md': '768px',
    '--container-lg': '1024px',
    '--container-xl': '1280px',
  }
};

// Apply theme to document root
export const applyTheme = (mode) => {
  const themeVariables = theme[mode];
  Object.entries(themeVariables).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
};
