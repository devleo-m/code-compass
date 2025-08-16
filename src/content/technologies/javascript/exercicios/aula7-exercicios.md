# Exercícios da Aula 7: Loops e Iterações em JavaScript

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Loops while Básicos
Pratique loops while com diferentes condições:

```javascript
// Exercício 1a: Contador simples
// Crie um loop while que conte de 1 a 10
let contador = 1;
while (contador <= 10) {
  console.log("Número:", contador);
  contador++;
}

// Exercício 1b: Soma acumulativa
// Some todos os números de 1 a 50 usando while
let i = 1;
let soma = 0;
while (i <= 50) {
  soma += i;
  i++;
}
console.log("Soma total:", soma);

// Exercício 1c: Busca em array
// Encontre o primeiro número negativo no array
let numeros = [5, 3, 8, -2, 1, -7, 9];
let indice = 0;
while (indice < numeros.length) {
  if (numeros[indice] < 0) {
    console.log("Primeiro negativo:", numeros[indice], "no índice", indice);
    break;
  }
  indice++;
}

// Exercício 1d: Validação de entrada
function lerIdadeValida() {
  let idade;
  while (idade < 0 || idade > 120 || isNaN(idade)) {
    idade = Number(prompt("Digite uma idade válida (0-120):"));
  }
  return idade;
}
```

### Exercício 2: Loops do...while em Ação
Explore situações onde do...while é ideal:

```javascript
// Exercício 2a: Menu interativo
function menuCalculadora() {
  let opcao;
  do {
    console.log("\n=== CALCULADORA ===");
    console.log("1. Somar");
    console.log("2. Subtrair");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("0. Sair");
    
    opcao = prompt("Escolha uma opção:");
    
    switch (opcao) {
      case "1":
        let a = Number(prompt("Primeiro número:"));
        let b = Number(prompt("Segundo número:"));
        console.log("Resultado:", a + b);
        break;
      case "2":
        let c = Number(prompt("Primeiro número:"));
        let d = Number(prompt("Segundo número:"));
        console.log("Resultado:", c - d);
        break;
      case "3":
        let e = Number(prompt("Primeiro número:"));
        let f = Number(prompt("Segundo número:"));
        console.log("Resultado:", e * f);
        break;
      case "4":
        let g = Number(prompt("Primeiro número:"));
        let h = Number(prompt("Segundo número:"));
        if (h !== 0) {
          console.log("Resultado:", g / h);
        } else {
          console.log("Erro: Divisão por zero!");
        }
        break;
      case "0":
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida!");
    }
  } while (opcao !== "0");
}

// Exercício 2b: Jogo de adivinhar número
function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativa;
  let tentativas = 0;
  
  console.log("Adivinhe o número entre 1 e 100!");
  
  do {
    tentativa = Number(prompt("Sua tentativa:"));
    tentativas++;
    
    if (tentativa < numeroSecreto) {
      console.log("Muito baixo! Tente novamente.");
    } else if (tentativa > numeroSecreto) {
      console.log("Muito alto! Tente novamente.");
    } else {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
    }
  } while (tentativa !== numeroSecreto);
}

// Exercício 2c: Validação de senha
function criarSenhaSegura() {
  let senha;
  do {
    senha = prompt("Crie uma senha (mín. 8 caracteres, com letra e número):");
    
    if (senha.length < 8) {
      console.log("Senha muito curta! Mínimo 8 caracteres.");
    } else if (!/[a-zA-Z]/.test(senha)) {
      console.log("Senha deve conter pelo menos uma letra!");
    } else if (!/[0-9]/.test(senha)) {
      console.log("Senha deve conter pelo menos um número!");
    } else {
      console.log("Senha criada com sucesso!");
    }
  } while (senha.length < 8 || !/[a-zA-Z]/.test(senha) || !/[0-9]/.test(senha));
  
  return senha;
}
```

### Exercício 3: Dominando o Loop for
Pratique diferentes usos do loop for:

