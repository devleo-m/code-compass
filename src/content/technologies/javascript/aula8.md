# Aula 8: Controle de Fluxo em JavaScript - Dominando Condicionais e Tratamento de Erros

## 🎯 Objetivos de Aprendizado
- Compreender como o controle de fluxo funciona em JavaScript
- Dominar estruturas condicionais: if, if...else, switch
- Aplicar operadores de comparação e lógicos
- Implementar tratamento de exceções com try, catch, finally
- Utilizar throw para lançar exceções personalizadas
- Trabalhar com diferentes tipos de Error
- Criar sistemas robustos de validação e recuperação de erros
- Aplicar boas práticas no controle de fluxo

## 🔀 O Que É Controle de Fluxo?

O controle de fluxo em JavaScript é a maneira como seu código é executado, linha por linha, de cima para baixo. Por padrão, o JavaScript executa sequencialmente, mas podemos alterar esse fluxo usando estruturas de controle como condicionais, loops e tratamento de exceções.

**Fluxo Normal:**
```javascript
console.log("Primeira linha");    // 1º a executar
console.log("Segunda linha");     // 2º a executar
console.log("Terceira linha");    // 3º a executar
```

**Fluxo Alterado:**
```javascript
console.log("Início");            // 1º a executar

if (condicao) {
  console.log("Só executa se verdadeiro");  // Pode ou não executar
}

console.log("Fim");               // Sempre executa
```

**Estruturas que Alteram o Fluxo:**
- **Condicionais**: `if`, `else`, `switch`
- **Loops**: `for`, `while`, `do...while`
- **Funções**: Chamadas e retornos
- **Exceções**: `try`, `catch`, `throw`
- **Controle**: `break`, `continue`, `return`

## 🔀 Estruturas Condicionais

### if e if...else

A estrutura `if` executa um bloco de código apenas se uma condição for verdadeira (truthy).

**Sintaxe Básica:**
```javascript
if (condição) {
  // código executado se condição for truthy
}

if (condição) {
  // código se verdadeiro
} else {
  // código se falso
}

if (condição1) {
  // código para condição1
} else if (condição2) {
  // código para condição2
} else {
  // código se nenhuma condição for verdadeira
}
```

**Exemplos Básicos:**

```javascript
// if simples
let idade = 18;
if (idade >= 18) {
  console.log("Maior de idade");
}

// if...else
let numero = 7;
if (numero % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}

// if...else if...else
let nota = 85;
if (nota >= 90) {
  console.log("Conceito A");
} else if (nota >= 80) {
  console.log("Conceito B");
} else if (nota >= 70) {
  console.log("Conceito C");
} else if (nota >= 60) {
  console.log("Conceito D");
} else {
  console.log("Conceito F");
}
```

**Valores Truthy e Falsy:**

```javascript
// Valores Falsy (considerados false)
if (false) { }        // false
if (0) { }           // zero
if (-0) { }          // zero negativo
if (0n) { }          // BigInt zero
if ("") { }          // string vazia
if (null) { }        // null
if (undefined) { }   // undefined
if (NaN) { }         // Not a Number

// Valores Truthy (considerados true)
if (true) { }        // true
if (1) { }           // qualquer número != 0
if ("texto") { }     // string não vazia
if ([]) { }          // array (mesmo vazio)
if ({}) { }          // objeto (mesmo vazio)
if (function() {}) { } // função

// Exemplos práticos
let usuario = {nome: "João"};
if (usuario) {
  console.log("Usuário existe:", usuario.nome);
}

let lista = [1, 2, 3];
if (lista.length) {
  console.log("Lista tem", lista.length, "elementos");
}

let texto = "";
if (!texto) {
  console.log("Texto está vazio");
}
```

**Operadores de Comparação:**

```javascript
let a = 10;
let b = "10";

// Igualdade
console.log(a == b);   // true (com conversão)
console.log(a === b);  // false (sem conversão)
console.log(a != b);   // false
console.log(a !== b);  // true

// Relacionais
console.log(a > 5);    // true
console.log(a < 20);   // true
console.log(a >= 10);  // true
console.log(a <= 10);  // true

// Strings
console.log("abc" < "def");  // true (ordem alfabética)
console.log("10" > "2");     // false (comparação lexicográfica)
```

**Operadores Lógicos:**

