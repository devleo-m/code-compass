# Aula 9: Expressões e Operadores em JavaScript - A Linguagem dos Cálculos e Decisões

Hoje vamos conversar sobre um dos tópicos mais fundamentais do JavaScript: **expressões e operadores**. Sabe aquela sensação quando você vê um código e pensa "como esse `+` funciona aqui?" ou "por que às vezes uso `==` e outras vezes `===`?" 

Pois é! Hoje você vai entender tudo isso de uma vez por todas. Os operadores são como as ferramentas básicas de um carpinteiro - você precisa saber exatamente quando e como usar cada uma delas.

## 🤔 Por Que Isso É Tão Importante?

Olha só, vou te contar uma coisa: **operadores estão em LITERALMENTE cada linha de código** que você vai escrever. Não é exagero! 

Quer ver alguns exemplos do dia a dia?

```javascript
// Calculando o preço com desconto em um e-commerce
let precoFinal = precoOriginal * (1 - desconto);

// Verificando se o usuário pode acessar algo
if (usuario.idade >= 18 && usuario.ativo === true) {
  // permitir acesso
}

// Contando quantos itens tem no carrinho
carrinho.length++;
```

Viu? Operadores em **toda parte**! E se você não entender bem como eles funcionam, vai ficar travado ou, pior ainda, vai criar bugs sem perceber.

## 🧮 Vamos Começar: O Que São Expressões?

Antes de falarmos dos operadores, preciso te explicar o que é uma **expressão**. É bem simples:

> **Expressão** = qualquer pedaço de código que produz um valor

Pensa assim: quando você escreve `2 + 3`, isso é uma expressão que produz o valor `5`. Quando você escreve `nome`, isso é uma expressão que produz o valor que está armazenado na variável `nome`.

Existem dois tipos principais:

### 1. Expressões que Apenas Calculam
```javascript
5 + 3        // Produz 8, só isso
"Olá" + " mundo"  // Produz "Olá mundo"
10 > 5       // Produz true
```

### 2. Expressões que Fazem Algo E Calculam
```javascript
x = 10       // Atribui 10 para x E retorna 10
contador++   // Incrementa contador E retorna o valor
```

**Por que isso importa?** Porque entender isso te ajuda a ler código complexo. Quando você vê algo como:

```javascript
let resultado = (x = 5) + (y = 3);
```

Você sabe que `x = 5` produz o valor 5, `y = 3` produz o valor 3, e o resultado final será 8. E de quebra, x vira 5 e y vira 3!

Agora que você entendeu o conceito, vamos para os operadores propriamente ditos!

**Características das Expressões:**

```javascript
// 1. Toda expressão produz um valor
console.log(5 + 3);        // 8
console.log(x = 10);       // 10 (valor da atribuição)
console.log(x++);          // 10 (valor antes do incremento)
console.log(++x);          // 12 (valor após o incremento)

// 2. Expressões podem ser aninhadas
let complexa = ((x + 5) * 2) - (x / 2);

// 3. Expressões podem ter diferentes tipos de retorno
let numero = 42;           // number
let texto = "olá";         // string
let booleano = x > 5;      // boolean
let objeto = {nome: "João"}; // object

// 4. Expressões podem ser usadas onde valores são esperados
let array = [1 + 1, 2 * 3, x, "texto"];
let obj = {
  idade: 25 + 5,
  nome: "João" + " Silva",
  ativo: true && x > 0
};
```

## 🔢 Operadores Aritméticos: Fazendo as Contas

Beleza, agora vamos falar dos operadores que você já conhece da matemática, mas que em JavaScript têm algumas pegadinhas interessantes!

### Os Básicos que Você Já Conhece

Vou começar com os que são óbvios:

```javascript
let idade = 25;
let anosParaAposentar = 40;

// Adição (+) - soma normal
let idadeAposentadoria = idade + anosParaAposentar;  // 65
console.log(idadeAposentadoria);

// Subtração (-) - diminuição normal  
let tempoRestante = anosParaAposentar - 10;  // 30
console.log(tempoRestante);

// Multiplicação (*) - vezes normal
let salario = 5000;
let salarioAnual = salario * 12;  // 60000
console.log(salarioAnual);

// Divisão (/) - dividir normal
let salarioPorDia = salario / 30;  // 166.666...
console.log(salarioPorDia);
```

Até aqui, nada de novo, né? Mas agora vem as partes interessantes...

### O Operador + Tem Uma Personalidade Dupla! 🎭

Olha só essa pegadinha que pega todo mundo:

```javascript
// Quando são números, ele soma
console.log(5 + 3);        // 8 ✅

// Mas quando uma das partes é string, ele "cola" (concatena)
console.log("5" + 3);      // "53" ⚠️
console.log("R$ " + 100);  // "R$ 100" ✅

// E isso pode gerar confusão:
let idade = 25;
console.log("Sua idade é " + idade + " anos");  // "Sua idade é 25 anos" ✅
console.log("Daqui a " + 5 + 10 + " anos...");  // "Daqui a 510 anos..." ❌
console.log("Daqui a " + (5 + 10) + " anos..."); // "Daqui a 15 anos..." ✅
```

**Por que isso acontece?** Porque o JavaScript é "educado" - quando ele vê uma string, ele pensa: "Ah, a pessoa quer juntar texto!". 

**Dica prática:** Sempre use parênteses quando quiser somar números que estão junto com strings!

### Divisão: Cuidado com o Zero!

```javascript
console.log(10 / 2);    // 5 (normal)
console.log(10 / 3);    // 3.333... (com decimais)
console.log(10 / 0);    // Infinity ⚠️
console.log(-10 / 0);   // -Infinity ⚠️

// Na vida real, você vai querer verificar:
function dividirSeguro(a, b) {
  if (b === 0) {
    return "Não dá pra dividir por zero!";
  }
  return a / b;
}
```

