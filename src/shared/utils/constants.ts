// Constantes da aplicação Code Compass

export const APP_CONFIG = {
  name: 'Code Compass',
  version: '1.0.0',
  description: 'Plataforma educacional interativa para JavaScript e TypeScript',
} as const;

export const AUTH_CONFIG = {
  // Credenciais simuladas para desenvolvimento
  admin: {
    email: 'admin@codecompass.com',
    password: 'admin123',
  },
  student: {
    email: 'aluno@codecompass.com',
    password: 'aluno123',
  },
} as const;

export const STORAGE_KEYS = {
  user: 'code-compass-user',
  progress: 'code-compass-progress',
  theme: 'code-compass-theme',
  notes: 'code-compass-notes',
} as const;

export const ROUTES = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  learning: {
    javascript: '/learning/javascript',
    typescript: '/learning/typescript',
  },
  lesson: '/lesson',
  quiz: '/quiz',
  progress: '/progress',
  profile: '/profile',
  admin: {
    dashboard: '/admin/dashboard',
    content: '/admin/content',
    users: '/admin/users',
    analytics: '/admin/analytics',
    settings: '/admin/settings',
  },
} as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  large: 1280,
} as const;