```javascript
let idade = 25;
let temCarteira = true;
let temCarro = false;

// AND (&&) - todas as condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

// OR (||) - pelo menos uma condição deve ser verdadeira
if (temCarteira || temCarro) {
  console.log("Tem algum meio de transporte");
}

// NOT (!) - inverte o valor booleano
if (!temCarro) {
  console.log("Não tem carro");
}

// Combinações complexas
if ((idade >= 18 && temCarteira) || (idade >= 16 && temPermissao)) {
  console.log("Pode dirigir com restrições");
}

// Short-circuit evaluation
let nome = usuario && usuario.nome;  // Se usuario existe, pega o nome
let nomeDefault = nome || "Anônimo";  // Se nome vazio, usa "Anônimo"
```

**Condicionais Aninhadas:**

```javascript
function verificarAcesso(usuario) {
  if (usuario) {
    if (usuario.ativo) {
      if (usuario.tipo === "admin") {
        console.log("Acesso total concedido");
        return "total";
      } else if (usuario.tipo === "moderador") {
        console.log("Acesso moderado concedido");
        return "moderado";
      } else {
        console.log("Acesso básico concedido");
        return "basico";
      }
    } else {
      console.log("Usuário inativo");
      return "negado";
    }
  } else {
    console.log("Usuário não encontrado");
    return "inexistente";
  }
}

// Teste
let admin = {nome: "João", ativo: true, tipo: "admin"};
console.log(verificarAcesso(admin));
```

**Operador Ternário:**

```javascript
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso
let idade = 20;
let status = idade >= 18 ? "adulto" : "menor";
console.log(status); // "adulto"

// Encadeamento
let nota = 85;
let conceito = nota >= 90 ? "A" : 
               nota >= 80 ? "B" : 
               nota >= 70 ? "C" : 
               nota >= 60 ? "D" : "F";

// Casos práticos
function saudar(nome) {
  return nome ? `Olá, ${nome}!` : "Olá, visitante!";
}

function calcularDesconto(valor, cliente) {
  return cliente.vip ? valor * 0.8 : valor * 0.9;
}

// Validação inline
let email = usuario.email || "email@exemplo.com";
let configuracao = config.tema || "claro";
```

### switch...case

O `switch` compara um valor com múltiplas opções usando `case`, executando o código correspondente até encontrar um `break`.

**Sintaxe:**
```javascript
switch (expressão) {
  case valor1:
    // código para valor1
    break;
  case valor2:
    // código para valor2
    break;
  default:
    // código padrão
    break;
}
```

**Exemplos Básicos:**

```javascript
// Switch simples
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia inválido");
}

// Switch com strings
let comando = "salvar";
switch (comando.toLowerCase()) {
  case "novo":
    console.log("Criando novo arquivo...");
    break;
  case "abrir":
    console.log("Abrindo arquivo...");
    break;
  case "salvar":
    console.log("Salvando arquivo...");
    break;
  case "fechar":
    console.log("Fechando arquivo...");
    break;
  default:
    console.log("Comando não reconhecido");
}
```

**Fall-through (sem break):**

```javascript
// Casos que executam o mesmo código
let mes = 12;
switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Verão");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Outono");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Inverno");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Primavera");
    break;
  default:
    console.log("Mês inválido");
}

// Fall-through intencional com lógica
let permissao = "admin";
let acoes = [];

switch (permissao) {
  case "admin":
    acoes.push("deletar");
    acoes.push("editar");
    // fall-through intencional
  case "moderador":
    acoes.push("moderar");
    // fall-through intencional
  case "usuario":
    acoes.push("ler");
    acoes.push("comentar");
    break;
  default:
    console.log("Permissão inválida");
}

console.log("Ações permitidas:", acoes);
```

**Switch vs if...else:**

```javascript
// Mesmo resultado, abordagens diferentes

// Com if...else
function obterTipoAnimal(animal) {
  if (animal === "cachorro" || animal === "gato") {
    return "mamífero doméstico";
  } else if (animal === "papagaio" || animal === "canário") {
    return "ave doméstica";
  } else if (animal === "peixe-dourado" || animal === "beta") {
    return "peixe de aquário";
  } else {
    return "animal desconhecido";
  }
}

// Com switch
function obterTipoAnimalSwitch(animal) {
  switch (animal) {
    case "cachorro":
    case "gato":
      return "mamífero doméstico";
    case "papagaio":
    case "canário":
      return "ave doméstica";
    case "peixe-dourado":
    case "beta":
      return "peixe de aquário";
    default:
      return "animal desconhecido";
  }
}
```

**Casos Avançados com switch:**

