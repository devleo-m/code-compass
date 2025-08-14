# Exercícios da Aula 4: Type Casting e Type Conversion

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Conversões Básicas
Complete as conversões básicas:

```javascript
// Converta os valores para os tipos especificados:
let valor1 = "42";
let valor2 = 3.14;
let valor3 = true;
let valor4 = [1, 2, 3];

// Complete as conversões:
let numero1 = __________; // "42" → 42
let texto1 = __________; // 3.14 → "3.14"
let booleano1 = __________; // true → true (mantém)
let texto2 = __________; // [1,2,3] → "1,2,3"

console.log("Número:", numero1, typeof numero1);
console.log("Texto:", texto1, typeof texto1);
console.log("Booleano:", booleano1, typeof booleano1);
console.log("Array para texto:", texto2, typeof texto2);
```

### Exercício 2: Conversões Implícitas
Analise as conversões implícitas:

```javascript
// Preveja o resultado de cada operação:
console.log("5" + 3); // __________
console.log("5" - 3); // __________
console.log("5" * 3); // __________
console.log("5" / 3); // __________
console.log("abc" + 3); // __________
console.log("abc" - 3); // __________
console.log(true + 1); // __________
console.log(false + 1); // __________
console.log(null + 1); // __________
console.log(undefined + 1); // __________
```

### Exercício 3: Comparações com Coercion
Entenda as comparações:

```javascript
// Analise cada comparação:
console.log("5" == 5); // __________
console.log("5" === 5); // __________
console.log(true == 1); // __________
console.log(true === 1); // __________
console.log(false == 0); // __________
console.log(false === 0); // __________
console.log(null == undefined); // __________
console.log(null === undefined); // __________
console.log("" == 0); // __________
console.log("" === 0); // __________
```

### Exercício 4: Métodos de Conversão
Pratique os métodos de conversão:

```javascript
// Use os métodos apropriados:
let string1 = "42.9";
let string2 = "42abc";
let string3 = "abc42";
let numero1 = 42;

// Complete as conversões:
let decimal1 = __________; // "42.9" → 42.9
let inteiro1 = __________; // "42abc" → 42
let inteiro2 = __________; // "abc42" → NaN
let texto1 = __________; // 42 → "42"

console.log("Decimal:", decimal1, typeof decimal1);
console.log("Inteiro válido:", inteiro1, typeof inteiro1);
console.log("Inteiro inválido:", inteiro2, typeof inteiro2);
console.log("Texto:", texto1, typeof texto1);
```

### Exercício 5: Conversões com Arrays
Trabalhe com conversões de arrays:

```javascript
const array1 = [1, 2, 3];
const array2 = [1];
const array3 = [];
const array4 = [null, undefined];

// Complete as conversões:
let texto1 = __________; // [1,2,3] → "1,2,3"
let numero1 = __________; // [1] → 1
let numero2 = __________; // [] → 0
let texto2 = __________; // [null,undefined] → ","

console.log("Array para texto:", texto1);
console.log("Array com 1 elemento:", numero1);
console.log("Array vazio:", numero2);
console.log("Array com null/undefined:", texto2);
```

### Exercício 6: Conversões com Objetos
Entenda conversões de objetos:

```javascript
const objeto1 = {};
const objeto2 = {nome: "João"};
const objeto3 = {
  valueOf() { return 42; },
  toString() { return "Objeto especial"; }
};

// Complete as conversões:
let texto1 = __________; // {} → "[object Object]"
let texto2 = __________; // {nome:"João"} → "[object Object]"
let numero1 = __________; // {} → NaN
let numero2 = __________; // objeto3 → 42 (usa valueOf)
let texto3 = __________; // objeto3 → "Objeto especial" (usa toString)

console.log("Objeto vazio para texto:", texto1);
console.log("Objeto com propriedades para texto:", texto2);
console.log("Objeto vazio para número:", numero1);
console.log("Objeto com valueOf para número:", numero2);
console.log("Objeto com toString para texto:", texto3);
```

