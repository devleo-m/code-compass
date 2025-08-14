// Store Zustand para Sistema de Progresso
// Seguindo SOLID e Clean Architecture

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type {
    Achievement,
    Certificate,
    Goal,
    LearningPathProgress,
    ProgressStats,
    QuizProgress,
    UserProgress,
} from '@/shared/types/progress'

// ===== INTERFACES (SOLID - Interface Segregation) =====

interface ProgressState {
    // Estado
    userProgress: UserProgress | null
    pathProgress: Record<string, LearningPathProgress>
    quizProgress: Record<string, QuizProgress>
    achievements: Achievement[]
    goals: Goal[]
    certificates: Certificate[]
    isLoading: boolean
    error: string | null
}

interface ProgressActions {
    // Ações
    initializeProgress: (userId: string) => void
    updateUserProgress: (progress: Partial<UserProgress>) => void
    updatePathProgress: (pathId: string, progress: Partial<LearningPathProgress>) => void
    updateQuizProgress: (quizId: string, progress: Partial<QuizProgress>) => void
    addAchievement: (achievement: Achievement) => void
    addGoal: (goal: Goal) => void
    updateGoal: (goalId: string, updates: Partial<Goal>) => void
    addCertificate: (certificate: Certificate) => void
    completeLesson: (pathId: string, lessonId: string, timeSpent: number) => void
    completeQuiz: (quizId: string, score: number, timeSpent: number) => void
    resetProgress: () => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
}

interface ProgressSelectors {
    // Seletores
    getOverallProgress: () => number
    getPathProgress: (pathId: string) => LearningPathProgress | null
    getQuizProgress: (quizId: string) => QuizProgress | null
    getAchievements: (category?: string) => Achievement[]
    getCompletedGoals: () => Goal[]
    getPendingGoals: () => Goal[]
    getProgressStats: () => ProgressStats
    getCurrentStreak: () => number
    getTotalTimeSpent: () => number
}

// ===== TIPO COMBINADO =====

type ProgressStore = ProgressState & ProgressActions & ProgressSelectors

// ===== STORE IMPLEMENTAÇÃO =====

