// Tipos base do projeto Code Compass

export interface User {
  id: string;
  email: string;
  name: string;
  type: 'admin' | 'student';
  createdAt: Date;
  lastLogin: Date;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

// Re-exportar tipos de aprendizado
export * from './learning';

export interface LearningPath {
  id: string;
  technology: 'javascript' | 'typescript';
  title: string;
  description: string;
  modules: Module[];
  totalLessons: number;
  estimatedTime: number; // em minutos
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  quiz?: Quiz;
}

export interface Lesson {
  id: string;
  title: string;
  content: string; // markdown
  order: number;
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // em segundos
  passingScore: number; // porcentagem
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Progress {
  userId: string;
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  completedAt?: Date;
  score?: number;
  timeSpent: number; // em segundos
  notes?: string;
}