### Módulo (%): O "Resto da Divisão"

Esse operador é **SUPER** útil e muita gente não conhece:

```javascript
// O % te dá o "resto" da divisão
console.log(10 % 3);    // 1 (10 ÷ 3 = 3, sobra 1)
console.log(17 % 5);    // 2 (17 ÷ 5 = 3, sobra 2)

// Casos super práticos:
// 1. Saber se um número é par ou ímpar
function ehPar(numero) {
  return numero % 2 === 0;  // Se o resto da divisão por 2 é 0, é par!
}

console.log(ehPar(4));   // true
console.log(ehPar(7));   // false

// 2. Fazer algo "de X em X vezes"
for (let i = 1; i <= 20; i++) {
  if (i % 5 === 0) {  // A cada 5 números
    console.log(`${i} é múltiplo de 5!`);
  }
}
// Output: 5 é múltiplo de 5! 10 é múltiplo de 5! 15 é múltiplo de 5! 20 é múltiplo de 5!

// 3. Criar ciclos (tipo semáforo)
let cores = ["vermelho", "amarelo", "verde"];
for (let segundo = 0; segundo < 10; segundo++) {
  let corAtual = cores[segundo % 3];  // Cicla entre 0, 1, 2, 0, 1, 2...
  console.log(`Segundo ${segundo}: ${corAtual}`);
}
```

### Exponenciação (**): Potência Moderna

```javascript
// Isso é novo! Antes era Math.pow()
console.log(2 ** 3);       // 8 (2 elevado a 3)
console.log(10 ** 2);      // 100 (10 ao quadrado)

// Casos práticos:
// 1. Calcular área de quadrado
let lado = 5;
let area = lado ** 2;      // 25

// 2. Calcular juros compostos (simplificado)
let capital = 1000;
let taxa = 1.05;  // 5% ao mês
let meses = 12;
let montante = capital * (taxa ** meses);
console.log(`Após ${meses} meses: R$ ${montante.toFixed(2)}`);

// 3. Raízes! (usando frações)
console.log(16 ** 0.5);    // 4 (raiz quadrada de 16)
console.log(27 ** (1/3));  // 3 (raiz cúbica de 27)
```

Percebeu como cada operador tem sua personalidade e casos de uso específicos? Isso é o que torna JavaScript interessante!

### Incremento e Decremento: ++ e --

Esses dois são MUITO importantes e confundem muita gente no começo. Vou explicar de um jeito que você nunca mais vai esquecer:

```javascript
let likes = 10;

// ++ significa "adiciona 1"
// -- significa "subtrai 1"

// Mas a posição IMPORTA!
console.log(likes++);  // Mostra 10, MAS depois likes vira 11
console.log(likes);    // Agora é 11

likes = 10;  // Resetando
console.log(++likes);  // likes vira 11 PRIMEIRO, depois mostra 11
console.log(likes);    // Continua 11
```

**Como lembrar da diferença?**

> **++variável** = "Primeiro aumenta, depois usa"  
> **variável++** = "Primeiro usa, depois aumenta"

Vou te dar exemplos práticos onde isso importa:

```javascript
// Exemplo 1: Contador de curtidas em tempo real
let curtidas = 0;

function curtir() {
  // Queremos mostrar o número DEPOIS de curtir
  return ++curtidas;  // Incrementa ANTES de retornar
}

console.log(curtir());  // 1
console.log(curtir());  // 2
console.log(curtir());  // 3

// Exemplo 2: Processando itens de uma lista
let produtos = ["Notebook", "Mouse", "Teclado"];
let indice = 0;

// Queremos usar o índice atual e DEPOIS passar pro próximo
while (indice < produtos.length) {
  console.log(`Produto ${indice + 1}: ${produtos[indice]}`);
  indice++;  // Aqui tanto faz ++ antes ou depois
}

// Exemplo 3: Onde a diferença é crucial
let numeros = [10, 20, 30];
let i = 0;

// Compare estes dois:
console.log(numeros[i++]);  // Pega numeros[0], depois i vira 1
console.log(numeros[i++]);  // Pega numeros[1], depois i vira 2

// vs

i = 0;
console.log(numeros[++i]);  // i vira 1, pega numeros[1]
console.log(numeros[++i]);  // i vira 2, pega numeros[2]
```

**Dica:** Na dúvida, use eles em linhas separadas:
```javascript
// Em vez de:
console.log(array[i++]);

// Faça:
console.log(array[i]);
i++;
```

É mais claro e evita confusão!

**Casos Especiais e Conversões:**

```javascript
// Conversão automática para números
console.log("10" - 5);     // 5 (string convertida)
console.log("10" * 2);     // 20
console.log("10" / 2);     // 5
console.log("abc" * 2);    // NaN

// Precedência de operadores
console.log(2 + 3 * 4);    // 14 (não 20)
console.log((2 + 3) * 4);  // 20

// Associatividade
console.log(2 ** 3 ** 2);  // 512 (2^(3^2), não (2^3)^2)
console.log(8 / 4 / 2);    // 1 (da esquerda para direita)

// Operações com diferentes tipos
console.log(true + 1);     // 2
console.log(false * 10);   // 0
console.log(null + 5);     // 5
console.log(undefined + 5); // NaN
```

## ⚖️ Operadores de Comparação: As Decisões do Código

Agora chegamos numa parte **SUPER** importante! Os operadores de comparação são os que fazem seu código "tomar decisões". Todo `if`, `while`, `for` usa eles.

### Os Simples: >, <, >=, <=

Esses você já conhece da matemática:

```javascript
let idade = 25;
let idadeMinima = 18;

console.log(idade > idadeMinima);   // true (25 > 18)
console.log(idade >= 25);          // true (25 >= 25)
console.log(idade < 30);           // true (25 < 30)
console.log(idade <= 20);          // false (25 <= 20)

// Casos práticos:
if (idade >= 18) {
  console.log("Pode dirigir!");
}

if (idade < 65) {
  console.log("Ainda não se aposentou");
}
```

