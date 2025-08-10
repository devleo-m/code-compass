// Tipos de domínio para o Sistema de Progresso
// Seguindo DDD (Domain-Driven Design) e SOLID

// ===== ENTIDADES DE DOMÍNIO =====

export interface UserProgress {
    userId: string
    overallProgress: number // 0-100%
    totalTimeSpent: number // em segundos
    totalQuizzesCompleted: number
    totalLessonsCompleted: number
    currentStreak: number // dias consecutivos
    longestStreak: number
    achievements: Achievement[]
    goals: Goal[]
    certificates: Certificate[]
    lastActivity: Date
    createdAt: Date
    updatedAt: Date
}

export interface LearningPathProgress {
    pathId: string
    pathTitle: string
    technology: string
    progress: number // 0-100%
    completedLessons: number
    totalLessons: number
    timeSpent: number // em segundos
    lastLessonCompleted?: string
    startedAt: Date
    completedAt?: Date
    isCompleted: boolean
}

export interface QuizProgress {
    quizId: string
    quizTitle: string
    technology: string
    attempts: number
    bestScore: number
    averageScore: number
    totalTimeSpent: number // em segundos
    lastAttemptDate?: Date
    isCompleted: boolean
    completedAt?: Date
}

// ===== OBJETOS DE VALOR =====

export interface Achievement {
    id: string
    title: string
    description: string
    icon: string
    category: 'learning' | 'quiz' | 'streak' | 'special'
    criteria: AchievementCriteria
    earnedAt: Date
    isEarned: boolean
}

export interface AchievementCriteria {
    type: 'lessons_completed' | 'quizzes_passed' | 'streak_days' | 'perfect_score' | 'time_spent'
    value: number
    technology?: string
}

export interface Goal {
    id: string
    title: string
    description: string
    targetValue: number
    currentValue: number
    unit: 'lessons' | 'quizzes' | 'days' | 'hours' | 'percentage'
    deadline?: Date
    isCompleted: boolean
    createdAt: Date
}

export interface Certificate {
    id: string
    title: string
    technology: string
    level: 'beginner' | 'intermediate' | 'advanced'
    issuedAt: Date
    score: number
    certificateUrl?: string
}

// ===== SERVIÇOS DE DOMÍNIO =====

export interface ProgressCalculationService {
    calculateOverallProgress(userProgress: UserProgress): number
    calculatePathProgress(completedLessons: number, totalLessons: number): number
    calculateQuizProgress(attempts: QuizAttempt[]): QuizProgress
    checkAchievements(userProgress: UserProgress): Achievement[]
    checkGoals(userProgress: UserProgress): Goal[]
}

// ===== REPOSITÓRIOS =====

export interface ProgressRepository {
    getUserProgress(userId: string): UserProgress | null
    saveUserProgress(progress: UserProgress): void
    getPathProgress(userId: string, pathId: string): LearningPathProgress | null
    savePathProgress(progress: LearningPathProgress): void
    getQuizProgress(userId: string, quizId: string): QuizProgress | null
    saveQuizProgress(progress: QuizProgress): void
    getAllUserProgress(): UserProgress[]
}

// ===== TIPOS AUXILIARES =====

export interface QuizAttempt {
    id: string
    quizId: string
    score: number
    timeSpent: number
    completedAt: Date
}

export interface LessonCompletion {
    lessonId: string
    pathId: string
    completedAt: Date
    timeSpent: number
}

export interface ProgressStats {
    totalUsers: number
    activeUsers: number
    averageProgress: number
    totalTimeSpent: number
    mostPopularTechnology: string
    completionRate: number
}

// ===== ENUMS =====

export enum ProgressCategory {
    LEARNING = 'learning',
    QUIZ = 'quiz',
    ACHIEVEMENT = 'achievement',
    GOAL = 'goal',
}

export enum ProgressStatus {
    NOT_STARTED = 'not_started',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    PAUSED = 'paused',
}
