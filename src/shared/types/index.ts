// Tipos base do projeto Code Compass

export interface User {
    id: string
    email: string
    name: string
    type: 'admin' | 'student'
    createdAt: Date
    lastLogin: Date
    preferences: {
        theme: 'light' | 'dark'
        notifications: boolean
    }
}

// Re-exportar tipos de aprendizado
export * from './learning'