### Exercício 7: Conversões Booleanas
Pratique conversões para boolean:

```javascript
// Converta para boolean usando Boolean() e !!
let valores = [
  "", "texto", 0, 42, null, undefined, [], {}, [1,2], {nome:"João"}
];

// Complete a função:
function classificarValor(valor) {
  let booleano1 = __________; // Usando Boolean()
  let booleano2 = __________; // Usando !!
  
  return {
    valor: valor,
    boolean: booleano1,
    duplaNegacao: booleano2,
    tipo: typeof valor
  };
}

valores.forEach(valor => {
  let resultado = classificarValor(valor);
  console.log(`${resultado.valor} (${resultado.tipo}) → ${resultado.boolean}`);
});
```

### Exercício 8: Conversões com parseInt e parseFloat
Trabalhe com conversões numéricas específicas:

```javascript
// Teste diferentes cenários:
let valores = [
  "42", "42.9", "42abc", "abc42", "1010", "0xFF", "42.9.1"
];

// Complete a função:
function analisarConversao(valor) {
  let parseIntResult = __________;
  let parseFloatResult = __________;
  let numberResult = __________;
  
  return {
    valor: valor,
    parseInt: parseIntResult,
    parseFloat: parseFloatResult,
    Number: numberResult
  };
}

valores.forEach(valor => {
  let resultado = analisarConversao(valor);
  console.log(`${valor}: parseInt=${resultado.parseInt}, parseFloat=${resultado.parseFloat}, Number=${resultado.Number}`);
});
```

### Exercício 9: Conversões com Base Numérica
Pratique conversões com diferentes bases:

```javascript
// Converta números em diferentes bases:
let binario = "1010";
let octal = "17";
let hexadecimal = "1F";

// Complete as conversões:
let decimal1 = __________; // "1010" (binário) → 10
let decimal2 = __________; // "17" (octal) → 15
let decimal3 = __________; // "1F" (hexadecimal) → 31

console.log(`Binário ${binario} = Decimal ${decimal1}`);
console.log(`Octal ${octal} = Decimal ${decimal2}`);
console.log(`Hexadecimal ${hexadecimal} = Decimal ${decimal3}`);
```

### Exercício 10: Conversões com Operadores Unários
Use operadores unários para conversão:

```javascript
// Use operadores unários para conversão:
let string1 = "42";
let string2 = "42.9";
let string3 = "abc";
let booleano = true;

// Complete as conversões:
let numero1 = __________; // "42" → 42
let numero2 = __________; // "42.9" → 42.9
let numero3 = __________; // "abc" → NaN
let numero4 = __________; // true → 1

console.log("String para número (+):", numero1);
console.log("Decimal para número (+):", numero2);
console.log("Texto inválido para número (+):", numero3);
console.log("Booleano para número (+):", numero4);
```

### Exercício 11: Validador de Conversões
Crie um validador de conversões seguras:

```javascript
function converterSeguro(valor, tipo) {
  // Valide e converta de forma segura
  switch (tipo) {
    case 'number':
      if (typeof valor === 'string' && valor.trim() === '') {
        return 0;
      }
      let numero = Number(valor);
      return isNaN(numero) ? 0 : numero;
      
    case 'string':
      if (valor === null || valor === undefined) {
        return '';
      }
      return String(valor);
      
    case 'boolean':
      if (typeof valor === 'string') {
        return valor.toLowerCase() === 'true';
      }
      return Boolean(valor);
      
    default:
      return valor;
  }
}

// Teste o validador
console.log(converterSeguro("42", 'number')); // 42
console.log(converterSeguro("abc", 'number')); // 0
console.log(converterSeguro("", 'number')); // 0
console.log(converterSeguro(null, 'string')); // ""
console.log(converterSeguro("true", 'boolean')); // true
console.log(converterSeguro("false", 'boolean')); // false
```

### Exercício 12: Conversor de Tipos Universal
Crie um conversor universal:

```javascript
function converterUniversal(valor, tipoAlvo) {
  // Implemente conversões para todos os tipos
  switch (tipoAlvo) {
    case 'string':
      if (valor === null || valor === undefined) {
        return '';
      }
      return String(valor);
      
    case 'number':
      if (typeof valor === 'string' && valor.trim() === '') {
        return 0;
      }
      let numero = Number(valor);
      return isNaN(numero) ? 0 : numero;
      
    case 'boolean':
      if (typeof valor === 'string') {
        return valor.toLowerCase() === 'true';
      }
      return Boolean(valor);
      
    case 'array':
      if (Array.isArray(valor)) {
        return valor;
      }
      if (typeof valor === 'string') {
        return valor.split(',').map(item => item.trim());
      }
      return [valor];
      
    case 'object':
      if (typeof valor === 'string') {
        try {
          return JSON.parse(valor);
        } catch {
          return { valor: valor };
        }
      }
      return typeof valor === 'object' && valor !== null ? valor : { valor: valor };
      
    default:
      return valor;
  }
}

// Teste o conversor universal
console.log(converterUniversal("1,2,3", 'array')); // [1, 2, 3]
console.log(converterUniversal('{"nome":"João"}', 'object')); // {nome: "João"}
console.log(converterUniversal("true", 'boolean')); // true
console.log(converterUniversal(42, 'string')); // "42"
```

### Exercício 13: Analisador de Conversões
Crie um analisador que mostra o processo de conversão:

```javascript
function analisarConversao(valor) {
  return {
    valorOriginal: valor,
    tipoOriginal: typeof valor,
    paraString: String(valor),
    paraNumber: Number(valor),
    paraBoolean: Boolean(valor),
    isNaN: isNaN(Number(valor)),
    isFinite: isFinite(Number(valor))
  };
}

// Analise diferentes valores
let valores = ["42", "42.9", "abc", "", 0, 42, true, false, null, undefined, [], {}];

valores.forEach(valor => {
  let analise = analisarConversao(valor);
  console.log(`\n${valor} (${analise.tipoOriginal}):`);
  console.log(`  String: "${analise.paraString}"`);
  console.log(`  Number: ${analise.paraNumber}`);
  console.log(`  Boolean: ${analise.paraBoolean}`);
  console.log(`  isNaN: ${analise.isNaN}`);
  console.log(`  isFinite: ${analise.isFinite}`);
});
```

### Exercício 14: Conversor de Formato de Dados
Crie um conversor de formatos:

```javascript
function converterFormato(dados, formatoOrigem, formatoDestino) {
  // Converte entre diferentes formatos
  switch (formatoOrigem) {
    case 'string':
      switch (formatoDestino) {
        case 'number':
          return Number(dados);
        case 'array':
          return dados.split(',').map(item => item.trim());
        case 'object':
          try {
            return JSON.parse(dados);
          } catch {
            return { texto: dados };
          }
        default:
          return dados;
      }
      
    case 'array':
      switch (formatoDestino) {
        case 'string':
          return dados.join(',');
        case 'object':
          return dados.reduce((obj, item, index) => {
            obj[index] = item;
            return obj;
          }, {});
        default:
          return dados;
      }
      
    case 'object':
      switch (formatoDestino) {
        case 'string':
          return JSON.stringify(dados);
        case 'array':
          return Object.values(dados);
        default:
          return dados;
      }
      
    default:
      return dados;
  }
}

// Teste o conversor
console.log(converterFormato("1,2,3", 'string', 'array')); // [1, 2, 3]
console.log(converterFormato([1, 2, 3], 'array', 'string')); // "1,2,3"
console.log(converterFormato({a: 1, b: 2}, 'object', 'array')); // [1, 2]
```

### Exercício 15: Validador de Entrada de Usuário
Crie um validador para entradas de usuário:

