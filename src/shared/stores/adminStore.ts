// Store Zustand para Sistema de Administração
// Seguindo SOLID e Clean Architecture

import { create } from 'zustand'
import type { AdminStats, UserManagement, UserStats } from '@/shared/types/admin'

interface AdminStore {
    // Estado
    stats: AdminStats | null
    users: UserManagement[]
    selectedUser: UserManagement | null
    isLoading: boolean
    error: string | null

    // Ações
    loadStats: () => Promise<void>
    loadUsers: () => Promise<void>
    selectUser: (userId: string) => void
    updateUserStatus: (userId: string, status: UserManagement['status']) => Promise<void>
    getUserStats: (userId: string) => UserStats | null
    blockUser: (userId: string) => Promise<void>
    unblockUser: (userId: string) => Promise<void>
    deleteUser: (userId: string) => Promise<void>
}

// Dados mock para desenvolvimento
const mockUsers: UserManagement[] = [
    {
        id: 'user1',
        name: 'João Silva',
        email: 'joao@example.com',
        type: 'student',
        status: 'active',
        registrationDate: new Date('2024-01-15'),
        lastLogin: new Date('2024-12-01'),
        progress: {
            completedLessons: 12,
            totalLessons: 25,
            completedQuizzes: 8,
            totalQuizzes: 15,
            averageScore: 85
        },
        activity: {
            lastActivity: new Date('2024-12-01'),
            totalTimeSpent: 3600, // 1 hora
            lessonsCompleted: 12,
            quizzesTaken: 8
        }
    },
    {
        id: 'user2',
        name: 'Maria Santos',
        email: 'maria@example.com',
        type: 'student',
        status: 'active',
        registrationDate: new Date('2024-02-20'),
        lastLogin: new Date('2024-11-30'),
        progress: {
            completedLessons: 8,
            totalLessons: 25,
            completedQuizzes: 5,
            totalQuizzes: 15,
            averageScore: 78
        },
        activity: {
            lastActivity: new Date('2024-11-30'),
            totalTimeSpent: 2400, // 40 minutos
            lessonsCompleted: 8,
            quizzesTaken: 5
        }
    },
    {
        id: 'user3',
        name: 'Pedro Costa',
        email: 'pedro@example.com',
        type: 'student',
        status: 'inactive',
        registrationDate: new Date('2024-03-10'),
        lastLogin: new Date('2024-10-15'),
        progress: {
            completedLessons: 3,
            totalLessons: 25,
            completedQuizzes: 2,
            totalQuizzes: 15,
            averageScore: 65
        },
        activity: {
            lastActivity: new Date('2024-10-15'),
            totalTimeSpent: 1200, // 20 minutos
            lessonsCompleted: 3,
            quizzesTaken: 2
        }
    }
]

const mockStats: AdminStats = {
    totalUsers: 3,
    activeUsers: 2,
    totalContent: 25,
    publishedContent: 20,
    totalQuizzes: 15,
    completedQuizzes: 15,
    popularTechnologies: [
        { name: 'JavaScript', count: 12 },
        { name: 'TypeScript', count: 8 },
        { name: 'React', count: 5 }
    ],
    recentActivity: [
        {
            type: 'quiz_completed',
            description: 'João completou o quiz JavaScript Básico',
            timestamp: new Date('2024-12-01')
        },
        {
            type: 'content_created',
            description: 'Novo conteúdo criado: Aula 2 de JavaScript',
            timestamp: new Date('2024-11-30')
        },
        {
            type: 'user_registered',
            description: 'Novo usuário registrado: Maria Santos',
            timestamp: new Date('2024-11-29')
        }
    ]
}

export const useAdminStore = create<AdminStore>((set, get) => ({
    // Estado inicial
    stats: null,
    users: [],
    selectedUser: null,
    isLoading: false,
    error: null,

    // Ações
    loadStats: async () => {
        set({ isLoading: true, error: null })
        try {
            // Simular chamada API
            await new Promise(resolve => setTimeout(resolve, 1000))
            set({ stats: mockStats, isLoading: false })
        } catch (_error) {
            set({ error: 'Erro ao carregar estatísticas', isLoading: false })
        }
    },

    loadUsers: async () => {
        set({ isLoading: true, error: null })
        try {
            // Simular chamada API
            await new Promise(resolve => setTimeout(resolve, 1000))
            set({ users: mockUsers, isLoading: false })
        } catch (_error) {
            set({ error: 'Erro ao carregar usuários', isLoading: false })
        }
    },

    selectUser: (userId: string) => {
        const user = get().users.find(u => u.id === userId)
        set({ selectedUser: user || null })
    },

    updateUserStatus: async (userId: string, status: UserManagement['status']) => {
        set({ isLoading: true, error: null })
        try {
            // Simular chamada API
            await new Promise(resolve => setTimeout(resolve, 500))
            
            set(state => ({
                users: state.users.map(user => 
                    user.id === userId ? { ...user, status } : user
                ),
                selectedUser: state.selectedUser?.id === userId 
                    ? { ...state.selectedUser, status }
                    : state.selectedUser,
                isLoading: false
            }))
        } catch (_error) {
            set({ error: 'Erro ao atualizar status do usuário', isLoading: false })
        }
    },

    getUserStats: (userId: string) => {
        const user = get().users.find(u => u.id === userId)
        if (!user) return null

        return {
            userId: user.id,
            totalTimeSpent: user.activity.totalTimeSpent,
            lessonsCompleted: user.activity.lessonsCompleted,
            quizzesTaken: user.activity.quizzesTaken,
            averageScore: user.progress.averageScore,
            streakDays: Math.floor(Math.random() * 30) + 1, // Mock
            achievements: ['Primeira Lição', 'Quiz Completo', 'Estudante Dedicado'], // Mock
            lastActivity: user.activity.lastActivity
        }
    },

    blockUser: async (userId: string) => {
        await get().updateUserStatus(userId, 'blocked')
    },

    unblockUser: async (userId: string) => {
        await get().updateUserStatus(userId, 'active')
    },

    deleteUser: async (userId: string) => {
        set({ isLoading: true, error: null })
        try {
            // Simular chamada API
            await new Promise(resolve => setTimeout(resolve, 500))
            
            set(state => ({
                users: state.users.filter(user => user.id !== userId),
                selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser,
                isLoading: false
            }))
        } catch (_error) {
            set({ error: 'Erro ao deletar usuário', isLoading: false })
        }
    }
}))