```javascript
// Exercício 3a: Tabuadas
function gerarTabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Teste
gerarTabuada(7);

// Exercício 3b: Números pares e ímpares
function separarParesImpares(limite) {
  let pares = [];
  let impares = [];
  
  for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    } else {
      impares.push(i);
    }
  }
  
  console.log("Pares:", pares);
  console.log("Ímpares:", impares);
}

separarParesImpares(20);

// Exercício 3c: Fatorial
function calcularFatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log("5! =", calcularFatorial(5)); // 120

// Exercício 3d: Sequência de Fibonacci
function fibonacci(termos) {
  let sequencia = [];
  for (let i = 0; i < termos; i++) {
    if (i <= 1) {
      sequencia[i] = i;
    } else {
      sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
  }
  return sequencia;
}

console.log("Fibonacci(10):", fibonacci(10));

// Exercício 3e: Padrões com estrelas
function desenharTriangulo(altura) {
  for (let i = 1; i <= altura; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += "* ";
    }
    console.log(linha);
  }
}

desenharTriangulo(5);

// Exercício 3f: Inversão de string
function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

console.log(inverterString("JavaScript")); // "tpircSavaJ"
```

### Exercício 4: Usando break e continue
Domine o controle de fluxo:

```javascript
// Exercício 4a: Encontrar primeiro número primo
function encontrarPrimeiroPrimo(inicio, fim) {
  for (let num = inicio; num <= fim; num++) {
    if (num < 2) continue; // Pula números menores que 2
    
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        ehPrimo = false;
        break; // Para de verificar se encontrou divisor
      }
    }
    
    if (ehPrimo) {
      console.log("Primeiro primo encontrado:", num);
      break; // Para de procurar
    }
  }
}

encontrarPrimeiroPrimo(10, 30);

// Exercício 4b: Processamento com filtros
function processarVendas(vendas) {
  let totalValidas = 0;
  let somaValidas = 0;
  
  for (let i = 0; i < vendas.length; i++) {
    // Pula vendas inválidas
    if (vendas[i] < 0 || vendas[i] == null || isNaN(vendas[i])) {
      console.log(`Venda ${i + 1} inválida: ${vendas[i]}`);
      continue;
    }
    
    // Para se encontrar venda muito alta (possível erro)
    if (vendas[i] > 10000) {
      console.log("Venda suspeita encontrada:", vendas[i]);
      break;
    }
    
    totalValidas++;
    somaValidas += vendas[i];
    console.log(`Venda ${i + 1}: R$ ${vendas[i]}`);
  }
  
  console.log(`Total de vendas válidas: ${totalValidas}`);
  console.log(`Soma das vendas: R$ ${somaValidas}`);
}

let vendas = [150, 200, -50, 300, null, 250, 15000, 100];
processarVendas(vendas);

// Exercício 4c: Busca com múltiplas condições
function buscarUsuario(usuarios, criterio) {
  for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    
    // Pula usuários inativos
    if (!usuario.ativo) {
      continue;
    }
    
    // Verifica se atende ao critério
    if (usuario.nome.toLowerCase().includes(criterio.toLowerCase()) ||
        usuario.email.toLowerCase().includes(criterio.toLowerCase())) {
      console.log("Usuário encontrado:", usuario);
      break; // Para na primeira ocorrência
    }
  }
}

let usuarios = [
  {nome: "João", email: "joao@email.com", ativo: true},
  {nome: "Maria", email: "maria@email.com", ativo: false},
  {nome: "Pedro", email: "pedro@email.com", ativo: true},
  {nome: "Ana", email: "ana@email.com", ativo: true}
];

buscarUsuario(usuarios, "pedro");
```

### Exercício 5: Loop for...of Moderno
Explore iteração de valores:

```javascript
// Exercício 5a: Processamento de array
let frutas = ["maçã", "banana", "laranja", "uva", "manga"];

// Listar todas as frutas
for (const fruta of frutas) {
  console.log("Fruta:", fruta);
}

// Com índice usando entries()
for (const [indice, fruta] of frutas.entries()) {
  console.log(`${indice + 1}. ${fruta}`);
}

// Exercício 5b: Análise de texto
function analisarTexto(texto) {
  let vogais = 0;
  let consoantes = 0;
  let espacos = 0;
  let outros = 0;
  
  for (const char of texto.toLowerCase()) {
    if ("aeiou".includes(char)) {
      vogais++;
    } else if (char >= 'a' && char <= 'z') {
      consoantes++;
    } else if (char === ' ') {
      espacos++;
    } else {
      outros++;
    }
  }
  
  return {vogais, consoantes, espacos, outros};
}

console.log(analisarTexto("Olá, mundo! Como você está?"));

// Exercício 5c: Soma de arrays aninhados
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let somaTotal = 0;
for (const linha of matriz) {
  for (const numero of linha) {
    somaTotal += numero;
  }
}
console.log("Soma total da matriz:", somaTotal);

// Exercício 5d: Processamento de objetos em array
let produtos = [
  {nome: "Notebook", preco: 2500, categoria: "eletrônicos"},
  {nome: "Camisa", preco: 80, categoria: "roupas"},
  {nome: "Mouse", preco: 50, categoria: "eletrônicos"},
  {nome: "Livro", preco: 30, categoria: "livros"}
];

// Calcular preço médio por categoria
let categorias = {};
for (const produto of produtos) {
  if (!categorias[produto.categoria]) {
    categorias[produto.categoria] = {soma: 0, count: 0};
  }
  categorias[produto.categoria].soma += produto.preco;
  categorias[produto.categoria].count++;
}

for (const [categoria, dados] of Object.entries(categorias)) {
  let media = dados.soma / dados.count;
  console.log(`${categoria}: R$ ${media.toFixed(2)} (média)`);
}

// Exercício 5e: Iterando Map e Set
let pontuacoes = new Map([
  ["João", 85],
  ["Maria", 92],
  ["Pedro", 78],
  ["Ana", 96]
]);

console.log("Pontuações:");
for (const [nome, pontos] of pontuacoes) {
  console.log(`${nome}: ${pontos} pontos`);
}

let numerosSorteados = new Set([3, 7, 12, 7, 3, 21, 12, 35]);
console.log("Números únicos sorteados:");
for (const numero of numerosSorteados) {
  console.log(numero);
}
```

### Exercício 6: Loop for...in para Objetos
Pratique iteração de propriedades:

```javascript
// Exercício 6a: Análise de objeto pessoa
let pessoa = {
  nome: "Carlos",
  idade: 30,
  profissao: "Desenvolvedor",
  salario: 5000,
  cidade: "São Paulo"
};

console.log("Dados da pessoa:");
for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

// Exercício 6b: Calculadora de estatísticas
function calcularEstatisticas(dados) {
  let soma = 0;
  let contador = 0;
  let maior = -Infinity;
  let menor = Infinity;
  
  for (const chave in dados) {
    if (typeof dados[chave] === 'number') {
      soma += dados[chave];
      contador++;
      
      if (dados[chave] > maior) maior = dados[chave];
      if (dados[chave] < menor) menor = dados[chave];
    }
  }
  
  return {
    soma,
    media: soma / contador,
    maior,
    menor,
    count: contador
  };
}

let vendaMensal = {
  janeiro: 1200,
  fevereiro: 1500,
  marco: 1800,
  abril: 1100,
  maio: 2000
};

console.log(calcularEstatisticas(vendaMensal));

// Exercício 6c: Validador de formulário
function validarFormulario(dados, camposObrigatorios) {
  let erros = [];
  
  // Verifica campos obrigatórios
  for (const campo of camposObrigatorios) {
    if (!(campo in dados) || dados[campo] === "" || dados[campo] == null) {
      erros.push(`Campo '${campo}' é obrigatório`);
    }
  }
  
  // Verifica tipos de dados
  for (const campo in dados) {
    if (campo === "email" && dados[campo] && !dados[campo].includes("@")) {
      erros.push("Email inválido");
    }
    if (campo === "idade" && dados[campo] && (dados[campo] < 0 || dados[campo] > 120)) {
      erros.push("Idade deve estar entre 0 e 120 anos");
    }
  }
  
  return erros;
}

let formulario = {
  nome: "João Silva",
  email: "joao.email.com", // Email inválido
  idade: 25,
  telefone: ""
};

let camposObrigatorios = ["nome", "email", "telefone"];
let erros = validarFormulario(formulario, camposObrigatorios);

if (erros.length > 0) {
  console.log("Erros encontrados:");
  for (const erro of erros) {
    console.log("- " + erro);
  }
} else {
  console.log("Formulário válido!");
}

// Exercício 6d: Clonagem profunda simples
function clonarObjeto(objeto) {
  let clone = {};
  
  for (const propriedade in objeto) {
    if (objeto.hasOwnProperty(propriedade)) {
      if (typeof objeto[propriedade] === 'object' && objeto[propriedade] !== null) {
        clone[propriedade] = clonarObjeto(objeto[propriedade]); // Recursão
      } else {
        clone[propriedade] = objeto[propriedade];
      }
    }
  }
  
  return clone;
}

let original = {
  nome: "Maria",
  endereco: {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo"
  },
  hobbies: ["leitura", "natação"]
};

let copia = clonarObjeto(original);
console.log("Original:", original);
console.log("Cópia:", copia);
```

