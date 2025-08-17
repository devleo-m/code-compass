# Exercícios da Aula 8: Controle de Fluxo em JavaScript

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Estruturas Condicionais Básicas
Pratique if, else e operadores lógicos:

```javascript
// Exercício 1a: Sistema de notas
function calcularConceito(nota) {
  if (nota >= 90) {
    return "A - Excelente";
  } else if (nota >= 80) {
    return "B - Bom";
  } else if (nota >= 70) {
    return "C - Regular";
  } else if (nota >= 60) {
    return "D - Insuficiente";
  } else {
    return "F - Reprovado";
  }
}

// Teste
console.log(calcularConceito(95)); // A - Excelente
console.log(calcularConceito(75)); // C - Regular
console.log(calcularConceito(45)); // F - Reprovado

// Exercício 1b: Verificador de idade
function verificarIdade(idade) {
  if (idade < 0) {
    return "Idade inválida";
  } else if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 60) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

// Teste
console.log(verificarIdade(8));   // Criança
console.log(verificarIdade(16));  // Adolescente
console.log(verificarIdade(30));  // Adulto
console.log(verificarIdade(65));  // Idoso

// Exercício 1c: Sistema de login
function verificarLogin(usuario, senha) {
  if (!usuario || !senha) {
    return "Usuário e senha são obrigatórios";
  }
  
  if (usuario.length < 3) {
    return "Usuário deve ter pelo menos 3 caracteres";
  }
  
  if (senha.length < 6) {
    return "Senha deve ter pelo menos 6 caracteres";
  }
  
  // Simulação de credenciais válidas
  const usuarios = {
    "admin": "123456",
    "user": "password",
    "guest": "guest123"
  };
  
  if (usuarios[usuario] === senha) {
    return "Login realizado com sucesso";
  } else {
    return "Credenciais inválidas";
  }
}

// Teste
console.log(verificarLogin("admin", "123456")); // Sucesso
console.log(verificarLogin("user", "123"));     // Senha muito curta
console.log(verificarLogin("admin", "wrong"));  // Credenciais inválidas
```

### Exercício 2: Operadores Lógicos Avançados
Trabalhe com AND, OR e NOT:

```javascript
// Exercício 2a: Sistema de acesso
function verificarAcesso(usuario) {
  const temPermissao = usuario.ativo && usuario.verificado;
  const ehAdmin = usuario.tipo === "admin";
  const ehModerador = usuario.tipo === "moderador";
  
  if (ehAdmin && temPermissao) {
    return "Acesso total";
  } else if (ehModerador && temPermissao) {
    return "Acesso moderado";
  } else if (temPermissao) {
    return "Acesso básico";
  } else {
    return "Acesso negado";
  }
}

// Teste
let admin = {ativo: true, verificado: true, tipo: "admin"};
let moderador = {ativo: true, verificado: true, tipo: "moderador"};
let usuarioComum = {ativo: true, verificado: true, tipo: "user"};
let usuarioInativo = {ativo: false, verificado: true, tipo: "user"};

console.log(verificarAcesso(admin));          // Acesso total
console.log(verificarAcesso(moderador));      // Acesso moderado
console.log(verificarAcesso(usuarioComum));   // Acesso básico
console.log(verificarAcesso(usuarioInativo)); // Acesso negado

// Exercício 2b: Validador de formulário
function validarFormulario(dados) {
  const nomeValido = dados.nome && dados.nome.length >= 2;
  const emailValido = dados.email && dados.email.includes("@");
  const idadeValida = dados.idade && dados.idade >= 18 && dados.idade <= 120;
  const termos = dados.aceitouTermos === true;
  
  if (!nomeValido) {
    return "Nome deve ter pelo menos 2 caracteres";
  }
  
  if (!emailValido) {
    return "Email inválido";
  }
  
  if (!idadeValida) {
    return "Idade deve estar entre 18 e 120 anos";
  }
  
  if (!termos) {
    return "Deve aceitar os termos de uso";
  }
  
  return "Formulário válido";
}

// Teste
let form1 = {nome: "João", email: "joao@email.com", idade: 25, aceitouTermos: true};
let form2 = {nome: "A", email: "joao@email.com", idade: 25, aceitouTermos: true};
let form3 = {nome: "João", email: "email-inválido", idade: 25, aceitouTermos: true};

console.log(validarFormulario(form1)); // Formulário válido
console.log(validarFormulario(form2)); // Nome deve ter pelo menos 2 caracteres
console.log(validarFormulario(form3)); // Email inválido

// Exercício 2c: Sistema de desconto
function calcularDesconto(cliente, valorCompra) {
  const ehVip = cliente.vip === true;
  const ehAniversario = cliente.aniversario === true;
  const compraMaior100 = valorCompra > 100;
  const compraMaior500 = valorCompra > 500;
  
  let desconto = 0;
  
  if (ehVip && compraMaior500) {
    desconto = 20; // 20% para VIP com compra > 500
  } else if (ehVip && compraMaior100) {
    desconto = 15; // 15% para VIP com compra > 100
  } else if (ehVip) {
    desconto = 10; // 10% para VIP
  } else if (ehAniversario && compraMaior100) {
    desconto = 12; // 12% para aniversário com compra > 100
  } else if (ehAniversario) {
    desconto = 8;  // 8% para aniversário
  } else if (compraMaior500) {
    desconto = 5;  // 5% para compra > 500
  }
  
  const valorDesconto = (valorCompra * desconto) / 100;
  const valorFinal = valorCompra - valorDesconto;
  
  return {
    valorOriginal: valorCompra,
    desconto: desconto,
    valorDesconto: valorDesconto,
    valorFinal: valorFinal
  };
}

// Teste
let clienteVip = {vip: true, aniversario: false};
let clienteAniversario = {vip: false, aniversario: true};
let clienteComum = {vip: false, aniversario: false};

console.log(calcularDesconto(clienteVip, 600));        // 20% desconto
console.log(calcularDesconto(clienteAniversario, 150)); // 12% desconto
console.log(calcularDesconto(clienteComum, 80));       // 0% desconto
```

