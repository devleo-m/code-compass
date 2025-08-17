# Exercícios da Aula 9: Expressões e Operadores em JavaScript

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Operadores Aritméticos Básicos
Pratique todos os operadores aritméticos:

```javascript
// Exercício 1a: Calculadora básica
function calculadoraBasica(a, b, operacao) {
  switch (operacao) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Erro: Divisão por zero";
    case "%": return a % b;
    case "**": return a ** b;
    default: return "Operação inválida";
  }
}

// Teste
console.log(calculadoraBasica(10, 3, "+"));  // 13
console.log(calculadoraBasica(10, 3, "-"));  // 7
console.log(calculadoraBasica(10, 3, "*"));  // 30
console.log(calculadoraBasica(10, 3, "/"));  // 3.333...
console.log(calculadoraBasica(10, 3, "%"));  // 1
console.log(calculadoraBasica(2, 3, "**"));  // 8

// Exercício 1b: Incremento e decremento
function demonstrarIncrementoDecremento() {
  let x = 5;
  let y = 5;
  
  console.log("Valores iniciais:", {x, y});
  
  // Pré-incremento vs pós-incremento
  console.log("x++:", x++);  // 5 (retorna 5, x vira 6)
  console.log("x após x++:", x);  // 6
  
  console.log("++y:", ++y);  // 6 (y vira 6, retorna 6)
  console.log("y após ++y:", y);  // 6
  
  // Em expressões
  let a = 10;
  let b = 20;
  let resultado1 = a++ + ++b;  // 10 + 21 = 31
  console.log("a++ + ++b:", resultado1, {a, b}); // a=11, b=21
  
  // Decremento
  let c = 8;
  let d = 8;
  console.log("c--:", c--);  // 8 (retorna 8, c vira 7)
  console.log("--d:", --d);  // 7 (d vira 7, retorna 7)
  console.log("Valores finais:", {c, d});
}

demonstrarIncrementoDecremento();

// Exercício 1c: Verificador de números
function analisarNumero(num) {
  return {
    numero: num,
    ehPar: num % 2 === 0,
    ehPositivo: num > 0,
    ehInteiro: num % 1 === 0,
    quadrado: num ** 2,
    cubo: num ** 3,
    raizQuadrada: num >= 0 ? Math.sqrt(num) : "Inválido para números negativos"
  };
}

// Teste
console.log(analisarNumero(4));
console.log(analisarNumero(-3));
console.log(analisarNumero(2.5));
```

### Exercício 2: Operadores de Comparação
Explore todos os tipos de comparação:

```javascript
// Exercício 2a: Comparador universal
function compararValores(a, b) {
  return {
    valores: {a, b},
    tiposIguais: typeof a === typeof b,
    igualdadeSolta: a == b,
    igualdadeEstrita: a === b,
    diferenteSolta: a != b,
    diferenteEstrita: a !== b,
    maior: a > b,
    menor: a < b,
    maiorIgual: a >= b,
    menorIgual: a <= b
  };
}

// Teste com diferentes tipos
console.log(compararValores(5, "5"));
console.log(compararValores(5, 5));
console.log(compararValores(null, undefined));
console.log(compararValores(0, false));
console.log(compararValores("", 0));

// Exercício 2b: Ordenador de valores
function ordenarTresValores(a, b, c) {
  // Usando apenas operadores de comparação
  let primeiro, segundo, terceiro;
  
  if (a >= b && a >= c) {
    primeiro = a;
    if (b >= c) {
      segundo = b;
      terceiro = c;
    } else {
      segundo = c;
      terceiro = b;
    }
  } else if (b >= a && b >= c) {
    primeiro = b;
    if (a >= c) {
      segundo = a;
      terceiro = c;
    } else {
      segundo = c;
      terceiro = a;
    }
  } else {
    primeiro = c;
    if (a >= b) {
      segundo = a;
      terceiro = b;
    } else {
      segundo = b;
      terceiro = a;
    }
  }
  
  return [primeiro, segundo, terceiro];
}

// Teste
console.log(ordenarTresValores(3, 1, 2)); // [3, 2, 1]
console.log(ordenarTresValores(5, 8, 2)); // [8, 5, 2]

// Exercício 2c: Validador de strings
function validarString(str1, str2) {
  return {
    saoIguais: str1 === str2,
    saoIguaisIgnorandoCase: str1.toLowerCase() === str2.toLowerCase(),
    primeiraEMaior: str1 > str2,
    mesmoComprimento: str1.length === str2.length,
    ordenemAlfabetica: str1 < str2 ? `"${str1}" vem antes` : 
                      str1 > str2 ? `"${str2}" vem antes` : "São iguais",
    contemSubstring: str1.includes(str2) || str2.includes(str1)
  };
}

// Teste
console.log(validarString("JavaScript", "javascript"));
console.log(validarString("apple", "banana"));
console.log(validarString("test", "testing"));
```

### Exercício 3: Operadores Lógicos
Domine AND, OR, NOT e Nullish Coalescing:

```javascript
// Exercício 3a: Sistema de autenticação
function verificarAcesso(usuario) {
  // Simulação de dados de usuário
  const dadosUsuario = {
    nome: usuario?.nome || null,
    ativo: usuario?.ativo || false,
    verificado: usuario?.verificado || false,
    tipo: usuario?.tipo || "guest",
    ultimoLogin: usuario?.ultimoLogin || null
  };
  
  // Verificações usando operadores lógicos
  const temNome = !!dadosUsuario.nome;
  const estaAtivo = dadosUsuario.ativo === true;
  const foiVerificado = dadosUsuario.verificado === true;
  const ehAdmin = dadosUsuario.tipo === "admin";
  const ehModerador = dadosUsuario.tipo === "moderador";
  const ehUsuario = dadosUsuario.tipo === "usuario";
  
  // Lógica de acesso
  const acessoTotal = temNome && estaAtivo && foiVerificado && ehAdmin;
  const acessoModerado = temNome && estaAtivo && foiVerificado && ehModerador;
  const acessoBasico = temNome && estaAtivo && foiVerificado && ehUsuario;
  const acessoNegado = !temNome || !estaAtivo || !foiVerificado;
  
  return {
    usuario: dadosUsuario,
    verificacoes: {temNome, estaAtivo, foiVerificado, ehAdmin, ehModerador, ehUsuario},
    nivelAcesso: acessoTotal ? "total" : 
                 acessoModerado ? "moderado" : 
                 acessoBasico ? "basico" : "negado",
    podeAcessar: acessoTotal || acessoModerado || acessoBasico
  };
}

// Teste
let admin = {nome: "João", ativo: true, verificado: true, tipo: "admin"};
let usuario = {nome: "Maria", ativo: true, verificado: true, tipo: "usuario"};
let inativo = {nome: "Pedro", ativo: false, verificado: true, tipo: "usuario"};

console.log(verificarAcesso(admin));
console.log(verificarAcesso(usuario));
console.log(verificarAcesso(inativo));

// Exercício 3b: Configuração com valores padrão
function configurarSistema(config) {
  // Usando nullish coalescing para valores padrão
  const configuracao = {
    tema: config?.tema ?? "claro",
    idioma: config?.idioma ?? "pt-BR",
    notificacoes: config?.notificacoes ?? true,
    som: config?.som ?? true,
    animacoes: config?.animacoes ?? true,
    debug: config?.debug ?? false,
    timeout: config?.timeout ?? 30000,
    retries: config?.retries ?? 3
  };
  
  // Validações usando operadores lógicos
  const configValida = configuracao.timeout > 0 && 
                      configuracao.retries >= 0 && 
                      ["claro", "escuro"].includes(configuracao.tema);
  
  // Configuração de desenvolvimento vs produção
  const ehDesenvolvimento = configuracao.debug || false;
  const configuracaoFinal = {
    ...configuracao,
    logLevel: ehDesenvolvimento ? "debug" : "error",
    cacheEnabled: !ehDesenvolvimento,
    minificarCodigo: !ehDesenvolvimento
  };
  
  return {
    configuracao: configuracaoFinal,
    valida: configValida,
    ambiente: ehDesenvolvimento ? "desenvolvimento" : "produção"
  };
}

// Teste
console.log(configurarSistema({})); // Valores padrão
console.log(configurarSistema({tema: "escuro", debug: true}));
console.log(configurarSistema({timeout: 0, tema: "inválido"})); // Inválido

// Exercício 3c: Filtro avançado
function filtrarProdutos(produtos, filtros) {
  return produtos.filter(produto => {
    // Filtro por preço
    const precoOk = (!filtros.precoMin || produto.preco >= filtros.precoMin) &&
                   (!filtros.precoMax || produto.preco <= filtros.precoMax);
    
    // Filtro por categoria
    const categoriaOk = !filtros.categoria || produto.categoria === filtros.categoria;
    
    // Filtro por disponibilidade
    const disponivelOk = !filtros.apenasDisponiveis || produto.estoque > 0;
    
    // Filtro por avaliação
    const avaliacaoOk = !filtros.avaliacaoMin || produto.avaliacao >= filtros.avaliacaoMin;
    
    // Filtro por nome (busca)
    const nomeOk = !filtros.busca || 
                  produto.nome.toLowerCase().includes(filtros.busca.toLowerCase());
    
    return precoOk && categoriaOk && disponivelOk && avaliacaoOk && nomeOk;
  });
}

// Dados de teste
let produtos = [
  {nome: "Notebook", categoria: "eletrônicos", preco: 2500, estoque: 5, avaliacao: 4.5},
  {nome: "Mouse", categoria: "eletrônicos", preco: 80, estoque: 0, avaliacao: 4.0},
  {nome: "Livro JS", categoria: "livros", preco: 45, estoque: 10, avaliacao: 4.8},
  {nome: "Camisa", categoria: "roupas", preco: 120, estoque: 3, avaliacao: 3.5}
];

// Teste
console.log(filtrarProdutos(produtos, {precoMax: 100}));
console.log(filtrarProdutos(produtos, {categoria: "eletrônicos", apenasDisponiveis: true}));
console.log(filtrarProdutos(produtos, {busca: "book", avaliacaoMin: 4.0}));
```

### Exercício 4: Operadores de Atribuição
Explore atribuições compostas:

```javascript
// Exercício 4a: Contador avançado
class ContadorAvancado {
  constructor(valorInicial = 0) {
    this.valor = valorInicial;
    this.historico = [valorInicial];
  }
  
  // Usando operadores de atribuição compostos
  incrementar(quantidade = 1) {
    this.valor += quantidade;
    this.historico.push(this.valor);
    return this;
  }
  
  decrementar(quantidade = 1) {
    this.valor -= quantidade;
    this.historico.push(this.valor);
    return this;
  }
  
  multiplicar(fator) {
    this.valor *= fator;
    this.historico.push(this.valor);
    return this;
  }
  
  dividir(divisor) {
    if (divisor !== 0) {
      this.valor /= divisor;
      this.historico.push(this.valor);
    }
    return this;
  }
  
  elevarPotencia(expoente) {
    this.valor **= expoente;
    this.historico.push(this.valor);
    return this;
  }
  
  obterResto(divisor) {
    this.valor %= divisor;
    this.historico.push(this.valor);
    return this;
  }
  
  reset() {
    this.valor = 0;
    this.historico = [0];
    return this;
  }
  
  obterInfo() {
    return {
      valorAtual: this.valor,
      historico: [...this.historico],
      operacoes: this.historico.length - 1
    };
  }
}

// Teste
let contador = new ContadorAvancado(10);
contador
  .incrementar(5)      // 15
  .multiplicar(2)      // 30
  .dividir(3)          // 10
  .elevarPotencia(2)   // 100
  .obterResto(7);      // 2

console.log(contador.obterInfo());

// Exercício 4b: Acumulador de strings
function processarTexto() {
  let texto = "JavaScript";
  let resultado = "";
  
  // Usando +=
  resultado += "Linguagem: ";
  resultado += texto;
  resultado += " é incrível!";
  
  console.log("Resultado 1:", resultado);
  
  // Usando template literals
  let info = "";
  info += `Tamanho: ${texto.length} caracteres\n`;
  info += `Maiúsculo: ${texto.toUpperCase()}\n`;
  info += `Minúsculo: ${texto.toLowerCase()}\n`;
  
  console.log("Info:\n" + info);
  
  // Construtor de HTML
  let html = "";
  html += "<div>";
  html += `  <h1>${texto}</h1>`;
  html += `  <p>Uma linguagem de programação</p>`;
  html += "</div>";
  
  console.log("HTML:\n" + html);
}

processarTexto();

// Exercício 4c: Operadores lógicos de atribuição
function configurarUsuario(usuario, novasConfiguracoes) {
  // ||= atribui apenas se falsy
  usuario.nome ||= "Usuário Anônimo";
  usuario.tema ||= "claro";
  usuario.idioma ||= "pt-BR";
  
  // &&= atribui apenas se truthy
  usuario.premiumAtivo &&= novasConfiguracoes.manterPremium;
  usuario.notificacoes &&= novasConfiguracoes.permitirNotificacoes;
  
  // ??= atribui apenas se null ou undefined
  usuario.configuracoes ??= {};
  usuario.configuracoes.autoSave ??= true;
  usuario.configuracoes.tema ??= usuario.tema;
  usuario.configuracoes.timeout ??= 30000;
  
  return usuario;
}

// Teste
let usuario1 = {nome: "", premiumAtivo: true, notificacoes: true};
let usuario2 = {nome: "João", tema: "escuro", premiumAtivo: false};

console.log(configurarUsuario(usuario1, {manterPremium: true, permitirNotificacoes: false}));
console.log(configurarUsuario(usuario2, {manterPremium: true, permitirNotificacoes: true}));
```

### Exercício 5: Operador Ternário
Domine condicionais concisas:

```javascript
// Exercício 5a: Sistema de classificação
function classificarIdade(idade) {
  return idade < 0 ? "Idade inválida" :
         idade < 2 ? "Bebê" :
         idade < 12 ? "Criança" :
         idade < 18 ? "Adolescente" :
         idade < 60 ? "Adulto" :
         idade < 80 ? "Idoso" :
         "Muito idoso";
}

function classificarNota(nota) {
  return nota < 0 || nota > 10 ? "Nota inválida" :
         nota >= 9 ? "Excelente" :
         nota >= 7 ? "Bom" :
         nota >= 5 ? "Regular" :
         "Insuficiente";
}

function obterDesconto(cliente, valorCompra) {
  const ehVip = cliente.tipo === "VIP";
  const ehPrimeiraCompra = cliente.primeiraCompra === true;
  const compraMaior500 = valorCompra > 500;
  
  return ehVip ? (compraMaior500 ? 0.20 : 0.15) :
         ehPrimeiraCompra ? 0.10 :
         compraMaior500 ? 0.05 :
         0;
}

// Teste
console.log(classificarIdade(5));   // "Criança"
console.log(classificarIdade(25));  // "Adulto"
console.log(classificarIdade(85));  // "Muito idoso"

console.log(classificarNota(8.5));  // "Bom"
console.log(classificarNota(4.0));  // "Insuficiente"

let clienteVip = {tipo: "VIP", primeiraCompra: false};
let clienteNovo = {tipo: "REGULAR", primeiraCompra: true};

console.log(obterDesconto(clienteVip, 600));  // 0.20 (20%)
console.log(obterDesconto(clienteNovo, 100)); // 0.10 (10%)

// Exercício 5b: Formatador de dados
function formatarDado(valor, tipo) {
  return tipo === "moeda" ? `R$ ${valor.toFixed(2)}` :
         tipo === "porcentagem" ? `${(valor * 100).toFixed(1)}%` :
         tipo === "data" ? new Date(valor).toLocaleDateString() :
         tipo === "telefone" ? valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3") :
         tipo === "cpf" ? valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") :
         String(valor);
}

// Teste
console.log(formatarDado(1234.56, "moeda"));       // "R$ 1234.56"
console.log(formatarDado(0.15, "porcentagem"));    // "15.0%"
console.log(formatarDado("11987654321", "telefone")); // "(11) 98765-4321"
console.log(formatarDado("12345678900", "cpf"));   // "123.456.789-00"

// Exercício 5c: Validador com ternário
function validarCampo(valor, regras) {
  const valorLimpo = valor?.toString().trim() || "";
  
  return !regras.obrigatorio ? true :
         valorLimpo === "" ? false :
         regras.minLength && valorLimpo.length < regras.minLength ? false :
         regras.maxLength && valorLimpo.length > regras.maxLength ? false :
         regras.tipo === "email" && !valorLimpo.includes("@") ? false :
         regras.tipo === "numero" && isNaN(Number(valorLimpo)) ? false :
         regras.tipo === "inteiro" && !Number.isInteger(Number(valorLimpo)) ? false :
         true;
}

function obterMensagemErro(valor, regras) {
  const valorLimpo = valor?.toString().trim() || "";
  
  return !regras.obrigatorio ? null :
         valorLimpo === "" ? "Campo obrigatório" :
         regras.minLength && valorLimpo.length < regras.minLength ? 
           `Mínimo ${regras.minLength} caracteres` :
         regras.maxLength && valorLimpo.length > regras.maxLength ? 
           `Máximo ${regras.maxLength} caracteres` :
         regras.tipo === "email" && !valorLimpo.includes("@") ? 
           "Email inválido" :
         regras.tipo === "numero" && isNaN(Number(valorLimpo)) ? 
           "Deve ser um número" :
         regras.tipo === "inteiro" && !Number.isInteger(Number(valorLimpo)) ? 
           "Deve ser um número inteiro" :
         null;
}

// Teste
console.log(validarCampo("joao@email.com", {obrigatorio: true, tipo: "email"})); // true
console.log(validarCampo("abc", {obrigatorio: true, tipo: "email"})); // false
console.log(obterMensagemErro("abc", {obrigatorio: true, tipo: "email"})); // "Email inválido"
console.log(validarCampo("123", {obrigatorio: true, tipo: "inteiro"})); // true
console.log(validarCampo("12.5", {obrigatorio: true, tipo: "inteiro"})); // false
```