### Exercício 7: Loops Aninhados Avançados
Trabalhe com estruturas mais complexas:

```javascript
// Exercício 7a: Matriz de multiplicação
function criarTabelaMultiplicacao(tamanho) {
  console.log("Tabela de Multiplicação:");
  
  // Cabeçalho
  let cabecalho = "   ";
  for (let j = 1; j <= tamanho; j++) {
    cabecalho += j.toString().padStart(4);
  }
  console.log(cabecalho);
  
  // Linhas da tabela
  for (let i = 1; i <= tamanho; i++) {
    let linha = i.toString().padStart(2) + " ";
    for (let j = 1; j <= tamanho; j++) {
      linha += (i * j).toString().padStart(4);
    }
    console.log(linha);
  }
}

criarTabelaMultiplicacao(10);

// Exercício 7b: Busca em matriz
function buscarNaMatriz(matriz, valor) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === valor) {
        return {linha: i, coluna: j, encontrado: true};
      }
    }
  }
  return {encontrado: false};
}

let matrizNumeros = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

console.log(buscarNaMatriz(matrizNumeros, 7));

// Exercício 7c: Padrões decorativos
function desenharLosango(tamanho) {
  // Parte superior
  for (let i = 1; i <= tamanho; i++) {
    let espacos = " ".repeat(tamanho - i);
    let estrelas = "* ".repeat(i);
    console.log(espacos + estrelas);
  }
  
  // Parte inferior
  for (let i = tamanho - 1; i >= 1; i--) {
    let espacos = " ".repeat(tamanho - i);
    let estrelas = "* ".repeat(i);
    console.log(espacos + estrelas);
  }
}

desenharLosango(5);

// Exercício 7d: Processamento de dados multidimensionais
let vendas3D = [
  [ // Trimestre 1
    [100, 150, 200], // Janeiro: Produto A, B, C
    [120, 180, 220], // Fevereiro
    [110, 170, 210]  // Março
  ],
  [ // Trimestre 2
    [130, 160, 240],
    [140, 190, 230],
    [125, 175, 215]
  ]
];

function analisarVendas3D(dados) {
  let totalGeral = 0;
  let vendasPorTrimestre = [];
  let vendasPorProduto = [0, 0, 0]; // A, B, C
  
  for (let trimestre = 0; trimestre < dados.length; trimestre++) {
    let totalTrimestre = 0;
    
    for (let mes = 0; mes < dados[trimestre].length; mes++) {
      for (let produto = 0; produto < dados[trimestre][mes].length; produto++) {
        let venda = dados[trimestre][mes][produto];
        totalGeral += venda;
        totalTrimestre += venda;
        vendasPorProduto[produto] += venda;
      }
    }
    
    vendasPorTrimestre.push(totalTrimestre);
  }
  
  return {
    totalGeral,
    vendasPorTrimestre,
    vendasPorProduto
  };
}

console.log(analisarVendas3D(vendas3D));
```

### Exercício 8: Algoritmos com Loops
Implemente algoritmos clássicos:

```javascript
// Exercício 8a: Algoritmo de ordenação Bubble Sort
function bubbleSort(array) {
  let arr = [...array]; // Cópia para não modificar o original
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let trocou = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca os elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocou = true;
      }
    }
    
    // Se não houve troca, array já está ordenado
    if (!trocou) break;
  }
  
  return arr;
}

let numerosDesordenados = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", numerosDesordenados);
console.log("Ordenado:", bubbleSort(numerosDesordenados));

// Exercício 8b: Busca binária
function buscaBinaria(array, elemento) {
  let inicio = 0;
  let fim = array.length - 1;
  let passos = 0;
  
  while (inicio <= fim) {
    passos++;
    let meio = Math.floor((inicio + fim) / 2);
    
    console.log(`Passo ${passos}: verificando posição ${meio} (valor: ${array[meio]})`);
    
    if (array[meio] === elemento) {
      return {encontrado: true, posicao: meio, passos};
    } else if (array[meio] < elemento) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
  
  return {encontrado: false, passos};
}

let arrayOrdenado = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(buscaBinaria(arrayOrdenado, 13));

// Exercício 8c: Gerador de números primos
function gerarPrimos(limite) {
  let primos = [];
  
  for (let num = 2; num <= limite; num++) {
    let ehPrimo = true;
    
    // Verifica se é divisível por algum primo anterior
    for (let i = 0; i < primos.length && primos[i] * primos[i] <= num; i++) {
      if (num % primos[i] === 0) {
        ehPrimo = false;
        break;
      }
    }
    
    if (ehPrimo) {
      primos.push(num);
    }
  }
  
  return primos;
}

console.log("Primos até 50:", gerarPrimos(50));

// Exercício 8d: Algoritmo de Euclides (MDC)
function calcularMDC(a, b) {
  let passos = [];
  
  while (b !== 0) {
    passos.push(`MDC(${a}, ${b})`);
    let temp = b;
    b = a % b;
    a = temp;
  }
  
  passos.push(`MDC final: ${a}`);
  
  return {mdc: a, passos};
}

console.log(calcularMDC(48, 18));

// Exercício 8e: Torre de Hanoi
function torreDeHanoi(n, origem = 'A', destino = 'C', auxiliar = 'B') {
  let movimentos = [];
  
  function mover(discos, de, para, aux) {
    if (discos === 1) {
      movimentos.push(`Mover disco de ${de} para ${para}`);
    } else {
      mover(discos - 1, de, aux, para);
      movimentos.push(`Mover disco de ${de} para ${para}`);
      mover(discos - 1, aux, para, de);
    }
  }
  
  mover(n, origem, destino, auxiliar);
  return movimentos;
}

console.log("Torre de Hanoi (3 discos):");
torreDeHanoi(3).forEach((movimento, i) => {
  console.log(`${i + 1}. ${movimento}`);
});
```

### Exercício 9: Performance e Otimização
Analise e otimize loops:

```javascript
// Exercício 9a: Comparação de performance
function testarPerformance() {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  
  console.log("Testando performance com array de", array.length, "elementos");
  
  // Teste 1: for tradicional
  console.time("for tradicional");
  let soma1 = 0;
  for (let i = 0; i < array.length; i++) {
    soma1 += array[i];
  }
  console.timeEnd("for tradicional");
  
  // Teste 2: for...of
  console.time("for...of");
  let soma2 = 0;
  for (const num of array) {
    soma2 += num;
  }
  console.timeEnd("for...of");
  
  // Teste 3: while
  console.time("while");
  let soma3 = 0;
  let i = 0;
  while (i < array.length) {
    soma3 += array[i];
    i++;
  }
  console.timeEnd("while");
  
  console.log("Todas as somas são iguais:", soma1 === soma2 && soma2 === soma3);
}

testarPerformance();

// Exercício 9b: Cache de length para otimização
function compararCacheLength() {
  let array = new Array(10000).fill(0).map((_, i) => i);
  
  // Sem cache (menos eficiente)
  console.time("Sem cache");
  let soma1 = 0;
  for (let i = 0; i < array.length; i++) {
    soma1 += array[i];
  }
  console.timeEnd("Sem cache");
  
  // Com cache (mais eficiente)
  console.time("Com cache");
  let soma2 = 0;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    soma2 += array[i];
  }
  console.timeEnd("Com cache");
  
  console.log("Resultados iguais:", soma1 === soma2);
}

compararCacheLength();

// Exercício 9c: Otimização de loops aninhados
function otimizarMatriz(matriz) {
  let linhas = matriz.length;
  let colunas = matriz[0].length;
  
  // Versão não otimizada
  console.time("Não otimizada");
  let soma1 = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma1 += matriz[i][j];
    }
  }
  console.timeEnd("Não otimizada");
  
  // Versão otimizada
  console.time("Otimizada");
  let soma2 = 0;
  for (let i = 0; i < linhas; i++) {
    let linha = matriz[i];
    for (let j = 0; j < colunas; j++) {
      soma2 += linha[j];
    }
  }
  console.timeEnd("Otimizada");
  
  console.log("Resultados iguais:", soma1 === soma2);
}

// Criar matriz de teste
let matrizTeste = [];
for (let i = 0; i < 1000; i++) {
  matrizTeste.push(new Array(1000).fill(1));
}

otimizarMatriz(matrizTeste);
```

### Exercício 10: Processamento de Dados Reais
Simule cenários do mundo real:

```javascript
// Exercício 10a: Análise de vendas por período
let dadosVendas = [
  {data: "2024-01-15", produto: "Notebook", valor: 2500, vendedor: "João"},
  {data: "2024-01-16", produto: "Mouse", valor: 80, vendedor: "Maria"},
  {data: "2024-01-17", produto: "Teclado", valor: 150, vendedor: "João"},
  {data: "2024-02-01", produto: "Monitor", valor: 800, vendedor: "Pedro"},
  {data: "2024-02-02", produto: "Notebook", valor: 2300, vendedor: "Maria"},
  {data: "2024-02-03", produto: "Mouse", valor: 75, vendedor: "João"}
];

function analisarVendas(vendas) {
  let vendasPorMes = {};
  let vendasPorVendedor = {};
  let vendasPorProduto = {};
  let totalGeral = 0;
  
  for (const venda of vendas) {
    let mes = venda.data.substring(0, 7); // YYYY-MM
    
    // Por mês
    if (!vendasPorMes[mes]) {
      vendasPorMes[mes] = {count: 0, total: 0};
    }
    vendasPorMes[mes].count++;
    vendasPorMes[mes].total += venda.valor;
    
    // Por vendedor
    if (!vendasPorVendedor[venda.vendedor]) {
      vendasPorVendedor[venda.vendedor] = {count: 0, total: 0};
    }
    vendasPorVendedor[venda.vendedor].count++;
    vendasPorVendedor[venda.vendedor].total += venda.valor;
    
    // Por produto
    if (!vendasPorProduto[venda.produto]) {
      vendasPorProduto[venda.produto] = {count: 0, total: 0};
    }
    vendasPorProduto[venda.produto].count++;
    vendasPorProduto[venda.produto].total += venda.valor;
    
    totalGeral += venda.valor;
  }
  
  return {vendasPorMes, vendasPorVendedor, vendasPorProduto, totalGeral};
}

let analise = analisarVendas(dadosVendas);

console.log("=== RELATÓRIO DE VENDAS ===");
console.log("Total Geral: R$", analise.totalGeral);

console.log("\nVendas por Mês:");
for (const [mes, dados] of Object.entries(analise.vendasPorMes)) {
  console.log(`${mes}: ${dados.count} vendas - R$ ${dados.total}`);
}

console.log("\nVendas por Vendedor:");
for (const [vendedor, dados] of Object.entries(analise.vendasPorVendedor)) {
  console.log(`${vendedor}: ${dados.count} vendas - R$ ${dados.total}`);
}

// Exercício 10b: Sistema de estoque
let estoque = [
  {id: 1, nome: "Notebook", quantidade: 10, minimo: 5, preco: 2500},
  {id: 2, nome: "Mouse", quantidade: 3, minimo: 10, preco: 80},
  {id: 3, nome: "Teclado", quantidade: 15, minimo: 8, preco: 150},
  {id: 4, nome: "Monitor", quantidade: 7, minimo: 5, preco: 800}
];

function gerenciarEstoque(produtos) {
  let alertas = [];
  let valorTotal = 0;
  let produtosBaixos = 0;
  
  console.log("=== RELATÓRIO DE ESTOQUE ===");
  
  for (const produto of produtos) {
    let valor = produto.quantidade * produto.preco;
    valorTotal += valor;
    
    console.log(`${produto.nome}: ${produto.quantidade} unidades - R$ ${valor}`);
    
    if (produto.quantidade <= produto.minimo) {
      alertas.push(`${produto.nome} está abaixo do estoque mínimo!`);
      produtosBaixos++;
    }
  }
  
  console.log(`\nValor total do estoque: R$ ${valorTotal}`);
  console.log(`Produtos com estoque baixo: ${produtosBaixos}`);
  
  if (alertas.length > 0) {
    console.log("\n⚠️ ALERTAS:");
    for (const alerta of alertas) {
      console.log("- " + alerta);
    }
  }
}

gerenciarEstoque(estoque);
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual a principal diferença entre `while` e `do...while`?
- [ ] while é mais rápido
- [x] do...while executa pelo menos uma vez
- [ ] while usa mais memória
- [ ] Não há diferença

### Pergunta 2
Qual palavra-chave para completamente do loop?
- [x] break
- [ ] continue
- [ ] return
- [ ] stop

### Pergunta 3
Qual loop é melhor para iterar propriedades de objetos?
- [ ] for
- [ ] for...of
- [x] for...in
- [ ] while

### Pergunta 4
O que acontece com `continue` em um loop?
- [ ] Para o loop completamente
- [x] Pula para a próxima iteração
- [ ] Reinicia o loop
- [ ] Gera erro

### Pergunta 5
Qual loop é ideal para arrays quando não precisa do índice?
- [ ] for
- [x] for...of
- [ ] for...in
- [ ] while

### Pergunta 6
Em um loop `for`, quando a condição é verificada?
- [x] Antes de cada iteração
- [ ] Após cada iteração
- [ ] Apenas no início
- [ ] Apenas no final

### Pergunta 7
Qual a saída do seguinte código?
```javascript
for (let i = 0; i < 3; i++) {
  if (i === 1) continue;
  console.log(i);
}
```
- [ ] 0, 1, 2
- [x] 0, 2
- [ ] 1, 2
- [ ] 0, 1

### Pergunta 8
O que é um loop infinito?
- [ ] Um loop que executa muito rápido
- [ ] Um loop com muitas iterações
- [x] Um loop que nunca termina
- [ ] Um loop com break

## 🚀 Desafio Avançado: Sistema de Análise de Dados

Crie um sistema completo de análise de dados que utiliza todos os tipos de loops:

```javascript
class AnalisadorDados {
  constructor() {
    this.dados = [];
    this.filtros = {};
    this.resultados = {};
  }
  
