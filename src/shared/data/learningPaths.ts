// Dados mock para trilhas de aprendizado
import type { LearningPath, Lesson, Module, Question, Quiz } from '@/shared/types/learning'

// 1. Dados de JavaScript
export const javascriptPath: LearningPath = {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Aprenda JavaScript do básico ao avançado',
    icon: '🟨',
    color: 'yellow',
    technologies: ['ES6+', 'DOM', 'Async/Await', 'Modules'],
    difficulty: 'beginner',
    estimatedTime: 40,
    totalLessons: 24,
    totalQuizzes: 6,
    modules: [
        {
            id: 'js-basics',
            title: 'Fundamentos do JavaScript',
            description: 'Conceitos básicos e sintaxe da linguagem',
            order: 1,
            progress: 0,
            isCompleted: false,
            lessons: [
                {
                    id: 'js-intro',
                    title: 'Introdução ao JavaScript',
                    description: 'O que é JavaScript e por que aprender',
                    content: `
# Introdução ao JavaScript

JavaScript é uma linguagem de programação de alto nível, interpretada e dinâmica. Foi criada em 1995 por Brendan Eich na Netscape.

## Por que aprender JavaScript?

- **Linguagem da Web**: É a linguagem padrão para desenvolvimento web
- **Versatilidade**: Pode ser usada no frontend e backend
- **Grande comunidade**: Muitos recursos e bibliotecas disponíveis
- **Demanda no mercado**: Uma das linguagens mais requisitadas

## Onde o JavaScript é usado?

1. **Frontend**: React, Vue, Angular
2. **Backend**: Node.js, Express
3. **Mobile**: React Native, Ionic
4. **Desktop**: Electron

## Primeiro código

\`\`\`javascript
console.log("Olá, mundo!");
\`\`\`
          `,
                    order: 1,
                    estimatedTime: 15,
                    difficulty: 'easy',
                    tags: ['introdução', 'básico'],
                    isCompleted: false,
                    isLocked: false,
                },
                {
                    id: 'js-variables',
                    title: 'Variáveis e Tipos de Dados',
                    description: 'Como declarar variáveis e tipos básicos',
                    content: `
# Variáveis e Tipos de Dados

## Declarando variáveis

JavaScript tem três formas de declarar variáveis:

\`\`\`javascript
// var (não recomendado)
var nome = "João";

// let (recomendado para variáveis que mudam)
let idade = 25;

// const (recomendado para valores fixos)
const PI = 3.14159;
\`\`\`

## Tipos de dados básicos

### String
\`\`\`javascript
let nome = "João";
let sobrenome = 'Silva';
let template = \`Olá, \${nome}!\`;
\`\`\`

### Number
\`\`\`javascript
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
\`\`\`

### Boolean
\`\`\`javascript
let verdadeiro = true;
let falso = false;
\`\`\`

### Undefined e Null
\`\`\`javascript
let indefinido = undefined;
let nulo = null;
\`\`\`
          `,
                    order: 2,
                    estimatedTime: 20,
                    difficulty: 'easy',
                    tags: ['variáveis', 'tipos', 'básico'],
                    isCompleted: false,
                    isLocked: false,
                },
                {
                    id: 'js-operators',
                    title: 'Operadores',
                    description: 'Operadores aritméticos, de comparação e lógicos',
                    content: `
# Operadores em JavaScript

## Operadores Aritméticos

\`\`\`javascript
let a = 10;
let b = 5;

let soma = a + b;        // 15
let subtracao = a - b;   // 5
let multiplicacao = a * b; // 50
let divisao = a / b;     // 2
let modulo = a % b;      // 0
let exponenciacao = a ** b; // 100000
\`\`\`

## Operadores de Comparação

\`\`\`javascript
let x = 5;
let y = "5";

x == y;   // true (compara valor)
x === y;  // false (compara valor e tipo)
x != y;   // false
x !== y;  // true
x > 3;    // true
x <= 5;   // true
\`\`\`

## Operadores Lógicos

\`\`\`javascript
let a = true;
let b = false;

a && b;   // false (AND)
a || b;   // true (OR)
!a;       // false (NOT)
\`\`\`
          `,
                    order: 3,
                    estimatedTime: 25,
                    difficulty: 'easy',
                    tags: ['operadores', 'aritméticos', 'comparação'],
                    isCompleted: false,
                    isLocked: false,
                },
            ],
            quiz: {
                id: 'js-basics-quiz',
                title: 'Quiz: Fundamentos do JavaScript',
                description: 'Teste seus conhecimentos sobre os fundamentos',
                timeLimit: 10,
                passingScore: 70,
                attempts: 0,
                bestScore: 0,
                isCompleted: false,
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Qual é a forma mais moderna de declarar uma variável que pode ser alterada?',
                        options: ['var', 'let', 'const', 'variable'],
                        correctAnswer: 'let',
                        explanation: 'let é a forma mais moderna e recomendada para variáveis que podem ser alteradas.',
                        difficulty: 'easy',
                        points: 10,
                    },
                    {
                        id: 'q2',
                        type: 'true-false',
                        question: 'JavaScript é uma linguagem tipada estaticamente.',
                        options: ['Verdadeiro', 'Falso'],
                        correctAnswer: 'Falso',
                        explanation: 'JavaScript é uma linguagem dinamicamente tipada.',
                        difficulty: 'easy',
                        points: 10,
                    },
                ],
            },
        },
        {
            id: 'js-functions',
            title: 'Funções',
            description: 'Como criar e usar funções',
            order: 2,
            progress: 0,
            isCompleted: false,
            lessons: [
                {
                    id: 'js-function-basics',
                    title: 'Funções Básicas',
                    description: 'Declarando e chamando funções',
                    content: `
# Funções em JavaScript

## Declarando funções

### Function Declaration
\`\`\`javascript
function saudacao(nome) {
  return \`Olá, \${nome}!\`;
}
\`\`\`

### Function Expression
\`\`\`javascript
const saudacao = function(nome) {
  return \`Olá, \${nome}!\`;
};
\`\`\`

### Arrow Function
\`\`\`javascript
const saudacao = (nome) => {
  return \`Olá, \${nome}!\`;
};

// Forma mais concisa
const saudacao = nome => \`Olá, \${nome}!\`;
\`\`\`

## Chamando funções

\`\`\`javascript
// Chamada simples
saudacao("João");

// Armazenando resultado
const mensagem = saudacao("Maria");
console.log(mensagem); // "Olá, Maria!"
\`\`\`
          `,
                    order: 1,
                    estimatedTime: 20,
                    difficulty: 'easy',
                    tags: ['funções', 'básico'],
                    isCompleted: false,
                    isLocked: true,
                },
            ],
        },
    ],
}

