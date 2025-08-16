# Aula 7: Loops e Iterações em JavaScript - Dominando o Controle de Fluxo

## 🔄 Objetivos de Aprendizado
- Compreender os conceitos fundamentais de loops e iterações
- Dominar todos os tipos de loops: `while`, `do...while`, `for`, `for...of`, `for...in`
- Aplicar `break` e `continue` para controle de fluxo
- Escolher o loop adequado para cada situação
- Otimizar performance em iterações
- Evitar loops infinitos e armadilhas comuns
- Implementar algoritmos usando diferentes tipos de loops
- Trabalhar com iteradores e objetos iteráveis

## 🔄 O Que São Loops?

Loops (laços de repetição) são estruturas de controle que permitem executar um bloco de código repetidamente enquanto uma condição for verdadeira. São fundamentais para automatizar tarefas repetitivas e processar coleções de dados.

**Por que usar loops?**
- **Automatização**: Executar tarefas repetitivas
- **Processamento de Dados**: Iterar sobre arrays, objetos e strings
- **Algoritmos**: Implementar soluções eficientes
- **Economia de Código**: Evitar repetição desnecessária

**Tipos de Loops em JavaScript:**

| Loop | Uso Principal | Quando Usar |
|------|---------------|-------------|
| `while` | Condição no início | Quando não sabemos quantas iterações |
| `do...while` | Condição no final | Executar pelo menos uma vez |
| `for` | Contador conhecido | Quando sabemos o número de iterações |
| `for...of` | Iterar valores | Arrays, strings, iteráveis |
| `for...in` | Iterar propriedades | Objetos e suas propriedades |

## 🔄 Loop while

O loop `while` executa um bloco de código enquanto uma condição for verdadeira. A condição é verificada **antes** de cada execução.

**Sintaxe:**
```javascript
while (condição) {
  // código a ser executado
}
```

**Exemplos Básicos:**

```javascript
// Contador simples
let contador = 0;
while (contador < 5) {
  console.log("Contador:", contador);
  contador++; // Incrementa para evitar loop infinito
}
// Output: 0, 1, 2, 3, 4

// Processamento de array
let numeros = [1, 2, 3, 4, 5];
let indice = 0;
while (indice < numeros.length) {
  console.log("Número:", numeros[indice]);
  indice++;
}

// Validação de entrada
let senha = "";
while (senha !== "123456") {
  senha = prompt("Digite a senha:");
  if (senha !== "123456") {
    console.log("Senha incorreta!");
  }
}
console.log("Acesso liberado!");
```

**Casos de Uso Práticos:**

```javascript
// 1. Busca em array
function buscarElemento(array, elemento) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === elemento) {
      return i; // Retorna o índice
    }
    i++;
  }
  return -1; // Não encontrado
}

console.log(buscarElemento([1, 2, 3, 4], 3)); // 2

// 2. Processamento até condição específica
function lerArquivo(dados) {
  let posicao = 0;
  let linha = "";
  
  while (posicao < dados.length && dados[posicao] !== '\n') {
    linha += dados[posicao];
    posicao++;
  }
  
  return linha;
}

// 3. Cálculos matemáticos
function calcularFatorial(n) {
  let resultado = 1;
  let i = 1;
  
  while (i <= n) {
    resultado *= i;
    i++;
  }
  
  return resultado;
}

console.log(calcularFatorial(5)); // 120
```

**⚠️ Cuidados com while:**

```javascript
// ❌ Loop infinito - EVITAR!
let x = 0;
while (x < 10) {
  console.log(x);
  // Esqueceu de incrementar x - loop infinito!
}

// ✅ Sempre altere a condição do loop
let y = 0;
while (y < 10) {
  console.log(y);
  y++; // Incrementa para sair do loop
}

// ✅ Use condições de segurança
let tentativas = 0;
while (tentativas < 100 && !condicaoAtendida()) {
  processarTentativa();
  tentativas++;
}
```