Fácil, né? Mas agora vem a parte que TODO mundo erra...

### A Grande Confusão: == vs ===

Esta é **A** pegadinha do JavaScript que mais gera bugs. Presta atenção:

```javascript
let numero = 5;
let texto = "5";

// Dois sinais de igual (==) - "Igualdade relaxada"
console.log(numero == texto);   // true ⚠️

// Três sinais de igual (===) - "Igualdade rigorosa"  
console.log(numero === texto);  // false ✅
```

**O que está acontecendo?**

- `==` fala: "São iguais? Deixa eu tentar converter um pro tipo do outro..."
- `===` fala: "São iguais E do mesmo tipo? Se não, já era."

Vou te mostrar por que isso é importante:

```javascript
// Exemplos que vão te assustar:
console.log(0 == false);        // true ⚠️
console.log("" == false);       // true ⚠️
console.log(null == undefined); // true ⚠️
console.log(1 == true);         // true ⚠️

// Mas com ===:
console.log(0 === false);       // false ✅
console.log("" === false);      // false ✅
console.log(null === undefined);// false ✅
console.log(1 === true);        // false ✅
```

**Cenário real onde isso quebra tudo:**

```javascript
function verificarSeTemIdade(idade) {
  // ❌ PERIGOSO:
  if (idade == 18) {
    return "Pode dirigir!";
  }
  
  // ✅ CORRETO:
  if (idade === 18) {
    return "Pode dirigir!";
  }
}

// O problema:
console.log(verificarSeTemIdade("18"));  // Com == retorna "Pode dirigir!"
console.log(verificarSeTemIdade(true)); // Com == também retorna "Pode dirigir!" 😱
```

**Regra de ouro:** 
> Use **SEMPRE** `===` e `!==`. Só use `==` e `!=` quando você REALMENTE souber o que está fazendo.

### Comparando Strings: A Ordem Alfabética

```javascript
console.log("a" < "b");         // true
console.log("apple" < "banana"); // true
console.log("João" < "Maria");   // true

// MAS cuidado com maiúsculas:
console.log("A" < "a");         // true (maiúscula vem "antes")
console.log("JOÃO" < "joão");   // true

// E MUITO cuidado com números como strings:
console.log("10" < "2");        // true ⚠️ (porque "1" < "2")
console.log("10" < "9");        // true ⚠️ (porque "1" < "9")

// Para números, converta antes:
console.log(Number("10") < Number("2"));  // false ✅
```

**Caso prático:** ordenando nomes de forma correta:

```javascript
let nomes = ["joão", "Ana", "carlos", "MARIA"];

// Ordenação que considera maiúsculas/minúsculas:
nomes.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
console.log(nomes); // ["Ana", "carlos", "joão", "MARIA"]
```

### Comparações Perigosas

Tem uns casos que você precisa saber que existem:

```javascript
// NaN é esquisito:
console.log(NaN == NaN);    // false ⚠️
console.log(NaN === NaN);   // false ⚠️

// Para verificar NaN:
console.log(Number.isNaN(NaN));        // true ✅
console.log(Number.isNaN("abc"));      // false
console.log(Number.isNaN(Number("abc"))); // true

// null e undefined:
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null === null);       // true
console.log(undefined === undefined); // true
```

**Por que isso importa na vida real?**

```javascript
function buscarUsuario(id) {
  // Simula uma busca que pode retornar null
  let usuarios = {1: "João", 2: "Maria"};
  return usuarios[id] || null;
}

let usuario = buscarUsuario(3);

// ❌ Problemático:
if (usuario == null) {
  console.log("Usuário não encontrado");
}

// ✅ Melhor:
if (usuario === null || usuario === undefined) {
  console.log("Usuário não encontrado");
}

// ✅ Ainda melhor:
if (!usuario) {
  console.log("Usuário não encontrado");
}
```

A grande lição aqui é: **seja específico nas suas comparações**. Isso evita 90% dos bugs relacionados a condições!

**Comparações com Strings:**

```javascript
// Comparação lexicográfica (ordem alfabética)
console.log("a" < "b");    // true
console.log("apple" < "banana"); // true
console.log("A" < "a");    // true (maiúscula vem antes)

// Cuidado com números como strings
console.log("10" < "9");   // true (comparação de strings!)
console.log("10" < "2");   // true (lexicográfica)

// Comparação correta de números em strings
console.log(Number("10") < Number("9")); // false
console.log(parseInt("10") < parseInt("9")); // false

// Comparações úteis
function compararNomes(nome1, nome2) {
  return nome1.toLowerCase() < nome2.toLowerCase();
}

console.log(compararNomes("João", "Ana")); // false
console.log(compararNomes("Ana", "João")); // true
```

**Casos Especiais:**

```javascript
// Comparações com NaN
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false
console.log(NaN < 5);      // false
console.log(NaN > 5);      // false

// Verificação de NaN
console.log(Number.isNaN(NaN));  // true
console.log(isNaN("abc"));       // true

// Comparações com Infinity
console.log(Infinity > 1000000); // true
console.log(-Infinity < -1000000); // true
console.log(Infinity === Infinity); // true

// Comparações com null e undefined
console.log(null == 0);    // false
console.log(null >= 0);    // true (conversão para 0)
console.log(null > 0);     // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
```

## 🧠 Operadores Lógicos: As Decisões Inteligentes

Agora vamos falar dos operadores que fazem seu código "pensar"! Eles são usados quando você precisa combinar várias condições.

### AND (&&): "Precisa de TUDO"

O `&&` é como aquele amigo exigente - só fica satisfeito se TODAS as condições forem verdadeiras:

```javascript
let idade = 25;
let temCarteira = true;
let temCarro = true;

// Para dirigir, precisa ter idade E carteira E carro
if (idade >= 18 && temCarteira && temCarro) {
  console.log("Pode dirigir!");
}

// Se qualquer um for false, o resultado é false:
console.log(true && true);    // true ✅
console.log(true && false);   // false ❌
console.log(false && true);   // false ❌
console.log(false && false);  // false ❌
```

**Casos práticos:**
```javascript
// Validando formulário de cadastro
function podeEnviarFormulario(nome, email, senha) {
  return nome !== "" && 
         email.includes("@") && 
         senha.length >= 6;
}

// Sistema de acesso
function podeAcessarAdmin(usuario) {
  return usuario.ativo && 
         usuario.tipo === "admin" && 
         usuario.verificado;
}
```

### OR (||): "Basta UM"

O `||` é como aquele amigo de boa - se pelo menos UMA condição for verdadeira, ele já fica feliz:

```javascript
let temCartaoCredito = false;
let temDinheiro = true;
let temPix = false;

// Para pagar, precisa ter pelo menos uma forma de pagamento
if (temCartaoCredito || temDinheiro || temPix) {
  console.log("Pode comprar!");
}

// Só precisa de UM true:
console.log(true || true);    // true ✅
console.log(true || false);   // true ✅
console.log(false || true);   // true ✅
console.log(false || false);  // false ❌
```

**Casos práticos:**
```javascript
// Sistema de login flexível
function podeLogar(usuario, senha, token) {
  return (usuario && senha) || token;  // Login normal OU token
}

// Verificar se é fim de semana
function ehFimDeSemana(data) {
  return data.getDay() === 0 || data.getDay() === 6;  // Domingo OU Sábado
}
```

### NOT (!): "O Contrário"

O `!` é simples - ele inverte tudo:

```javascript
let estaLogado = false;

if (!estaLogado) {
  console.log("Precisa fazer login");
}

// Inversão simples:
console.log(!true);   // false
console.log(!false);  // true
console.log(!!true);  // true (dupla negação = volta ao original)
```

**Casos práticos:**
```javascript
// Verificar se lista está vazia
let carrinho = [];
if (!carrinho.length) {
  console.log("Carrinho vazio");
}

// Verificar se usuário NÃO é admin
function ehUsuarioComum(usuario) {
  return !usuario.admin;
}
```

### O Truque Secreto: Short-Circuit

Esta é uma das partes mais legais! Os operadores `&&` e `||` são "espertos" - eles param de avaliar quando já sabem a resposta:

```javascript
// && para quando encontra o primeiro false
console.log(false && console.log("Isso nunca executa"));

// || para quando encontra o primeiro true  
console.log(true || console.log("Isso nunca executa"));
```

**Por que isso é útil?** Você pode usar para valores padrão e verificações seguras:

```javascript
// Valor padrão simples
let nome = usuario.nome || "Usuário Anônimo";

// Verificação segura (evita erros)
let cidade = usuario && usuario.endereco && usuario.endereco.cidade;

// Chamar função só se existir
usuario.callback && usuario.callback();

// Definir valor só se não existir
configuracao.tema = configuracao.tema || "claro";
```

### Nullish Coalescing (??): O Mais Esperto

Este é novo e MUITO útil! O `??` só considera `null` e `undefined` como "falsy":

```javascript
let config = {
  tema: null,
  debug: false,
  timeout: 0
};

// Com || (problemático):
console.log(config.debug || true);    // true ⚠️ (mas debug É false!)
console.log(config.timeout || 5000);  // 5000 ⚠️ (mas timeout É 0!)

// Com ?? (correto):
console.log(config.debug ?? true);    // false ✅
console.log(config.timeout ?? 5000);  // 0 ✅
console.log(config.tema ?? "claro");  // "claro" ✅
```

**Quando usar cada um:**
- `||` → quando você quer substituir QUALQUER valor "falsy" (false, 0, "", null, undefined)
- `??` → quando você quer substituir APENAS null e undefined

### Combinando Tudo: Lógica Complexa

```javascript
function podeComprar(usuario, produto, pagamento) {
  // Precisa estar logado E ativo
  let usuarioValido = usuario && usuario.ativo;
  
  // Produto disponível OU é pré-venda
  let produtoDisponivel = produto.estoque > 0 || produto.preVenda;
  
  // Tem forma de pagamento válida
  let pagamentoValido = pagamento && (pagamento.cartao || pagamento.pix);
  
  // TODAS as condições devem ser verdadeiras
  return usuarioValido && produtoDisponivel && pagamentoValido;
}

// Uso prático:
let resultado = podeComprar(
  {ativo: true}, 
  {estoque: 0, preVenda: true}, 
  {pix: true}
);
console.log(resultado); // true
```

A beleza dos operadores lógicos é que eles tornam seu código mais expressivo e próximo da linguagem natural!

**Short-Circuit Evaluation:**

```javascript
// && para: falsy
console.log(0 && "não executa");     // 0
console.log("" && "não executa");    // ""
console.log(null && "não executa");  // null
console.log(5 && "executa");         // "executa"

// || para: truthy
console.log(0 || "executa");         // "executa"
console.log("" || "executa");        // "executa"
console.log(null || "executa");      // "executa"
console.log(5 || "não executa");     // 5

// Casos práticos
function saudar(nome) {
  nome = nome || "Visitante";  // Valor padrão
  return "Olá, " + nome;
}

console.log(saudar("João"));   // "Olá, João"
console.log(saudar(""));       // "Olá, Visitante"
console.log(saudar());         // "Olá, Visitante"

// Verificação de existência
let usuario = {nome: "Ana", perfil: {idade: 25}};

// Acesso seguro a propriedades aninhadas
let idade = usuario && usuario.perfil && usuario.perfil.idade;
console.log(idade); // 25

// Com nullish coalescing
let config = {
  tema: null,
  idioma: undefined,
  notificacoes: false
};

let tema = config.tema ?? "claro";              // "claro"
let idioma = config.idioma ?? "português";      // "português"
let notificacoes = config.notificacoes ?? true; // false (não é nullish)
```