// 2. Dados de TypeScript
export const typescriptPath: LearningPath = {
    id: 'typescript',
    name: 'TypeScript',
    description: 'JavaScript com tipagem estática',
    icon: '🔷',
    color: 'blue',
    technologies: ['Types', 'Interfaces', 'Generics', 'Decorators'],
    difficulty: 'intermediate',
    estimatedTime: 30,
    totalLessons: 18,
    totalQuizzes: 4,
    modules: [
        {
            id: 'ts-basics',
            title: 'Fundamentos do TypeScript',
            description: 'Introdução à tipagem estática',
            order: 1,
            progress: 0,
            isCompleted: false,
            lessons: [
                {
                    id: 'ts-intro',
                    title: 'Introdução ao TypeScript',
                    description: 'O que é TypeScript e suas vantagens',
                    content: `
# Introdução ao TypeScript

TypeScript é um superset do JavaScript que adiciona tipagem estática opcional.

## Vantagens do TypeScript

- **Detecção de erros**: Encontra bugs em tempo de desenvolvimento
- **Melhor IDE**: Autocomplete e refatoração mais inteligentes
- **Documentação**: Tipos servem como documentação
- **Manutenibilidade**: Código mais fácil de manter

## Instalação

\`\`\`bash
npm install -g typescript
\`\`\`

## Primeiro arquivo TypeScript

\`\`\`typescript
// hello.ts
function saudacao(nome: string): string {
  return \`Olá, \${nome}!\`;
}

console.log(saudacao("TypeScript"));
\`\`\`

## Compilando

\`\`\`bash
tsc hello.ts
\`\`\`
          `,
                    order: 1,
                    estimatedTime: 15,
                    difficulty: 'easy',
                    tags: ['introdução', 'typescript'],
                    isCompleted: false,
                    isLocked: false,
                },
            ],
        },
    ],
}

// 3. Dados de React
export const reactPath: LearningPath = {
    id: 'react',
    name: 'React',
    description: 'Biblioteca JavaScript para interfaces',
    icon: '⚛️',
    color: 'cyan',
    technologies: ['React Hooks', 'Context API', 'Redux', 'Next.js'],
    difficulty: 'intermediate',
    estimatedTime: 50,
    totalLessons: 30,
    totalQuizzes: 8,
    modules: [
        {
            id: 'react-basics',
            title: 'Fundamentos do React',
            description: 'Componentes e JSX',
            order: 1,
            progress: 0,
            isCompleted: false,
            lessons: [
                {
                    id: 'react-intro',
                    title: 'Introdução ao React',
                    description: 'O que é React e por que usar',
                    content: `
# Introdução ao React

React é uma biblioteca JavaScript para construir interfaces de usuário.

## Características do React

- **Componentes**: Interface dividida em partes reutilizáveis
- **Virtual DOM**: Renderização eficiente
- **Unidirecional**: Fluxo de dados previsível
- **Ecosistema**: Grande comunidade e ferramentas

## Primeiro componente

\`\`\`jsx
import React from 'react';

function Saudacao() {
  return <h1>Olá, React!</h1>;
}

export default Saudacao;
\`\`\`

## JSX

JSX permite escrever HTML dentro do JavaScript:

\`\`\`jsx
const elemento = (
  <div>
    <h1>Olá</h1>
    <p>Mundo</p>
  </div>
);
\`\`\`
          `,
                    order: 1,
                    estimatedTime: 20,
                    difficulty: 'easy',
                    tags: ['react', 'componentes', 'jsx'],
                    isCompleted: false,
                    isLocked: false,
                },
            ],
        },
    ],
}

// 4. Exportando todas as trilhas
export const learningPaths: Record<string, LearningPath> = {
    javascript: javascriptPath,
    typescript: typescriptPath,
    react: reactPath,
}

// 5. Função para obter trilha por ID
export function getLearningPath(id: string): LearningPath | null {
    return learningPaths[id] || null
}

// 6. Função para listar todas as trilhas
export function getAllLearningPaths(): LearningPath[] {
    return Object.values(learningPaths)
}

// 7. Função para obter módulo por ID
export function getModule(pathId: string, moduleId: string): Module | null {
    const path = getLearningPath(pathId)
    if (!path) return null

    return path.modules.find((module) => module.id === moduleId) || null
}

// 8. Função para obter lição por ID
export function getLesson(pathId: string, moduleId: string, lessonId: string): Lesson | null {
    const module = getModule(pathId, moduleId)
    if (!module) return null

    return module.lessons.find((lesson) => lesson.id === lessonId) || null
}