### Exercício 3: Operador Ternário
Pratique condicionais concisas:

```javascript
// Exercício 3a: Status de usuário
const verificarStatus = (usuario) => {
  return usuario.ativo ? "Online" : "Offline";
};

const obterPermissao = (usuario) => {
  return usuario.admin ? "Administrador" : 
         usuario.moderador ? "Moderador" : "Usuário";
};

const calcularIdade = (nascimento) => {
  const idade = new Date().getFullYear() - nascimento;
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
};

// Teste
let user1 = {ativo: true, admin: true, moderador: false};
let user2 = {ativo: false, admin: false, moderador: true};

console.log(verificarStatus(user1));    // Online
console.log(obterPermissao(user1));     // Administrador
console.log(calcularIdade(1990));       // Maior de idade
console.log(calcularIdade(2010));       // Menor de idade

// Exercício 3b: Formatação de dados
const formatarNome = (nome) => nome ? nome.trim().toLowerCase() : "sem nome";

const formatarTelefone = (telefone) => {
  return telefone && telefone.length === 11 ? 
    `(${telefone.slice(0,2)}) ${telefone.slice(2,7)}-${telefone.slice(7)}` : 
    "Telefone inválido";
};

const obterSaudacao = (hora) => {
  return hora < 12 ? "Bom dia" :
         hora < 18 ? "Boa tarde" : "Boa noite";
};

// Teste
console.log(formatarNome("  JOÃO  "));      // joão
console.log(formatarTelefone("11987654321")); // (11) 98765-4321
console.log(obterSaudacao(10));              // Bom dia
console.log(obterSaudacao(15));              // Boa tarde
console.log(obterSaudacao(20));              // Boa noite

// Exercício 3c: Validações rápidas
const validarEmail = (email) => email && email.includes("@") ? "Válido" : "Inválido";

const verificarParidade = (num) => num % 2 === 0 ? "Par" : "Ímpar";

const obterCategoria = (idade) => {
  return idade < 13 ? "Criança" :
         idade < 20 ? "Adolescente" :
         idade < 60 ? "Adulto" : "Idoso";
};

const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc < 18.5 ? "Abaixo do peso" :
         imc < 25 ? "Peso normal" :
         imc < 30 ? "Sobrepeso" : "Obesidade";
};

// Teste
console.log(validarEmail("teste@email.com")); // Válido
console.log(verificarParidade(42));           // Par
console.log(obterCategoria(25));              // Adulto
console.log(calcularIMC(70, 1.75));          // Peso normal
```

### Exercício 4: Switch Case Avançado
Domine múltiplas opções:

```javascript
// Exercício 4a: Calculadora completa
function calculadora(operacao, a, b) {
  switch (operacao.toLowerCase()) {
    case "+":
    case "soma":
    case "adicao":
      return `${a} + ${b} = ${a + b}`;
      
    case "-":
    case "subtracao":
    case "menos":
      return `${a} - ${b} = ${a - b}`;
      
    case "*":
    case "multiplicacao":
    case "vezes":
      return `${a} × ${b} = ${a * b}`;
      
    case "/":
    case "divisao":
      if (b === 0) {
        return "Erro: Divisão por zero";
      }
      return `${a} ÷ ${b} = ${a / b}`;
      
    case "**":
    case "potencia":
    case "elevado":
      return `${a}^${b} = ${a ** b}`;
      
    case "%":
    case "resto":
    case "modulo":
      return `${a} % ${b} = ${a % b}`;
      
    default:
      return "Operação não reconhecida";
  }
}

// Teste
console.log(calculadora("+", 10, 5));           // 10 + 5 = 15
console.log(calculadora("multiplicacao", 3, 4)); // 3 × 4 = 12
console.log(calculadora("potencia", 2, 3));     // 2^3 = 8
console.log(calculadora("/", 10, 0));           // Erro: Divisão por zero

// Exercício 4b: Sistema de notas por região
function sistemaNotas(nota, sistema) {
  switch (sistema.toUpperCase()) {
    case "BRASILEIRO":
    case "BR":
      if (nota >= 7) return "Aprovado";
      if (nota >= 5) return "Recuperação";
      return "Reprovado";
      
    case "AMERICANO":
    case "US":
      switch (true) {
        case (nota >= 90): return "A";
        case (nota >= 80): return "B";
        case (nota >= 70): return "C";
        case (nota >= 60): return "D";
        default: return "F";
      }
      
    case "EUROPEU":
    case "EU":
      switch (true) {
        case (nota >= 85): return "Excelente";
        case (nota >= 70): return "Bom";
        case (nota >= 55): return "Satisfatório";
        case (nota >= 40): return "Suficiente";
        default: return "Insuficiente";
      }
      
    default:
      return "Sistema de notas não reconhecido";
  }
}

// Teste
console.log(sistemaNotas(85, "brasileiro"));  // Aprovado
console.log(sistemaNotas(85, "americano"));   // B
console.log(sistemaNotas(85, "europeu"));     // Excelente

// Exercício 4c: Conversor de unidades
function converterUnidade(valor, de, para) {
  const unidade = `${de.toLowerCase()}_${para.toLowerCase()}`;
  
  switch (unidade) {
    // Temperatura
    case "celsius_fahrenheit":
      return (valor * 9/5) + 32;
    case "fahrenheit_celsius":
      return (valor - 32) * 5/9;
    case "celsius_kelvin":
      return valor + 273.15;
    case "kelvin_celsius":
      return valor - 273.15;
      
    // Distância
    case "metro_kilometro":
      return valor / 1000;
    case "kilometro_metro":
      return valor * 1000;
    case "metro_centimetro":
      return valor * 100;
    case "centimetro_metro":
      return valor / 100;
      
    // Peso
    case "quilograma_grama":
      return valor * 1000;
    case "grama_quilograma":
      return valor / 1000;
    case "quilograma_tonelada":
      return valor / 1000;
    case "tonelada_quilograma":
      return valor * 1000;
      
    default:
      return "Conversão não suportada";
  }
}

// Teste
console.log(converterUnidade(0, "celsius", "fahrenheit"));    // 32
console.log(converterUnidade(1000, "metro", "kilometro"));    // 1
console.log(converterUnidade(2, "quilograma", "grama"));      // 2000

// Exercício 4d: Sistema de status HTTP
function interpretarStatusHTTP(codigo) {
  switch (Math.floor(codigo / 100)) {
    case 1:
      return "Informacional - Solicitação recebida, continuando processo";
      
    case 2:
      switch (codigo) {
        case 200: return "OK - Solicitação bem-sucedida";
        case 201: return "Created - Recurso criado com sucesso";
        case 204: return "No Content - Solicitação bem-sucedida, sem conteúdo";
        default: return "Sucesso";
      }
      
    case 3:
      switch (codigo) {
        case 301: return "Moved Permanently - Recurso movido permanentemente";
        case 302: return "Found - Recurso movido temporariamente";
        case 304: return "Not Modified - Recurso não modificado";
        default: return "Redirecionamento";
      }
      
    case 4:
      switch (codigo) {
        case 400: return "Bad Request - Solicitação inválida";
        case 401: return "Unauthorized - Não autorizado";
        case 403: return "Forbidden - Acesso proibido";
        case 404: return "Not Found - Recurso não encontrado";
        default: return "Erro do cliente";
      }
      
    case 5:
      switch (codigo) {
        case 500: return "Internal Server Error - Erro interno do servidor";
        case 502: return "Bad Gateway - Gateway inválido";
        case 503: return "Service Unavailable - Serviço indisponível";
        default: return "Erro do servidor";
      }
      
    default:
      return "Código de status desconhecido";
  }
}

// Teste
console.log(interpretarStatusHTTP(200)); // OK - Solicitação bem-sucedida
console.log(interpretarStatusHTTP(404)); // Not Found - Recurso não encontrado
console.log(interpretarStatusHTTP(500)); // Internal Server Error
```

