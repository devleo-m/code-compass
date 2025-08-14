Aula 3: Tipos de Dados em JavaScript - Dominando os Fundamentos
🧩 Objetivos de Aprendizado
- Dominar os 7 tipos primitivos de JavaScript
- Compreender a diferença entre valores primitivos e objetos
- Trabalhar eficientemente com strings, números e booleanos
- Entender valores especiais como null, undefined e Symbol
- Manipular objetos e entender herança prototipal
- Utilizar o operador typeof corretamente
- Aplicar conversões entre tipos de dados

🔢 Os 7 Tipos Primitivos
JavaScript possui 7 tipos de dados primitivos (imutáveis) e objetos (mutáveis). Os primitivos são:

1. **String**: Texto e caracteres
2. **Number**: Números (inteiros e decimais)
3. **BigInt**: Números inteiros muito grandes
4. **Boolean**: `true` ou `false`
5. **Undefined**: Valor não atribuído
6. **Null**: Valor intencionalmente ausente
7. **Symbol**: Valor único e imutável

**Comparação entre Primitivos e Objetos:**

| Característica | Primitivos | Objetos |
|----------------|------------|---------|
| Mutabilidade | Imutáveis | Mutáveis |
| Armazenamento | Por valor | Por referência |
| Tamanho | Fixo | Dinâmico |
| Exemplo | `"texto"` | `{ chave: "valor" }` |

📜 Strings: Trabalhando com Texto
Strings são sequências de caracteres usadas para representar texto.

**Formas de Declarar:**
```javascript
const aspasSimples = 'Texto simples';
const aspasDuplas = "Texto com \"aspas\"";
const templateLiteral = `Texto com ${aspasSimples} e ${10 + 5}`;
```

**Métodos Essenciais:**
```javascript
const nome = "Ana Silva";

console.log(nome.length); // 9
console.log(nome.toUpperCase()); // "ANA SILVA"
console.log(nome.substring(0, 3)); // "Ana"
console.log(nome.includes("Silva")); // true
console.log(nome.replace("Silva", "Costa")); // "Ana Costa"
```

**Template Literals (ES6+):**
```javascript
const produto = "Notebook";
const preco = 2500;

console.log(`O ${produto} custa R$${preco}.`); 
// "O Notebook custa R$2500."
```

🔢 Números: Trabalhando com Valores Numéricos
JavaScript tem apenas um tipo numérico: Number (ponto flutuante de 64 bits).

**Representações Numéricas:**
```javascript
const decimal = 123;
const hexadecimal = 0xff; // 255
const binario = 0b1111; // 15
const octal = 0o10; // 8
const exponencial = 2.5e3; // 2500
```

**Operações e Limitações:**
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004 (imprecisão)

// Valores especiais
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("abc" / 2); // NaN (Not a Number)

// Métodos úteis
console.log(Math.sqrt(64)); // 8
console.log(Math.random()); // Número entre 0 e 1
console.log(Number.isInteger(10)); // true
```

✅ Booleanos: Lógica de Programação
Valores booleanos representam verdadeiro (`true`) ou falso (`false`).

**Conversão Automática (Truthy/Falsy):**
```javascript
// Valores falsy (convertidos para false):
false, 0, "", null, undefined, NaN

// Valores truthy (convertidos para true):
true, 1, "texto", {}, [], 42, "0"

// Exemplos:
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean(0)); // false
```

🧪 Valores Especiais: null, undefined e Symbol

**null vs undefined:**
- **undefined**: Variável declarada mas não inicializada
- **null**: Valor intencionalmente ausente (atribuído pelo desenvolvedor)

```javascript
let variavelNaoAtribuida; // undefined
let variavelNula = null; // null

console.log(typeof variavelNaoAtribuida); // "undefined"
console.log(typeof variavelNula); // "object" (peculiaridade histórica)
```

**Symbols: Identificadores Únicos**
```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false (são únicos)

// Uso comum como chaves de propriedades
const usuario = {
  [id1]: "abc123",
  nome: "Carlos"
};

console.log(usuario[id1]); // "abc123"
```

🧱 BigInt: Trabalhando com Números Gigantes
BigInt representa inteiros maiores que 2^53 - 1 (limite do Number).

```javascript
const grandeNumero = 1234567890123456789012345678901234567890n;

