# Aula 1: Introdução ao JavaScript

## 📚 Objetivos de Aprendizado
- Compreender o que é JavaScript e sua importância
- Entender a história e evolução da linguagem
- Conhecer as diferentes versões do JavaScript
- Aprender como executar código JavaScript
- Identificar onde JavaScript é usado no mundo real

## 🎯 Conceitos Principais

### O que é JavaScript?

JavaScript, frequentemente abreviado como **JS**, é uma linguagem de programação que é uma das tecnologias fundamentais da World Wide Web, ao lado do HTML e CSS. 

**JavaScript nos permite adicionar interatividade às páginas web** - você já deve ter visto sliders, alertas, interações de clique, popups, etc. em diferentes sites - tudo isso é construído usando JavaScript.

### Onde JavaScript é usado?

Além de ser usado no navegador, o JavaScript também é utilizado em outros ambientes não-browser:

- **🌐 Navegador**: Interatividade em páginas web
- **🖥️ Node.js**: Código server-side em JavaScript
- **💻 Electron**: Aplicações desktop
- **📱 React Native**: Aplicações mobile
- **🤖 IoT**: Dispositivos inteligentes
- **🎮 Games**: Desenvolvimento de jogos

## 📖 História do JavaScript

### Criação e Nomenclatura

JavaScript foi inicialmente criado por **Brendan Eich** da Netscape e foi anunciado pela primeira vez em um comunicado de imprensa da Netscape em **1995**.

A linguagem tem uma história bizarra de nomenclatura:
- **Mocha**: Nome inicial dado pelo criador
- **LiveScript**: Renomeado posteriormente
- **JavaScript**: Nome final escolhido em 1996

### Por que "JavaScript"?

A Netscape decidiu renomear para "JavaScript" com a esperança de capitalizar na comunidade Java (embora JavaScript não tivesse nenhuma relação com Java) e lançou o Netscape 2.0 com suporte oficial ao JavaScript.

## 🔄 Versões do JavaScript

### Evolução da Linguagem

JavaScript, inventado por Brendan Eich, alcançou o status de padrão ECMA em **1997** e adotou o nome oficial **ECMAScript**.

A linguagem evoluiu através de várias versões:

| Versão | Ano | Principais Características |
|--------|-----|---------------------------|
| **ES1** | 1997 | Primeira versão padronizada |
| **ES2** | 1998 | Melhorias menores |
| **ES3** | 1999 | Expressões regulares, try/catch |
| **ES5** | 2009 | Strict mode, JSON, métodos de array |
| **ES6/ES2015** | 2015 | **Revolucionária**: Classes, módulos, arrow functions, destructuring |
| **ES2016+** | 2016+ | Atualizações anuais com novas features |

### Por que ES6 foi tão importante?

ES6 (também conhecida como ES2015) foi uma versão **transformadora** que introduziu:
- Classes e herança
- Módulos (import/export)
- Arrow functions
- Template literals
- Destructuring
- Promises
- E muito mais!

## 💻 Como Executar JavaScript

### Métodos de Execução

JavaScript pode ser executado de várias formas:

#### 1. **No Navegador - Arquivo Externo**
```html
<script src="meu-script.js"></script>
```

#### 2. **No Navegador - Inline**
```html
<script>
  console.log("Olá, JavaScript!");
</script>
```

#### 3. **Console do Navegador**
- Pressione **F12** ou **Ctrl+Shift+I**
- Vá para a aba **Console**
- Digite código JavaScript diretamente

#### 4. **REPL (Read-Eval-Print Loop)**
- Node.js no terminal
- Ferramentas online como CodePen, JSFiddle

## 🛠️ Primeiro Código JavaScript

### Vamos começar!

Abra o console do seu navegador (F12) e teste estes comandos:

```javascript
// 1. Imprimir uma mensagem
console.log("Olá, mundo!");

// 2. Fazer uma operação matemática
console.log(2 + 2);

// 3. Criar uma variável
let nome = "Seu Nome";
console.log("Olá, " + nome);

// 4. Usar template literals (ES6+)
console.log(`Olá, ${nome}! Bem-vindo ao JavaScript!`);
```

## 🎯 Exercícios Práticos

### Exercício 1: Primeiro Programa
Crie um programa que:
1. Declare uma variável com seu nome
2. Declare uma variável com sua idade
3. Imprima uma mensagem usando template literals

```javascript
// Seu código aqui
let meuNome = "João";
let minhaIdade = 25;
console.log(`Olá! Sou ${meuNome} e tenho ${minhaIdade} anos.`);
```

### Exercício 2: Calculadora Simples
Crie um programa que:
1. Declare duas variáveis com números
2. Calcule a soma, subtração, multiplicação e divisão
3. Imprima os resultados

```javascript
// Seu código aqui
let a = 10;
let b = 5;

console.log(`Soma: ${a + b}`);
console.log(`Subtração: ${a - b}`);
console.log(`Multiplicação: ${a * b}`);
console.log(`Divisão: ${a / b}`);
```

## 🔍 Quiz de Verificação

### Pergunta 1
JavaScript foi criado por qual empresa?
- [ ] Microsoft
- [ ] Google
- [ ] **Netscape** ✅
- [ ] Mozilla

### Pergunta 2
Qual é o nome oficial da linguagem JavaScript?
- [ ] JavaScript
- [ ] **ECMAScript** ✅
- [ ] LiveScript
- [ ] Mocha

### Pergunta 3
Em que ano foi lançado o ES6 (ES2015)?
- [ ] 2009
- [ ] 2010
- [ ] **2015** ✅
- [ ] 2020

### Pergunta 4
JavaScript pode ser usado apenas no navegador?
- [ ] Sim
- [ ] **Não** ✅

## 📚 Recursos Adicionais

### Recursos Gratuitos
- 📖 **MDN Web Docs**: Documentação oficial do JavaScript
- 📖 **The Modern JavaScript Tutorial**: Tutorial moderno e completo
- 📖 **Eloquent JavaScript**: Livro-texto gratuito
- 🎥 **JavaScript Crash Course for Beginners**: Curso rápido para iniciantes
- 🎥 **Learn JavaScript - Full Course for Beginners**: Curso completo

### Recursos Premium
- 🎓 **Scrimba - JavaScript Deep Dive**: Curso avançado
- 🎓 **Scrimba - Advanced JavaScript**: JavaScript avançado
- 🎓 **Scrimba - Learn JavaScript**: Curso completo
- 🎓 **Scrimba - Introduction to ES6+**: Introdução ao ES6+

## 🎯 Próximos Passos

Na próxima aula, vamos aprender sobre:
- **Variáveis e tipos de dados**
- **Operadores**
- **Estruturas de controle**

---

**💡 Dica**: Pratique todos os dias! O JavaScript é uma linguagem que você aprende fazendo. Use o console do navegador para testar códigos e experimentar.

**⏱️ Tempo estimado de estudo**: 30-45 minutos
**🏆 Nível**: Iniciante
**📝 Tags**: #javascript #introdução #história #execução #primeiro-código 