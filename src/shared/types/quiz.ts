// Tipos para o sistema de quizzes

export interface QuizQuestionItem {
    id: string
    question: string
    type: 'multiple_choice' | 'true_false' | 'single_choice'
    options: QuizOption[]
    correctAnswer: string | string[]
    explanation?: string
    difficulty: 'easy' | 'medium' | 'hard'
    points: number
}

export interface QuizOption {
    id: string
    text: string
    isCorrect: boolean
}

export interface QuizItem {
    id: string
    title: string
    description: string
    technology: string // ex: 'javascript', 'react', 'typescript'
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    questions: QuizQuestionItem[]
    timeLimit?: number // em minutos, opcional
    passingScore: number // porcentagem mínima para aprovação
    totalPoints: number
    estimatedTime: number // em minutos
    tags: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

export interface QuizAttemptItem {
    id: string
    quizId: string
    userId: string
    answers: QuizAnswerItem[]
    score: number
    totalPoints: number
    percentage: number
    passed: boolean
    timeSpent: number // em segundos
    startedAt: Date
    completedAt?: Date
}

export interface QuizAnswerItem {
    questionId: string
    selectedAnswers: string[]
    isCorrect: boolean
    pointsEarned: number
    timeSpent: number // em segundos
}

export interface QuizResultItem {
    attempt: QuizAttemptItem
    quiz: QuizItem
    correctAnswers: number
    totalQuestions: number
    feedback: string
    suggestions: string[]
    nextQuizRecommendation?: string
}

// Tipos para o estado do quiz em andamento
export interface QuizSession {
    quizId: string
    currentQuestionIndex: number
    answers: Record<string, string[]>
    timeRemaining: number
    isCompleted: boolean
    startedAt: Date
}

// Tipos para configurações de quiz
export interface QuizSettings {
    showTimer: boolean
    showProgress: boolean
    allowReview: boolean
    shuffleQuestions: boolean
    shuffleOptions: boolean
    showExplanation: boolean
    showScore: boolean
} 