### Exercício 6: Operadores Unários
Explore conversões e manipulações:

```javascript
// Exercício 6a: Conversor de tipos
function converterTipos(valor) {
  return {
    valorOriginal: valor,
    tipoOriginal: typeof valor,
    conversoes: {
      paraNumero: +valor,
      paraNumeroNegativo: -valor,
      paraBoolean: !!valor,
      paraBooleanNegado: !valor,
      paraString: String(valor),
      tipoDetalhado: typeof valor
    },
    verificacoes: {
      ehTruthy: !!valor,
      ehFalsy: !valor,
      ehNumero: typeof valor === "number",
      ehString: typeof valor === "string",
      ehBoolean: typeof valor === "boolean",
      ehObject: typeof valor === "object",
      ehFunction: typeof valor === "function",
      ehUndefined: typeof valor === "undefined"
    }
  };
}

// Teste com diferentes valores
let valores = [5, "10", true, false, null, undefined, [], {}, function() {}];
valores.forEach(valor => {
  console.log(converterTipos(valor));
});

// Exercício 6b: Manipulador de contadores
class ManipuladorContador {
  constructor() {
    this.contadores = {};
  }
  
  // Usar increment/decrement unários
  incrementar(nome) {
    this.contadores[nome] ??= 0;
    return ++this.contadores[nome]; // Pré-incremento
  }
  
  decrementar(nome) {
    this.contadores[nome] ??= 0;
    return --this.contadores[nome]; // Pré-decremento
  }
  
  obterEIncrementar(nome) {
    this.contadores[nome] ??= 0;
    return this.contadores[nome]++; // Pós-incremento
  }
  
  obterEDecrementar(nome) {
    this.contadores[nome] ??= 0;
    return this.contadores[nome]--; // Pós-decremento
  }
  
  reset(nome) {
    return delete this.contadores[nome];
  }
  
  obterTodos() {
    return {...this.contadores};
  }
}

// Teste
let manipulador = new ManipuladorContador();

console.log("Incrementar A:", manipulador.incrementar("A")); // 1
console.log("Incrementar A:", manipulador.incrementar("A")); // 2
console.log("Obter e incrementar A:", manipulador.obterEIncrementar("A")); // 2, depois vira 3
console.log("Decrementar A:", manipulador.decrementar("A")); // 2

console.log("Todos contadores:", manipulador.obterTodos());

// Exercício 6c: Analisador de expressões
function analisarExpressao(expr) {
  try {
    // Avaliar a expressão (CUIDADO: só para exercício!)
    let resultado = eval(expr);
    
    return {
      expressao: expr,
      resultado: resultado,
      tipoResultado: typeof resultado,
      analise: {
        ehNumerico: typeof resultado === "number" && !isNaN(resultado),
        ehPositivo: typeof resultado === "number" && resultado > 0,
            ehNegativo: typeof resultado === "number" && resultado < 0,
        ehZero: resultado === 0,
        ehInteiro: typeof resultado === "number" && Number.isInteger(resultado),
        ehInfinito: resultado === Infinity || resultado === -Infinity,
        ehNaN: Number.isNaN(resultado)
      }
    };
  } catch (error) {
    return {
      expressao: expr,
      erro: error.message,
      valida: false
    };
  }
}

// Teste (ATENÇÃO: eval é perigoso em produção!)
let expressoes = [
  "5 + 3",
  "10 / 0",
  "Math.sqrt(16)",
  "parseInt('abc')",
  "true + false",
  "null + undefined"
];

expressoes.forEach(expr => {
  console.log(analisarExpressao(expr));
});
```

### Exercício 7: Operadores Bitwise
Explore manipulação de bits:

```javascript
// Exercício 7a: Verificador de propriedades numéricas
function analisarBits(numero) {
  if (!Number.isInteger(numero) || numero < 0) {
    return "Apenas números inteiros positivos";
  }
  
  return {
    numero: numero,
    binario: numero.toString(2),
    propriedades: {
      ehPar: (numero & 1) === 0,
      ehImpar: (numero & 1) === 1,
      ehPotenciaDe2: numero > 0 && (numero & (numero - 1)) === 0,
      quantidadeBits1: numero.toString(2).split('1').length - 1,
      quantidadeBits0: numero.toString(2).split('0').length - 1
    },
    operacoes: {
      dobro: numero << 1,
      metade: numero >> 1,
      complemento: ~numero,
      primeiroBitSet: numero & -numero
    }
  };
}

// Teste
console.log(analisarBits(8));   // 1000
console.log(analisarBits(7));   // 0111
console.log(analisarBits(16));  // 10000

// Exercício 7b: Sistema de permissões com flags
class SistemaPermissoes {
  constructor() {
    // Definir permissões como potências de 2
    this.PERMISSOES = {
      LER: 1,        // 0001
      ESCREVER: 2,   // 0010
      EXECUTAR: 4,   // 0100
      DELETAR: 8,    // 1000
      ADMIN: 16      // 10000
    };
    
    this.usuarios = new Map();
  }
  
  adicionarUsuario(nome, permissoes = 0) {
    this.usuarios.set(nome, permissoes);
  }
  
  adicionarPermissao(usuario, permissao) {
    let permissoesAtuais = this.usuarios.get(usuario) || 0;
    permissoesAtuais |= permissao; // OR bitwise para adicionar
    this.usuarios.set(usuario, permissoesAtuais);
  }
  
  removerPermissao(usuario, permissao) {
    let permissoesAtuais = this.usuarios.get(usuario) || 0;
    permissoesAtuais &= ~permissao; // AND com NOT para remover
    this.usuarios.set(usuario, permissoesAtuais);
  }
  
  temPermissao(usuario, permissao) {
    let permissoesUsuario = this.usuarios.get(usuario) || 0;
    return (permissoesUsuario & permissao) !== 0;
  }
  
  alternarPermissao(usuario, permissao) {
    let permissoesAtuais = this.usuarios.get(usuario) || 0;
    permissoesAtuais ^= permissao; // XOR para alternar
    this.usuarios.set(usuario, permissoesAtuais);
  }
  
  obterPermissoes(usuario) {
    let permissoes = this.usuarios.get(usuario) || 0;
    let listaPermissoes = [];
    
    for (let [nome, valor] of Object.entries(this.PERMISSOES)) {
      if ((permissoes & valor) !== 0) {
        listaPermissoes.push(nome);
      }
    }
    
    return {
      usuario: usuario,
      valorNumerico: permissoes,
      binario: permissoes.toString(2).padStart(5, '0'),
      permissoes: listaPermissoes
    };
  }
}

// Teste
let sistema = new SistemaPermissoes();
sistema.adicionarUsuario("João", 0);

// Adicionar permissões
sistema.adicionarPermissao("João", sistema.PERMISSOES.LER);
sistema.adicionarPermissao("João", sistema.PERMISSOES.ESCREVER);

console.log(sistema.obterPermissoes("João"));

// Verificar permissões
console.log("João pode ler?", sistema.temPermissao("João", sistema.PERMISSOES.LER));
console.log("João pode deletar?", sistema.temPermissao("João", sistema.PERMISSOES.DELETAR));

// Adicionar permissão de admin (inclui todas)
sistema.adicionarPermissao("João", sistema.PERMISSOES.ADMIN);
console.log(sistema.obterPermissoes("João"));

// Exercício 7c: Otimizador matemático
class OtimizadorMatematico {
  // Multiplicação por potências de 2 usando shift
  multiplicarPor2Elevado(numero, potencia) {
    return numero << potencia; // Equivale a numero * (2 ** potencia)
  }
  
  // Divisão por potências de 2 usando shift
  dividirPor2Elevado(numero, potencia) {
    return numero >> potencia; // Equivale a Math.floor(numero / (2 ** potencia))
  }
  
  // Verificar se é potência de 2
  ehPotenciaDe2(numero) {
    return numero > 0 && (numero & (numero - 1)) === 0;
  }
  
  // Encontrar próxima potência de 2
  proximaPotenciaDe2(numero) {
    if (numero <= 1) return 1;
    
    // Método com bitwise
    let potencia = 1;
    while (potencia < numero) {
      potencia <<= 1; // potencia *= 2
    }
    return potencia;
  }
  
  // Contar bits setados (população de bits)
  contarBits1(numero) {
    let count = 0;
    while (numero) {
      count += numero & 1;
      numero >>= 1;
    }
    return count;
  }
  
  // Trocar valores sem variável temporária
  trocarValores(a, b) {
    if (a !== b) { // Evitar problema quando a === b
      a ^= b;
      b ^= a;
      a ^= b;
    }
    return [a, b];
  }
}

// Teste
let otimizador = new OtimizadorMatematico();

console.log("7 * 8 =", otimizador.multiplicarPor2Elevado(7, 3)); // 7 * 2³ = 56
console.log("64 / 8 =", otimizador.dividirPor2Elevado(64, 3));   // 64 / 2³ = 8

console.log("8 é potência de 2?", otimizador.ehPotenciaDe2(8));   // true
console.log("10 é potência de 2?", otimizador.ehPotenciaDe2(10)); // false

console.log("Próxima potência de 2 após 10:", otimizador.proximaPotenciaDe2(10)); // 16

console.log("Bits 1 em 7:", otimizador.contarBits1(7)); // 3 (111 em binário)

console.log("Trocar 5 e 3:", otimizador.trocarValores(5, 3)); // [3, 5]
```

### Exercício 8: Operadores BigInt
Trabalhe com números grandes:

```javascript
// Exercício 8a: Calculadora de precisão alta
class CalculadoraPrecisao {
  constructor() {
    this.historico = [];
  }
  
  // Converter para BigInt se necessário
  paraBigInt(valor) {
    if (typeof valor === "bigint") return valor;
    if (typeof valor === "number" && Number.isInteger(valor)) return BigInt(valor);
    if (typeof valor === "string") return BigInt(valor);
    throw new Error("Valor não pode ser convertido para BigInt");
  }
  
  somar(a, b) {
    const bigA = this.paraBigInt(a);
    const bigB = this.paraBigInt(b);
    const resultado = bigA + bigB;
    this.historico.push(`${bigA} + ${bigB} = ${resultado}`);
    return resultado;
  }
  
  subtrair(a, b) {
    const bigA = this.paraBigInt(a);
    const bigB = this.paraBigInt(b);
    const resultado = bigA - bigB;
    this.historico.push(`${bigA} - ${bigB} = ${resultado}`);
    return resultado;
  }
  
  multiplicar(a, b) {
    const bigA = this.paraBigInt(a);
    const bigB = this.paraBigInt(b);
    const resultado = bigA * bigB;
    this.historico.push(`${bigA} × ${bigB} = ${resultado}`);
    return resultado;
  }
  
  dividir(a, b) {
    const bigA = this.paraBigInt(a);
    const bigB = this.paraBigInt(b);
    
    if (bigB === 0n) {
      throw new Error("Divisão por zero");
    }
    
    const resultado = bigA / bigB; // Divisão inteira
    this.historico.push(`${bigA} ÷ ${bigB} = ${resultado}`);
    return resultado;
  }
  
  potencia(base, expoente) {
    const bigBase = this.paraBigInt(base);
    const bigExp = this.paraBigInt(expoente);
    
    if (bigExp < 0n) {
      throw new Error("Expoente deve ser não-negativo para BigInt");
    }
    
    const resultado = bigBase ** bigExp;
    this.historico.push(`${bigBase}^${bigExp} = ${resultado}`);
    return resultado;
  }
  
  fatorial(n) {
    const bigN = this.paraBigInt(n);
    
    if (bigN < 0n) {
      throw new Error("Fatorial de número negativo não existe");
    }
    
    let resultado = 1n;
    for (let i = 2n; i <= bigN; i++) {
      resultado *= i;
    }
    
    this.historico.push(`${bigN}! = ${resultado}`);
    return resultado;
  }
  
  obterHistorico() {
    return [...this.historico];
  }
  
  limparHistorico() {
    this.historico = [];
  }
}

// Teste
let calc = new CalculadoraPrecisao();

console.log("Soma:", calc.somar("123456789012345678901234567890", "987654321098765432109876543210"));
console.log("Fatorial 50:", calc.fatorial(50));
console.log("2^100:", calc.potencia(2, 100));

console.log("\nHistórico:");
calc.obterHistorico().forEach(operacao => console.log(operacao));

// Exercício 8b: Gerador de IDs únicos
class GeradorIDs {
  constructor() {
    this.contadorBase = BigInt(Date.now()) * 1000000n;
    this.incremento = 0n;
  }
  
  gerarID() {
    this.incremento++;
    return this.contadorBase + this.incremento;
  }
  
  gerarIDPersonalizado(prefixo, sufixo) {
    const id = this.gerarID();
    return `${prefixo}_${id}_${sufixo}`;
  }
  
  gerarMultiplosIDs(quantidade) {
    const ids = [];
    for (let i = 0; i < quantidade; i++) {
      ids.push(this.gerarID());
    }
    return ids;
  }
  
  // Converter ID para informações
  analisarID(id) {
    const bigId = BigInt(id);
    const timestamp = (bigId - this.incremento) / 1000000n;
    const incrementoAtual = bigId - this.contadorBase;
    
    return {
      id: bigId,
      timestamp: Number(timestamp),
      data: new Date(Number(timestamp)),
      incremento: incrementoAtual
    };
  }
}

// Teste
let gerador = new GeradorIDs();

console.log("ID 1:", gerador.gerarID());
console.log("ID 2:", gerador.gerarID());
console.log("ID personalizado:", gerador.gerarIDPersonalizado("USER", "PROD"));

let multiplosIDs = gerador.gerarMultiplosIDs(3);
console.log("Múltiplos IDs:", multiplosIDs);

// Analisar um ID
console.log("Análise do primeiro ID:", gerador.analisarID(multiplosIDs[0]));

// Exercício 8c: Sistema de moedas
class SistemaMoedas {
  constructor() {
    // Armazenar valores em centavos como BigInt para precisão
    this.CENTAVOS_POR_REAL = 100n;
  }
  
  // Converter reais para centavos (BigInt)
  reaisParaCentavos(reais) {
    if (typeof reais === "number") {
      return BigInt(Math.round(reais * 100));
    }
    if (typeof reais === "string") {
      return BigInt(Math.round(parseFloat(reais) * 100));
    }
    throw new Error("Valor inválido para conversão");
  }
  
  // Converter centavos (BigInt) para reais
  centavosParaReais(centavos) {
    const bigCentavos = BigInt(centavos);
    const reais = Number(bigCentavos) / 100;
    return reais;
  }
  
  somar(valor1, valor2) {
    const centavos1 = this.reaisParaCentavos(valor1);
    const centavos2 = this.reaisParaCentavos(valor2);
    return this.centavosParaReais(centavos1 + centavos2);
  }
  
  subtrair(valor1, valor2) {
    const centavos1 = this.reaisParaCentavos(valor1);
    const centavos2 = this.reaisParaCentavos(valor2);
    return this.centavosParaReais(centavos1 - centavos2);
  }
  
  multiplicar(valor, quantidade) {
    const centavos = this.reaisParaCentavos(valor);
    const bigQuantidade = BigInt(Math.floor(quantidade));
    return this.centavosParaReais(centavos * bigQuantidade);
  }
  
  calcularJuros(principal, taxa, tempo) {
    const centavosPrincipal = this.reaisParaCentavos(principal);
    
    // Juros simples: M = C + (C * i * t)
    // Usar multiplicação inteira para evitar problemas de ponto flutuante
    const taxaCentavos = BigInt(Math.round(taxa * 10000)); // 4 casas decimais
    const tempoInt = BigInt(tempo);
    
    const juros = (centavosPrincipal * taxaCentavos * tempoInt) / 10000n;
    const montante = centavosPrincipal + juros;
    
    return {
      principal: this.centavosParaReais(centavosPrincipal),
      juros: this.centavosParaReais(juros),
      montante: this.centavosParaReais(montante)
    };
  }
  
  formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }
}

// Teste
let moedas = new SistemaMoedas();

console.log("Soma R$ 10,50 + R$ 25,30:", moedas.formatarMoeda(moedas.somar(10.50, 25.30)));
console.log("Subtração R$ 100,00 - R$ 33,33:", moedas.formatarMoeda(moedas.subtrair(100, 33.33)));
console.log("Multiplicação R$ 15,99 × 3:", moedas.formatarMoeda(moedas.multiplicar(15.99, 3)));

let juros = moedas.calcularJuros(1000, 0.05, 12); // R$ 1000, 5% ao mês, 12 meses
console.log("Cálculo de juros:");
console.log("Principal:", moedas.formatarMoeda(juros.principal));
console.log("Juros:", moedas.formatarMoeda(juros.juros));
console.log("Montante:", moedas.formatarMoeda(juros.montante));
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual a diferença entre `++x` e `x++`?
- [ ] Não há diferença
- [x] ++x incrementa antes de retornar, x++ incrementa depois
- [ ] ++x é mais rápido
- [ ] x++ incrementa por 2

### Pergunta 2
O que o operador `??` faz?
- [ ] Verifica se é null
- [ ] Converte para boolean
- [x] Retorna o lado direito se o esquerdo for null ou undefined
- [ ] Igual ao operador ||

### Pergunta 3
Qual o resultado de `5 & 3` em operação bitwise?
- [x] 1
- [ ] 3
- [ ] 5
- [ ] 8

### Pergunta 4
Como se declara um BigInt?
- [ ] new BigInt(123)
- [x] 123n ou BigInt("123")
- [ ] BigInt.create(123)
- [ ] big(123)

### Pergunta 5
Qual operador tem maior precedência?
- [ ] +
- [x] **
- [ ] *
- [ ] ==

### Pergunta 6
O que `~5` retorna?
- [ ] 5
- [ ] -5
- [x] -6
- [ ] 0

### Pergunta 7
Qual a diferença entre `==` e `===`?
- [x] === não faz conversão de tipo
- [ ] == é mais rápido
- [ ] === é menos rigoroso
- [ ] Não há diferença

### Pergunta 8
O que acontece com `"5" + 3`?
- [ ] 8
- [x] "53"
- [ ] Erro
- [ ] NaN

## 🚀 Desafio Avançado: Calculadora Científica Completa

Crie um sistema de calculadora que use todos os tipos de operadores:

```javascript
class CalculadoraCientifica {
  constructor() {
    this.memoria = 0;
    this.historico = [];
    this.configuracoes = {
      precisao: 10,
      anguloGraus: true,
      notacaoCientifica: false
    };
  }
  
