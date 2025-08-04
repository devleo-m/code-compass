// Tipos para o módulo de trilhas de aprendizado

// 1. Tipos Base
export interface LearningPath {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  technologies: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // em horas
  modules: Module[];
  totalLessons: number;
  totalQuizzes: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  quiz?: Quiz;
  isCompleted: boolean;
  progress: number; // 0-100
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  order: number;
  estimatedTime: number; // em minutos
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  isCompleted: boolean;
  isLocked: boolean;
  notes?: string;
  completedAt?: Date;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // em minutos
  passingScore: number; // porcentagem
  attempts: number;
  bestScore: number;
  isCompleted: boolean;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'code';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// 2. Tipos de Progresso
export interface UserProgress {
  userId: string;
  pathId: string;
  modules: ModuleProgress[];
  overallProgress: number;
  completedLessons: number;
  totalLessons: number;
  completedQuizzes: number;
  totalQuizzes: number;
  badges: Badge[];
  lastActivity: Date;
  startedAt: Date;
  completedAt?: Date;
}

export interface ModuleProgress {
  moduleId: string;
  lessons: LessonProgress[];
  quiz?: QuizProgress;
  isCompleted: boolean;
  progress: number;
  completedAt?: Date;
}

export interface LessonProgress {
  lessonId: string;
  isCompleted: boolean;
  completedAt?: Date;
  timeSpent: number; // em minutos
  notes?: string;
  bookmarked: boolean;
}

export interface QuizProgress {
  quizId: string;
  attempts: QuizAttempt[];
  bestScore: number;
  isCompleted: boolean;
  completedAt?: Date;
}

export interface QuizAttempt {
  id: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // em minutos
  answers: QuizAnswer[];
  completedAt: Date;
}

export interface QuizAnswer {
  questionId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  timeSpent: number; // em segundos
}

// 3. Tipos de Gamificação
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  criteria: BadgeCriteria;
  isEarned: boolean;
  earnedAt?: Date;
}

export interface BadgeCriteria {
  type: 'lessons_completed' | 'quizzes_passed' | 'streak' | 'perfect_score' | 'time_spent';
  value: number;
  condition: 'equals' | 'greater_than' | 'less_than';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  isEarned: boolean;
  earnedAt?: Date;
}

// 4. Tipos de Anotações
export interface Note {
  id: string;
  lessonId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  isPublic: boolean;
}

// 5. Tipos de Filtros e Busca
export interface LearningFilters {
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  duration?: 'short' | 'medium' | 'long';
  status?: 'not_started' | 'in_progress' | 'completed';
  tags?: string[];
}

export interface SearchResult {
  type: 'lesson' | 'module' | 'path';
  id: string;
  title: string;
  description: string;
  path: string;
  relevance: number;
}

// 6. Tipos de Estado
export interface LearningState {
  currentPath: LearningPath | null;
  currentModule: Module | null;
  currentLesson: Lesson | null;
  userProgress: UserProgress | null;
  isLoading: boolean;
  error: string | null;
}

// 7. Tipos de Ações
export interface LearningActions {
  setCurrentPath: (path: LearningPath) => void;
  setCurrentModule: (module: Module) => void;
  setCurrentLesson: (lesson: Lesson) => void;
  markLessonComplete: (lessonId: string) => void;
  updateProgress: (progress: Partial<UserProgress>) => void;
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (noteId: string, content: string) => void;
  deleteNote: (noteId: string) => void;
  searchContent: (query: string, filters?: LearningFilters) => SearchResult[];
} 