```javascript
// Switch com expressões
let hora = new Date().getHours();
switch (true) {
  case (hora >= 5 && hora < 12):
    console.log("Bom dia!");
    break;
  case (hora >= 12 && hora < 18):
    console.log("Boa tarde!");
    break;
  case (hora >= 18 && hora < 22):
    console.log("Boa noite!");
    break;
  default:
    console.log("Boa madrugada!");
}

// Calculator com switch
function calculadora(operacao, a, b) {
  switch (operacao) {
    case "+":
    case "soma":
      return a + b;
    case "-":
    case "subtracao":
      return a - b;
    case "*":
    case "multiplicacao":
      return a * b;
    case "/":
    case "divisao":
      return b !== 0 ? a / b : "Erro: divisão por zero";
    case "**":
    case "potencia":
      return a ** b;
    case "%":
    case "resto":
      return a % b;
    default:
      return "Operação inválida";
  }
}

console.log(calculadora("+", 5, 3));        // 8
console.log(calculadora("divisao", 10, 2)); // 5
console.log(calculadora("/", 10, 0));       // "Erro: divisão por zero"
```

## 🔀 Tratamento de Exceções

### Conceitos Fundamentais

Exceções são erros que ocorrem durante a execução do código. JavaScript fornece mecanismos para capturar, tratar e lançar exceções.

**Por que tratar exceções?**
- **Robustez**: Evitar que o programa trave
- **User Experience**: Mostrar mensagens amigáveis
- **Debug**: Identificar e corrigir problemas
- **Recuperação**: Tentar operações alternativas

### try...catch...finally

**Sintaxe:**
```javascript
try {
  // código que pode gerar erro
} catch (error) {
  // tratamento do erro
} finally {
  // código que sempre executa
}
```

**Exemplos Básicos:**

```javascript
// try...catch básico
try {
  let resultado = 10 / 0;
  console.log(resultado); // Infinity (não gera erro)
  
  let objeto = null;
  console.log(objeto.propriedade); // Gera TypeError
} catch (error) {
  console.log("Erro capturado:", error.message);
  console.log("Tipo do erro:", error.name);
}

// try...catch...finally
function lerArquivo(nomeArquivo) {
  console.log("Iniciando leitura...");
  
  try {
    if (!nomeArquivo) {
      throw new Error("Nome do arquivo é obrigatório");
    }
    
    if (nomeArquivo.length < 3) {
      throw new Error("Nome do arquivo muito curto");
    }
    
    console.log("Arquivo lido com sucesso:", nomeArquivo);
    return "conteúdo do arquivo";
    
  } catch (error) {
    console.log("Erro ao ler arquivo:", error.message);
    return null;
    
  } finally {
    console.log("Operação de leitura finalizada");
  }
}

console.log(lerArquivo(""));           // Erro: Nome obrigatório
console.log(lerArquivo("a.txt"));      // Erro: Nome muito curto
console.log(lerArquivo("arquivo.txt")); // Sucesso
```

**Capturando Diferentes Tipos de Erro:**

```javascript
function processarDados(dados) {
  try {
    // Diferentes tipos de erro podem ocorrer
    if (dados === null || dados === undefined) {
      throw new ReferenceError("Dados não fornecidos");
    }
    
    if (typeof dados !== "object") {
      throw new TypeError("Dados devem ser um objeto");
    }
    
    if (!dados.hasOwnProperty("id")) {
      throw new Error("Propriedade 'id' é obrigatória");
    }
    
    if (dados.id < 1 || dados.id > 1000) {
      throw new RangeError("ID deve estar entre 1 e 1000");
    }
    
    return `Processando dados do ID: ${dados.id}`;
    
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Erro de referência:", error.message);
    } else if (error instanceof TypeError) {
      console.log("Erro de tipo:", error.message);
    } else if (error instanceof RangeError) {
      console.log("Erro de intervalo:", error.message);
    } else {
      console.log("Erro geral:", error.message);
    }
    
    return "Falha no processamento";
  }
}

// Testes
console.log(processarDados(null));              // ReferenceError
console.log(processarDados("string"));          // TypeError
console.log(processarDados({}));                // Error genérico
console.log(processarDados({id: 2000}));        // RangeError
console.log(processarDados({id: 42}));          // Sucesso
```

### throw Statement

O `throw` permite lançar exceções personalizadas.

**Sintaxes do throw:**