console.log(grandeNumero + 1n); // 1234567890123456789012345678901234567891n

// Não pode misturar com Number
console.log(grandeNumero + 1); // Erro!
```

🏗️ Objetos: Estruturando Dados Complexos
Objetos são coleções de propriedades (chave-valor) e a base de estruturas complexas.

**Criando e Acessando Objetos:**
```javascript
const pessoa = {
  nome: "Maria",
  idade: 30,
  endereco: {
    rua: "Principal",
    numero: 42
  },
  cumprimentar: function() {
    return `Olá, sou ${this.nome}!`;
  }
};

// Acesso
console.log(pessoa.nome); // "Maria"
console.log(pessoa["endereco"].rua); // "Principal"
console.log(pessoa.cumprimentar()); // "Olá, sou Maria!"

// Adicionando propriedades
pessoa.profissao = "Engenheira";
```

🔗 Herança Prototipal
JavaScript usa protótipos em vez de classes para herança (até o ES6).

**Exemplo de Herança:**
```javascript
// Objeto pai
const animal = {
  tipo: "Desconhecido",
  emitirSom: function() {
    return "Som genérico";
  }
};

// Objeto filho
const gato = Object.create(animal);
gato.tipo = "Gato";
gato.emitirSom = function() {
  return "Miau!";
};