## 🔄 Loop do...while

O loop `do...while` executa o bloco de código **pelo menos uma vez** e depois verifica a condição. A condição é verificada **após** cada execução.

**Sintaxe:**
```javascript
do {
  // código a ser executado
} while (condição);
```

**Diferença do while:**

```javascript
// while - pode não executar nenhuma vez
let i = 10;
while (i < 5) {
  console.log("while:", i); // Não executa
}

// do...while - executa pelo menos uma vez
let j = 10;
do {
  console.log("do...while:", j); // Executa uma vez
} while (j < 5);
```

**Exemplos Práticos:**

```javascript
// 1. Menu de opções
let opcao;
do {
  console.log("\n=== MENU ===");
  console.log("1. Cadastrar");
  console.log("2. Listar");
  console.log("3. Sair");
  opcao = prompt("Escolha uma opção:");
  
  switch (opcao) {
    case "1":
      console.log("Cadastrando...");
      break;
    case "2":
      console.log("Listando...");
      break;
    case "3":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida!");
  }
} while (opcao !== "3");

// 2. Validação de entrada
let numero;
do {
  numero = Number(prompt("Digite um número entre 1 e 10:"));
  if (numero < 1 || numero > 10) {
    console.log("Número inválido!");
  }
} while (numero < 1 || numero > 10);

console.log("Número válido:", numero);

// 3. Jogo de adivinhação
function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa;
  let tentativas = 0;
  
  do {
    tentativa = Number(prompt("Adivinhe o número (1-100):"));
    tentativas++;
    
    if (tentativa < numeroSecreto) {
      console.log("Muito baixo!");
    } else if (tentativa > numeroSecreto) {
      console.log("Muito alto!");
    } else {
      console.log(`Parabéns! Acertou em ${tentativas} tentativas!`);
    }
  } while (tentativa !== numeroSecreto);
}
```

**Casos de Uso Ideais para do...while:**

```javascript
// 1. Validação que deve ocorrer pelo menos uma vez
function lerEntradaValida() {
  let entrada;
  do {
    entrada = prompt("Digite um email válido:");
  } while (!entrada.includes("@"));
  return entrada;
}

// 2. Processamento que deve acontecer uma vez
function processarPedido() {
  let continuarProcessando;
  do {
    realizarProcessamento();
    continuarProcessando = confirm("Processar outro pedido?");
  } while (continuarProcessando);
}

// 3. Loops de confirmação
function confirmarAcao() {
  let confirmacao;
  do {
    confirmacao = prompt("Tem certeza? (sim/não)").toLowerCase();
  } while (confirmacao !== "sim" && confirmacao !== "não");
  return confirmacao === "sim";
}
```

## 🔄 Loop for

O loop `for` é ideal quando você sabe exatamente quantas vezes quer repetir o código. É o mais usado para iterar com contadores.

**Sintaxe:**
```javascript
for (inicialização; condição; incremento) {
  // código a ser executado
}
```

**Componentes do for:**
- **Inicialização**: Executada uma vez no início
- **Condição**: Verificada antes de cada iteração
- **Incremento**: Executado após cada iteração

**Exemplos Básicos:**

```javascript
// Loop básico
for (let i = 0; i < 5; i++) {
  console.log("Iteração:", i);
}
// Output: 0, 1, 2, 3, 4

// Decrementando
for (let i = 5; i > 0; i--) {
  console.log("Contagem regressiva:", i);
}
// Output: 5, 4, 3, 2, 1

// Incremento personalizado
for (let i = 0; i <= 20; i += 5) {
  console.log("Múltiplos de 5:", i);
}
// Output: 0, 5, 10, 15, 20

// Múltiplas variáveis
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}
// Output: i: 0, j: 10; i: 1, j: 9; etc.
```

**Iterando Arrays:**

```javascript
// Array de números
let numeros = [10, 20, 30, 40, 50];

// Método tradicional
for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice ${i}: ${numeros[i]}`);
}