**Operadores Lógicos com Valores Não-Boolean:**

```javascript
// Valores truthy e falsy
let valores = [0, "", null, undefined, NaN, false, true, "texto", 1, [], {}];

valores.forEach(valor => {
  console.log(`${valor} é ${valor ? "truthy" : "falsy"}`);
});

// Conversão explícita para boolean
function paraBoolean(valor) {
  return Boolean(valor);
  // ou: return !!valor;
}

console.log(paraBoolean(0));        // false
console.log(paraBoolean("texto"));  // true
console.log(paraBoolean([]));       // true
console.log(paraBoolean({}));       // true

// Lógica condicional avançada
function verificarPermissoes(usuario) {
  return usuario &&
         usuario.ativo &&
         (usuario.tipo === "admin" || usuario.tipo === "moderador") &&
         usuario.verificado !== false;
}

let admin = {ativo: true, tipo: "admin", verificado: true};
let user = {ativo: true, tipo: "user", verificado: true};
let inativo = {ativo: false, tipo: "admin", verificado: true};

console.log(verificarPermissoes(admin));   // true
console.log(verificarPermissoes(user));    // false
console.log(verificarPermissoes(inativo)); // false
```

## 📝 Operadores de Atribuição

Operadores de atribuição atribuem valores às variáveis, muitas vezes combinando com operações.

**Atribuição Básica:**

```javascript
// Atribuição simples (=)
let x = 10;
let y = x;
let z = x + y;

// A atribuição retorna o valor atribuído
console.log(x = 20);  // 20
console.log(x);       // 20

// Atribuições múltiplas
let a, b, c;
a = b = c = 0;  // todos recebem 0
console.log(a, b, c); // 0 0 0

// Destructuring assignment
let [primeiro, segundo] = [1, 2, 3];
console.log(primeiro, segundo); // 1 2

let {nome, idade} = {nome: "João", idade: 30, cidade: "SP"};
console.log(nome, idade); // "João" 30
```

**Operadores Compostos:**

```javascript
let num = 10;

// Adição e atribuição (+=)
num += 5;   // equivale a: num = num + 5
console.log(num); // 15

// Subtração e atribuição (-=)
num -= 3;   // equivale a: num = num - 3
console.log(num); // 12

// Multiplicação e atribuição (*=)
num *= 2;   // equivale a: num = num * 2
console.log(num); // 24

// Divisão e atribuição (/=)
num /= 4;   // equivale a: num = num / 4
console.log(num); // 6

// Módulo e atribuição (%=)
num %= 4;   // equivale a: num = num % 4
console.log(num); // 2

// Exponenciação e atribuição (**=)
num **= 3;  // equivale a: num = num ** 3
console.log(num); // 8

// Com strings
let texto = "Olá";
texto += " mundo"; // "Olá mundo"
texto += "!";      // "Olá mundo!"
console.log(texto);

// Com arrays
let arr = [1, 2];
let novoItem = 3;
arr[arr.length] = novoItem; // adiciona no final
// ou: arr.push(novoItem);
console.log(arr); // [1, 2, 3]
```

**Operadores Lógicos de Atribuição:**

```javascript
// OR lógico e atribuição (||=)
let config = {};
config.tema ||= "claro";    // atribui apenas se falsy
console.log(config.tema);   // "claro"

config.tema ||= "escuro";   // não atribui (já tem valor truthy)
console.log(config.tema);   // "claro"

// AND lógico e atribuição (&&=)
let usuario = {nome: "Ana", ativo: true};
usuario.ativo &&= verificarStatus(); // atribui apenas se truthy

function verificarStatus() {
  return Math.random() > 0.5;
}

// Nullish coalescing e atribuição (??=)
let configuracao = {
  debug: null,
  porta: undefined,
  host: "localhost"
};

configuracao.debug ??= false;     // atribui (é null)
configuracao.porta ??= 3000;      // atribui (é undefined)
configuracao.host ??= "0.0.0.0";  // não atribui (não é nullish)

console.log(configuracao);
// {debug: false, porta: 3000, host: "localhost"}
```

## 🎭 Operador Condicional (Ternário)

O operador ternário é uma forma concisa de escrever condicionais simples.

**Sintaxe Básica:**

```javascript
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso

let idade = 20;
let status = idade >= 18 ? "adulto" : "menor";
console.log(status); // "adulto"

// Equivale a:
let status2;
if (idade >= 18) {
  status2 = "adulto";
} else {
  status2 = "menor";
}

// Em expressões
let resultado = (10 > 5) ? "verdadeiro" : "falso";
console.log(resultado); // "verdadeiro"

// Com chamadas de função
function maiorIdade() { return "adulto"; }
function menorIdade() { return "menor"; }

let categoria = idade >= 18 ? maiorIdade() : menorIdade();
```

**Casos Práticos:**

```javascript
// 1. Valores padrão
function saudar(nome) {
  return "Olá, " + (nome ? nome : "visitante");
  // ou: return "Olá, " + (nome || "visitante");
}

// 2. Formatação condicional
function formatarPreco(preco, moeda) {
  return moeda === "USD" ? `$${preco}` : `R$${preco}`;
}

console.log(formatarPreco(100, "USD")); // "$100"
console.log(formatarPreco(100, "BRL")); // "R$100"

// 3. Validação inline
function validarEmail(email) {
  return email && email.includes("@") ? "válido" : "inválido";
}

// 4. Propriedades condicionais
function criarUsuario(nome, ehAdmin) {
  return {
    nome: nome,
    tipo: ehAdmin ? "admin" : "user",
    permissoes: ehAdmin ? ["ler", "escrever", "deletar"] : ["ler"]
  };
}

// 5. CSS classes condicionais
function obterClasse(ativo, tipo) {
  return `item ${ativo ? "ativo" : "inativo"} ${tipo}`;
}

console.log(obterClasse(true, "primario"));  // "item ativo primario"
console.log(obterClasse(false, "secundario")); // "item inativo secundario"
```