```javascript
function validarEntrada(valor, tipoEsperado) {
  let resultado = {
    valor: valor,
    tipoEsperado: tipoEsperado,
    tipoRecebido: typeof valor,
    convertido: null,
    valido: false,
    erro: null
  };
  
  try {
    switch (tipoEsperado) {
      case 'email':
        if (typeof valor !== 'string') {
          resultado.erro = "Email deve ser uma string";
          break;
        }
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        resultado.valido = emailRegex.test(valor);
        resultado.convertido = valor.toLowerCase();
        break;
        
      case 'idade':
        let idade = Number(valor);
        if (isNaN(idade)) {
          resultado.erro = "Idade deve ser um número";
          break;
        }
        resultado.valido = idade >= 0 && idade <= 120;
        resultado.convertido = Math.floor(idade);
        break;
        
      case 'preco':
        let preco = parseFloat(valor);
        if (isNaN(preco)) {
          resultado.erro = "Preço deve ser um número";
          break;
        }
        resultado.valido = preco >= 0;
        resultado.convertido = preco.toFixed(2);
        break;
        
      default:
        resultado.erro = "Tipo não suportado";
    }
  } catch (error) {
    resultado.erro = error.message;
  }
  
  return resultado;
}

// Teste o validador
console.log(validarEntrada("usuario@email.com", 'email'));
console.log(validarEntrada("25", 'idade'));
console.log(validarEntrada("99.99", 'preco'));
console.log(validarEntrada("abc", 'idade'));
```

### Exercício 16: Conversor de Unidades
Crie um conversor de unidades com validação:

```javascript
function converterUnidade(valor, unidadeOrigem, unidadeDestino) {
  // Valide entrada
  if (typeof valor !== 'number' || isNaN(valor)) {
    return { erro: "Valor deve ser um número válido" };
  }
  
  let resultado = 0;
  let sucesso = true;
  
  // Conversões de comprimento
  if (unidadeOrigem === 'metros' && unidadeDestino === 'centimetros') {
    resultado = valor * 100;
  } else if (unidadeOrigem === 'centimetros' && unidadeDestino === 'metros') {
    resultado = valor / 100;
  } else if (unidadeOrigem === 'quilometros' && unidadeDestino === 'metros') {
    resultado = valor * 1000;
  } else if (unidadeOrigem === 'metros' && unidadeDestino === 'quilometros') {
    resultado = valor / 1000;
  }
  // Conversões de peso
  else if (unidadeOrigem === 'quilogramas' && unidadeDestino === 'gramas') {
    resultado = valor * 1000;
  } else if (unidadeOrigem === 'gramas' && unidadeDestino === 'quilogramas') {
    resultado = valor / 1000;
  }
  else {
    sucesso = false;
  }
  
  return sucesso ? {
    valor: valor,
    unidadeOrigem: unidadeOrigem,
    resultado: resultado,
    unidadeDestino: unidadeDestino
  } : { erro: "Conversão não suportada" };
}

// Teste o conversor
console.log(converterUnidade(5, 'metros', 'centimetros'));
console.log(converterUnidade(1000, 'centimetros', 'metros'));
console.log(converterUnidade(2, 'quilogramas', 'gramas'));
console.log(converterUnidade("abc", 'metros', 'centimetros'));
```

### Exercício 17: Parser de Configurações
Crie um parser para configurações:

```javascript
function parseConfiguracao(configString) {
  // Parse configurações no formato "chave=valor;chave2=valor2"
  if (typeof configString !== 'string') {
    return { erro: "Configuração deve ser uma string" };
  }
  
  let config = {};
  let pares = configString.split(';');
  
  for (let par of pares) {
    if (par.trim() === '') continue;
    
    let [chave, valor] = par.split('=');
    if (!chave || !valor) continue;
    
    chave = chave.trim();
    valor = valor.trim();
    
    // Tenta converter para o tipo apropriado
    if (valor === 'true' || valor === 'false') {
      config[chave] = valor === 'true';
    } else if (!isNaN(valor)) {
      config[chave] = Number(valor);
    } else {
      config[chave] = valor;
    }
  }
  
  return config;
}

// Teste o parser
let configString = "porta=8080;debug=true;nome=servidor;timeout=30.5";
console.log(parseConfiguracao(configString));
```