```javascript
// Throw com string
throw "Algo deu errado";

// Throw com número
throw 404;

// Throw com objeto
throw {
  name: "CustomError",
  message: "Erro personalizado",
  code: 500
};

// Throw com Error (recomendado)
throw new Error("Mensagem de erro");
throw new TypeError("Tipo inválido");
throw new RangeError("Valor fora do intervalo");
```

**Exemplos Práticos:**

```javascript
// Validação de entrada
function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Ambos argumentos devem ser números");
  }
  
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  
  if (!isFinite(a) || !isFinite(b)) {
    throw new RangeError("Números devem ser finitos");
  }
  
  return a / b;
}

// Uso com tratamento
try {
  console.log(dividir(10, 2));    // 5
  console.log(dividir(10, "0"));  // TypeError
} catch (error) {
  console.log(`Erro: ${error.name} - ${error.message}`);
}

// Sistema de autenticação
class SistemaAuth {
  static login(usuario, senha) {
    if (!usuario || !senha) {
      throw new Error("Usuário e senha são obrigatórios");
    }
    
    if (usuario.length < 3) {
      throw new Error("Usuário deve ter pelo menos 3 caracteres");
    }
    
    if (senha.length < 6) {
      throw new Error("Senha deve ter pelo menos 6 caracteres");
    }
    
    // Simula validação
    if (usuario !== "admin" || senha !== "123456") {
      throw new Error("Credenciais inválidas");
    }
    
    return "Login realizado com sucesso";
  }
}

// Teste do sistema
try {
  console.log(SistemaAuth.login("admin", "123456"));
} catch (error) {
  console.log("Falha no login:", error.message);
}
```

### Tipos de Error

JavaScript possui vários tipos de erro built-in:

**Error Types:**

```javascript
// 1. Error - Erro genérico
try {
  throw new Error("Erro genérico");
} catch (e) {
  console.log(e.name);    // "Error"
  console.log(e.message); // "Erro genérico"
}

// 2. SyntaxError - Erro de sintaxe
try {
  eval("function malformed() { }");  // Código malformado
} catch (e) {
  console.log(e instanceof SyntaxError); // true
}

// 3. ReferenceError - Variável não definida
try {
  console.log(variavelInexistente);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "variavelInexistente is not defined"
}

// 4. TypeError - Tipo incorreto
try {
  let numero = 42;
  numero();  // Tentando chamar número como função
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "numero is not a function"
}

// 5. RangeError - Valor fora do intervalo
try {
  let array = new Array(-1);  // Tamanho negativo
} catch (e) {
  console.log(e instanceof RangeError); // true
}

// 6. URIError - Erro em URI
try {
  decodeURIComponent("%");  // URI malformada
} catch (e) {
  console.log(e instanceof URIError); // true
}
```

**Tratamento Específico por Tipo:**

```javascript
function tratarErros(operacao) {
  try {
    operacao();
  } catch (error) {
    switch (error.constructor.name) {
      case "TypeError":
        console.log("🔧 Erro de tipo:", error.message);
        console.log("Dica: Verifique se está usando o tipo correto");
        break;
        
      case "ReferenceError":
        console.log("🔍 Erro de referência:", error.message);
        console.log("Dica: Verifique se a variável foi declarada");
        break;
        
      case "RangeError":
        console.log("📏 Erro de intervalo:", error.message);
        console.log("Dica: Verifique se o valor está no intervalo válido");
        break;
        
      case "SyntaxError":
        console.log("📝 Erro de sintaxe:", error.message);
        console.log("Dica: Verifique a sintaxe do código");
        break;
        
      default:
        console.log("❓ Erro desconhecido:", error.message);
        console.log("Stack trace:", error.stack);
    }
  }
}

// Testes
tratarErros(() => variavelInexistente);      // ReferenceError
tratarErros(() => (42)());                   // TypeError
tratarErros(() => new Array(-1));            // RangeError
```

**Criando Erros Personalizados:**

```javascript
// Classe de erro personalizada
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

// Uso dos erros personalizados
function validarUsuario(dados) {
  if (!dados.email) {
    throw new ValidationError("Email é obrigatório", "email");
  }
  
  if (!dados.email.includes("@")) {
    throw new ValidationError("Email inválido", "email");
  }
  
  if (!dados.senha || dados.senha.length < 8) {
    throw new ValidationError("Senha deve ter pelo menos 8 caracteres", "senha");
  }
  
  return true;
}

function simularRequisicao(url) {
  // Simula falha de rede
  if (Math.random() < 0.5) {
    throw new NetworkError("Falha na conexão", 503);
  }
  
  return "Dados recebidos";
}

// Tratamento dos erros personalizados
try {
  validarUsuario({email: "teste", senha: "123"});
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Erro de validação no campo '${error.field}': ${error.message}`);
  } else {
    console.log("Erro inesperado:", error.message);
  }
}

