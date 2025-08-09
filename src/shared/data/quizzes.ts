import type { QuizItem } from '@/shared/types/quiz'

export const mockQuizzes: QuizItem[] = [
    {
        id: 'js-basics-1',
        title: 'JavaScript Básico - Parte 1',
        description: 'Teste seus conhecimentos sobre variáveis, tipos de dados e operadores em JavaScript',
        technology: 'javascript',
        difficulty: 'beginner',
        timeLimit: 15,
        passingScore: 70,
        totalPoints: 100,
        estimatedTime: 15,
        tags: ['javascript', 'básico', 'variáveis', 'operadores'],
        isActive: true,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
        questions: [
            {
                id: 'q1',
                question: 'Qual é a forma correta de declarar uma variável em JavaScript?',
                type: 'single_choice',
                options: [
                    { id: 'a', text: 'var x = 5;', isCorrect: true },
                    { id: 'b', text: 'variable x = 5;', isCorrect: false },
                    { id: 'c', text: 'v x = 5;', isCorrect: false },
                    { id: 'd', text: 'declare x = 5;', isCorrect: false },
                ],
                correctAnswer: 'a',
                explanation: 'A palavra-chave "var" é usada para declarar variáveis em JavaScript.',
                difficulty: 'easy',
                points: 10,
            },
            {
                id: 'q2',
                question: 'Quais são os tipos de dados primitivos em JavaScript?',
                type: 'multiple_choice',
                options: [
                    { id: 'a', text: 'String', isCorrect: true },
                    { id: 'b', text: 'Number', isCorrect: true },
                    { id: 'c', text: 'Boolean', isCorrect: true },
                    { id: 'd', text: 'Array', isCorrect: false },
                    { id: 'e', text: 'Object', isCorrect: false },
                    { id: 'f', text: 'Undefined', isCorrect: true },
                ],
                correctAnswer: ['a', 'b', 'c', 'f'],
                explanation: 'String, Number, Boolean, Undefined, Null e Symbol são os tipos primitivos.',
                difficulty: 'medium',
                points: 15,
            },
            {
                id: 'q3',
                question: 'O operador "===" verifica se os valores e tipos são iguais.',
                type: 'true_false',
                options: [
                    { id: 'true', text: 'Verdadeiro', isCorrect: true },
                    { id: 'false', text: 'Falso', isCorrect: false },
                ],
                correctAnswer: 'true',
                explanation:
                    'O operador "===" verifica tanto o valor quanto o tipo, enquanto "==" só verifica o valor.',
                difficulty: 'easy',
                points: 10,
            },
        ],
    },
    {
        id: 'react-hooks-1',
        title: 'React Hooks - Fundamentos',
        description: 'Aprenda sobre useState, useEffect e outros hooks básicos do React',
        technology: 'react',
        difficulty: 'intermediate',
        timeLimit: 20,
        passingScore: 75,
        totalPoints: 120,
        estimatedTime: 20,
        tags: ['react', 'hooks', 'useState', 'useEffect'],
        isActive: true,
        createdAt: new Date('2024-01-20'),
        updatedAt: new Date('2024-01-20'),
        questions: [
            {
                id: 'q1',
                question: 'Qual hook é usado para gerenciar estado em componentes funcionais?',
                type: 'single_choice',
                options: [
                    { id: 'a', text: 'useState', isCorrect: true },
                    { id: 'b', text: 'useEffect', isCorrect: false },
                    { id: 'c', text: 'useContext', isCorrect: false },
                    { id: 'd', text: 'useReducer', isCorrect: false },
                ],
                correctAnswer: 'a',
                explanation: 'useState é o hook básico para gerenciar estado local em componentes funcionais.',
                difficulty: 'easy',
                points: 10,
            },
            {
                id: 'q2',
                question: 'Quando o useEffect é executado?',
                type: 'multiple_choice',
                options: [
                    { id: 'a', text: 'Após cada renderização', isCorrect: true },
                    { id: 'b', text: 'Apenas na montagem do componente', isCorrect: false },
                    { id: 'c', text: 'Quando as dependências mudam', isCorrect: true },
                    { id: 'd', text: 'Antes da renderização', isCorrect: false },
                ],
                correctAnswer: ['a', 'c'],
                explanation: 'useEffect executa após cada renderização e quando as dependências especificadas mudam.',
                difficulty: 'medium',
                points: 15,
            },
        ],
    },
    {
        id: 'ts-types-1',
        title: 'TypeScript - Tipos Básicos',
        description: 'Teste seus conhecimentos sobre tipos básicos do TypeScript',
        technology: 'typescript',
        difficulty: 'intermediate',
        timeLimit: 18,
        passingScore: 80,
        totalPoints: 100,
        estimatedTime: 18,
        tags: ['typescript', 'tipos', 'interface', 'type'],
        isActive: true,
        createdAt: new Date('2024-01-25'),
        updatedAt: new Date('2024-01-25'),
        questions: [
            {
                id: 'q1',
                question: 'Qual é a diferença entre "type" e "interface" no TypeScript?',
                type: 'single_choice',
                options: [
                    { id: 'a', text: 'Não há diferença, são sinônimos', isCorrect: false },
                    { id: 'b', text: 'Interface pode ser estendida, type não', isCorrect: false },
                    { id: 'c', text: 'Type é mais flexível e pode usar union types', isCorrect: true },
                    { id: 'd', text: 'Interface é mais performática', isCorrect: false },
                ],
                correctAnswer: 'c',
                explanation:
                    'Type é mais flexível e pode usar union types, intersection types e outros recursos avançados.',
                difficulty: 'medium',
                points: 15,
            },
        ],
    },
]

// Função para buscar quizzes por tecnologia
export const getQuizzesByTechnology = (technology: string): QuizItem[] => {
    return mockQuizzes.filter((quiz) => quiz.technology === technology)
}

// Função para buscar quiz por ID
export const getQuizById = (id: string): QuizItem | undefined => {
    return mockQuizzes.find((quiz) => quiz.id === id)
}

// Função para buscar quizzes por dificuldade
export const getQuizzesByDifficulty = (difficulty: QuizItem['difficulty']): QuizItem[] => {
    return mockQuizzes.filter((quiz) => quiz.difficulty === difficulty)
}
