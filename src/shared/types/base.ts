// Tipos base da aplicação

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