console.log(gato.emitirSom()); // "Miau!"
console.log(gato.__proto__ === animal); // true (herança)
```

🔍 Operador typeof: Identificando Tipos
O operador `typeof` retorna uma string indicando o tipo do operando.

```javascript
console.log(typeof "texto"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (peculiaridade histórica!)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 10n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"

// Solução para null
console.log(null === null); // true (verificação direta)
```

💻 Atividades Práticas Interativas

## 🎯 Exercício 1: Manipulação de Strings
Analise e complete o código de manipulação de strings:

```javascript
const frase = " JavaScript é incrível! ";

// 1. Remova espaços extras no início e fim
// 2. Converta para maiúsculas
// 3. Substitua "incrível" por "poderoso"
// 4. Divida em palavras
// 5. Verifique se contém "poderoso"

// Complete o código:
let formatada = __________;
let palavras = __________;
let contemPoderoso = __________;

console.log(formatada); // "JAVASCRIPT É PODEROSO!"
console.log(palavras); // ["JAVASCRIPT", "É", "PODEROSO!"]
console.log(contemPoderoso); // true
```

## 🎯 Exercício 2: Cálculos Numéricos
Crie uma calculadora de área de círculo:

```javascript
// 1. Calcule a área de um círculo (πr²)
// 2. Arredonde para 2 casas decimais
// 3. Verifique se é um número finito
// 4. Converta para string com R$

const raio = 7.5;
let area = __________;
let areaFormatada = __________;
let ehFinito = __________;

console.log(`Área: R$${areaFormatada}`);
console.log("É finito:", ehFinito);
```

## 🎯 Exercício 3: Validação de Formulário
Crie uma função de validação completa:

```javascript
function validarUsuario(usuario) {
  // Valide:
  // 1. nome não pode ser vazio
  // 2. email deve conter '@'
  // 3. idade deve ser número positivo
  // 4. senha deve ter pelo menos 6 caracteres
  
  let erros = [];
  
  // Complete as validações:
  if (__________) erros.push("Nome obrigatório");
  if (__________) erros.push("Email inválido");
  if (__________) erros.push("Idade inválida");
  if (__________) erros.push("Senha muito curta");
  
  return erros.length ? erros : "Válido!";
}

// Teste:
console.log(validarUsuario({
  nome: "Ana",
  email: "ana@exemplo.com",
  idade: 25,
  senha: "123456"
})); // "Válido!"
```

## 🎯 Exercício 4: Sistema de Produtos
Trabalhe com objetos complexos:

```javascript
const produto = {
  id: Symbol('prod123'),
  nome: "Smartphone",
  preco: 1499.99,
  emEstoque: true,
  detalhes: {
    marca: "Samsung",
    modelo: "Galaxy S23"
  },
  calcularDesconto: function(percentual) {
    return this.preco * (1 - percentual/100);
  }
};

// Complete as operações:
let modelo = __________;
let precoComDesconto = __________;
let idSimbolo = __________;

console.log("Modelo:", modelo);
console.log("Preço com 15% desconto:", precoComDesconto);
console.log("ID único:", idSimbolo);
```

## 🎯 Exercício 5: Identificação de Tipos
Use o operador typeof para identificar tipos:

```javascript
// Identifique o tipo de cada valor:
let valores = [
  "texto",
  42,
  true,
  null,
  undefined,
  Symbol("id"),
  10n,
  {},
  [],
  function(){}
];

// Complete o código para mostrar o tipo de cada valor:
valores.forEach(valor => {
  let tipo = __________;
  console.log(`${valor} → ${tipo}`);
});
```

## 🎯 Exercício 6: Conversão de Tipos
Pratique conversões entre tipos:

```javascript
// Converta os valores para os tipos especificados:
let numero = "123";
let texto = 456;
let booleano = "true";
let array = "1,2,3,4,5";

// Complete as conversões:
let numeroConvertido = __________;
let textoConvertido = __________;
let booleanoConvertido = __________;
let arrayConvertido = __________;

console.log("Número:", numeroConvertido, typeof numeroConvertido);
console.log("Texto:", textoConvertido, typeof textoConvertido);
console.log("Booleano:", booleanoConvertido, typeof booleanoConvertido);
console.log("Array:", arrayConvertido, Array.isArray(arrayConvertido));
```

## 🎯 Exercício 7: Truthy e Falsy
Entenda valores truthy e falsy:

```javascript
// Analise quais valores são truthy ou falsy:
let valores = [
  0, "", false, null, undefined, NaN,
  1, "texto", true, {}, [], 42, "0"
];

// Complete a função para classificar:
function classificarValor(valor) {
  if (__________) {
    return "falsy";
  } else {
    return "truthy";
  }
}

valores.forEach(valor => {
  console.log(`${valor} → ${classificarValor(valor)}`);
});
```

## 🎯 Exercício 8: Manipulação de Arrays
Trabalhe com arrays como objetos:

```javascript
const frutas = ["maçã", "banana", "laranja"];

// Complete as operações:
let tamanho = __________;
let primeiraFruta = __________;
let ultimaFruta = __________;
let frutasMaiusculas = __________;

console.log("Tamanho:", tamanho);
console.log("Primeira:", primeiraFruta);
console.log("Última:", ultimaFruta);
console.log("Maiúsculas:", frutasMaiusculas);
```

## 🎯 Exercício 9: Objetos Aninhados
Navegue por objetos complexos:

```javascript
const empresa = {
  nome: "TechCorp",
  funcionarios: [
    {
      id: 1,
      nome: "João",
      cargo: "Desenvolvedor",
      salario: 5000
    },
    {
      id: 2,
      nome: "Maria",
      cargo: "Designer",
      salario: 4500
    }
  ],
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo"
  }
};

// Complete as consultas:
let nomeEmpresa = __________;
let primeiroFuncionario = __________;
let salarioMaria = __________;
let enderecoCompleto = __________;

console.log("Empresa:", nomeEmpresa);
console.log("Funcionário:", primeiroFuncionario);
console.log("Salário Maria:", salarioMaria);
console.log("Endereço:", enderecoCompleto);
```

## 🎯 Exercício 10: Symbols Únicos
Trabalhe com Symbols:

```javascript
// Crie Symbols únicos
let id1 = __________;
let id2 = __________;
let id3 = Symbol("id");

// Complete as verificações:
let saoIguais = __________;
let descricao1 = __________;
let descricao3 = __________;