  // Carrega dados (simula carregamento de base de dados)
  carregarDados(dataset) {
    this.dados = [...dataset];
    console.log(`${this.dados.length} registros carregados`);
  }
  
  // Limpa dados inválidos usando while
  limparDados() {
    let dadosLimpos = [];
    let i = 0;
    let removidos = 0;
    
    while (i < this.dados.length) {
      let registro = this.dados[i];
      let valido = true;
      
      // Verifica se o registro é válido
      for (const campo in registro) {
        if (registro[campo] == null || registro[campo] === "") {
          valido = false;
          break;
        }
      }
      
      if (valido) {
        dadosLimpos.push(registro);
      } else {
        removidos++;
      }
      
      i++;
    }
    
    this.dados = dadosLimpos;
    console.log(`Limpeza concluída: ${removidos} registros removidos`);
  }
  
  // Aplica filtros usando for...of
  aplicarFiltros(filtros) {
    this.filtros = {...filtros};
    let dadosFiltrados = [];
    
    for (const registro of this.dados) {
      let passouNoFiltro = true;
      
      for (const [campo, valor] of Object.entries(this.filtros)) {
        if (registro[campo] !== valor) {
          passouNoFiltro = false;
          break;
        }
      }
      
      if (passouNoFiltro) {
        dadosFiltrados.push(registro);
      }
    }
    
    console.log(`Filtros aplicados: ${dadosFiltrados.length} registros restantes`);
    return dadosFiltrados;
  }
  
  // Agrupa dados usando for...in
  agruparPor(campo) {
    let grupos = {};
    
    for (const registro of this.dados) {
      let chave = registro[campo];
      
      if (!grupos[chave]) {
        grupos[chave] = [];
      }
      
      grupos[chave].push(registro);
    }
    
    // Calcula estatísticas para cada grupo
    for (const grupo in grupos) {
      if (grupos.hasOwnProperty(grupo)) {
        let registros = grupos[grupo];
        let stats = this.calcularEstatisticas(registros);
        grupos[grupo] = {registros, stats};
      }
    }
    
    return grupos;
  }
  
  // Calcula estatísticas usando for tradicional
  calcularEstatisticas(registros) {
    let stats = {
      count: registros.length,
      campos: {}
    };
    
    // Identifica campos numéricos
    for (let i = 0; i < registros.length; i++) {
      for (const campo in registros[i]) {
        if (typeof registros[i][campo] === 'number') {
          if (!stats.campos[campo]) {
            stats.campos[campo] = {
              soma: 0,
              min: Infinity,
              max: -Infinity,
              valores: []
            };
          }
        }
      }
    }
    
    // Calcula valores
    for (let i = 0; i < registros.length; i++) {
      for (const campo in stats.campos) {
        let valor = registros[i][campo];
        
        stats.campos[campo].soma += valor;
        stats.campos[campo].valores.push(valor);
        
        if (valor < stats.campos[campo].min) {
          stats.campos[campo].min = valor;
        }
        
        if (valor > stats.campos[campo].max) {
          stats.campos[campo].max = valor;
        }
      }
    }
    
    // Calcula médias
    for (const campo in stats.campos) {
      stats.campos[campo].media = stats.campos[campo].soma / stats.count;
    }
    
    return stats;
  }
  