**Ternários Aninhados:**

```javascript
// Múltiplas condições
let nota = 85;
let conceito = nota >= 90 ? "A" :
               nota >= 80 ? "B" :
               nota >= 70 ? "C" :
               nota >= 60 ? "D" : "F";

console.log(conceito); // "B"

// Melhor legibilidade com função
function obterConceito(nota) {
  if (nota >= 90) return "A";
  if (nota >= 80) return "B";
  if (nota >= 70) return "C";
  if (nota >= 60) return "D";
  return "F";
}

// Ternário para escolher função
let operacao = "soma";
let resultado = operacao === "soma" ? (a, b) => a + b :
                operacao === "mult" ? (a, b) => a * b :
                (a, b) => a - b;

console.log(resultado(5, 3)); // depende da operação
```

## 🔄 Operadores Unários

Operadores unários trabalham com um único operando.

**Tipos de Operadores Unários:**

```javascript
let x = 5;
let y = "10";
let z = true;

// Unário plus (+): converte para número
console.log(+y);       // 10 (string -> number)
console.log(+z);       // 1 (true -> 1)
console.log(+false);   // 0
console.log(+"abc");   // NaN

// Unário minus (-): converte para número e nega
console.log(-y);       // -10
console.log(-z);       // -1
console.log(-false);   // -0

// Typeof: retorna tipo da variável
console.log(typeof x);     // "number"
console.log(typeof y);     // "string"
console.log(typeof z);     // "boolean"
console.log(typeof {});    // "object"
console.log(typeof []);    // "object"
console.log(typeof null);  // "object" (quirk histórico)
console.log(typeof undefined); // "undefined"
console.log(typeof function(){}); // "function"

// Void: sempre retorna undefined
console.log(void 0);       // undefined
console.log(void "abc");   // undefined
console.log(void (1 + 2)); // undefined

// Delete: remove propriedade de objeto
let obj = {a: 1, b: 2, c: 3};
console.log(delete obj.b); // true
console.log(obj);          // {a: 1, c: 3}

// Não funciona com variáveis declaradas
let var1 = 10;
console.log(delete var1);  // false (em strict mode, gera erro)
```

**Incremento e Decremento Detalhado:**

```javascript
// Pré vs Pós operadores
let a = 5;
let b = 5;

console.log("Pré-incremento:");
console.log(++a);  // 6 (incrementa depois retorna)
console.log(a);    // 6

console.log("Pós-incremento:");
console.log(b++);  // 5 (retorna depois incrementa)
console.log(b);    // 6

// Em expressões complexas
let arr = [10, 20, 30];
let i = 0;

console.log(arr[i++] + arr[i++]); // arr[0] + arr[1] = 10 + 20 = 30
console.log(i); // 2

// Cuidados com pré/pós operadores
i = 0;
console.log(arr[++i] + arr[++i]); // arr[1] + arr[2] = 20 + 30 = 50
console.log(i); // 2

// Com objetos
let contador = {valor: 0};
console.log(contador.valor++); // 0
console.log(contador.valor);   // 1
console.log(++contador.valor); // 2
```

## 🏷️ Operador Comma (,)

O operador vírgula avalia múltiplas expressões e retorna o valor da última.

**Uso Básico:**

```javascript
// Avalia da esquerda para direita, retorna o último
let resultado = (1 + 2, 3 + 4, 5 + 6);
console.log(resultado); // 11 (resultado de 5 + 6)

// Comum em loops for
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

// Em atribuições múltiplas
let a, b, c;
a = 1, b = 2, c = 3;
console.log(a, b, c); // 1 2 3

// Cuidado com precedência
let x = (1, 2, 3);  // x = 3
let y = 1, 2, 3;    // Erro de sintaxe!
```

**Casos Práticos:**

```javascript
// 1. Inicializações múltiplas
function exemploComma() {
  let resultado, temp, contador;
  
  return (
    resultado = 0,
    temp = [],
    contador = 0,
    
    // Processamento...
    temp.push(1, 2, 3),
    resultado = temp.reduce((a, b) => a + b),
    contador = temp.length,
    
    // Retorna o último valor
    {resultado, contador}
  );
}

console.log(exemploComma()); // {resultado: 6, contador: 3}

// 2. Side effects em expressões
let dados = [];
let processar = (item) => (dados.push(item), item * 2);

console.log(processar(5)); // 10
console.log(dados);        // [5]

// 3. Múltiplas operações em ternário
let condicao = true;
let valor = condicao ? (console.log("verdadeiro"), 42) : (console.log("falso"), 0);
// Log: "verdadeiro"
console.log(valor); // 42
```

## 🔢 Operadores Bitwise

Operadores bitwise trabalham com representações binárias dos números.

**Operadores Básicos:**

```javascript
// Representações binárias para entendimento
console.log((5).toString(2));  // "101"
console.log((3).toString(2));  // "11"

// AND bitwise (&)
console.log(5 & 3);   // 1
// 101 & 011 = 001

// OR bitwise (|)
console.log(5 | 3);   // 7
// 101 | 011 = 111

// XOR bitwise (^)
console.log(5 ^ 3);   // 6
// 101 ^ 011 = 110

// NOT bitwise (~)
console.log(~5);      // -6
// ~101 = ...11111010 (complemento de dois)

// Left shift (<<)
console.log(5 << 1);  // 10
// 101 << 1 = 1010

console.log(5 << 2);  // 20
// 101 << 2 = 10100

// Right shift (>>)
console.log(20 >> 1); // 10
// 10100 >> 1 = 1010

console.log(20 >> 2); // 5
// 10100 >> 2 = 101

// Zero-fill right shift (>>>)
console.log(-5 >>> 1); // 2147483645
// Preenche com zeros à esquerda
```