console.log("São iguais?", saoIguais);
console.log("Descrição 1:", descricao1);
console.log("Descrição 3:", descricao3);
```

## 🎯 Exercício 11: Calculadora de IMC
Crie uma calculadora usando diferentes tipos:

```javascript
function calcularIMC(peso, altura) {
  // Valide os parâmetros
  if (typeof peso !== 'number' || typeof altura !== 'number') {
    return "Parâmetros devem ser números";
  }
  
  if (peso <= 0 || altura <= 0) {
    return "Valores devem ser positivos";
  }
  
  // Calcule o IMC
  let imc = peso / (altura * altura);
  
  // Determine a categoria
  let categoria = "";
  if (imc < 18.5) {
    categoria = "Abaixo do peso";
  } else if (imc < 25) {
    categoria = "Peso normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }
  
  return {
    imc: imc.toFixed(1),
    categoria: categoria
  };
}

// Teste a função
let resultado = calcularIMC(70, 1.75);
console.log(resultado);
```

## 🎯 Exercício 12: Validador de Email
Crie uma validação robusta de email:

```javascript
function validarEmail(email) {
  // Verifique se é string
  if (typeof email !== 'string') {
    return false;
  }
  
  // Verifique se não está vazio
  if (email.trim() === '') {
    return false;
  }
  
  // Verifique se contém @
  if (!email.includes('@')) {
    return false;
  }
  
  // Verifique se contém ponto após @
  let partes = email.split('@');
  if (partes.length !== 2) {
    return false;
  }
  
  let dominio = partes[1];
  if (!dominio.includes('.') || dominio.indexOf('.') === 0) {
    return false;
  }
  
  return true;
}

// Teste com diferentes emails
console.log(validarEmail("usuario@exemplo.com")); // true
console.log(validarEmail("email.invalido")); // false
console.log(validarEmail("@dominio.com")); // false
console.log(validarEmail("usuario@.com")); // false
```

## 🎯 Exercício 13: Gerador de Senha
Crie um gerador de senha com diferentes tipos:

```javascript
function gerarSenha(comprimento = 8, incluirSimbolos = true) {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  let caracteres = letras + numeros;
  if (incluirSimbolos) {
    caracteres += simbolos;
  }
  
  let senha = "";
  for (let i = 0; i < comprimento; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }
  
  return senha;
}

// Gere diferentes tipos de senha
console.log("Senha simples:", gerarSenha(6, false));
console.log("Senha complexa:", gerarSenha(12, true));
```

## 🎯 Exercício 14: Formatador de CPF
Crie um formatador de CPF:

```javascript
function formatarCPF(cpf) {
  // Remove caracteres não numéricos
  let numeros = cpf.replace(/\D/g, "");
  
  // Verifica se tem 11 dígitos
  if (numeros.length !== 11) {
    return "CPF inválido";
  }
  
  // Formata: XXX.XXX.XXX-XX
  let formatado = numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  
  return formatado;
}

// Teste o formatador
console.log(formatarCPF("12345678901")); // "123.456.789-01"
console.log(formatarCPF("123.456.789-01")); // "123.456.789-01"
console.log(formatarCPF("123456789")); // "CPF inválido"
```

## 🎯 Exercício 15: Calculadora de Juros Compostos
Crie uma calculadora financeira:

```javascript
function calcularJurosCompostos(capital, taxa, tempo) {
  // Valide os parâmetros
  if (typeof capital !== 'number' || typeof taxa !== 'number' || typeof tempo !== 'number') {
    return "Todos os parâmetros devem ser números";
  }
  
  if (capital <= 0 || taxa <= 0 || tempo <= 0) {
    return "Todos os valores devem ser positivos";
  }
  
  // Calcule o montante
  let montante = capital * Math.pow(1 + taxa, tempo);
  let juros = montante - capital;
  
  return {
    capital: capital.toFixed(2),
    montante: montante.toFixed(2),
    juros: juros.toFixed(2),
    taxa: (taxa * 100).toFixed(2) + "%"
  };
}

// Teste a calculadora
let resultado = calcularJurosCompostos(1000, 0.05, 12);
console.log(resultado);
```

## 🎯 Exercício 16: Sistema de Notas
Crie um sistema de notas escolares:

```javascript
function calcularMedia(notas) {
  // Verifique se é array
  if (!Array.isArray(notas)) {
    return "Parâmetro deve ser um array";
  }
  
  // Verifique se tem notas
  if (notas.length === 0) {
    return "Array vazio";
  }
  
  // Calcule a média
  let soma = 0;
  for (let nota of notas) {
    if (typeof nota !== 'number' || nota < 0 || nota > 10) {
      return "Notas devem ser números entre 0 e 10";
    }
    soma += nota;
  }
  
  let media = soma / notas.length;
  
  // Determine o conceito
  let conceito = "";
  if (media >= 9) conceito = "A";
  else if (media >= 7) conceito = "B";
  else if (media >= 5) conceito = "C";
  else conceito = "D";
  
  return {
    media: media.toFixed(1),
    conceito: conceito,
    aprovado: media >= 5
  };
}

// Teste o sistema
console.log(calcularMedia([8.5, 7.0, 9.2, 6.8]));
console.log(calcularMedia([4.0, 3.5, 2.8]));
```

## 🎯 Exercício 17: Validador de Senha
Crie um validador de senha robusto:

```javascript
function validarSenha(senha) {
  let erros = [];
  
  // Verifique o comprimento
  if (senha.length < 8) {
    erros.push("Mínimo 8 caracteres");
  }
  
  // Verifique se tem letra maiúscula
  if (!/[A-Z]/.test(senha)) {
    erros.push("Pelo menos uma letra maiúscula");
  }
  
  // Verifique se tem letra minúscula
  if (!/[a-z]/.test(senha)) {
    erros.push("Pelo menos uma letra minúscula");
  }
  
  // Verifique se tem número
  if (!/\d/.test(senha)) {
    erros.push("Pelo menos um número");
  }
  
  // Verifique se tem símbolo
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) {
    erros.push("Pelo menos um símbolo especial");
  }
  
  return {
    valida: erros.length === 0,
    erros: erros,
    forca: erros.length === 0 ? "Forte" : erros.length <= 2 ? "Média" : "Fraca"
  };
}

