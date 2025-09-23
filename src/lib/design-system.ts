// Sistema de diseño Mastersteps - Escuela Virtual
export const brand = {
  // Colores primarios
  primary: '#0e5fac',      // Azul principal - CTAs, headers
  secondary: '#10a8f7',    // Azul claro - hover, badges
  accent: '#f9b43e',       // Naranja - logros, gamificación
  danger: '#d04a5c',       // Rosa/Rojo - urgencia, errores
  
  // Escala de grises
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  }
} as const;

// Gradientes del sistema
export const gradients = {
  primary: `linear-gradient(135deg, ${brand.primary}20, ${brand.secondary}20)`,
  accent: `linear-gradient(135deg, ${brand.accent}20, ${brand.danger}20)`,
  hero: `linear-gradient(135deg, ${brand.primary}, ${brand.secondary})`,
  card: `linear-gradient(135deg, ${brand.primary}10, ${brand.secondary}10)`,
  orange: `linear-gradient(135deg, ${brand.accent}, ${brand.danger})`,
  warm: `linear-gradient(135deg, ${brand.accent}15, ${brand.danger}15)`
} as const;

// Componentes del sistema
export const components = {
  button: {
    primary: `bg-[${brand.primary}] hover:bg-[${brand.primary}]/90 text-white`,
    secondary: `bg-[${brand.secondary}] hover:bg-[${brand.secondary}]/90 text-white`,
    accent: `bg-[${brand.accent}] hover:bg-[${brand.accent}]/90 text-white`,
    outline: `border-2 border-[${brand.primary}] text-[${brand.primary}] hover:bg-[${brand.primary}] hover:text-white`,
    warm: `bg-[${brand.accent}] hover:bg-[${brand.accent}]/90 text-white shadow-lg`
  },
  card: {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white border border-gray-200 shadow-lg',
    gradient: `bg-gradient-to-br from-[${brand.primary}]/5 to-[${brand.secondary}]/5 border border-[${brand.primary}]/20`
  },
  badge: {
    success: `bg-[${brand.secondary}]/10 text-[${brand.secondary}] border border-[${brand.secondary}]/20`,
    warning: `bg-[${brand.accent}]/10 text-[${brand.accent}] border border-[${brand.accent}]/20`,
    danger: `bg-[${brand.danger}]/10 text-[${brand.danger}] border border-[${brand.danger}]/20`
  }
} as const;

// Utilidades
export const utils = {
  focusRing: `focus:outline-none focus:ring-2 focus:ring-[${brand.primary}] focus:ring-offset-2`,
  textGradient: `bg-gradient-to-r from-[${brand.primary}] to-[${brand.secondary}] bg-clip-text text-transparent`,
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
} as const;