**Aplicações Práticas:**

```javascript
// 1. Verificar se número é par
function ehPar(num) {
  return (num & 1) === 0;
}

console.log(ehPar(4));  // true
console.log(ehPar(5));  // false

// 2. Multiplicação/divisão por potências de 2
function multiplicarPor2(num) {
  return num << 1;  // Mais rápido que num * 2
}

function dividirPor2(num) {
  return num >> 1;  // Mais rápido que Math.floor(num / 2)
}

console.log(multiplicarPor2(7)); // 14
console.log(dividirPor2(14));    // 7

// 3. Trocar valores sem variável temporária
let a = 5, b = 3;
a = a ^ b;  // a = 5 ^ 3 = 6
b = a ^ b;  // b = 6 ^ 3 = 5
a = a ^ b;  // a = 6 ^ 5 = 3
console.log(a, b); // 3 5

// 4. Sistema de flags/permissões
const PERMISSOES = {
  LER: 1,      // 001
  ESCREVER: 2, // 010
  DELETAR: 4   // 100
};

let usuarioPermissoes = PERMISSOES.LER | PERMISSOES.ESCREVER; // 011

// Verificar permissão
function temPermissao(usuario, permissao) {
  return (usuario & permissao) !== 0;
}

console.log(temPermissao(usuarioPermissoes, PERMISSOES.LER));      // true
console.log(temPermissao(usuarioPermissoes, PERMISSOES.ESCREVER)); // true
console.log(temPermissao(usuarioPermissoes, PERMISSOES.DELETAR));  // false

// Adicionar permissão
usuarioPermissoes |= PERMISSOES.DELETAR; // 111

// Remover permissão
usuarioPermissoes &= ~PERMISSOES.ESCREVER; // 101
```

## 📝 Operadores de String

JavaScript oferece operadores específicos para manipulação de strings.

**Concatenação:**

```javascript
// Operador + para concatenação
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // "João Silva"

// += para concatenação e atribuição
let mensagem = "Olá";
mensagem += ", ";
mensagem += "mundo!";
console.log(mensagem); // "Olá, mundo!"

// Concatenação com números
console.log("Resultado: " + 42);        // "Resultado: 42"
console.log("5" + 3);                   // "53" (concatenação)
console.log("5" + 3 + 2);               // "532"
console.log(5 + 3 + "2");               // "82" (primeiro soma, depois concatena)

// Template literals (ES6+)
let idade = 25;
let apresentacao = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(apresentacao); // "Meu nome é João e tenho 25 anos."

// Multi-linha com template literals
let html = `
  <div>
    <h1>${nome}</h1>
    <p>Idade: ${idade}</p>
  </div>
`;
```

**Comparação de Strings:**

```javascript
// Comparação lexicográfica
console.log("a" < "b");        // true
console.log("abc" < "abd");    // true
console.log("Apple" < "apple"); // true (maiúscula < minúscula)

// Comparação por comprimento vs lexicográfica
console.log("z" < "aa");       // false (lexicográfica)
console.log("10" < "9");       // true (strings, não números!)

// Comparação case-insensitive
function compararIgnorandoCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compararIgnorandoCase("JavaScript", "javascript")); // true

// Ordenação de strings
let nomes = ["João", "Ana", "Carlos", "Beatriz"];
nomes.sort(); // Ordem lexicográfica
console.log(nomes); // ["Ana", "Beatriz", "Carlos", "João"]

// Ordenação personalizada
nomes.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```

**Operações Avançadas:**

```javascript
// 1. Builder pattern para strings
class StringBuilder {
  constructor() {
    this.parts = [];
  }
  
  append(str) {
    this.parts.push(str);
    return this; // Para chaining
  }
  
  prepend(str) {
    this.parts.unshift(str);
    return this;
  }
  
  toString() {
    return this.parts.join("");
  }
}

let sb = new StringBuilder();
let resultado = sb
  .append("Olá")
  .append(" ")
  .append("mundo")
  .prepend("Mensagem: ")
  .toString();

console.log(resultado); // "Mensagem: Olá mundo"

// 2. Interpolação avançada
function formatarTemplate(template, dados) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return dados[key] || match;
  });
}

let template = "Olá {nome}, você tem {idade} anos e mora em {cidade}.";
let dados = {nome: "Maria", idade: 30, cidade: "Rio de Janeiro"};
console.log(formatarTemplate(template, dados));

// 3. Escape de caracteres especiais
function escaparHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

console.log(escaparHTML('<div class="test">Hello & goodbye</div>'));
```

## 🔢 Operadores BigInt

BigInt permite trabalhar com números inteiros de precisão arbitrária.

**Criação e Operações Básicas:**

```javascript
// Criação de BigInt
let big1 = 123456789012345678901234567890n; // literal 'n'
let big2 = BigInt("987654321098765432109876543210");
let big3 = BigInt(123); // de number (apenas inteiros)

console.log(typeof big1); // "bigint"

// Operações aritméticas
console.log(big1 + big2); // soma
console.log(big1 - big2); // subtração
console.log(big1 * 2n);   // multiplicação (deve ser BigInt)
console.log(big1 / 3n);   // divisão (resultado inteiro)
console.log(big1 % 7n);   // módulo
console.log(big1 ** 2n);  // exponenciação

// Comparações
console.log(big1 > big2);     // false
console.log(big1 === big1);   // true
console.log(big1 == 123n);    // false

// Conversões
console.log(Number(123n));    // 123 (cuidado com precisão)
console.log(String(big1));    // string representation
console.log(big1.toString()); // string representation
```

**Limitações e Cuidados:**