// Teste o validador
console.log(validarSenha("Senha123!"));
console.log(validarSenha("senha"));
console.log(validarSenha("SENHA123"));
```

## 🎯 Exercício 18: Conversor de Temperatura
Crie um conversor completo de temperatura:

```javascript
function converterTemperatura(valor, unidadeOrigem, unidadeDestino) {
  // Valide os parâmetros
  if (typeof valor !== 'number') {
    return "Valor deve ser um número";
  }
  
  let unidades = ['C', 'F', 'K'];
  if (!unidades.includes(unidadeOrigem) || !unidades.includes(unidadeDestino)) {
    return "Unidades válidas: C, F, K";
  }
  
  // Converta para Celsius primeiro
  let celsius;
  if (unidadeOrigem === 'C') {
    celsius = valor;
  } else if (unidadeOrigem === 'F') {
    celsius = (valor - 32) * 5/9;
  } else if (unidadeOrigem === 'K') {
    celsius = valor - 273.15;
  }
  
  // Converta de Celsius para unidade destino
  let resultado;
  if (unidadeDestino === 'C') {
    resultado = celsius;
  } else if (unidadeDestino === 'F') {
    resultado = celsius * 9/5 + 32;
  } else if (unidadeDestino === 'K') {
    resultado = celsius + 273.15;
  }
  
  return resultado.toFixed(2);
}

// Teste o conversor
console.log(converterTemperatura(25, 'C', 'F')); // "77.00"
console.log(converterTemperatura(100, 'C', 'K')); // "373.15"
console.log(converterTemperatura(32, 'F', 'C')); // "0.00"
```

## 🎯 Exercício 19: Gerador de ID Único
Crie um gerador de IDs únicos:

```javascript
function gerarID(tipo = 'padrao') {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 9);
  
  let prefixo = "";
  switch (tipo) {
    case 'usuario':
      prefixo = "USR";
      break;
    case 'produto':
      prefixo = "PRD";
      break;
    case 'pedido':
      prefixo = "PED";
      break;
    default:
      prefixo = "ID";
  }
  
  return `${prefixo}_${timestamp}_${random}`;
}