export const useProgressStore = create<ProgressStore>()(
    persist(
        (set, get) => ({
            // ===== ESTADO INICIAL =====
            userProgress: null,
            pathProgress: {},
            quizProgress: {},
            achievements: [],
            goals: [],
            certificates: [],
            isLoading: false,
            error: null,

            // ===== AÇÕES =====
            initializeProgress: (userId: string) => {
                set({ isLoading: true, error: null })

                try {
                    // Carregar dados do localStorage
                    const existingProgress = localStorage.getItem(`progress_${userId}`)

                    if (existingProgress) {
                        const data = JSON.parse(existingProgress)
                        set({
                            userProgress: data.userProgress,
                            pathProgress: data.pathProgress || {},
                            quizProgress: data.quizProgress || {},
                            achievements: data.achievements || [],
                            goals: data.goals || [],
                            certificates: data.certificates || [],
                            isLoading: false,
                        })
                    } else {
                        // Criar progresso inicial
                        const initialProgress: UserProgress = {
                            userId,
                            overallProgress: 0,
                            totalTimeSpent: 0,
                            totalQuizzesCompleted: 0,
                            totalLessonsCompleted: 0,
                            currentStreak: 0,
                            longestStreak: 0,
                            achievements: [],
                            goals: [],
                            certificates: [],
                            lastActivity: new Date(),
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        }

                        set({
                            userProgress: initialProgress,
                            isLoading: false,
                        })
                    }
                } catch (_error) {
                    set({
                        error: 'Erro ao carregar progresso',
                        isLoading: false,
                    })
                }
            },

            updateUserProgress: (updates: Partial<UserProgress>) => {
                set((state) => {
                    if (!state.userProgress) return state

                    const updatedProgress = {
                        ...state.userProgress,
                        ...updates,
                        updatedAt: new Date(),
                    }

                    // Persistir no localStorage
                    const userId = state.userProgress.userId
                    const dataToSave = {
                        userProgress: updatedProgress,
                        pathProgress: state.pathProgress,
                        quizProgress: state.quizProgress,
                        achievements: state.achievements,
                        goals: state.goals,
                        certificates: state.certificates,
                    }

                    localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))

                    return { userProgress: updatedProgress }
                })
            },

            updatePathProgress: (pathId: string, updates: Partial<LearningPathProgress>) => {
                set((state) => {
                    const currentPath = state.pathProgress[pathId]
                    const updatedPath = currentPath
                        ? { ...currentPath, ...updates }
                        : {
                              pathId,
                              pathTitle: '',
                              technology: '',
                              progress: 0,
                              completedLessons: 0,
                              totalLessons: 0,
                              timeSpent: 0,
                              startedAt: new Date(),
                              isCompleted: false,
                              ...updates,
                          }

                    const newPathProgress = {
                        ...state.pathProgress,
                        [pathId]: updatedPath,
                    }

                    // Persistir
                    if (state.userProgress) {
                        const userId = state.userProgress.userId
                        const dataToSave = {
                            userProgress: state.userProgress,
                            pathProgress: newPathProgress,
                            quizProgress: state.quizProgress,
                            achievements: state.achievements,
                            goals: state.goals,
                            certificates: state.certificates,
                        }
                        localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))
                    }

                    return { pathProgress: newPathProgress }
                })
            },

            updateQuizProgress: (quizId: string, updates: Partial<QuizProgress>) => {
                set((state) => {
                    const currentQuiz = state.quizProgress[quizId]
                    const updatedQuiz = currentQuiz
                        ? { ...currentQuiz, ...updates }
                        : {
                              quizId,
                              quizTitle: '',
                              technology: '',
                              attempts: 0,
                              bestScore: 0,
                              averageScore: 0,
                              totalTimeSpent: 0,
                              isCompleted: false,
                              ...updates,
                          }

                    const newQuizProgress = {
                        ...state.quizProgress,
                        [quizId]: updatedQuiz,
                    }

                    // Persistir
                    if (state.userProgress) {
                        const userId = state.userProgress.userId
                        const dataToSave = {
                            userProgress: state.userProgress,
                            pathProgress: state.pathProgress,
                            quizProgress: newQuizProgress,
                            achievements: state.achievements,
                            goals: state.goals,
                            certificates: state.certificates,
                        }
                        localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))
                    }

                    return { quizProgress: newQuizProgress }
                })
            },

            addAchievement: (achievement: Achievement) => {
                set((state) => {
                    const newAchievements = [...state.achievements, achievement]

                    // Persistir
                    if (state.userProgress) {
                        const userId = state.userProgress.userId
                        const dataToSave = {
                            userProgress: state.userProgress,
                            pathProgress: state.pathProgress,
                            quizProgress: state.quizProgress,
                            achievements: newAchievements,
                            goals: state.goals,
                            certificates: state.certificates,
                        }
                        localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))
                    }

                    return { achievements: newAchievements }
                })
            },

            addGoal: (goal: Goal) => {
                set((state) => {
                    const newGoals = [...state.goals, goal]

                    // Persistir
                    if (state.userProgress) {
                        const userId = state.userProgress.userId
                        const dataToSave = {
                            userProgress: state.userProgress,
                            pathProgress: state.pathProgress,
                            quizProgress: state.quizProgress,
                            achievements: state.achievements,
                            goals: newGoals,
                            certificates: state.certificates,
                        }
                        localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))
                    }

                    return { goals: newGoals }
                })
            },

            updateGoal: (goalId: string, updates: Partial<Goal>) => {
                set((state) => {
                    const updatedGoals = state.goals.map((goal) =>
                        goal.id === goalId ? { ...goal, ...updates } : goal
                    )

                    // Persistir
                    if (state.userProgress) {
                        const userId = state.userProgress.userId
                        const dataToSave = {
                            userProgress: state.userProgress,
                            pathProgress: state.pathProgress,
                            quizProgress: state.quizProgress,
                            achievements: state.achievements,
                            goals: updatedGoals,
                            certificates: state.certificates,
                        }
                        localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))
                    }

                    return { goals: updatedGoals }
                })
            },

            addCertificate: (certificate: Certificate) => {
                set((state) => {
                    const newCertificates = [...state.certificates, certificate]

                    // Persistir
                    if (state.userProgress) {
                        const userId = state.userProgress.userId
                        const dataToSave = {
                            userProgress: state.userProgress,
                            pathProgress: state.pathProgress,
                            quizProgress: state.quizProgress,
                            achievements: state.achievements,
                            goals: state.goals,
                            certificates: newCertificates,
                        }
                        localStorage.setItem(`progress_${userId}`, JSON.stringify(dataToSave))
                    }

                    return { certificates: newCertificates }
                })
            },

            completeLesson: (pathId: string, lessonId: string, timeSpent: number) => {
                const { updatePathProgress, updateUserProgress } = get()

                // Atualizar progresso da trilha
                updatePathProgress(pathId, (current) => ({
                    completedLessons: (current?.completedLessons || 0) + 1,
                    timeSpent: (current?.timeSpent || 0) + timeSpent,
                    lastLessonCompleted: lessonId,
                }))

                // Atualizar progresso geral do usuário
                updateUserProgress({
                    totalLessonsCompleted: (get().userProgress?.totalLessonsCompleted || 0) + 1,
                    totalTimeSpent: (get().userProgress?.totalTimeSpent || 0) + timeSpent,
                    lastActivity: new Date(),
                })
            },

            completeQuiz: (quizId: string, score: number, timeSpent: number) => {
                const { updateQuizProgress, updateUserProgress } = get()

                // Atualizar progresso do quiz
                updateQuizProgress(quizId, (current) => ({
                    attempts: (current?.attempts || 0) + 1,
                    bestScore: Math.max(current?.bestScore || 0, score),
                    averageScore: calculateAverageScore(current?.averageScore || 0, current?.attempts || 0, score),
                    totalTimeSpent: (current?.totalTimeSpent || 0) + timeSpent,
                    lastAttemptDate: new Date(),
                    isCompleted: score >= 70, // Considerar completo se score >= 70%
                }))

                // Atualizar progresso geral do usuário
                updateUserProgress({
                    totalQuizzesCompleted: (get().userProgress?.totalQuizzesCompleted || 0) + 1,
                    totalTimeSpent: (get().userProgress?.totalTimeSpent || 0) + timeSpent,
                    lastActivity: new Date(),
                })
            },

            resetProgress: () => {
                set({
                    userProgress: null,
                    pathProgress: {},
                    quizProgress: {},
                    achievements: [],
                    goals: [],
                    certificates: [],
                    error: null,
                })
            },

            setLoading: (loading: boolean) => set({ isLoading: loading }),
            setError: (error: string | null) => set({ error }),

            // ===== SELETORES =====
            getOverallProgress: () => {
                const { userProgress } = get()
                return userProgress?.overallProgress || 0
            },

            getPathProgress: (pathId: string) => {
                const { pathProgress } = get()
                return pathProgress[pathId] || null
            },

            getQuizProgress: (quizId: string) => {
                const { quizProgress } = get()
                return quizProgress[quizId] || null
            },

            getAchievements: (category?: string) => {
                const { achievements } = get()
                return category ? achievements.filter((a) => a.category === category) : achievements
            },

            getCompletedGoals: () => {
                const { goals } = get()
                return goals.filter((goal) => goal.isCompleted)
            },

            getPendingGoals: () => {
                const { goals } = get()
                return goals.filter((goal) => !goal.isCompleted)
            },

            getProgressStats: () => {
                const { userProgress, pathProgress, quizProgress } = get()

                return {
                    totalUsers: 1, // Simulado
                    activeUsers: userProgress ? 1 : 0,
                    averageProgress: userProgress?.overallProgress || 0,
                    totalTimeSpent: userProgress?.totalTimeSpent || 0,
                    mostPopularTechnology: getMostPopularTechnology(pathProgress),
                    completionRate: calculateCompletionRate(pathProgress, quizProgress),
                }
            },

            getCurrentStreak: () => {
                const { userProgress } = get()
                return userProgress?.currentStreak || 0
            },

            getTotalTimeSpent: () => {
                const { userProgress } = get()
                return userProgress?.totalTimeSpent || 0
            },
        }),
        {
            name: 'progress-store',
            partialize: (state) => ({
                userProgress: state.userProgress,
                pathProgress: state.pathProgress,
                quizProgress: state.quizProgress,
                achievements: state.achievements,
                goals: state.goals,
                certificates: state.certificates,
            }),
        }
    )
)