### Exercício 18: Conversor de Formato de Data
Crie um conversor de formatos de data:

```javascript
function converterData(data, formatoOrigem, formatoDestino) {
  // Valide se é uma data válida
  let dataObj = new Date(data);
  if (isNaN(dataObj.getTime())) {
    return { erro: "Data inválida" };
  }
  
  switch (formatoDestino) {
    case 'iso':
      return dataObj.toISOString();
      
    case 'brasil':
      return dataObj.toLocaleDateString('pt-BR');
      
    case 'timestamp':
      return dataObj.getTime();
      
    case 'objeto':
      return {
        ano: dataObj.getFullYear(),
        mes: dataObj.getMonth() + 1,
        dia: dataObj.getDate(),
        hora: dataObj.getHours(),
        minuto: dataObj.getMinutes(),
        segundo: dataObj.getSeconds()
      };
      
    case 'string':
      return dataObj.toString();
      
    default:
      return { erro: "Formato de destino não suportado" };
  }
}

// Teste o conversor
console.log(converterData("2023-12-13", 'iso', 'brasil'));
console.log(converterData("2023-12-13", 'iso', 'timestamp'));
console.log(converterData("2023-12-13", 'iso', 'objeto'));
```

### Exercício 19: Sanitizador de Dados
Crie um sanitizador de dados:

```javascript
function sanitizarDados(dados, tipo) {
  switch (tipo) {
    case 'texto':
      if (typeof dados !== 'string') {
        dados = String(dados);
      }
      return dados.trim().replace(/[<>]/g, '');
      
    case 'numero':
      let numero = Number(dados);
      return isNaN(numero) ? 0 : numero;
      
    case 'email':
      if (typeof dados !== 'string') {
        return '';
      }
      return dados.trim().toLowerCase();
      
    case 'telefone':
      if (typeof dados !== 'string') {
        dados = String(dados);
      }
      return dados.replace(/\D/g, '');
      
    case 'cpf':
      if (typeof dados !== 'string') {
        dados = String(dados);
      }
      return dados.replace(/\D/g, '');
      
    default:
      return dados;
  }
}

// Teste o sanitizador
console.log(sanitizarDados("<script>alert('xss')</script>", 'texto'));
console.log(sanitizarDados("  USER@EMAIL.COM  ", 'email'));
console.log(sanitizarDados("(11) 98765-4321", 'telefone'));
console.log(sanitizarDados("123.456.789-01", 'cpf'));
```

### Exercício 20: Sistema de Conversão de Moedas
Crie um sistema de conversão de moedas:

```javascript
const taxasCambio = {
  USD: { BRL: 5.20, EUR: 0.85, GBP: 0.73 },
  EUR: { USD: 1.18, BRL: 6.12, GBP: 0.86 },
  BRL: { USD: 0.19, EUR: 0.16, GBP: 0.14 },
  GBP: { USD: 1.37, EUR: 1.16, BRL: 7.12 }
};

function converterMoeda(valor, moedaOrigem, moedaDestino) {
  // Valide entrada
  if (typeof valor !== 'number' || isNaN(valor)) {
    return { erro: "Valor deve ser um número válido" };
  }
  
  if (!taxasCambio[moedaOrigem] || !taxasCambio[moedaOrigem][moedaDestino]) {
    return { erro: "Conversão não suportada" };
  }
  
  let taxa = taxasCambio[moedaOrigem][moedaDestino];
  let resultado = valor * taxa;
  
  return {
    valor: valor,
    moedaOrigem: moedaOrigem,
    resultado: resultado.toFixed(2),
    moedaDestino: moedaDestino,
    taxa: taxa
  };
}

// Teste o sistema
console.log(converterMoeda(100, 'USD', 'BRL'));
console.log(converterMoeda(500, 'BRL', 'USD'));
console.log(converterMoeda(50, 'EUR', 'GBP'));
console.log(converterMoeda("abc", 'USD', 'BRL'));
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual o resultado de `"5" + 3`?
- [ ] 8
- [x] "53"
- [ ] 5
- [ ] Erro

### Pergunta 2
Qual método converte string para número inteiro?
- [ ] Number()
- [x] parseInt()
- [ ] String()
- [ ] Boolean()

### Pergunta 3
Qual o resultado de `"5" == 5`?
- [x] true
- [ ] false
- [ ] undefined
- [ ] null

### Pergunta 4
Qual operador NÃO faz conversão implícita?
- [ ] +
- [ ] -
- [x] ===
- [ ] *

### Pergunta 5
Qual o resultado de `Boolean([])`?
- [ ] false
- [x] true
- [ ] undefined
- [ ] null

### Pergunta 6
Qual método converte qualquer valor para string?
- [ ] toString()
- [x] String()
- [ ] parseString()
- [ ] convertToString()

## 🚀 Desafio Avançado: Sistema de Conversão de Tipos Avançado
Crie um sistema completo de conversão de tipos:

```javascript
class ConversorTipos {
  constructor() {
    this.regras = {
      string: {
        number: (valor) => {
          if (valor.trim() === '') return 0;
          let num = Number(valor);
          return isNaN(num) ? 0 : num;
        },
        boolean: (valor) => valor.toLowerCase() === 'true',
        array: (valor) => valor.split(',').map(item => item.trim()),
        object: (valor) => {
          try {
            return JSON.parse(valor);
          } catch {
            return { texto: valor };
          }
        }
      },
      number: {
        string: (valor) => String(valor),
        boolean: (valor) => valor !== 0,
        array: (valor) => [valor],
        object: (valor) => ({ valor: valor })
      },
      boolean: {
        string: (valor) => String(valor),
        number: (valor) => valor ? 1 : 0,
        array: (valor) => [valor],
        object: (valor) => ({ valor: valor })
      },
      array: {
        string: (valor) => valor.join(','),
        number: (valor) => valor.length === 1 ? Number(valor[0]) : NaN,
        boolean: (valor) => valor.length > 0,
        object: (valor) => valor.reduce((obj, item, index) => {
          obj[index] = item;
          return obj;
        }, {})
      },
      object: {
        string: (valor) => JSON.stringify(valor),
        number: (valor) => {
          if (valor.valueOf && typeof valor.valueOf === 'function') {
            return Number(valor.valueOf());
          }
          return NaN;
        },
        boolean: (valor) => Object.keys(valor).length > 0,
        array: (valor) => Object.values(valor)
      }
    };
  }
  
  converter(valor, tipoDestino) {
    const tipoOrigem = typeof valor;
    
    if (Array.isArray(valor)) {
      return this.regras.array[tipoDestino] ? this.regras.array[tipoDestino](valor) : valor;
    }
    
    if (this.regras[tipoOrigem] && this.regras[tipoOrigem][tipoDestino]) {
      return this.regras[tipoOrigem][tipoDestino](valor);
    }
    
    return valor;
  }
  
  analisar(valor) {
    return {
      valor: valor,
      tipo: typeof valor,
      isArray: Array.isArray(valor),
      conversoes: {
        string: this.converter(valor, 'string'),
        number: this.converter(valor, 'number'),
        boolean: this.converter(valor, 'boolean'),
        array: this.converter(valor, 'array'),
        object: this.converter(valor, 'object')
      }
    };
  }
}

// Teste o sistema
const conversor = new ConversorTipos();

console.log(conversor.analisar("42"));
console.log(conversor.analisar([1, 2, 3]));
console.log(conversor.analisar({nome: "João"}));
```

## 💡 Dicas para Resolução

1. **Use conversões explícitas** em código de produção
2. **Teste casos extremos** (null, undefined, arrays vazios)
3. **Valide entradas** antes de converter
4. **Use === em vez de ==** para comparações
5. **Pratique com diferentes tipos** de dados

---

**⏱️ Tempo estimado de prática**: 3-4 horas
**🏆 Nível**: Iniciante/Intermediário
**📝 Tags**: #javascript #typecasting #typeconversion #coercion #exercícios 