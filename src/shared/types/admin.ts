// Tipos de domínio para o Sistema de Administração
// Seguindo DDD (Domain-Driven Design) e SOLID

// ===== ENTIDADES DE DOMÍNIO =====

export interface AdminStats {
    totalUsers: number
    activeUsers: number
    totalLearningPaths: number
    totalQuizzes: number
    totalLessons: number
    averageProgress: number
    completionRate: number
    mostPopularTechnology: string
    totalTimeSpent: number // em segundos
    lastActivity: Date
}

export interface UserManagement {
    id: string
    name: string
    email: string
    role: 'admin' | 'student'
    status: 'active' | 'inactive' | 'blocked'
    progress: number
    lastLogin: Date
    createdAt: Date
    totalTimeSpent: number
    quizzesCompleted: number
    lessonsCompleted: number
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
