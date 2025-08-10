// Tipos para o sistema de administração
export interface AdminStats {
    totalUsers: number
    activeUsers: number
    totalContent: number
    publishedContent: number
    totalQuizzes: number
    completedQuizzes: number
    popularTechnologies: Array<{
        name: string
        count: number
    }>
    recentActivity: Array<{
        type: 'content_created' | 'quiz_completed' | 'user_registered'
        description: string
        timestamp: Date
    }>
}

export interface UserManagement {
    id: string
    name: string
    email: string
    type: 'admin' | 'student'
    status: 'active' | 'inactive' | 'blocked'
    registrationDate: Date
    lastLogin: Date
    progress: {
        completedLessons: number
        totalLessons: number
        completedQuizzes: number
        totalQuizzes: number
        averageScore: number
    }
    activity: {
        lastActivity: Date
        totalTimeSpent: number
        lessonsCompleted: number
        quizzesTaken: number
    }
}

export interface UserStats {
    userId: string
    totalTimeSpent: number
    lessonsCompleted: number
    quizzesTaken: number
    averageScore: number
    streakDays: number
    achievements: string[]
    lastActivity: Date
}

export interface ContentManagement {
    id: string
    type: 'learning_path' | 'quiz' | 'lesson'
    title: string
    technology: string
    status: 'draft' | 'published' | 'archived'
    views: number
    completions: number
    averageRating: number
    createdAt: Date
    updatedAt: Date
    createdBy: string
}

// ===== OBJETOS DE VALOR =====

export interface PlatformMetrics {
    dailyActiveUsers: number
    weeklyActiveUsers: number
    monthlyActiveUsers: number
    totalSessions: number
    averageSessionDuration: number
    bounceRate: number
}

export interface TechnologyStats {
    technology: string
    totalUsers: number
    averageProgress: number
    completionRate: number
    totalTimeSpent: number
    popularity: number // ranking de popularidade
}

export interface EngagementMetrics {
    lessonsCompleted: number
    quizzesTaken: number
    achievementsEarned: number
    certificatesIssued: number
    averageTimePerSession: number
    retentionRate: number
}

// ===== SERVIÇOS DE DOMÍNIO =====

export interface AdminService {
    getPlatformStats(): AdminStats
    getUserManagement(): UserManagement[]
    getContentManagement(): ContentManagement[]
    getTechnologyStats(): TechnologyStats[]
    getEngagementMetrics(): EngagementMetrics
    updateUserStatus(userId: string, status: UserManagement['status']): void
    updateContentStatus(contentId: string, status: ContentManagement['status']): void
}

// ===== REPOSITÓRIOS =====

export interface AdminRepository {
    getAdminStats(): AdminStats
    getAllUsers(): UserManagement[]
    getAllContent(): ContentManagement[]
    updateUser(userId: string, updates: Partial<UserManagement>): void
    updateContent(contentId: string, updates: Partial<ContentManagement>): void
    getTechnologyStats(): TechnologyStats[]
    getEngagementMetrics(): EngagementMetrics
}

// ===== TIPOS AUXILIARES =====

export interface AdminDashboardData {
    stats: AdminStats
    users: UserManagement[]
    content: ContentManagement[]
    technologyStats: TechnologyStats[]
    engagementMetrics: EngagementMetrics
}

export interface AdminAction {
    id: string
    type: 'user_status_change' | 'content_status_change' | 'content_creation' | 'user_creation'
    description: string
    performedBy: string
    timestamp: Date
    details: Record<string, any>
}

// ===== ENUMS =====

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    BLOCKED = 'blocked',
}

export enum ContentStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
}

export enum AdminRole {
    SUPER_ADMIN = 'super_admin',
    CONTENT_MANAGER = 'content_manager',
    USER_MANAGER = 'user_manager',
    VIEWER = 'viewer',
}