try {
  simularRequisicao("https://api.exemplo.com");
} catch (error) {
  if (error instanceof NetworkError) {
    console.log(`Erro de rede (${error.statusCode}): ${error.message}`);
  }
}
```

### Patterns de Tratamento de Erro

**1. Error Boundary Pattern:**

```javascript
class ErrorBoundary {
  static wrap(fn) {
    return function(...args) {
      try {
        return fn.apply(this, args);
      } catch (error) {
        console.error("Erro capturado pelo boundary:", error);
        return null;
      }
    };
  }
}

// Uso
const operacaoSegura = ErrorBoundary.wrap(function(dados) {
  return dados.propriedade.valor; // Pode gerar erro
});

console.log(operacaoSegura({})); // null (em vez de erro)
```

**2. Retry Pattern:**

```javascript
async function comRetry(operacao, tentativas = 3, delay = 1000) {
  for (let i = 0; i < tentativas; i++) {
    try {
      return await operacao();
    } catch (error) {
      console.log(`Tentativa ${i + 1} falhou:`, error.message);
      
      if (i === tentativas - 1) {
        throw error; // Última tentativa, relança o erro
      }
      
      // Aguarda antes da próxima tentativa
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Uso
async function operacaoInstavel() {
  if (Math.random() < 0.7) {
    throw new Error("Operação falhou");
  }
  return "Sucesso!";
}

comRetry(operacaoInstavel)
  .then(resultado => console.log(resultado))
  .catch(error => console.log("Todas as tentativas falharam:", error.message));
```

**3. Circuit Breaker Pattern:**

```javascript
class CircuitBreaker {
  constructor(failureThreshold = 5, resetTimeout = 60000) {
    this.failureThreshold = failureThreshold;
    this.resetTimeout = resetTimeout;
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
  }
  
  async call(operation) {
    if (this.state === "OPEN") {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = "HALF_OPEN";
      } else {
        throw new Error("Circuit breaker está OPEN");
      }
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    this.state = "CLOSED";
  }
  
  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = "OPEN";
    }
  }
}
```

## 💡 Boas Práticas

**1. Condicionais Claras:**
```javascript
// ❌ Evite condições complexas
if (user && user.active && user.permissions && user.permissions.length > 0 && user.permissions.includes('admin')) {
  // ...
}

// ✅ Extraia para funções
function isAdmin(user) {
  return user && 
         user.active && 
         user.permissions && 
         user.permissions.includes('admin');
}

if (isAdmin(user)) {
  // ...
}
```

**2. Early Return:**
```javascript
// ❌ Muitos níveis de aninhamento
function processarPedido(pedido) {
  if (pedido) {
    if (pedido.items) {
      if (pedido.items.length > 0) {
        // processar
      }
    }
  }
}

// ✅ Early return
function processarPedido(pedido) {
  if (!pedido) return;
  if (!pedido.items) return;
  if (pedido.items.length === 0) return;
  
  // processar
}
```

**3. Tratamento de Erro Específico:**
```javascript
// ❌ Tratamento genérico demais
try {
  operacao();
} catch (error) {
  console.log("Erro:", error);
}

// ✅ Tratamento específico
try {
  operacao();
} catch (error) {
  if (error instanceof ValidationError) {
    mostrarErroUsuario(error.message);
  } else if (error instanceof NetworkError) {
    tentarNovamente();
  } else {
    logError(error);
    mostrarErroGenerico();
  }
}
```

**4. Fail Fast:**
```javascript
// ✅ Valide entrada o mais cedo possível
function calcular(dados) {
  if (!dados) {
    throw new Error("Dados são obrigatórios");
  }
  
  if (typeof dados.valor !== 'number') {
    throw new TypeError("Valor deve ser um número");
  }
  
  // Continua com a lógica principal
}
```

---

**💡 Dica Profissional**: Use `if...else` para lógica condicional simples, `switch` para múltiplas opções discretas, e always handle errors gracefully with try...catch. Remember: fail fast, fail clearly.

**⏱️ Tempo estimado de estudo**: 3-4 horas
**🏆 Nível**: Intermediário
**📝 Tags**: #javascript #controle-de-fluxo #condicionais #if #switch #try-catch #error-handling
