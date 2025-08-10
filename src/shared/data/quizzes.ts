// Dados mock para quizzes
import type { QuizItem } from '@/shared/types/quiz'

// 1. Quiz de JavaScript Básico - EXPANDIDO
export const javascriptBasicQuiz: QuizItem = {
    id: 'js-basic-quiz',
    title: 'JavaScript Básico - Quiz Completo',
    description: 'Teste seus conhecimentos fundamentais de JavaScript',
    technology: 'javascript',
    difficulty: 'beginner',
    timeLimit: 20,
    passingScore: 75,
    totalQuestions: 15,
    attempts: 0,
    bestScore: 0,
    isCompleted: false,
    questions: [
        {
            id: 'q1',
            type: 'multiple_choice',
            question: 'Qual é a diferença entre let e const?',
            options: [
                'Não há diferença, são sinônimos',
                'let pode ser reatribuído, const não',
                'const é mais rápido que let',
                'let só funciona em loops'
            ],
            correctAnswer: 'let pode ser reatribuído, const não',
            explanation: 'let permite reatribuição, const cria uma referência imutável.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q2',
            type: 'multiple_choice',
            question: 'Qual operador é usado para comparação estrita (valor e tipo)?',
            options: ['==', '===', '=', '!='],
            correctAnswer: '===',
            explanation: '=== compara tanto o valor quanto o tipo de dados.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q3',
            type: 'multiple_choice',
            question: 'O que o método trim() faz em uma string?',
            options: [
                'Remove espaços apenas no início',
                'Remove espaços apenas no final',
                'Remove espaços no início e final',
                'Adiciona espaços no início e final'
            ],
            correctAnswer: 'Remove espaços no início e final',
            explanation: 'trim() remove espaços em branco do início e final da string.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q4',
            type: 'true_false',
            question: 'JavaScript é uma linguagem tipada estaticamente.',
            options: ['Verdadeiro', 'Falso'],
            correctAnswer: 'Falso',
            explanation: 'JavaScript é uma linguagem dinamicamente tipada.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q5',
            type: 'multiple_choice',
            question: 'Qual é o resultado de: typeof null?',
            options: ['"null"', '"object"', '"undefined"', '"number"'],
            correctAnswer: '"object"',
            explanation: 'typeof null retorna "object" (é um bug conhecido do JavaScript).',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q6',
            type: 'multiple_choice',
            question: 'O que é uma closure em JavaScript?',
            options: [
                'Uma função que não tem parâmetros',
                'Uma função que tem acesso a variáveis de seu escopo léxico',
                'Uma função que retorna sempre o mesmo valor',
                'Uma função que só pode ser chamada uma vez'
            ],
            correctAnswer: 'Uma função que tem acesso a variáveis de seu escopo léxico',
            explanation: 'Closures permitem que funções acessem variáveis de escopos externos.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q7',
            type: 'multiple_choice',
            question: 'Qual método de array retorna um novo array com elementos transformados?',
            options: ['filter()', 'map()', 'reduce()', 'forEach()'],
            correctAnswer: 'map()',
            explanation: 'map() retorna um novo array com os elementos transformados pela função callback.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q8',
            type: 'multiple_choice',
            question: 'O que o método reduce() faz?',
            options: [
                'Reduz o tamanho do array',
                'Reduz todos os elementos a um único valor',
                'Remove elementos duplicados',
                'Inverte a ordem dos elementos'
            ],
            correctAnswer: 'Reduz todos os elementos a um único valor',
            explanation: 'reduce() acumula todos os elementos do array em um único valor.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q9',
            type: 'multiple_choice',
            question: 'Qual é o resultado de [1, 2, 3].map(x => x * 2)?',
            options: ['[2, 4, 6]', '[1, 2, 3]', '[2, 2, 2]', 'Erro'],
            correctAnswer: '[2, 4, 6]',
            explanation: 'map() aplica a função x * 2 a cada elemento do array.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q10',
            type: 'multiple_choice',
            question: 'O que é hoisting em JavaScript?',
            options: [
                'Uma técnica de otimização',
                'O comportamento de mover declarações para o topo do escopo',
                'Um tipo de loop',
                'Uma forma de declarar variáveis'
            ],
            correctAnswer: 'O comportamento de mover declarações para o topo do escopo',
            explanation: 'Hoisting é quando declarações são movidas para o topo do escopo durante a compilação.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q11',
            type: 'multiple_choice',
            question: 'Qual é a diferença entre function declaration e function expression?',
            options: [
                'Não há diferença',
                'Function declaration é hoisted, function expression não',
                'Function expression é mais rápida',
                'Function declaration só funciona em loops'
            ],
            correctAnswer: 'Function declaration é hoisted, function expression não',
            explanation: 'Function declarations são movidas para o topo do escopo, expressions não.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q12',
            type: 'multiple_choice',
            question: 'O que é um callback?',
            options: [
                'Uma função que chama outra função',
                'Uma função passada como argumento para outra função',
                'Uma função que retorna uma função',
                'Uma função que nunca é executada'
            ],
            correctAnswer: 'Uma função passada como argumento para outra função',
            explanation: 'Callbacks são funções passadas como argumentos para serem executadas posteriormente.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q13',
            type: 'multiple_choice',
            question: 'Qual é o resultado de: 2 + "2"?',
            options: ['4', '22', 'NaN', 'Erro'],
            correctAnswer: '22',
            explanation: 'JavaScript converte o número para string e faz concatenação.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q14',
            type: 'multiple_choice',
            question: 'O que é o escopo em JavaScript?',
            options: [
                'Uma função específica',
                'A acessibilidade de variáveis em diferentes partes do código',
                'Um tipo de loop',
                'Uma forma de declarar variáveis'
            ],
            correctAnswer: 'A acessibilidade de variáveis em diferentes partes do código',
            explanation: 'Escopo define onde variáveis são acessíveis no código.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q15',
            type: 'multiple_choice',
            question: 'Qual método remove o último elemento de um array?',
            options: ['shift()', 'pop()', 'unshift()', 'push()'],
            correctAnswer: 'pop()',
            explanation: 'pop() remove e retorna o último elemento do array.',
            difficulty: 'easy',
            points: 10,
        },
    ],
}

