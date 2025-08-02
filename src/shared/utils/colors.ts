// Configuração de cores do Code Compass
// Baseado no plano-projeto.md

export const colors = {
  // Cores Primárias
  primary: {
    blue: '#2563eb',
    dark: '#1e40af',
    light: '#3b82f6',
  },

  // Cores Secundárias
  secondary: {
    purple: '#7c3aed',
    green: '#10b981',
    orange: '#f59e0b',
  },

  // Cores Neutras
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    600: '#475569',
    800: '#1e293b',
    900: '#0f172a',
  },

  // Estados
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
} as const;

// Classes Tailwind correspondentes
export const colorClasses = {
  primary: {
    blue: 'bg-blue-600 text-white',
    dark: 'bg-blue-800 text-white',
    light: 'bg-blue-500 text-white',
  },

  secondary: {
    purple: 'bg-purple-600 text-white',
    green: 'bg-green-600 text-white',
    orange: 'bg-orange-500 text-white',
  },

  neutral: {
    50: 'bg-gray-50 text-gray-900',
    100: 'bg-gray-100 text-gray-900',
    200: 'bg-gray-200 text-gray-900',
    600: 'bg-gray-600 text-white',
    800: 'bg-gray-800 text-white',
    900: 'bg-gray-900 text-white',
  },

  status: {
    success: 'bg-green-600 text-white',
    warning: 'bg-orange-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  },
} as const;