  // Busca registros usando do...while
  buscarRegistros(criterios, limite = 10) {
    let resultados = [];
    let indice = 0;
    
    do {
      if (indice >= this.dados.length) break;
      
      let registro = this.dados[indice];
      let atendeCriterios = true;
      
      for (const [campo, valor] of Object.entries(criterios)) {
        if (typeof valor === 'string') {
          if (!registro[campo].toString().toLowerCase().includes(valor.toLowerCase())) {
            atendeCriterios = false;
            break;
          }
        } else {
          if (registro[campo] !== valor) {
            atendeCriterios = false;
            break;
          }
        }
      }
      
      if (atendeCriterios) {
        resultados.push(registro);
      }
      
      indice++;
    } while (resultados.length < limite && indice < this.dados.length);
    
    return resultados;
  }
  
  // Gera relatório completo
  gerarRelatorio() {
    console.log("=== RELATÓRIO COMPLETO ===");
    console.log(`Total de registros: ${this.dados.length}`);
    
    if (Object.keys(this.filtros).length > 0) {
      console.log("Filtros aplicados:", this.filtros);
    }
    
    let stats = this.calcularEstatisticas(this.dados);
    
    console.log("\nEstatísticas Gerais:");
    for (const campo in stats.campos) {
      let estatistica = stats.campos[campo];
      console.log(`${campo}:`);
      console.log(`  Soma: ${estatistica.soma}`);
      console.log(`  Média: ${estatistica.media.toFixed(2)}`);
      console.log(`  Min: ${estatistica.min}`);
      console.log(`  Max: ${estatistica.max}`);
    }
  }
}

// Dados de exemplo para teste
let dadosVendas = [
  {id: 1, produto: "Notebook", categoria: "eletrônicos", preco: 2500, quantidade: 2, vendedor: "João"},
  {id: 2, produto: "Mouse", categoria: "eletrônicos", preco: 80, quantidade: 5, vendedor: "Maria"},
  {id: 3, produto: "Livro", categoria: "livros", preco: 45, quantidade: 3, vendedor: "Pedro"},
  {id: 4, produto: "Camisa", categoria: "roupas", preco: 120, quantidade: 1, vendedor: "João"},
  {id: 5, produto: "Monitor", categoria: "eletrônicos", preco: 800, quantidade: 1, vendedor: "Maria"},
  {id: 6, produto: "", categoria: "livros", preco: null, quantidade: 2, vendedor: "Ana"}, // Dados inválidos
  {id: 7, produto: "Tênis", categoria: "roupas", preco: 200, quantidade: 1, vendedor: "Pedro"},
  {id: 8, produto: "Tablet", categoria: "eletrônicos", preco: 1200, quantidade: 1, vendedor: "João"}
];

// Teste do sistema
let analisador = new AnalisadorDados();
analisador.carregarDados(dadosVendas);
analisador.limparDados();

// Análise por categoria
let gruposPorCategoria = analisador.agruparPor("categoria");
console.log("\nAnálise por Categoria:");
for (const categoria in gruposPorCategoria) {
  console.log(`\n${categoria.toUpperCase()}:`);
  console.log(`  Registros: ${gruposPorCategoria[categoria].stats.count}`);
  
  let precos = gruposPorCategoria[categoria].stats.campos.preco;
  if (precos) {
    console.log(`  Preço médio: R$ ${precos.media.toFixed(2)}`);
    console.log(`  Faixa de preço: R$ ${precos.min} - R$ ${precos.max}`);
  }
}

// Busca personalizada
let produtosCaros = analisador.buscarRegistros({}, 20).filter(item => item.preco > 100);
console.log("\nProdutos caros encontrados:");
for (const produto of produtosCaros) {
  console.log(`- ${produto.produto}: R$ ${produto.preco}`);
}

analisador.gerarRelatorio();
```

## 💡 Dicas para Resolução

1. **Escolha do loop**: Use `for` para contadores, `for...of` para valores, `for...in` para propriedades
2. **Performance**: Cache o length de arrays em loops longos
3. **Legibilidade**: Prefira `for...of` quando não precisar do índice
4. **Segurança**: Sempre altere a condição em loops `while`
5. **Controle de fluxo**: Use `break` para sair, `continue` para pular
6. **Debugging**: Use `console.log` para acompanhar iterações

---

**⏱️ Tempo estimado de prática**: 4-5 horas
**🏆 Nível**: Intermediário a Avançado
**📝 Tags**: #javascript #loops #iteração #for #while #algoritmos #exercícios