// 2. Quiz de JavaScript Intermediário
export const javascriptIntermediateQuiz: QuizItem = {
    id: 'js-intermediate-quiz',
    title: 'JavaScript Intermediário - Desafios Práticos',
    description: 'Teste seus conhecimentos intermediários com problemas práticos',
    technology: 'javascript',
    difficulty: 'intermediate',
    timeLimit: 25,
    passingScore: 80,
    totalQuestions: 12,
    attempts: 0,
    bestScore: 0,
    isCompleted: false,
    questions: [
        {
            id: 'q1',
            type: 'multiple_choice',
            question: 'O que é destructuring em JavaScript?',
            options: [
                'Uma forma de destruir objetos',
                'Uma técnica para extrair valores de arrays e objetos',
                'Um método de array',
                'Uma forma de declarar variáveis'
            ],
            correctAnswer: 'Uma técnica para extrair valores de arrays e objetos',
            explanation: 'Destructuring permite extrair valores de arrays e objetos de forma concisa.',
            difficulty: 'intermediate',
            points: 15,
        },
        {
            id: 'q2',
            type: 'multiple_choice',
            question: 'O que é o spread operator (...) usado para?',
            options: [
                'Apenas para copiar arrays',
                'Para espalhar elementos de arrays e objetos',
                'Para criar loops',
                'Para declarar funções'
            ],
            correctAnswer: 'Para espalhar elementos de arrays e objetos',
            explanation: 'Spread operator permite espalhar elementos de arrays e propriedades de objetos.',
            difficulty: 'intermediate',
            points: 15,
        },
        {
            id: 'q3',
            type: 'multiple_choice',
            question: 'O que é uma Promise em JavaScript?',
            options: [
                'Uma função que sempre retorna true',
                'Um objeto que representa uma operação assíncrona',
                'Um tipo de loop',
                'Uma forma de declarar variáveis'
            ],
            correctAnswer: 'Um objeto que representa uma operação assíncrona',
            explanation: 'Promises representam operações assíncronas e podem estar pendentes, resolvidas ou rejeitadas.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q4',
            type: 'multiple_choice',
            question: 'O que é async/await?',
            options: [
                'Uma forma de declarar funções',
                'Uma sintaxe para trabalhar com Promises de forma síncrona',
                'Um tipo de loop',
                'Uma forma de criar objetos'
            ],
            correctAnswer: 'Uma sintaxe para trabalhar com Promises de forma síncrona',
            explanation: 'async/await permite escrever código assíncrono de forma mais legível e síncrona.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q5',
            type: 'multiple_choice',
            question: 'O que é o event loop em JavaScript?',
            options: [
                'Um tipo de loop for',
                'O mecanismo que gerencia a execução de código assíncrono',
                'Uma forma de criar eventos',
                'Um método de array'
            ],
            correctAnswer: 'O mecanismo que gerencia a execução de código assíncrono',
            explanation: 'Event loop gerencia a fila de tarefas e executa código assíncrono quando a pilha está vazia.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q6',
            type: 'multiple_choice',
            question: 'O que é currying em JavaScript?',
            options: [
                'Uma técnica de culinária',
                'Uma técnica de transformar uma função com múltiplos argumentos em uma série de funções',
                'Um tipo de loop',
                'Uma forma de criar objetos'
            ],
            correctAnswer: 'Uma técnica de transformar uma função com múltiplos argumentos em uma série de funções',
            explanation: 'Currying permite transformar funções para aceitar argumentos um por vez.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q7',
            type: 'multiple_choice',
            question: 'O que é memoização?',
            options: [
                'Uma forma de criar memórias',
                'Uma técnica de cache para otimizar performance de funções',
                'Um tipo de loop',
                'Uma forma de declarar variáveis'
            ],
            correctAnswer: 'Uma técnica de cache para otimizar performance de funções',
            explanation: 'Memoização armazena resultados de funções para evitar recálculos desnecessários.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q8',
            type: 'multiple_choice',
            question: 'O que é o this em JavaScript?',
            options: [
                'Uma palavra-chave que sempre se refere ao objeto global',
                'Uma referência ao contexto de execução atual',
                'Uma forma de criar funções',
                'Um tipo de variável'
            ],
            correctAnswer: 'Uma referência ao contexto de execução atual',
            explanation: 'this se refere ao contexto de execução atual, que pode variar dependendo de como a função é chamada.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q9',
            type: 'multiple_choice',
            question: 'O que é prototypal inheritance?',
            options: [
                'Uma forma de herdar propriedades de outros objetos',
                'Um tipo de loop',
                'Uma forma de criar classes',
                'Um método de array'
            ],
            correctAnswer: 'Uma forma de herdar propriedades de outros objetos',
            explanation: 'JavaScript usa herança prototipal, onde objetos herdam propriedades de outros objetos.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q10',
            type: 'multiple_choice',
            question: 'O que é o bind() method?',
            options: [
                'Uma forma de unir strings',
                'Um método que cria uma nova função com this fixo',
                'Um tipo de loop',
                'Uma forma de criar objetos'
            ],
            correctAnswer: 'Um método que cria uma nova função com this fixo',
            explanation: 'bind() cria uma nova função com o valor de this fixado ao objeto especificado.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q11',
            type: 'multiple_choice',
            question: 'O que é o call() method?',
            options: [
                'Uma forma de chamar funções',
                'Um método que executa uma função com this e argumentos específicos',
                'Um tipo de loop',
                'Uma forma de criar objetos'
            ],
            correctAnswer: 'Um método que executa uma função com this e argumentos específicos',
            explanation: 'call() executa uma função com um valor de this específico e argumentos individuais.',
            difficulty: 'intermediate',
            points: 20,
        },
        {
            id: 'q12',
            type: 'multiple_choice',
            question: 'O que é o apply() method?',
            options: [
                'Uma forma de aplicar estilos',
                'Um método que executa uma função com this e array de argumentos',
                'Um tipo de loop',
                'Uma forma de criar objetos'
            ],
            correctAnswer: 'Um método que executa uma função com this e array de argumentos',
            explanation: 'apply() executa uma função com um valor de this específico e um array de argumentos.',
            difficulty: 'intermediate',
            points: 20,
        },
    ],
}