  // Operações básicas
  somar(a, b) {
    const resultado = Number(a) + Number(b);
    this.registrarOperacao(`${a} + ${b}`, resultado);
    return resultado;
  }
  
  subtrair(a, b) {
    const resultado = Number(a) - Number(b);
    this.registrarOperacao(`${a} - ${b}`, resultado);
    return resultado;
  }
  
  multiplicar(a, b) {
    const resultado = Number(a) * Number(b);
    this.registrarOperacao(`${a} × ${b}`, resultado);
    return resultado;
  }
  
  dividir(a, b) {
    if (Number(b) === 0) {
      throw new Error("Divisão por zero");
    }
    const resultado = Number(a) / Number(b);
    this.registrarOperacao(`${a} ÷ ${b}`, resultado);
    return resultado;
  }
  
  // Operações avançadas
  potencia(base, expoente) {
    const resultado = Math.pow(Number(base), Number(expoente));
    this.registrarOperacao(`${base}^${expoente}`, resultado);
    return resultado;
  }
  
  raiz(numero, indice = 2) {
    const resultado = Math.pow(Number(numero), 1 / Number(indice));
    this.registrarOperacao(`√${indice}(${numero})`, resultado);
    return resultado;
  }
  
  logaritmo(numero, base = Math.E) {
    if (Number(numero) <= 0) {
      throw new Error("Logaritmo de número não positivo");
    }
    const resultado = Math.log(Number(numero)) / Math.log(Number(base));
    this.registrarOperacao(`log${base === Math.E ? '' : base}(${numero})`, resultado);
    return resultado;
  }
  
  // Funções trigonométricas
  seno(angulo) {
    const anguloRad = this.configuracoes.anguloGraus ? 
      Number(angulo) * Math.PI / 180 : Number(angulo);
    const resultado = Math.sin(anguloRad);
    this.registrarOperacao(`sen(${angulo}°)`, resultado);
    return resultado;
  }
  
  cosseno(angulo) {
    const anguloRad = this.configuracoes.anguloGraus ? 
      Number(angulo) * Math.PI / 180 : Number(angulo);
    const resultado = Math.cos(anguloRad);
    this.registrarOperacao(`cos(${angulo}°)`, resultado);
    return resultado;
  }
  
  tangente(angulo) {
    const anguloRad = this.configuracoes.anguloGraus ? 
      Number(angulo) * Math.PI / 180 : Number(angulo);
    const resultado = Math.tan(anguloRad);
    this.registrarOperacao(`tan(${angulo}°)`, resultado);
    return resultado;
  }
  
  // Operações com BigInt para inteiros grandes
  fatorialGrande(n) {
    const numero = BigInt(n);
    if (numero < 0n) {
      throw new Error("Fatorial de número negativo");
    }
    
    let resultado = 1n;
    for (let i = 2n; i <= numero; i++) {
      resultado *= i;
    }
    
    this.registrarOperacao(`${n}!`, resultado.toString());
    return resultado;
  }
  
  // Operações bitwise
  operacaoBitwise(a, b, operacao) {
    const numA = parseInt(a);
    const numB = parseInt(b);
    let resultado;
    
    switch (operacao) {
      case "AND":
        resultado = numA & numB;
        break;
      case "OR":
        resultado = numA | numB;
        break;
      case "XOR":
        resultado = numA ^ numB;
        break;
      case "NOT":
        resultado = ~numA;
        break;
      case "LSHIFT":
        resultado = numA << numB;
        break;
      case "RSHIFT":
        resultado = numA >> numB;
        break;
      default:
        throw new Error("Operação bitwise inválida");
    }
    
    this.registrarOperacao(`${a} ${operacao} ${b}`, resultado);
    return resultado;
  }
  