### Exercício 5: Try, Catch, Finally Básico
Aprenda tratamento de erros:

```javascript
// Exercício 5a: Divisão segura
function divisaoSegura(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Ambos argumentos devem ser números");
    }
    
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    
    const resultado = a / b;
    console.log(`Resultado: ${a} ÷ ${b} = ${resultado}`);
    return resultado;
    
  } catch (error) {
    console.log(`Erro na divisão: ${error.message}`);
    return null;
    
  } finally {
    console.log("Operação de divisão finalizada");
  }
}

// Teste
console.log(divisaoSegura(10, 2));    // Resultado: 10 ÷ 2 = 5
console.log(divisaoSegura(10, 0));    // Erro: Divisão por zero
console.log(divisaoSegura("10", 2));  // Erro: Tipo inválido

// Exercício 5b: Parser JSON seguro
function parseJSONSeguro(jsonString) {
  try {
    console.log("Tentando fazer parse do JSON...");
    const objeto = JSON.parse(jsonString);
    console.log("Parse realizado com sucesso");
    return {sucesso: true, dados: objeto};
    
  } catch (error) {
    console.log("Erro no parse:", error.message);
    return {sucesso: false, erro: error.message};
    
  } finally {
    console.log("Operação de parse finalizada");
  }
}

// Teste
console.log(parseJSONSeguro('{"nome": "João", "idade": 30}'));  // Sucesso
console.log(parseJSONSeguro('{"nome": "João", idade: 30}'));    // Erro: JSON inválido
console.log(parseJSONSeguro('string normal'));                  // Erro: Não é JSON

// Exercício 5c: Acessor de propriedade seguro
function acessarPropriedade(objeto, caminho) {
  try {
    console.log(`Acessando: ${caminho}`);
    
    if (!objeto) {
      throw new ReferenceError("Objeto não fornecido");
    }
    
    const propriedades = caminho.split(".");
    let valor = objeto;
    
    for (const prop of propriedades) {
      if (valor[prop] === undefined) {
        throw new Error(`Propriedade '${prop}' não encontrada`);
      }
      valor = valor[prop];
    }
    
    console.log(`Valor encontrado: ${valor}`);
    return valor;
    
  } catch (error) {
    console.log(`Erro ao acessar propriedade: ${error.message}`);
    return undefined;
    
  } finally {
    console.log("Acesso à propriedade finalizado");
  }
}

// Teste
let obj = {
  usuario: {
    perfil: {
      nome: "João",
      idade: 30
    }
  }
};

console.log(acessarPropriedade(obj, "usuario.perfil.nome"));     // João
console.log(acessarPropriedade(obj, "usuario.perfil.email"));   // Erro: Propriedade não encontrada
console.log(acessarPropriedade(null, "usuario.nome"));          // Erro: Objeto não fornecido
```

### Exercício 6: Tipos de Error
Trabalhe com diferentes tipos de erro:

```javascript
// Exercício 6a: Validador com tipos específicos de erro
function validarDados(dados) {
  try {
    // Verifica se dados existem
    if (dados === null || dados === undefined) {
      throw new ReferenceError("Dados não fornecidos");
    }
    
    // Verifica se é um objeto
    if (typeof dados !== "object") {
      throw new TypeError("Dados devem ser um objeto");
    }
    
    // Verifica propriedades obrigatórias
    if (!dados.hasOwnProperty("nome")) {
      throw new Error("Propriedade 'nome' é obrigatória");
    }
    
    if (!dados.hasOwnProperty("idade")) {
      throw new Error("Propriedade 'idade' é obrigatória");
    }
    
    // Valida tipos
    if (typeof dados.nome !== "string") {
      throw new TypeError("Nome deve ser uma string");
    }
    
    if (typeof dados.idade !== "number") {
      throw new TypeError("Idade deve ser um número");
    }
    
    // Valida intervalos
    if (dados.idade < 0 || dados.idade > 150) {
      throw new RangeError("Idade deve estar entre 0 e 150 anos");
    }
    
    if (dados.nome.length < 2) {
      throw new RangeError("Nome deve ter pelo menos 2 caracteres");
    }
    
    return "Dados válidos";
    
  } catch (error) {
    // Tratamento específico por tipo
    if (error instanceof ReferenceError) {
      console.log("🔍 Erro de referência:", error.message);
      return "Dados não fornecidos";
      
    } else if (error instanceof TypeError) {
      console.log("🔧 Erro de tipo:", error.message);
      return "Tipo de dado incorreto";
      
    } else if (error instanceof RangeError) {
      console.log("📏 Erro de intervalo:", error.message);
      return "Valor fora do intervalo válido";
      
    } else {
      console.log("❓ Erro geral:", error.message);
      return "Erro de validação";
    }
  }
}

// Teste
console.log(validarDados(null));                              // ReferenceError
console.log(validarDados("string"));                          // TypeError
console.log(validarDados({}));                               // Error (falta nome)
console.log(validarDados({nome: 123, idade: 30}));           // TypeError (nome)
console.log(validarDados({nome: "João", idade: "30"}));      // TypeError (idade)
console.log(validarDados({nome: "João", idade: 200}));       // RangeError (idade)
console.log(validarDados({nome: "A", idade: 30}));           // RangeError (nome)
console.log(validarDados({nome: "João", idade: 30}));        // Sucesso

// Exercício 6b: Sistema de arquivos simulado
class FileSystemError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "FileSystemError";
    this.code = code;
  }
}

class FileSystem {
  constructor() {
    this.arquivos = {
      "documento.txt": "Conteúdo do documento",
      "imagem.jpg": "Dados da imagem",
      "config.json": '{"tema": "escuro"}'
    };
  }
  
  lerArquivo(nomeArquivo) {
    try {
      if (!nomeArquivo) {
        throw new ReferenceError("Nome do arquivo é obrigatório");
      }
      
      if (typeof nomeArquivo !== "string") {
        throw new TypeError("Nome do arquivo deve ser uma string");
      }
      
      if (nomeArquivo.length === 0) {
        throw new RangeError("Nome do arquivo não pode estar vazio");
      }
      
      if (!this.arquivos.hasOwnProperty(nomeArquivo)) {
        throw new FileSystemError("Arquivo não encontrado", "ENOENT");
      }
      
      return this.arquivos[nomeArquivo];
      
    } catch (error) {
      this.tratarErro(error);
      return null;
    }
  }
  
  escreverArquivo(nomeArquivo, conteudo) {
    try {
      if (!nomeArquivo || !conteudo) {
        throw new ReferenceError("Nome e conteúdo são obrigatórios");
      }
      
      if (typeof nomeArquivo !== "string" || typeof conteudo !== "string") {
        throw new TypeError("Nome e conteúdo devem ser strings");
      }
      
      this.arquivos[nomeArquivo] = conteudo;
      return "Arquivo salvo com sucesso";
      
    } catch (error) {
      this.tratarErro(error);
      return null;
    }
  }
  
  tratarErro(error) {
    switch (error.constructor.name) {
      case "ReferenceError":
        console.log("❌ Referência inválida:", error.message);
        break;
      case "TypeError":
        console.log("❌ Tipo incorreto:", error.message);
        break;
      case "RangeError":
        console.log("❌ Valor inválido:", error.message);
        break;
      case "FileSystemError":
        console.log(`❌ Erro do sistema de arquivos [${error.code}]:`, error.message);
        break;
      default:
        console.log("❌ Erro desconhecido:", error.message);
    }
  }
}

// Teste
let fs = new FileSystem();
console.log(fs.lerArquivo("documento.txt"));     // Sucesso
console.log(fs.lerArquivo("inexistente.txt"));   // FileSystemError
console.log(fs.lerArquivo(123));                 // TypeError
console.log(fs.lerArquivo(""));                  // RangeError
console.log(fs.escreverArquivo("novo.txt", "Conteúdo novo")); // Sucesso
```

### Exercício 7: Throw Personalizado
Crie e lance exceções personalizadas:

```javascript
// Exercício 7a: Sistema de validação de usuário
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
  }
}

class AuthorizationError extends Error {
  constructor(message, requiredRole) {
    super(message);
    this.name = "AuthorizationError";
    this.requiredRole = requiredRole;
  }
}

function validarUsuario(dadosUsuario) {
  // Validação de email
  if (!dadosUsuario.email) {
    throw new ValidationError("Email é obrigatório", "email");
  }
  
  if (!dadosUsuario.email.includes("@")) {
    throw new ValidationError("Formato de email inválido", "email");
  }
  
  // Validação de senha
  if (!dadosUsuario.senha) {
    throw new ValidationError("Senha é obrigatória", "senha");
  }
  
  if (dadosUsuario.senha.length < 8) {
    throw new ValidationError("Senha deve ter pelo menos 8 caracteres", "senha");
  }
  
  // Validação de idade
  if (dadosUsuario.idade && (dadosUsuario.idade < 13 || dadosUsuario.idade > 120)) {
    throw new ValidationError("Idade deve estar entre 13 e 120 anos", "idade");
  }
  
  return true;
}

function autenticarUsuario(email, senha) {
  const usuarios = {
    "admin@site.com": {senha: "admin123", role: "admin"},
    "user@site.com": {senha: "user1234", role: "user"}
  };
  
  if (!usuarios[email]) {
    throw new AuthenticationError("Usuário não encontrado");
  }
  
  if (usuarios[email].senha !== senha) {
    throw new AuthenticationError("Senha incorreta");
  }
  
  return usuarios[email];
}

function verificarPermissao(usuario, acaoRequerida) {
  const permissoes = {
    admin: ["ler", "escrever", "deletar", "administrar"],
    user: ["ler", "escrever"]
  };
  
  if (!permissoes[usuario.role].includes(acaoRequerida)) {
    throw new AuthorizationError(
      `Acesso negado para ação: ${acaoRequerida}`, 
      "admin"
    );
  }
  
  return true;
}

// Sistema completo
function executarAcao(dadosUsuario, acao) {
  try {
    // 1. Validar dados
    validarUsuario(dadosUsuario);
    console.log("✅ Dados válidos");
    
    // 2. Autenticar
    const usuario = autenticarUsuario(dadosUsuario.email, dadosUsuario.senha);
    console.log("✅ Usuário autenticado");
    
    // 3. Verificar permissão
    verificarPermissao(usuario, acao);
    console.log("✅ Permissão concedida");
    
    return `Ação '${acao}' executada com sucesso`;
    
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`❌ Erro de validação no campo '${error.field}': ${error.message}`);
    } else if (error instanceof AuthenticationError) {
      console.log(`❌ Erro de autenticação: ${error.message}`);
    } else if (error instanceof AuthorizationError) {
      console.log(`❌ Erro de autorização: ${error.message}`);
      console.log(`   Role necessária: ${error.requiredRole}`);
    } else {
      console.log(`❌ Erro inesperado: ${error.message}`);
    }
    
    return "Ação não executada";
  }
}

// Teste
let dadosValidos = {email: "admin@site.com", senha: "admin123", idade: 25};
let dadosInvalidos = {email: "admin", senha: "123"};

console.log(executarAcao(dadosValidos, "ler"));        // Sucesso
console.log(executarAcao(dadosValidos, "administrar")); // Sucesso
console.log(executarAcao(dadosInvalidos, "ler"));      // Erro validação
console.log(executarAcao({email: "user@site.com", senha: "user1234"}, "deletar")); // Erro autorização

// Exercício 7b: Sistema de API com rate limiting
class RateLimitError extends Error {
  constructor(message, retryAfter) {
    super(message);
    this.name = "RateLimitError";
    this.retryAfter = retryAfter;
  }
}

class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

class APIClient {
  constructor() {
    this.requests = {};
    this.limits = {
      perMinute: 60,
      perHour: 1000
    };
  }
  
  makeRequest(endpoint, userId) {
    try {
      this.checkRateLimit(userId);
      this.simulateAPICall(endpoint);
      this.recordRequest(userId);
      
      return `Sucesso: ${endpoint}`;
      
    } catch (error) {
      if (error instanceof RateLimitError) {
        console.log(`⏳ Rate limit atingido: ${error.message}`);
        console.log(`   Tente novamente em: ${error.retryAfter}s`);
      } else if (error instanceof APIError) {
        console.log(`🌐 Erro da API [${error.statusCode}]: ${error.message}`);
      } else {
        console.log(`❌ Erro inesperado: ${error.message}`);
      }
      
      throw error;
    }
  }
  
  checkRateLimit(userId) {
    const now = Date.now();
    const userRequests = this.requests[userId] || [];
    
    // Remove requests antigas (mais de 1 minuto)
    const recentRequests = userRequests.filter(time => now - time < 60000);
    
    if (recentRequests.length >= this.limits.perMinute) {
      throw new RateLimitError("Muitas requisições por minuto", 60);
    }
    
    this.requests[userId] = recentRequests;
  }
  
  simulateAPICall(endpoint) {
    // Simula diferentes tipos de erro baseado no endpoint
    if (endpoint.includes("error500")) {
      throw new APIError("Erro interno do servidor", 500);
    }
    
    if (endpoint.includes("notfound")) {
      throw new APIError("Recurso não encontrado", 404);
    }
    
    if (endpoint.includes("unauthorized")) {
      throw new APIError("Não autorizado", 401);
    }
    
    // Simula sucesso
    return true;
  }
  
  recordRequest(userId) {
    if (!this.requests[userId]) {
      this.requests[userId] = [];
    }
    this.requests[userId].push(Date.now());
  }
}

// Teste
let apiClient = new APIClient();

try {
  console.log(apiClient.makeRequest("/users", "user1"));     // Sucesso
  console.log(apiClient.makeRequest("/posts", "user1"));     // Sucesso
  console.log(apiClient.makeRequest("/notfound", "user1"));  // APIError 404
} catch (error) {
  // Erro já tratado no método
}

try {
  console.log(apiClient.makeRequest("/error500", "user1"));  // APIError 500
} catch (error) {
  // Erro já tratado no método
}
```

### Exercício 8: Patterns de Error Handling
Implemente padrões avançados:

```javascript
// Exercício 8a: Circuit Breaker Pattern
class CircuitBreakerError extends Error {
  constructor(message) {
    super(message);
    this.name = "CircuitBreakerError";
  }
}

class CircuitBreaker {
  constructor(failureThreshold = 5, timeout = 60000) {
    this.failureThreshold = failureThreshold;
    this.timeout = timeout;
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
  }
  
  async call(operation) {
    if (this.state === "OPEN") {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        this.state = "HALF_OPEN";
        console.log("🔄 Circuit Breaker mudou para HALF_OPEN");
      } else {
        throw new CircuitBreakerError("Circuit Breaker está OPEN");
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
    if (this.state === "HALF_OPEN") {
      this.state = "CLOSED";
      console.log("✅ Circuit Breaker mudou para CLOSED");
    }
  }
  
  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = "OPEN";
      console.log("🚫 Circuit Breaker mudou para OPEN");
    }
  }
  
  getState() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      lastFailure: this.lastFailureTime
    };
  }
}

// Serviço instável para teste
async function servicoInstavel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) { // 70% chance de falha
        reject(new Error("Serviço indisponível"));
      } else {
        resolve("Sucesso do serviço");
      }
    }, 100);
  });
}

// Teste do Circuit Breaker
async function testarCircuitBreaker() {
  const circuitBreaker = new CircuitBreaker(3, 5000); // 3 falhas, 5s timeout
  
  for (let i = 1; i <= 10; i++) {
    try {
      console.log(`\n--- Tentativa ${i} ---`);
      const resultado = await circuitBreaker.call(servicoInstavel);
      console.log("✅", resultado);
    } catch (error) {
      if (error instanceof CircuitBreakerError) {
        console.log("🚫", error.message);
      } else {
        console.log("❌", error.message);
      }
    }
    
    console.log("Estado:", circuitBreaker.getState());
    
    // Aguarda um pouco entre tentativas
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// testarCircuitBreaker(); // Descomente para testar

// Exercício 8b: Retry Pattern com Backoff
class RetryableError extends Error {
  constructor(message, isRetryable = true) {
    super(message);
    this.name = "RetryableError";
    this.isRetryable = isRetryable;
  }
}

async function comRetryEBackoff(
  operacao, 
  maxTentativas = 3, 
  delayInicial = 1000, 
  multiplicador = 2
) {
  let ultimoErro;
  
  for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    try {
      console.log(`🔄 Tentativa ${tentativa}/${maxTentativas}`);
      const resultado = await operacao();
      console.log("✅ Operação bem-sucedida");
      return resultado;
      
    } catch (error) {
      ultimoErro = error;
      console.log(`❌ Tentativa ${tentativa} falhou: ${error.message}`);
      
      // Verifica se o erro é retry-able
      if (error instanceof RetryableError && !error.isRetryable) {
        console.log("🚫 Erro não é retry-able, parando tentativas");
        throw error;
      }
      
      // Se é a última tentativa, relança o erro
      if (tentativa === maxTentativas) {
        console.log("🚫 Todas as tentativas falharam");
        throw ultimoErro;
      }
      
      // Calcula delay com backoff exponencial
      const delay = delayInicial * Math.pow(multiplicador, tentativa - 1);
      console.log(`⏳ Aguardando ${delay}ms antes da próxima tentativa`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Operação que pode falhar
async function operacaoComFalhas() {
  return new Promise((resolve, reject) => {
    const chance = Math.random();
    
    if (chance < 0.3) {
      resolve("Operação bem-sucedida!");
    } else if (chance < 0.8) {
      reject(new RetryableError("Erro temporário de rede", true));
    } else {
      reject(new RetryableError("Erro de autenticação", false));
    }
  });
}

// Teste do Retry Pattern
async function testarRetry() {
  try {
    const resultado = await comRetryEBackoff(operacaoComFalhas, 5, 500, 2);
    console.log("🎉 Resultado final:", resultado);
  } catch (error) {
    console.log("💥 Operação falhou definitivamente:", error.message);
  }
}

// testarRetry(); // Descomente para testar

// Exercício 8c: Error Boundary para funções
class ErrorBoundary {
  constructor() {
    this.errors = [];
  }
  
  wrap(fn, errorHandler) {
    return (...args) => {
      try {
        return fn.apply(this, args);
      } catch (error) {
        this.errors.push({
          error,
          timestamp: new Date(),
          function: fn.name || 'anonymous',
          args
        });
        
        if (errorHandler) {
          return errorHandler(error, ...args);
        }
        
        // Retorna valor padrão baseado no tipo esperado
        return this.getDefaultValue(error);
      }
    };
  }
  
  getDefaultValue(error) {
    // Retorna valores padrão seguros
    if (error.message.includes("number")) return 0;
    if (error.message.includes("string")) return "";
    if (error.message.includes("array")) return [];
    if (error.message.includes("object")) return {};
    return null;
  }
  
  getErrors() {
    return this.errors;
  }
  
  clearErrors() {
    this.errors = [];
  }
}

// Funções que podem falhar
function dividir(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}

function acessarPropriedade(obj, prop) {
  if (!obj) throw new Error("Objeto nulo");
  if (!(prop in obj)) throw new Error("Propriedade não encontrada");
  return obj[prop];
}

function processarArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Não é um array");
  return arr.map(x => x * 2);
}

// Teste do Error Boundary
const boundary = new ErrorBoundary();

const dividirSeguro = boundary.wrap(dividir, (error, a, b) => {
  console.log(`Erro na divisão: ${error.message}`);
  return Infinity;
});

const acessarSeguro = boundary.wrap(acessarPropriedade, (error, obj, prop) => {
  console.log(`Erro no acesso: ${error.message}`);
  return `Valor padrão para ${prop}`;
});

const processarSeguro = boundary.wrap(processarArray);

// Teste
console.log("=== Teste Error Boundary ===");
console.log(dividirSeguro(10, 2));     // 5
console.log(dividirSeguro(10, 0));     // Infinity (tratado)
console.log(acessarSeguro({nome: "João"}, "idade")); // Valor padrão
console.log(processarSeguro("não é array")); // [] (valor padrão)

console.log("\nErros capturados:", boundary.getErrors().length);
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual estrutura é melhor para múltiplas opções discretas?
- [ ] if...else
- [x] switch
- [ ] while
- [ ] for

### Pergunta 2
O que acontece quando um erro não é tratado?
- [ ] O código continua normalmente
- [x] O programa para de executar
- [ ] O erro é ignorado
- [ ] Retorna undefined

### Pergunta 3
Qual bloco sempre executa, independente de erro?
- [ ] try
- [ ] catch
- [x] finally
- [ ] throw

### Pergunta 4
Qual operador verifica igualdade sem conversão de tipo?
- [ ] ==
- [x] ===
- [ ] =
- [ ] !==

### Pergunta 5
Como criar um erro personalizado?
- [ ] new Error()
- [ ] throw "string"
- [x] class CustomError extends Error
- [ ] try...catch

### Pergunta 6
O que o operador ternário substitui?
- [x] if...else simples
- [ ] switch
- [ ] loops
- [ ] try...catch

### Pergunta 7
Qual tipo de erro ocorre com variável não declarada?
- [ ] TypeError
- [x] ReferenceError
- [ ] SyntaxError
- [ ] RangeError

### Pergunta 8
Quando usar do...while em vez de while?
- [ ] Nunca
- [x] Quando precisar executar pelo menos uma vez
- [ ] Quando a condição é complexa
- [ ] Sempre

## 🚀 Desafio Avançado: Sistema de Validação e Processamento Robusto

Crie um sistema completo que combina todos os conceitos de controle de fluxo:

```javascript
// Sistema de processamento de pedidos com validação completa
class OrderProcessingSystem {
  constructor() {
    this.orders = [];
    this.inventory = {
      "produto1": 10,
      "produto2": 5,
      "produto3": 0
    };
    this.discountRules = {
      "VIP": 0.2,
      "REGULAR": 0.1,
      "NEW": 0.05
    };
  }
  