// Gere diferentes tipos de ID
console.log("ID padrão:", gerarID());
console.log("ID usuário:", gerarID('usuario'));
console.log("ID produto:", gerarID('produto'));
console.log("ID pedido:", gerarID('pedido'));
```

## 🎯 Exercício 20: Sistema de Carrinho de Compras
Crie um sistema completo de carrinho:

```javascript
const carrinho = {
  itens: [],
  total: 0,
  
  adicionarItem: function(nome, preco, quantidade = 1) {
    let item = {
      id: Date.now(),
      nome: nome,
      preco: preco,
      quantidade: quantidade,
      subtotal: preco * quantidade
    };
    
    this.itens.push(item);
    this.calcularTotal();
    return item;
  },
  
  removerItem: function(id) {
    this.itens = this.itens.filter(item => item.id !== id);
    this.calcularTotal();
  },
  
  calcularTotal: function() {
    this.total = this.itens.reduce((soma, item) => soma + item.subtotal, 0);
  },
  
  aplicarDesconto: function(percentual) {
    if (percentual > 0 && percentual <= 100) {
      this.total = this.total * (1 - percentual / 100);
    }
  },
  
  limpar: function() {
    this.itens = [];
    this.total = 0;
  }
};

// Teste o carrinho
carrinho.adicionarItem("Notebook", 2500, 1);
carrinho.adicionarItem("Mouse", 50, 2);
carrinho.adicionarItem("Teclado", 150, 1);

console.log("Itens:", carrinho.itens);
console.log("Total:", carrinho.total);

carrinho.aplicarDesconto(10);
console.log("Total com desconto:", carrinho.total);
```

🔍 Quiz de Conhecimento

**Pergunta 1**
Qual o resultado de `typeof null`?
- [ ] "null"
- [ ] "undefined"
- [x] "object"
- [ ] "unknown"

**Pergunta 2**
Qual NÃO é um valor falsy?
- [ ] 0
- [ ] ""
- [ ] null
- [x] "0"

**Pergunta 3**
Como criar um Symbol com descrição "id"?
- [x] `Symbol("id")`
- [ ] `new Symbol("id")`
- [ ] `Symbol.id`
- [ ] `createSymbol("id")`

**Pergunta 4**
Qual método reverte uma string?
- [ ] `str.reverse()`
- [x] `str.split().reverse().join()`
- [ ] `str.invert()`
- [ ] `str.flip()`

**Pergunta 5**
Qual o tipo de `typeof []`?
- [ ] "array"
- [x] "object"
- [ ] "array"
- [ ] "undefined"

🚀 Desafio Avançado: Conversor de Tipos Universal
Crie uma função que converte valores entre tipos:

```javascript
function converter(valor, tipoAlvo) {
  // Implemente conversões para:
  // 'string', 'number', 'boolean', 'array', 'object'
  
  switch (tipoAlvo) {
    case 'string':
      return String(valor);
    case 'number':
      return Number(valor);
    case 'boolean':
      return Boolean(valor);
    case 'array':
      if (typeof valor === 'string') {
        return valor.split(',').map(item => item.trim());
      }
      return Array.isArray(valor) ? valor : [valor];
    case 'object':
      if (typeof valor === 'string') {
        try {
          return JSON.parse(valor);
        } catch {
          return { valor: valor };
        }
      }
      return typeof valor === 'object' ? valor : { valor: valor };
    default:
      return valor;
  }
}

// Teste a função
console.log(converter(123, 'string')); // "123"
console.log(converter("true", 'boolean')); // true
console.log(converter("1,2,3", 'array')); // [1, 2, 3]
console.log(converter('{"nome":"João"}', 'object')); // {nome: "João"}
```

📚 Recursos Essenciais
- **Documentação**
  - MDN: Tipos de Dados
  - JavaScript.info: Tipos
  - ECMAScript Types

- **Ferramentas**
  - Typeof Quiz
  - Playcode - Ambiente de teste online
  - Chrome DevTools

🌟 Próximos Passos
Na próxima aula exploraremos:
- Operadores Aritméticos e de Atribuição
- Operadores de Comparação e Lógicos
- Controle de Fluxo (if/else, switch)
- Estruturas de Repetição (for, while)

💡 Dica Profissional: Use `const` para declarar objetos e arrays mesmo que seus conteúdos mudem. Isso garante que a referência principal não seja alterada acidentalmente.

⏱️ Tempo estimado de prática: 3-4 horas
🏆 Nível: Iniciante/Intermediário
📝 Tags: #javascript #tiposdedados #programação #objetos #string #number

👉 Ação Imediata: Abra o console e experimente criar todos os tipos de dados apresentados nesta aula!