// Modificando elementos
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 2; // Dobra cada número
}
console.log(numeros); // [20, 40, 60, 80, 100]

// Percorrendo de trás para frente
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log("Reverso:", numeros[i]);
}
```

**Algoritmos com for:**

```javascript
// 1. Busca linear
function buscarLinear(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;
}

// 2. Encontrar maior elemento
function encontrarMaior(array) {
  if (array.length === 0) return undefined;
  
  let maior = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// 3. Somar elementos
function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

// 4. Filtrar elementos
function filtrarPares(array) {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

**Loops Aninhados:**

```javascript
// Tabela de multiplicação
for (let i = 1; i <= 5; i++) {
  let linha = "";
  for (let j = 1; j <= 5; j++) {
    linha += (i * j).toString().padStart(3) + " ";
  }
  console.log(linha);
}

// Matriz 2D
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
  }
}

// Padrões
for (let i = 1; i <= 5; i++) {
  let estrelas = "";
  for (let j = 1; j <= i; j++) {
    estrelas += "* ";
  }
  console.log(estrelas);
}
/*
Output:
* 
* * 
* * * 
* * * * 
* * * * * 
*/
```

## 🔄 break e continue

`break` e `continue` são palavras-chave que controlam o fluxo dos loops:

- **break**: Sai completamente do loop
- **continue**: Pula para a próxima iteração

**break - Saindo do Loop:**

```javascript
// break em for
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sai do loop quando i = 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// break em while
let contador = 0;
while (true) { // Loop infinito controlado
  if (contador >= 3) {
    break;
  }
  console.log("Contador:", contador);
  contador++;
}

// Busca com break
function buscarPrimeiroPar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("Primeiro par encontrado:", array[i]);
      break; // Para a busca no primeiro par
    }
  }
}

buscarPrimeiroPar([1, 3, 7, 8, 9, 12]); // "Primeiro par encontrado: 8"
```

**continue - Pulando Iterações:**

```javascript
// continue em for
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula números pares
  }
  console.log("Ímpar:", i);
}
// Output: Ímpar: 1, Ímpar: 3, Ímpar: 5, Ímpar: 7, Ímpar: 9

// Processamento condicional
let numeros = [1, -2, 3, -4, 5, -6];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 0) {
    continue; // Pula números negativos
  }
  console.log("Positivo:", numeros[i]);
}

// Validação com continue
function processarDados(dados) {
  for (let i = 0; i < dados.length; i++) {
    // Pula dados inválidos
    if (!dados[i] || dados[i] === "" || dados[i] == null) {
      continue;
    }
    
    // Processa apenas dados válidos
    console.log("Processando:", dados[i]);
  }
}

processarDados(["João", "", null, "Maria", undefined, "Pedro"]);
// Output: Processando: João, Processando: Maria, Processando: Pedro
```

## 🔄 Loop for...of

O `for...of` itera sobre valores de objetos iteráveis (arrays, strings, Maps, Sets, etc.).

**Sintaxe:**
```javascript
for (const elemento of iteravel) {
  // código usando elemento
}
```

**Iterando Arrays:**

```javascript
// Array de strings
let frutas = ["maçã", "banana", "laranja"];

for (const fruta of frutas) {
  console.log(fruta);
}
// Output: maçã, banana, laranja

// Array de objetos
let pessoas = [
  {nome: "João", idade: 25},
  {nome: "Maria", idade: 30},
  {nome: "Pedro", idade: 28}
];

for (const pessoa of pessoas) {
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
}

// Com índice usando entries()
for (const [indice, fruta] of frutas.entries()) {
  console.log(`${indice}: ${fruta}`);
}
// Output: 0: maçã, 1: banana, 2: laranja
```

**Iterando Strings:**

```javascript
let texto = "JavaScript";

for (const caractere of texto) {
  console.log(caractere);
}
// Output: J, a, v, a, S, c, r, i, p, t

// Contando vogais
function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let contador = 0;
  
  for (const char of texto) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  
  return contador;
}

console.log(contarVogais("JavaScript")); // 3
```

**Iterando Maps e Sets:**

```javascript
// Map
let mapa = new Map([
  ["nome", "João"],
  ["idade", 25],
  ["cidade", "São Paulo"]
]);

for (const [chave, valor] of mapa) {
  console.log(`${chave}: ${valor}`);
}

// Set
let conjunto = new Set([1, 2, 3, 4, 5]);

for (const numero of conjunto) {
  console.log(numero);
}
```

## 🔄 Loop for...in

O `for...in` itera sobre as propriedades enumeráveis de um objeto.

**Sintaxe:**
```javascript
for (const propriedade in objeto) {
  // código usando propriedade
}
```

**Iterando Objetos:**

```javascript
// Objeto simples
let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Desenvolvedor"
};

for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
// Output: nome: João, idade: 25, etc.

// Verificando propriedades próprias
for (const prop in pessoa) {
  if (pessoa.hasOwnProperty(prop)) {
    console.log(`${prop}: ${pessoa[prop]}`);
  }
}
```

**for...in com Arrays (cuidado!):**

```javascript
// ⚠️ for...in retorna índices como strings
let array = ["a", "b", "c"];

for (const indice in array) {
  console.log(typeof indice, indice); // string "0", string "1", string "2"
}

// ✅ Melhor usar for...of para arrays
for (const valor of array) {
  console.log(valor); // "a", "b", "c"
}
```

## 🔄 Comparação e Escolha do Loop Ideal

**Guia de Decisão:**

```javascript
// Use for quando:
// - Você sabe o número exato de iterações
// - Precisa do índice
// - Quer controle total sobre incremento
for (let i = 0; i < array.length; i++) {
  // Código que precisa do índice i
}

// Use for...of quando:
// - Quer iterar valores de iteráveis
// - Não precisa do índice
// - Código mais limpo
for (const item of array) {
  // Código que só usa o valor
}

// Use for...in quando:
// - Quer iterar propriedades de objetos
// - Precisa das chaves/nomes das propriedades
for (const prop in objeto) {
  // Código que usa a propriedade
}

// Use while quando:
// - Não sabe quantas iterações serão necessárias
// - A condição pode mudar durante o loop
while (condicao) {
  // Código que pode alterar a condição
}

// Use do...while quando:
// - Precisa executar pelo menos uma vez
// - Validações e menus
do {
  // Código que deve executar pelo menos uma vez
} while (condicao);
```

## 💡 Boas Práticas

**1. Evite Loops Infinitos:**
```javascript
// ❌ Perigoso
let i = 0;
while (i < 10) {
  console.log(i);
  // Esqueceu de incrementar i
}

// ✅ Seguro
let j = 0;
while (j < 10) {
  console.log(j);
  j++; // Sempre modifique a condição
}
```

**2. Use const quando possível:**
```javascript
// ✅ Evita modificação acidental
for (const item of array) {
  // item não pode ser reatribuído
}

// ✅ Use let quando precisar modificar
for (let i = 0; i < 10; i++) {
  // i pode ser modificado
}
```

**3. Nomes de variáveis descritivos:**
```javascript
// ❌ Pouco descritivo
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// ✅ Mais claro
for (const user of users) {
  console.log(user);
}
```

---

**💡 Dica Profissional**: Escolha o loop baseado na clareza do código e no que você está tentando fazer. `for...of` é geralmente a melhor escolha para iterar valores, `for...in` para propriedades de objetos, e `for` tradicional quando você precisa de controle total sobre o índice.

**⏱️ Tempo estimado de estudo**: 3-4 horas
**🏆 Nível**: Intermediário
**📝 Tags**: #javascript #loops #iteração #for #while #controle-de-fluxo