```javascript
// Não pode misturar BigInt com Number
// console.log(123n + 456);     // TypeError!
console.log(123n + BigInt(456)); // OK

// Não pode usar operadores unários de Number
// console.log(+123n);          // TypeError!
// console.log(Math.sqrt(123n)); // TypeError!

// Unsigned right shift não suportado
// console.log(123n >>> 1n);    // SyntaxError!

// Comparação com Number (cuidado!)
console.log(123n == 123);     // true (coerção)
console.log(123n === 123);    // false (tipos diferentes)
console.log(123n < 124);      // true (coerção funciona)
```

**Casos de Uso Práticos:**

```javascript
// 1. Cálculos de alta precisão
function fatorial(n) {
  if (n <= 1n) return 1n;
  return n * fatorial(n - 1n);
}

console.log(fatorial(20n)); // Resultado exato, sem overflow
console.log(fatorial(100n)); // Número muito grande!

// 2. Identificadores únicos
function gerarId() {
  return BigInt(Date.now()) * 1000000n + BigInt(Math.floor(Math.random() * 1000000));
}

console.log(gerarId()); // ID único baseado em timestamp

// 3. Manipulação de moedas/valores monetários
class Dinheiro {
  constructor(centavos) {
    this.centavos = BigInt(centavos);
  }
  
  static fromReais(reais) {
    return new Dinheiro(BigInt(Math.round(reais * 100)));
  }
  
  somar(outro) {
    return new Dinheiro(this.centavos + outro.centavos);
  }
  
  multiplicar(fator) {
    return new Dinheiro(this.centavos * BigInt(fator));
  }
  
  toReais() {
    return Number(this.centavos) / 100;
  }
  
  toString() {
    return `R$ ${this.toReais().toFixed(2)}`;
  }
}

let preco = Dinheiro.fromReais(19.99);
let quantidade = 3;
let total = preco.multiplicar(quantidade);

console.log(`${quantidade}x ${preco} = ${total}`);
```

## 📊 Precedência e Associatividade

Entender a ordem de avaliação dos operadores é crucial para escrever código correto.

**Tabela de Precedência (maior para menor):**

```javascript
// 1. Acesso a membro, chamada de função
console.log(obj.prop);     // obj.prop primeiro
console.log(func());       // func() primeiro

// 2. new (com argumentos)
let date = new Date(2023, 0, 1);

// 3. Pós-incremento/decremento
let x = 5;
console.log(x++);  // x++ depois de usar

// 4. Unários, pré-incremento/decremento
console.log(-x);   // -x primeiro
console.log(++x);  // ++x primeiro

// 5. Exponenciação (**)
console.log(2 ** 3 ** 2);  // 2 ** (3 ** 2) = 2 ** 9 = 512

// 6. Multiplicação, divisão, módulo
console.log(2 + 3 * 4);    // 2 + (3 * 4) = 14

// 7. Adição, subtração
console.log(10 - 5 + 2);   // (10 - 5) + 2 = 7

// 8. Shifts bitwise
console.log(8 >> 1 + 1);   // 8 >> (1 + 1) = 8 >> 2 = 2

// 9. Relacionais
console.log(5 + 1 > 3 * 2); // (5 + 1) > (3 * 2) = 6 > 6 = false

// 10. Igualdade
console.log(1 + 1 == 2);   // (1 + 1) == 2 = true

// 11. Bitwise AND, XOR, OR
console.log(1 | 2 & 3);    // 1 | (2 & 3) = 1 | 2 = 3

// 12. Lógicos (&&, ||)
console.log(false || true && false); // false || (true && false) = false

// 13. Ternário
console.log(true ? 1 + 2 : 3 + 4);  // true ? (1 + 2) : (3 + 4) = 3

// 14. Atribuição
console.log(x = 2 + 3);    // x = (2 + 3) = 5

// 15. Comma
console.log((1 + 2, 3 + 4)); // (1 + 2), (3 + 4) = 7
```

**Exemplos de Pegadinhas:**

```javascript
// Cuidado com precedência
console.log(2 + 3 * 4);      // 14, não 20
console.log((2 + 3) * 4);    // 20

console.log(5 + 1 * 2 - 3);  // 4, não 9
console.log((5 + 1) * (2 - 3)); // -6

// Associatividade da exponenciação (direita para esquerda)
console.log(2 ** 3 ** 2);    // 512 (2 ** (3 ** 2))
console.log((2 ** 3) ** 2);  // 64

// Atribuição (direita para esquerda)
let a, b, c;
a = b = c = 5;               // c = 5, b = c, a = b
console.log(a, b, c);        // 5 5 5

// Operadores lógicos
console.log(true || false && false);  // true (&& tem precedência)
console.log((true || false) && false); // false
```

## 💡 Boas Práticas

**1. Use parênteses para clareza:**
```javascript
// ❌ Ambíguo
let resultado = a + b * c - d / e;

// ✅ Claro
let resultado = a + (b * c) - (d / e);
```

**2. Prefira === sobre ==:**
```javascript
// ❌ Evite
if (value == "5") { }

// ✅ Prefira
if (value === "5") { }
```

**3. Use operadores apropriados para cada situação:**
```javascript
// ✅ Para valores padrão
let config = userConfig || defaultConfig;

// ✅ Para verificar null/undefined especificamente
let value = setting ?? defaultValue;

// ✅ Para incremento simples
counter++;

// ✅ Para concatenação de strings
let message = `Hello, ${name}!`;
```

**4. Cuidado com conversões automáticas:**
```javascript
// ❌ Problemático
console.log("10" - 5);    // 5 (conversão inesperada)

// ✅ Explícito
console.log(Number("10") - 5); // 5
```

---

**💡 Dica Profissional**: Operadores são a base de todas as expressões JavaScript. Domine sua precedência, associatividade e comportamentos especiais para escrever código mais eficiente e evitar bugs sutis.

**⏱️ Tempo estimado de estudo**: 4-5 horas
**🏆 Nível**: Intermediário
**📝 Tags**: #javascript #operadores #expressões #precedência #aritméticos #lógicos #comparação
