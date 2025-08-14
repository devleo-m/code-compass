// Dados mock para trilhas de aprendizado
import type { LearningPath, Lesson, Module } from '@/shared/types/learning'

// 1. Dados de JavaScript - EXPANDIDO COM CONTEÚDO PRÁTICO
export const javascriptPath: LearningPath = {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Aprenda JavaScript do básico ao avançado com exercícios práticos',
    icon: '🟨',
    color: 'yellow',
    technologies: ['ES6+', 'DOM', 'Async/Await', 'Modules', 'Promises', 'Closures'],
    difficulty: 'beginner',
    estimatedTime: 80,
    totalLessons: 48,
    totalQuizzes: 12,
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

## Exercício Prático

Tente executar este código no console do navegador:

\`\`\`javascript
// 1. Imprima seu nome
console.log("Meu nome é: [seu nome]");

// 2. Calcule 15 + 25
console.log(15 + 25);

// 3. Concatene duas strings
console.log("JavaScript" + " é incrível!");
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
// var (não recomendado - escopo de função)
var nome = "João";

// let (recomendado para variáveis que mudam - escopo de bloco)
let idade = 25;

// const (recomendado para valores fixos - escopo de bloco)
const PI = 3.14159;
\`\`\`

## Tipos de dados básicos

### String
\`\`\`javascript
let nome = "João";
let sobrenome = 'Silva';
let template = \`Olá, \${nome}!\`;
let multilinhas = \`
  Esta é uma string
  com múltiplas linhas
\`;
\`\`\`

### Number
\`\`\`javascript
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
let infinito = Infinity;
let naoNumero = NaN;
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

## Exercício Prático

\`\`\`javascript
// 1. Declare variáveis para suas informações pessoais
const nome = "Seu Nome";
let idade = 25;
const profissao = "Desenvolvedor";

// 2. Crie uma string template com suas informações
const apresentacao = \`Olá! Sou \${nome}, tenho \${idade} anos e trabalho como \${profissao}.\`;

// 3. Teste diferentes tipos
console.log(typeof nome);        // "string"
console.log(typeof idade);       // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
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

// Operadores de incremento/decremento
let x = 5;
x++; // 6 (pós-incremento)
++x; // 7 (pré-incremento)
x--; // 6 (pós-decremento)
--x; // 5 (pré-decremento)
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

// Short-circuit evaluation
let nome = "";
let nomeExibido = nome || "Anônimo"; // "Anônimo"
\`\`\`

## Exercício Prático

\`\`\`javascript
// 1. Calcule a média de 3 números
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.2;
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media.toFixed(2));

// 2. Verifique se um número é par
let numero = 15;
let ehPar = numero % 2 === 0;
console.log(\`\${numero} é par? \${ehPar}\`);

// 3. Use operadores lógicos para validação
let idade = 18;
let temPermissao = true;
let podeAcessar = idade >= 18 && temPermissao;
console.log("Pode acessar?", podeAcessar);
\`\`\`
          `,
                    order: 3,
                    estimatedTime: 25,
                    difficulty: 'easy',
                    tags: ['operadores', 'aritméticos', 'comparação'],
                    isCompleted: false,
                    isLocked: false,
                },
                {
                    id: 'js-strings',
                    title: 'Manipulação de Strings',
                    description: 'Métodos e técnicas para trabalhar com strings',
                    content: `
# Manipulação de Strings

## Métodos básicos de string

\`\`\`javascript
let texto = "  JavaScript é incrível!  ";

// Comprimento
console.log(texto.length); // 25

// Maiúsculas e minúsculas
console.log(texto.toUpperCase()); // "  JAVASCRIPT É INCRÍVEL!  "
console.log(texto.toLowerCase()); // "  javascript é incrível!  "

// Remover espaços
console.log(texto.trim()); // "JavaScript é incrível!"

// Substituir
console.log(texto.replace("JavaScript", "TypeScript"));

// Dividir em array
let palavras = texto.split(" ");
console.log(palavras); // ["", "", "JavaScript", "é", "incrível!", "", ""]

// Juntar array em string
let frase = palavras.join("-");
console.log(frase); // "--JavaScript-é-incrível!--"
\`\`\`

## Template Literals (ES6+)

\`\`\`javascript
let nome = "João";
let idade = 25;
let profissao = "Desenvolvedor";

// String template
let apresentacao = \`Olá! Sou \${nome}, tenho \${idade} anos e trabalho como \${profissao}.\`;

// Expressões dentro de templates
let preco = 29.99;
let quantidade = 3;
let total = \`Total: R$ \${(preco * quantidade).toFixed(2)}\`;

// Templates multilinhas
let html = \`
  <div class="card">
    <h2>\${nome}</h2>
    <p>\${apresentacao}</p>
  </div>
\`;
\`\`\`

## Exercício Prático

\`\`\`javascript
// 1. Crie uma função que formata um nome
function formatarNome(nome) {
  return nome.trim().toLowerCase().replace(/\\b\\w/g, l => l.toUpperCase());
}

console.log(formatarNome("  joão silva  ")); // "João Silva"

// 2. Crie uma função que conta palavras
function contarPalavras(texto) {
  return texto.trim().split(/\\s+/).length;
}

console.log(contarPalavras("JavaScript é uma linguagem incrível!")); // 5

// 3. Crie uma função que gera um slug
function criarSlug(titulo) {
  return titulo
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, '')
    .replace(/\\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

console.log(criarSlug("JavaScript: Guia Completo 2024!")); // "javascript-guia-completo-2024"
\`\`\`
          `,
                    order: 4,
                    estimatedTime: 20,
                    difficulty: 'easy',
                    tags: ['strings', 'métodos', 'template-literals'],
                    isCompleted: false,
                    isLocked: false,
                },
            ],
            quiz: {
                id: 'js-basics-quiz',
                title: 'Quiz: Fundamentos do JavaScript',
                description: 'Teste seus conhecimentos sobre os fundamentos',
                timeLimit: 15,
                passingScore: 70,
                attempts: 0,
                bestScore: 0,
                isCompleted: false,
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
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
                        type: 'multiple-choice',
                        question: 'Qual operador é usado para comparação estrita (valor e tipo)?',
                        options: ['==', '===', '=', '!='],
                        correctAnswer: '===',
                        explanation: '=== compara tanto o valor quanto o tipo de dados.',
                        difficulty: 'easy',
                        points: 10,
                    },
                    {
                        id: 'q3',
                        type: 'multiple-choice',
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
                        type: 'true-false',
                        question: 'JavaScript é uma linguagem tipada estaticamente.',
                        options: ['Verdadeiro', 'Falso'],
                        correctAnswer: 'Falso',
                        explanation: 'JavaScript é uma linguagem dinamicamente tipada.',
                        difficulty: 'easy',
                        points: 10,
                    },
                    {
                        id: 'q5',
                        type: 'multiple-choice',
                        question: 'Qual é o resultado de: typeof null?',
                        options: ['"null"', '"object"', '"undefined"', '"number"'],
                        correctAnswer: '"object"',
                        explanation: 'typeof null retorna "object" (é um bug conhecido do JavaScript).',
                        difficulty: 'medium',
                        points: 15,
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

## Parâmetros e argumentos

\`\`\`javascript
// Parâmetros padrão
function multiplicar(a, b = 1) {
  return a * b;
}

console.log(multiplicar(5));    // 5
console.log(multiplicar(5, 3)); // 15

// Rest parameters
function somar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(somar(1, 2, 3, 4, 5)); // 15
\`\`\`

## Exercício Prático

\`\`\`javascript
// 1. Crie uma função que calcula a área de um círculo
function calcularAreaCirculo(raio) {
  return Math.PI * raio * raio;
}

console.log(calcularAreaCirculo(5)); // ~78.54

// 2. Crie uma função que verifica se um número é primo
function ehPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  
  if (numero % 2 === 0 || numero % 3 === 0) return false;
  
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }
  return true;
}

console.log(ehPrimo(17)); // true
console.log(ehPrimo(25)); // false

// 3. Crie uma função que inverte uma string
function inverterString(texto) {
  return texto.split('').reverse().join('');
}

console.log(inverterString("JavaScript")); // "tpircSavaJ"
\`\`\`
          `,
                    order: 1,
                    estimatedTime: 20,
                    difficulty: 'easy',
                    tags: ['funções', 'básico'],
                    isCompleted: false,
                    isLocked: true,
                },
                {
                    id: 'js-function-advanced',
                    title: 'Funções Avançadas',
                    description: 'Closures, callbacks e funções de ordem superior',
                    content: `
# Funções Avançadas

## Closures

Uma closure é uma função que tem acesso a variáveis de seu escopo léxico.

\`\`\`javascript
function criarContador() {
  let contador = 0;
  
  return function() {
    contador++;
    return contador;
  };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3
\`\`\`

## Callbacks

Funções passadas como argumentos para outras funções.

\`\`\`javascript
// Função que recebe um callback
function processarArray(array, callback) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(callback(array[i]));
  }
  return resultado;
}

// Callbacks
const dobrar = x => x * 2;
const quadrado = x => x * x;

const numeros = [1, 2, 3, 4, 5];
console.log(processarArray(numeros, dobrar));   // [2, 4, 6, 8, 10]
console.log(processarArray(numeros, quadrado)); // [1, 4, 9, 16, 25]
\`\`\`

## Funções de Ordem Superior

Funções que retornam outras funções.

\`\`\`javascript
// Função que retorna uma função
function multiplicarPor(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const multiplicarPor2 = multiplicarPor(2);
const multiplicarPor10 = multiplicarPor(10);

console.log(multiplicarPor2(5));  // 10
console.log(multiplicarPor10(5)); // 50
\`\`\`

## Exercício Prático

\`\`\`javascript
// 1. Crie uma função que gera funções de validação
function criarValidador(regra) {
  return function(valor) {
    return regra(valor);
  };
}

const ehPositivo = criarValidador(x => x > 0);
const ehPar = criarValidador(x => x % 2 === 0);
const ehString = criarValidador(x => typeof x === 'string');

console.log(ehPositivo(5));   // true
console.log(ehPar(4));        // true
console.log(ehString("oi"));  // true

// 2. Crie uma função que memoriza resultados
function memoizar(funcao) {
  const cache = {};
  
  return function(...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) {
      console.log('Resultado do cache');
      return cache[chave];
    }
    
    console.log('Calculando...');
    const resultado = funcao.apply(this, args);
    cache[chave] = resultado;
    return resultado;
  };
}

const fibonacciMemo = memoizar(function(n) {
  if (n <= 1) return n;
  return fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
});

console.log(fibonacciMemo(10)); // Calcula apenas uma vez
\`\`\`
          `,
                    order: 2,
                    estimatedTime: 25,
                    difficulty: 'medium',
                    tags: ['closures', 'callbacks', 'funções-avançadas'],
                    isCompleted: false,
                    isLocked: true,
                },
            ],
            quiz: {
                id: 'js-functions-quiz',
                title: 'Quiz: Funções em JavaScript',
                description: 'Teste seus conhecimentos sobre funções',
                timeLimit: 12,
                passingScore: 75,
                attempts: 0,
                bestScore: 0,
                isCompleted: false,
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
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
                        id: 'q2',
                        type: 'multiple-choice',
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
                        id: 'q3',
                        type: 'multiple-choice',
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
                ],
            },
        },
        {
            id: 'js-arrays',
            title: 'Arrays e Métodos',
            description: 'Trabalhando com arrays e seus métodos',
            order: 3,
            progress: 0,
            isCompleted: false,
            lessons: [
                {
                    id: 'js-array-basics',
                    title: 'Fundamentos de Arrays',
                    description: 'Criando e manipulando arrays',
                    content: `
# Arrays em JavaScript

## Criando arrays

\`\`\`javascript
// Array literal
let frutas = ['maçã', 'banana', 'laranja'];

// Array constructor
let numeros = new Array(1, 2, 3, 4, 5);

// Array vazio
let vazio = [];

// Array com diferentes tipos
let misto = [1, 'texto', true, { nome: 'João' }];
\`\`\`

## Acessando elementos

\`\`\`javascript
let array = ['a', 'b', 'c', 'd'];

console.log(array[0]);     // 'a'
console.log(array[1]);     // 'b'
console.log(array.length); // 4

// Acessando o último elemento
console.log(array[array.length - 1]); // 'd'
console.log(array.at(-1));            // 'd' (ES2022)
\`\`\`

## Métodos básicos

\`\`\`javascript
let array = [1, 2, 3];

// Adicionar elementos
array.push(4);        // [1, 2, 3, 4]
array.unshift(0);     // [0, 1, 2, 3, 4]

// Remover elementos
array.pop();          // [0, 1, 2, 3]
array.shift();        // [1, 2, 3]

// Inserir/remover no meio
array.splice(1, 1, 'novo'); // [1, 'novo', 3]
\`\`\`

## Exercício Prático

\`\`\`javascript
// 1. Crie uma função que encontra o maior número em um array
function encontrarMaior(array) {
  return Math.max(...array);
}

console.log(encontrarMaior([3, 7, 2, 9, 1])); // 9

// 2. Crie uma função que remove duplicatas
function removerDuplicatas(array) {
  return [...new Set(array)];
}

console.log(removerDuplicatas([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]

// 3. Crie uma função que inverte um array
function inverterArray(array) {
  return [...array].reverse();
}

console.log(inverterArray([1, 2, 3, 4])); // [4, 3, 2, 1]
\`\`\`
          `,
                    order: 1,
                    estimatedTime: 20,
                    difficulty: 'easy',
                    tags: ['arrays', 'básico', 'métodos'],
                    isCompleted: false,
                    isLocked: true,
                },
                {
                    id: 'js-array-methods',
                    title: 'Métodos Avançados de Array',
                    description: 'map, filter, reduce e outros métodos funcionais',
                    content: `
# Métodos Avançados de Array

## map() - Transformar elementos

\`\`\`javascript
let numeros = [1, 2, 3, 4, 5];

// Dobrar todos os números
let dobros = numeros.map(num => num * 2);
console.log(dobros); // [2, 4, 6, 8, 10]

// Converter para strings
let strings = numeros.map(num => num.toString());
console.log(strings); // ['1', '2', '3', '4', '5']

// Criar objetos
let objetos = numeros.map(num => ({ valor: num, quadrado: num * num }));
console.log(objetos);
// [{valor: 1, quadrado: 1}, {valor: 2, quadrado: 4}, ...]
\`\`\`

## filter() - Filtrar elementos

\`\`\`javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Números pares
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Números maiores que 5
let maioresQue5 = numeros.filter(num => num > 5);
console.log(maioresQue5); // [6, 7, 8, 9, 10]

// Strings com mais de 3 caracteres
let palavras = ['casa', 'carro', 'oi', 'programação'];
let longas = palavras.filter(palavra => palavra.length > 3);
console.log(longas); // ['casa', 'carro', 'programação']
\`\`\`

## reduce() - Reduzir a um valor

\`\`\`javascript
let numeros = [1, 2, 3, 4, 5];

// Soma de todos os números
let soma = numeros.reduce((total, num) => total + num, 0);
console.log(soma); // 15

// Maior número
let maior = numeros.reduce((max, num) => num > max ? num : max);
console.log(maior); // 5

// Contar ocorrências
let palavras = ['casa', 'carro', 'casa', 'moto', 'carro'];
let contagem = palavras.reduce((obj, palavra) => {
  obj[palavra] = (obj[palavra] || 0) + 1;
  return obj;
}, {});
console.log(contagem); // {casa: 2, carro: 2, moto: 1}
\`\`\`

## Exercício Prático

\`\`\`javascript
// 1. Crie uma função que calcula a média de um array
function calcularMedia(array) {
  return array.reduce((soma, num) => soma + num, 0) / array.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5])); // 3

// 2. Crie uma função que agrupa pessoas por idade
function agruparPorIdade(pessoas) {
  return pessoas.reduce((grupos, pessoa) => {
    const idade = pessoa.idade;
    if (!grupos[idade]) grupos[idade] = [];
    grupos[idade].push(pessoa);
    return grupos;
  }, {});
}

const pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 25 },
  { nome: 'Ana', idade: 30 }
];

console.log(agruparPorIdade(pessoas));
// {25: [{nome: 'João', idade: 25}, {nome: 'Pedro', idade: 25}], 30: [...]}

// 3. Crie uma função que encontra palavras que começam com a mesma letra
function palavrasPorLetra(palavras) {
  return palavras.reduce((grupos, palavra) => {
    const primeiraLetra = palavra[0].toLowerCase();
    if (!grupos[primeiraLetra]) grupos[primeiraLetra] = [];
    grupos[primeiraLetra].push(palavra);
    return grupos;
  }, {});
}

console.log(palavrasPorLetra(['casa', 'carro', 'moto', 'mesa', 'cama']));
// {c: ['casa', 'carro', 'cama'], m: ['moto', 'mesa']}
\`\`\`
          `,
                    order: 2,
                    estimatedTime: 25,
                    difficulty: 'medium',
                    tags: ['arrays', 'métodos-funcionais', 'map-filter-reduce'],
                    isCompleted: false,
                    isLocked: true,
                },
            ],
            quiz: {
                id: 'js-arrays-quiz',
                title: 'Quiz: Arrays e Métodos',
                description: 'Teste seus conhecimentos sobre arrays',
                timeLimit: 10,
                passingScore: 70,
                attempts: 0,
                bestScore: 0,
                isCompleted: false,
                questions: [
                    {
                        id: 'q1',
                        type: 'multiple-choice',
                        question: 'Qual método de array retorna um novo array com elementos transformados?',
                        options: ['filter()', 'map()', 'reduce()', 'forEach()'],
                        correctAnswer: 'map()',
                        explanation: 'map() retorna um novo array com os elementos transformados pela função callback.',
                        difficulty: 'easy',
                        points: 10,
                    },
                    {
                        id: 'q2',
                        type: 'multiple-choice',
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
                        id: 'q3',
                        type: 'multiple-choice',
                        question: 'Qual é o resultado de [1, 2, 3].map(x => x * 2)?',
                        options: ['[2, 4, 6]', '[1, 2, 3]', '[2, 2, 2]', 'Erro'],
                        correctAnswer: '[2, 4, 6]',
                        explanation: 'map() aplica a função x * 2 a cada elemento do array.',
                        difficulty: 'easy',
                        points: 10,
                    },
                ],
            },
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