// 3. Quiz de TypeScript Básico
export const typescriptBasicQuiz: QuizItem = {
    id: 'ts-basic-quiz',
    title: 'TypeScript Básico - Introdução à Tipagem',
    description: 'Teste seus conhecimentos básicos de TypeScript',
    technology: 'typescript',
    difficulty: 'beginner',
    timeLimit: 15,
    passingScore: 70,
    totalQuestions: 10,
    attempts: 0,
    bestScore: 0,
    isCompleted: false,
    questions: [
        {
            id: 'q1',
            type: 'multiple_choice',
            question: 'O que é TypeScript?',
            options: [
                'Uma linguagem completamente diferente do JavaScript',
                'Um superset do JavaScript com tipagem estática',
                'Uma biblioteca JavaScript',
                'Um framework para desenvolvimento web'
            ],
            correctAnswer: 'Um superset do JavaScript com tipagem estática',
            explanation: 'TypeScript é um superset do JavaScript que adiciona tipagem estática opcional.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q2',
            type: 'multiple_choice',
            question: 'Como declarar uma variável com tipo em TypeScript?',
            options: [
                'let nome: string = "João"',
                'let nome = "João": string',
                'string nome = "João"',
                'var nome: "João"'
            ],
            correctAnswer: 'let nome: string = "João"',
            explanation: 'Em TypeScript, o tipo é declarado após o nome da variável com dois pontos.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q3',
            type: 'multiple_choice',
            question: 'O que é uma interface em TypeScript?',
            options: [
                'Uma forma de criar classes',
                'Um contrato que define a estrutura de um objeto',
                'Um tipo de loop',
                'Uma forma de declarar variáveis'
            ],
            correctAnswer: 'Um contrato que define a estrutura de um objeto',
            explanation: 'Interfaces definem contratos para a estrutura de objetos.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q4',
            type: 'multiple_choice',
            question: 'Como declarar um array de números em TypeScript?',
            options: [
                'let numeros: number[] = [1, 2, 3]',
                'let numeros: array<number> = [1, 2, 3]',
                'let numeros: [number] = [1, 2, 3]',
                'let numeros: numbers = [1, 2, 3]'
            ],
            correctAnswer: 'let numeros: number[] = [1, 2, 3]',
            explanation: 'Arrays são tipados com o tipo dos elementos seguido de colchetes.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q5',
            type: 'multiple_choice',
            question: 'O que é um union type?',
            options: [
                'Um tipo que pode ser qualquer coisa',
                'Um tipo que pode ser um de vários tipos específicos',
                'Um tipo que herda de outro',
                'Um tipo que não existe'
            ],
            correctAnswer: 'Um tipo que pode ser um de vários tipos específicos',
            explanation: 'Union types permitem que uma variável seja de um de vários tipos usando |.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q6',
            type: 'multiple_choice',
            question: 'Como declarar uma função com tipos em TypeScript?',
            options: [
                'function soma(a: number, b: number): number { return a + b }',
                'function soma(a, b): number { return a + b }',
                'function soma(a: number, b: number) { return a + b }',
                'function soma(a, b) { return a + b }'
            ],
            correctAnswer: 'function soma(a: number, b: number): number { return a + b }',
            explanation: 'Parâmetros e retorno são tipados com dois pontos.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q7',
            type: 'multiple_choice',
            question: 'O que é um generic em TypeScript?',
            options: [
                'Um tipo específico',
                'Um tipo que pode ser reutilizado com diferentes tipos',
                'Um tipo que não existe',
                'Um tipo que herda de outro'
            ],
            correctAnswer: 'Um tipo que pode ser reutilizado com diferentes tipos',
            explanation: 'Generics permitem criar componentes reutilizáveis que funcionam com diferentes tipos.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q8',
            type: 'multiple_choice',
            question: 'Como declarar um objeto com interface?',
            options: [
                'interface Pessoa { nome: string; idade: number }',
                'interface Pessoa { nome = string; idade = number }',
                'interface Pessoa { nome: "string"; idade: "number" }',
                'interface Pessoa { nome => string; idade => number }'
            ],
            correctAnswer: 'interface Pessoa { nome: string; idade: number }',
            explanation: 'Interfaces usam dois pontos para definir tipos de propriedades.',
            difficulty: 'easy',
            points: 10,
        },
        {
            id: 'q9',
            type: 'multiple_choice',
            question: 'O que é type assertion em TypeScript?',
            options: [
                'Uma forma de criar tipos',
                'Uma forma de dizer ao compilador o tipo de uma variável',
                'Uma forma de declarar variáveis',
                'Uma forma de criar funções'
            ],
            correctAnswer: 'Uma forma de dizer ao compilador o tipo de uma variável',
            explanation: 'Type assertion permite informar ao compilador o tipo de uma variável.',
            difficulty: 'medium',
            points: 15,
        },
        {
            id: 'q10',
            type: 'multiple_choice',
            question: 'Como compilar TypeScript para JavaScript?',
            options: [
                'tsc arquivo.ts',
                'ts compile arquivo.ts',
                'typescript arquivo.ts',
                'ts-js arquivo.ts'
            ],
            correctAnswer: 'tsc arquivo.ts',
            explanation: 'tsc é o comando do TypeScript compiler para compilar arquivos .ts para .js.',
            difficulty: 'easy',
            points: 10,
        },
    ],
}

// 4. Exportando todos os quizzes
export const quizzes: Record<string, QuizItem> = {
    'js-basic-quiz': javascriptBasicQuiz,
    'js-intermediate-quiz': javascriptIntermediateQuiz,
    'ts-basic-quiz': typescriptBasicQuiz,
}

// 5. Função para obter quiz por ID
export function getQuiz(id: string): QuizItem | null {
    return quizzes[id] || null
}

// 6. Função para listar todos os quizzes
export function getAllQuizzes(): QuizItem[] {
    return Object.values(quizzes)
}

// 7. Função para obter quizzes por tecnologia
export function getQuizzesByTechnology(technology: string): QuizItem[] {
    return getAllQuizzes().filter(quiz => quiz.technology === technology)
}

// 8. Função para obter quizzes por dificuldade
export function getQuizzesByDifficulty(difficulty: string): QuizItem[] {
    return getAllQuizzes().filter(quiz => quiz.difficulty === difficulty)
}