  // Processa um pedido completo
  processOrder(orderData) {
    try {
      console.log("🛒 Iniciando processamento do pedido...");
      
      // 1. Validação completa
      const validationResult = this.validateOrder(orderData);
      if (!validationResult.isValid) {
        throw new ValidationError(validationResult.errors.join(", "));
      }
      
      // 2. Verifica estoque
      this.checkInventory(orderData.items);
      
      // 3. Calcula preços
      const pricing = this.calculatePricing(orderData);
      
      // 4. Aplica regras de negócio
      const finalOrder = this.applyBusinessRules(orderData, pricing);
      
      // 5. Processa pagamento (simulado)
      this.processPayment(finalOrder);
      
      // 6. Atualiza estoque
      this.updateInventory(orderData.items);
      
      // 7. Salva pedido
      this.saveOrder(finalOrder);
      
      console.log("✅ Pedido processado com sucesso!");
      return {
        success: true,
        orderId: finalOrder.id,
        total: finalOrder.total
      };
      
    } catch (error) {
      return this.handleOrderError(error, orderData);
    }
  }
  
  // Validação completa do pedido
  validateOrder(orderData) {
    const errors = [];
    
    // Validação de estrutura básica
    if (!orderData) {
      errors.push("Dados do pedido são obrigatórios");
      return {isValid: false, errors};
    }
    
    // Validação de cliente
    if (!orderData.customer) {
      errors.push("Dados do cliente são obrigatórios");
    } else {
      // Validação detalhada do cliente
      const customerValidation = this.validateCustomer(orderData.customer);
      errors.push(...customerValidation);
    }
    
    // Validação de itens
    if (!orderData.items || !Array.isArray(orderData.items)) {
      errors.push("Lista de itens é obrigatória");
    } else if (orderData.items.length === 0) {
      errors.push("Pedido deve ter pelo menos um item");
    } else {
      // Validação detalhada dos itens
      const itemValidation = this.validateItems(orderData.items);
      errors.push(...itemValidation);
    }
    
    // Validação de método de pagamento
    const paymentValidation = this.validatePayment(orderData.payment);
    errors.push(...paymentValidation);
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  validateCustomer(customer) {
    const errors = [];
    
    // Nome
    if (!customer.name || typeof customer.name !== "string") {
      errors.push("Nome do cliente é obrigatório");
    } else if (customer.name.length < 2) {
      errors.push("Nome deve ter pelo menos 2 caracteres");
    }
    
    // Email
    if (!customer.email) {
      errors.push("Email é obrigatório");
    } else if (!customer.email.includes("@")) {
      errors.push("Email inválido");
    }
    
    // Tipo de cliente
    const validTypes = ["VIP", "REGULAR", "NEW"];
    if (!customer.type || !validTypes.includes(customer.type)) {
      errors.push("Tipo de cliente deve ser VIP, REGULAR ou NEW");
    }
    
    return errors;
  }
  
  validateItems(items) {
    const errors = [];
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      
      if (!item.productId) {
        errors.push(`Item ${i + 1}: ID do produto é obrigatório`);
      }
      
      if (!item.quantity || typeof item.quantity !== "number") {
        errors.push(`Item ${i + 1}: Quantidade deve ser um número`);
      } else if (item.quantity <= 0) {
        errors.push(`Item ${i + 1}: Quantidade deve ser maior que zero`);
      }
      
      if (!item.price || typeof item.price !== "number") {
        errors.push(`Item ${i + 1}: Preço deve ser um número`);
      } else if (item.price <= 0) {
        errors.push(`Item ${i + 1}: Preço deve ser maior que zero`);
      }
    }
    
    return errors;
  }
  
  validatePayment(payment) {
    const errors = [];
    
    if (!payment) {
      errors.push("Método de pagamento é obrigatório");
      return errors;
    }
    
    const validMethods = ["credit_card", "debit_card", "pix", "boleto"];
    if (!validMethods.includes(payment.method)) {
      errors.push("Método de pagamento inválido");
    }
    
    // Validação específica por método
    switch (payment.method) {
      case "credit_card":
      case "debit_card":
        if (!payment.cardNumber || payment.cardNumber.length !== 16) {
          errors.push("Número do cartão deve ter 16 dígitos");
        }
        if (!payment.expiryDate) {
          errors.push("Data de expiração é obrigatória");
        }
        break;
        
      case "pix":
        if (!payment.pixKey) {
          errors.push("Chave PIX é obrigatória");
        }
        break;
        
      case "boleto":
        // Boleto não requer validação adicional
        break;
    }
    
    return errors;
  }
  
  checkInventory(items) {
    for (const item of items) {
      const available = this.inventory[item.productId] || 0;
      
      if (available === 0) {
        throw new Error(`Produto ${item.productId} está fora de estoque`);
      }
      
      if (available < item.quantity) {
        throw new Error(
          `Estoque insuficiente para ${item.productId}. ` +
          `Disponível: ${available}, Solicitado: ${item.quantity}`
        );
      }
    }
  }
  