  // Operações estatísticas
  calcularEstatisticas(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error("Array vazio ou inválido");
    }
    
    const nums = numeros.map(n => Number(n));
    const soma = nums.reduce((acc, num) => acc + num, 0);
    const media = soma / nums.length;
    
    nums.sort((a, b) => a - b);
    const mediana = nums.length % 2 === 0 ?
      (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2 :
      nums[Math.floor(nums.length / 2)];
    
    const variancia = nums.reduce((acc, num) => acc + Math.pow(num - media, 2), 0) / nums.length;
    const desvioPadrao = Math.sqrt(variancia);
    
    const resultado = {
      dados: nums,
      count: nums.length,
      soma: soma,
      media: media,
      mediana: mediana,
      minimo: Math.min(...nums),
      maximo: Math.max(...nums),
      variancia: variancia,
      desvioPadrao: desvioPadrao
    };
    
    this.registrarOperacao(`Estatísticas[${numeros.join(',')}]`, JSON.stringify(resultado));
    return resultado;
  }
  
  // Conversões e formatação
  converterBase(numero, baseOrigem, baseDestino) {
    const decimal = parseInt(numero, baseOrigem);
    const resultado = decimal.toString(baseDestino);
    this.registrarOperacao(`${numero}(base${baseOrigem}) → base${baseDestino}`, resultado);
    return resultado;
  }
  
  formatarResultado(numero) {
    const num = Number(numero);
    
    if (this.configuracoes.notacaoCientifica && (Math.abs(num) >= 1e6 || Math.abs(num) < 1e-3)) {
      return num.toExponential(this.configuracoes.precisao);
    }
    
    return num.toFixed(this.configuracoes.precisao).replace(/\.?0+$/, '');
  }
  
  // Gerenciamento de memória
  memoriaAdicionar(valor) {
    this.memoria += Number(valor);
    this.registrarOperacao(`M+ ${valor}`, this.memoria);
  }
  
  memoriaSubtrair(valor) {
    this.memoria -= Number(valor);
    this.registrarOperacao(`M- ${valor}`, this.memoria);
  }
  
  memoriaRecuperar() {
    return this.memoria;
  }
  
  memoriaLimpar() {
    this.memoria = 0;
    this.registrarOperacao("MC", 0);
  }
  
  // Utilitários
  registrarOperacao(operacao, resultado) {
    this.historico.push({
      timestamp: new Date(),
      operacao: operacao,
      resultado: resultado
    });
    
    // Manter apenas últimas 100 operações
    if (this.historico.length > 100) {
      this.historico.shift();
    }
  }
  
  obterHistorico() {
    return [...this.historico];
  }
  
  limparHistorico() {
    this.historico = [];
  }
  
  configurar(opcoes) {
    this.configuracoes = {...this.configuracoes, ...opcoes};
  }
  
  // Resolver expressão (limitado para segurança)
  resolverExpressao(expressao) {
    // ATENÇÃO: Em produção, use um parser seguro!
    try {
      // Remover caracteres perigosos
      const expressaoLimpa = expressao.replace(/[^0-9+\-*/().\s]/g, '');
      const resultado = eval(expressaoLimpa);
      this.registrarOperacao(expressao, resultado);
      return resultado;
    } catch (error) {
      throw new Error("Expressão inválida");
    }
  }
  
  // Método para testar todas as funcionalidades
  executarTestes() {
    console.log("=== Teste da Calculadora Científica ===");
    
    // Operações básicas
    console.log("5 + 3 =", this.somar(5, 3));
    console.log("10 - 4 =", this.subtrair(10, 4));
    console.log("6 × 7 =", this.multiplicar(6, 7));
    console.log("20 ÷ 4 =", this.dividir(20, 4));
    
    // Operações avançadas
    console.log("2^8 =", this.potencia(2, 8));
    console.log("√64 =", this.raiz(64));
    console.log("log10(100) =", this.logaritmo(100, 10));
    
    // Trigonometria
    console.log("sen(30°) =", this.formatarResultado(this.seno(30)));
    console.log("cos(60°) =", this.formatarResultado(this.cosseno(60)));
    
    // BigInt
    console.log("20! =", this.fatorialGrande(20));
    
    // Bitwise
    console.log("5 & 3 =", this.operacaoBitwise(5, 3, "AND"));
    console.log("5 | 3 =", this.operacaoBitwise(5, 3, "OR"));
    
    // Estatísticas
    console.log("Estatísticas [1,2,3,4,5]:", this.calcularEstatisticas([1,2,3,4,5]));
    
    // Conversões
    console.log("255 decimal → binário:", this.converterBase(255, 10, 2));
    console.log("FF hex → decimal:", this.converterBase("FF", 16, 10));
    
    // Memória
    this.memoriaAdicionar(10);
    this.memoriaAdicionar(5);
    console.log("Memória atual:", this.memoriaRecuperar());
    
    console.log("\nHistórico das últimas 5 operações:");
    this.obterHistorico().slice(-5).forEach(op => {
      console.log(`${op.operacao} = ${op.resultado}`);
    });
  }
}

// Executar teste completo
const calculadora = new CalculadoraCientifica();
calculadora.executarTestes();
```

## 💡 Dicas para Resolução

1. **Precedência**: Use parênteses quando houver dúvida
2. **Conversão**: Prefira conversões explícitas (Number(), String())
3. **BigInt**: Use para cálculos que precisam de alta precisão
4. **Bitwise**: Útil para flags, otimizações e manipulações baixo nível
5. **Ternário**: Ótimo para condicionais simples inline
6. **Nullish Coalescing**: Use ?? para valores padrão apenas quando null/undefined

---

**⏱️ Tempo estimado de prática**: 5-6 horas
**🏆 Nível**: Intermediário a Avançado
**📝 Tags**: #javascript #operadores #expressões #bigint #bitwise #ternário #exercícios