// ===== FUNÇÕES AUXILIARES =====

function calculateAverageScore(currentAvg: number, currentAttempts: number, newScore: number): number {
    const totalScore = currentAvg * currentAttempts + newScore
    return Math.round(totalScore / (currentAttempts + 1))
}

function getMostPopularTechnology(pathProgress: Record<string, LearningPathProgress>): string {
    const technologies = Object.values(pathProgress).map((p) => p.technology)
    const counts = technologies.reduce(
        (acc, tech) => {
            acc[tech] = (acc[tech] || 0) + 1
            return acc
        },
        {} as Record<string, number>
    )

    return Object.entries(counts).sort(([, a], [, b]) => b - a)[0]?.[0] || 'javascript'
}

function calculateCompletionRate(
    pathProgress: Record<string, LearningPathProgress>,
    quizProgress: Record<string, QuizProgress>
): number {
    const totalPaths = Object.keys(pathProgress).length
    const completedPaths = Object.values(pathProgress).filter((p) => p.isCompleted).length

    const totalQuizzes = Object.keys(quizProgress).length
    const completedQuizzes = Object.values(quizProgress).filter((q) => q.isCompleted).length

    const total = totalPaths + totalQuizzes
    const completed = completedPaths + completedQuizzes

    return total > 0 ? Math.round((completed / total) * 100) : 0
}