  calculatePricing(orderData) {
    let subtotal = 0;
    let discount = 0;
    let shipping = 0;
    
    // Calcula subtotal
    for (const item of orderData.items) {
      subtotal += item.price * item.quantity;
    }
    
    // Calcula desconto baseado no tipo de cliente
    const discountRate = this.discountRules[orderData.customer.type] || 0;
    discount = subtotal * discountRate;
    
    // Calcula frete
    if (subtotal < 100) {
      shipping = 15; // Frete fixo para pedidos menores
    } else if (orderData.customer.type === "VIP") {
      shipping = 0; // Frete grátis para VIP
    } else {
      shipping = 10; // Frete reduzido
    }
    
    const total = subtotal - discount + shipping;
    
    return {subtotal, discount, shipping, total};
  }
  
  applyBusinessRules(orderData, pricing) {
    const finalOrder = {
      id: this.generateOrderId(),
      timestamp: new Date(),
      customer: orderData.customer,
      items: orderData.items,
      payment: orderData.payment,
      ...pricing
    };
    
    // Regra: Pedidos acima de R$ 500 ganham upgrade de frete
    if (pricing.total > 500 && orderData.customer.type !== "VIP") {
      finalOrder.shipping = 0;
      finalOrder.total = pricing.subtotal - pricing.discount;
      finalOrder.notes = "Frete grátis por compra acima de R$ 500";
    }
    
    // Regra: Primeira compra de cliente NEW ganha desconto extra
    if (orderData.customer.type === "NEW" && orderData.customer.firstOrder) {
      const extraDiscount = pricing.subtotal * 0.05; // 5% extra
      finalOrder.discount += extraDiscount;
      finalOrder.total -= extraDiscount;
      finalOrder.notes = (finalOrder.notes || "") + " Desconto de primeira compra aplicado";
    }
    
    return finalOrder;
  }
  
  processPayment(order) {
    // Simulação de processamento de pagamento
    const method = order.payment.method;
    
    switch (method) {
      case "credit_card":
        // Simula verificação de cartão
        if (Math.random() < 0.1) { // 10% chance de falha
          throw new Error("Cartão de crédito recusado");
        }
        break;
        
      case "debit_card":
        // Simula verificação de saldo
        if (Math.random() < 0.05) { // 5% chance de falha
          throw new Error("Saldo insuficiente no cartão de débito");
        }
        break;
        
      case "pix":
        // PIX normalmente não falha na validação
        break;
        
      case "boleto":
        // Boleto é sempre aceito na geração
        break;
        
      default:
        throw new Error("Método de pagamento não suportado");
    }
    
    console.log(`💳 Pagamento processado via ${method}`);
  }
  
  updateInventory(items) {
    for (const item of items) {
      this.inventory[item.productId] -= item.quantity;
    }
    console.log("📦 Estoque atualizado");
  }
  
  saveOrder(order) {
    this.orders.push(order);
    console.log(`💾 Pedido ${order.id} salvo`);
  }
  
  handleOrderError(error, orderData) {
    console.log(`❌ Erro no processamento: ${error.message}`);
    
    // Log detalhado do erro
    const errorLog = {
      timestamp: new Date(),
      error: error.message,
      errorType: error.constructor.name,
      orderData: orderData,
      stack: error.stack
    };
    
    // Aqui você salvaria o log de erro
    console.log("📝 Erro registrado nos logs");
    
    return {
      success: false,
      error: error.message,
      errorType: error.constructor.name
    };
  }
  
  generateOrderId() {
    return "ORD" + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
  }
  
  // Método para testar diferentes cenários
  runTests() {
    console.log("🧪 Executando testes do sistema...\n");
    
    // Teste 1: Pedido válido
    console.log("=== Teste 1: Pedido válido ===");
    const validOrder = {
      customer: {
        name: "João Silva",
        email: "joao@email.com",
        type: "VIP"
      },
      items: [
        {productId: "produto1", quantity: 2, price: 50},
        {productId: "produto2", quantity: 1, price: 30}
      ],
      payment: {
        method: "credit_card",
        cardNumber: "1234567890123456",
        expiryDate: "12/25"
      }
    };
    console.log(this.processOrder(validOrder));
    
    // Teste 2: Pedido com dados inválidos
    console.log("\n=== Teste 2: Dados inválidos ===");
    const invalidOrder = {
      customer: {
        name: "A", // Nome muito curto
        email: "email-inválido", // Email inválido
        type: "INVALID" // Tipo inválido
      },
      items: [],
      payment: null
    };
    console.log(this.processOrder(invalidOrder));
    
    // Teste 3: Estoque insuficiente
    console.log("\n=== Teste 3: Estoque insuficiente ===");
    const outOfStockOrder = {
      customer: {
        name: "Maria Santos",
        email: "maria@email.com",
        type: "REGULAR"
      },
      items: [
        {productId: "produto3", quantity: 1, price: 100} // produto3 tem estoque 0
      ],
      payment: {
        method: "pix",
        pixKey: "maria@email.com"
      }
    };
    console.log(this.processOrder(outOfStockOrder));
    
    console.log("\n📊 Estado final do estoque:", this.inventory);
    console.log("📋 Total de pedidos processados:", this.orders.length);
  }
}

// Executar o sistema de teste
const orderSystem = new OrderProcessingSystem();
orderSystem.runTests();
```

## 💡 Dicas para Resolução

1. **Condicionais**: Use `if...else` para lógica simples, `switch` para múltiplas opções
2. **Validação**: Sempre valide entrada antes de processar
3. **Error Handling**: Trate erros específicos de forma diferente
4. **Fail Fast**: Retorne ou lance erro o mais cedo possível
5. **Defensive Programming**: Assuma que inputs podem ser inválidos
6. **Logging**: Registre erros para debugging

---

**⏱️ Tempo estimado de prática**: 4-5 horas
**🏆 Nível**: Intermediário a Avançado
**📝 Tags**: #javascript #controle-de-fluxo #condicionais #error-handling #try-catch #switch #exercícios
