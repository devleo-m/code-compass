// Store Zustand para Sistema de Administração
// Seguindo SOLID e Clean Architecture

import { create } from 'zustand'
import type {
    AdminStats,
    ContentManagement,
    EngagementMetrics,
    TechnologyStats,
    UserManagement,
} from '@/shared/types/admin'

// ===== INTERFACES (SOLID - Interface Segregation) =====

interface AdminState {
    // Estado
    stats: AdminStats | null
    users: UserManagement[]
    content: ContentManagement[]
    technologyStats: TechnologyStats[]
    engagementMetrics: EngagementMetrics | null
    isLoading: boolean
    error: string | null
}

interface AdminActions {
    // Ações
    initializeAdminData: () => void
    updateUserStatus: (userId: string, status: UserManagement['status']) => void
    updateContentStatus: (contentId: string, status: ContentManagement['status']) => void
    refreshStats: () => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
}

interface AdminSelectors {
    // Seletores
    getActiveUsers: () => UserManagement[]
    getBlockedUsers: () => UserManagement[]
    getPublishedContent: () => ContentManagement[]
    getDraftContent: () => ContentManagement[]
    getMostPopularTechnology: () => TechnologyStats | null
    getTotalEngagement: () => number
}

// ===== TIPO COMBINADO =====

type AdminStore = AdminState & AdminActions & AdminSelectors

// ===== DADOS MOCK PARA DESENVOLVIMENTO =====

const mockAdminStats: AdminStats = {
    totalUsers: 1250,
    activeUsers: 847,
    totalLearningPaths: 12,
    totalQuizzes: 45,
    totalLessons: 156,
    averageProgress: 67,
    completionRate: 78,
    mostPopularTechnology: 'javascript',
    totalTimeSpent: 1250000, // ~347 horas
    lastActivity: new Date(),
}

const mockUsers: UserManagement[] = [
    {
        id: '1',
        name: 'João Silva',
        email: 'joao@example.com',
        role: 'student',
        status: 'active',
        progress: 85,
        lastLogin: new Date(Date.now() - 2 * 60 * 60 * 1000),
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        totalTimeSpent: 45000,
        quizzesCompleted: 12,
        lessonsCompleted: 25,
    },
    {
        id: '2',
        name: 'Maria Santos',
        email: 'maria@example.com',
        role: 'student',
        status: 'active',
        progress: 92,
        lastLogin: new Date(Date.now() - 1 * 60 * 60 * 1000),
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
        totalTimeSpent: 32000,
        quizzesCompleted: 8,
        lessonsCompleted: 18,
    },
    {
        id: '3',
        name: 'Pedro Costa',
        email: 'pedro@example.com',
        role: 'admin',
        status: 'active',
        progress: 100,
        lastLogin: new Date(),
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        totalTimeSpent: 150000,
        quizzesCompleted: 25,
        lessonsCompleted: 50,
    },
]

const mockContent: ContentManagement[] = [
    {
        id: '1',
        type: 'learning_path',
        title: 'JavaScript Básico',
        technology: 'javascript',
        status: 'published',
        views: 1250,
        completions: 847,
        averageRating: 4.8,
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        createdBy: 'admin',
    },
    {
        id: '2',
        type: 'quiz',
        title: 'Quiz JavaScript Básico',
        technology: 'javascript',
        status: 'published',
        views: 980,
        completions: 756,
        averageRating: 4.5,
        createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        createdBy: 'admin',
    },
    {
        id: '3',
        type: 'learning_path',
        title: 'React Avançado',
        technology: 'react',
        status: 'draft',
        views: 0,
        completions: 0,
        averageRating: 0,
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        createdBy: 'admin',
    },
]

const mockTechnologyStats: TechnologyStats[] = [
    {
        technology: 'javascript',
        totalUsers: 850,
        averageProgress: 72,
        completionRate: 82,
        totalTimeSpent: 450000,
        popularity: 1,
    },
    {
        technology: 'react',
        totalUsers: 420,
        averageProgress: 65,
        completionRate: 75,
        totalTimeSpent: 320000,
        popularity: 2,
    },
    {
        technology: 'typescript',
        totalUsers: 280,
        averageProgress: 58,
        completionRate: 68,
        totalTimeSpent: 180000,
        popularity: 3,
    },
]

const mockEngagementMetrics: EngagementMetrics = {
    lessonsCompleted: 12500,
    quizzesTaken: 8900,
    achievementsEarned: 3400,
    certificatesIssued: 1200,
    averageTimePerSession: 1800, // 30 minutos
    retentionRate: 85,
}

// ===== STORE IMPLEMENTAÇÃO =====

export const useAdminStore = create<AdminStore>((set, get) => ({
    // ===== ESTADO INICIAL =====
    stats: null,
    users: [],
    content: [],
    technologyStats: [],
    engagementMetrics: null,
    isLoading: false,
    error: null,

    // ===== AÇÕES =====
    initializeAdminData: () => {
        set({ isLoading: true, error: null })

        try {
            // Simular carregamento de dados
            setTimeout(() => {
                set({
                    stats: mockAdminStats,
                    users: mockUsers,
                    content: mockContent,
                    technologyStats: mockTechnologyStats,
                    engagementMetrics: mockEngagementMetrics,
                    isLoading: false,
                })
            }, 1000)
        } catch (_error) {
            set({
                error: 'Erro ao carregar dados administrativos',
                isLoading: false,
            })
        }
    },

    updateUserStatus: (userId: string, status: UserManagement['status']) => {
        set((state) => {
            const updatedUsers = state.users.map((user) => (user.id === userId ? { ...user, status } : user))

            // Atualizar estatísticas
            const activeUsers = updatedUsers.filter((u) => u.status === 'active').length
            const updatedStats = state.stats ? { ...state.stats, activeUsers } : null

            return {
                users: updatedUsers,
                stats: updatedStats,
            }
        })
    },

    updateContentStatus: (contentId: string, status: ContentManagement['status']) => {
        set((state) => {
            const updatedContent = state.content.map((item) =>
                item.id === contentId ? { ...item, status, updatedAt: new Date() } : item
            )

            return { content: updatedContent }
        })
    },

    refreshStats: () => {
        const { initializeAdminData } = get()
        initializeAdminData()
    },

    setLoading: (loading: boolean) => set({ isLoading: loading }),
    setError: (error: string | null) => set({ error }),

    // ===== SELETORES =====
    getActiveUsers: () => {
        const { users } = get()
        return users.filter((user) => user.status === 'active')
    },

    getBlockedUsers: () => {
        const { users } = get()
        return users.filter((user) => user.status === 'blocked')
    },

    getPublishedContent: () => {
        const { content } = get()
        return content.filter((item) => item.status === 'published')
    },

    getDraftContent: () => {
        const { content } = get()
        return content.filter((item) => item.status === 'draft')
    },

    getMostPopularTechnology: () => {
        const { technologyStats } = get()
        return technologyStats.length > 0 ? technologyStats[0] : null
    },

    getTotalEngagement: () => {
        const { engagementMetrics } = get()
        if (!engagementMetrics) return 0

        return (
            engagementMetrics.lessonsCompleted + engagementMetrics.quizzesTaken + engagementMetrics.achievementsEarned
        )
    },
}))
