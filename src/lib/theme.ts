export const theme = {
  colors: {
    // Colores Primarios
    primary: {
      neutral: '#f5f5f5',
      black: '#000000',
    },
    // Colores Secundarios
    secondary: {
      lightGray: '#f9fafb',
      gray: '#6b7280',
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
      gray: '#6B7280', // Gris destacado para acentos
    },
    // Colores de Fondo
    background: {
      light: '#ffffff',
      neutral: '#f5f5f5',
      dark: '#1f2937',
    },
    // Colores de Texto
    text: {
      primary: '#000000',
      secondary: '#6b7280',
      light: '#9ca3af',
    },
    // Metodología OPT - Colores principales
    opt: {
      organizacion: '#D2AA52',    // Dorado/Oro para Organización
      procesos: '#D2DFC3',        // Verde suave para Procesos
      tecnologias: '#C4D8DF',     // Azul claro para Tecnologías
      // Variaciones para diferentes usos
      organizacionLight: '#E8C97A',
      organizacionDark: '#B8943A',
      procesosLight: '#E8F0D8',
      procesosDark: '#B8C9A3',
      tecnologiasLight: '#D8E8ED',
      tecnologiasDark: '#A8C8D3',
    }
  },
  // Tipografía
  typography: {
    fontFamily: {
      primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
  // Espaciado
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  // Bordes y Sombras
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
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