export const theme = {
  colors: {
    // Colores Primarios
    primary: {
      neutral: '#e4e2dd',
      black: '#000000',
    },
    // Colores Secundarios
    secondary: {
      lightGray: '#b8b8b8',
      gray: '#737373',
    },
    // Colores de Acento (para elementos llamativos)
    accent: {
      blue: '#0066cc',    // Confianza
      green: '#00a86b',   // Crecimiento
      mainBlue: '#458FE8',  // Nuevo azul principal para acentos
      goldenYellow: '#FFD468', // Se mantiene si es necesario, o se puede reevaluar
      // Tonos Pastel para acentos
      blueLight: '#B0D9FF',
      greenLight: '#B0FFD9',
      bluePale: '#C0E0FF', // Nuevo azul pastel para elementos claros
    },
    // Colores de Fondo
    background: {
      light: '#ffffff',
      neutral: '#f5f5f5',
      dark: '#1a1a1a',
    },
    // Colores de Texto
    text: {
      primary: '#000000',
      secondary: '#737373',
      light: '#ffffff',
    }
  },
  // Tipografía
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      secondary: 'Space Grotesk, system-ui, sans-serif',
    },
    fontSize: {
      h1: '4rem',      // 64px
      h2: '3rem',      // 48px
      h3: '2.25rem',   // 36px
      h4: '1.5rem',    // 24px
      body: '1rem',    // 16px
      small: '0.875rem', // 14px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    }
  },
  // Espaciado
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  // Bordes y Sombras
  border: {
    radius: {
      sm: '0.25rem',   // 4px
      md: '0.5rem',    // 8px
      lg: '1rem',      // 16px
      xl: '2rem',      // 32px
      full: '9999px',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    }
  },
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  // Animaciones
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    timing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
    }
  },
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
} as const;

// Tipos de TypeScript para el tema
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography; 