# Exercícios da Aula 6: Comparações de Igualdade em JavaScript

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Comparações Básicas
Analise e complete as comparações básicas:

```javascript
// Complete as comparações e preveja o resultado:
let a = 5;
let b = "5";
let c = true;
let d = false;
let e = null;
let f = undefined;

// Igualdade solta (==)
console.log("a == b:", __________); // 5 == "5"
console.log("c == 1:", __________); // true == 1
console.log("d == 0:", __________); // false == 0
console.log("e == f:", __________); // null == undefined

// Igualdade estrita (===)
console.log("a === b:", __________); // 5 === "5"
console.log("c === 1:", __________); // true === 1
console.log("d === 0:", __________); // false === 0
console.log("e === f:", __________); // null === undefined

// Object.is()
console.log("Object.is(a, b):", __________); // Object.is(5, "5")
console.log("Object.is(c, 1):", __________); // Object.is(true, 1)
console.log("Object.is(e, f):", __________); // Object.is(null, undefined)
```

### Exercício 2: Casos Especiais com NaN e ±0
Trabalhe com casos especiais:

```javascript
// Teste com NaN
let nan1 = NaN;
let nan2 = Number.NaN;
let nan3 = 0 / 0;

console.log("NaN == NaN:", __________);
console.log("NaN === NaN:", __________);
console.log("Object.is(NaN, NaN):", __________);

// Teste com zero positivo e negativo
let zeroPos = +0;
let zeroNeg = -0;

console.log("+0 == -0:", __________);
console.log("+0 === -0:", __________);
console.log("Object.is(+0, -0):", __________);

// Teste com diferentes formas de NaN
console.log("nan1 == nan2:", __________);
console.log("nan1 === nan2:", __________);
console.log("Object.is(nan1, nan2):", __________);
console.log("Object.is(nan1, nan3):", __________);
```

### Exercício 3: Conversões de Tipo com ==
Entenda as conversões automáticas:

```javascript
// Arrays
let array1 = [1, 2, 3];
let array2 = [1];
let array3 = [];

console.log("array1 == '1,2,3':", __________);
console.log("array2 == 1:", __________);
console.log("array3 == 0:", __________);
console.log("array3 == false:", __________);
console.log("array3 == '':", __________);

// Objetos
let obj1 = {};
let obj2 = {nome: "João"};

console.log("obj1 == '[object Object]':", __________);
console.log("obj1 == false:", __________);
console.log("obj2 == '[object Object]':", __________);

// Strings e números
let str1 = "42";
let str2 = "3.14";
let str3 = "abc";

console.log("str1 == 42:", __________);
console.log("str2 == 3.14:", __________);
console.log("str3 == NaN:", __________);
```

### Exercício 4: Comparações com Boolean
Analise conversões booleanas:

```javascript
// Valores truthy e falsy
let valores = [
  true, false, 1, 0, -1, "true", "false", 
  "", "0", "1", [], {}, null, undefined, NaN
];

console.log("Comparações com == true:");
valores.forEach(valor => {
  console.log(`${valor} == true:`, __________);
});

console.log("\nComparações com == false:");
valores.forEach(valor => {
  console.log(`${valor} == false:`, __________);
});

console.log("\nComparações com === true:");
valores.forEach(valor => {
  console.log(`${valor} === true:`, __________);
});
```

### Exercício 5: Implementação de Algoritmos de Igualdade
Implemente os algoritmos de igualdade:

```javascript
// Implemente isLooselyEqual (==)
function isLooselyEqual(x, y) {
  // Se os tipos são iguais, usa comparação estrita
  if (typeof x === typeof y) {
    return x === y;
  }
  
  // Casos especiais para null e undefined
  if (x == null && y == null) return true;
  if (x == null || y == null) return false;
  
  // String e Number
  if (typeof x === 'string' && typeof y === 'number') {
    return Number(x) === y;
  }
  if (typeof x === 'number' && typeof y === 'string') {
    return x === Number(y);
  }
  
  // Boolean
  if (typeof x === 'boolean') {
    return isLooselyEqual(Number(x), y);
  }
  if (typeof y === 'boolean') {
    return isLooselyEqual(x, Number(y));
  }
  
  // Object
  if (typeof x === 'object') {
    return isLooselyEqual(x.toString(), y);
  }
  if (typeof y === 'object') {
    return isLooselyEqual(x, y.toString());
  }
  
  return false;
}

// Teste a implementação
console.log("isLooselyEqual('5', 5):", isLooselyEqual("5", 5));
console.log("isLooselyEqual(true, 1):", isLooselyEqual(true, 1));
console.log("isLooselyEqual([1], 1):", isLooselyEqual([1], 1));
console.log("isLooselyEqual(null, undefined):", isLooselyEqual(null, undefined));
```

### Exercício 6: Implementação de Object.is()
Implemente Object.is():

```javascript
// Implemente Object.is()
function meuObjectIs(x, y) {
  if (x === y) {
    // Trata o caso especial de +0 e -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Trata o caso especial de NaN
    return x !== x && y !== y;
  }
}

// Teste a implementação
console.log("meuObjectIs(NaN, NaN):", meuObjectIs(NaN, NaN));
console.log("meuObjectIs(+0, -0):", meuObjectIs(+0, -0));
console.log("meuObjectIs(5, 5):", meuObjectIs(5, 5));
console.log("meuObjectIs('5', 5):", meuObjectIs("5", 5));
console.log("meuObjectIs(true, 1):", meuObjectIs(true, 1));
```

### Exercício 7: Comparações em Estruturas de Dados
Teste comparações em diferentes estruturas:

```javascript
// Set usa SameValueZero
let set = new Set();
set.add(0);
set.add(-0);
set.add(NaN);
set.add(NaN);

console.log("Tamanho do Set:", set.size);
console.log("Set contém -0:", set.has(-0));
console.log("Set contém NaN:", set.has(NaN));

// Map usa SameValueZero
let map = new Map();
map.set(0, "zero");
map.set(-0, "zero negativo");
map.set(NaN, "not a number");

console.log("Tamanho do Map:", map.size);
console.log("Map tem chave -0:", map.has(-0));
console.log("Map tem chave NaN:", map.has(NaN));

// Array.includes() usa SameValueZero
let array = [0, -0, NaN, 5];
console.log("Array inclui -0:", array.includes(-0));
console.log("Array inclui NaN:", array.includes(NaN));
console.log("Array inclui 5:", array.includes(5));
```

### Exercício 8: Validação de Entrada
Crie funções de validação usando comparações corretas:

```javascript
// Validador de email
function validarEmail(email) {
  // Use === para comparação estrita
  if (typeof email !== 'string') {
    return false;
  }
  
  if (email === '') {
    return false;
  }
  
  return email.includes('@') && email.includes('.');
}

// Validador de idade
function validarIdade(idade) {
  // Use === para comparação estrita
  if (typeof idade !== 'number') {
    return false;
  }
  
  if (idade === NaN) {
    return false;
  }
  
  return idade >= 0 && idade <= 120;
}

// Validador de status
function validarStatus(status) {
  // Use === para valores específicos
  return status === 'ativo' || status === 'inativo' || status === 'pendente';
}

// Teste os validadores
console.log("Email válido:", validarEmail("joao@email.com"));
console.log("Email inválido:", validarEmail("email.invalido"));
console.log("Idade válida:", validarIdade(25));
console.log("Idade inválida:", validarIdade(-5));
console.log("Status válido:", validarStatus("ativo"));
console.log("Status inválido:", validarStatus("desconhecido"));
```

### Exercício 9: Comparações com Arrays e Objetos
Trabalhe com estruturas complexas:

```javascript
// Comparação de arrays
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 3];

console.log("array1 == array2:", array1 == array2);
console.log("array1 === array2:", array1 === array2);
console.log("array1 == '1,2,3':", array1 == "1,2,3");
console.log("array1 === '1,2,3':", array1 === "1,2,3");

// Comparação de objetos
let obj1 = {nome: "João", idade: 25};
let obj2 = {nome: "João", idade: 25};
let obj3 = {idade: 25, nome: "João"};

console.log("obj1 == obj2:", obj1 == obj2);
console.log("obj1 === obj2:", obj1 === obj2);
console.log("obj1 == '[object Object]':", obj1 == "[object Object]");

// Função para comparação profunda
function comparacaoProfunda(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (obj1 == null || obj2 == null) return false;
  if (typeof obj1 !== typeof obj2) return false;
  
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    return keys1.every(key => 
      keys2.includes(key) && comparacaoProfunda(obj1[key], obj2[key])
    );
  }
  
  return obj1 === obj2;
}

console.log("Comparação profunda obj1 e obj2:", comparacaoProfunda(obj1, obj2));
console.log("Comparação profunda obj1 e obj3:", comparacaoProfunda(obj1, obj3));
```

### Exercício 10: Casos de Uso Práticos
Aplique comparações em cenários reais:

```javascript
// Sistema de autenticação
class SistemaAuth {
  constructor() {
    this.usuarios = new Map();
  }
  
  cadastrar(email, senha) {
    // Use === para comparação estrita
    if (typeof email !== 'string' || email === '') {
      throw new Error('Email inválido');
    }
    
    if (typeof senha !== 'string' || senha.length < 6) {
      throw new Error('Senha muito curta');
    }
    
    if (this.usuarios.has(email)) {
      throw new Error('Email já cadastrado');
    }
    
    this.usuarios.set(email, senha);
    return true;
  }
  
  autenticar(email, senha) {
    // Use === para comparação estrita
    if (typeof email !== 'string' || typeof senha !== 'string') {
      return false;
    }
    
    const senhaArmazenada = this.usuarios.get(email);
    return senha === senhaArmazenada;
  }
}

// Teste o sistema
let auth = new SistemaAuth();

try {
  auth.cadastrar("joao@email.com", "123456");
  console.log("Usuário cadastrado com sucesso");
  
  console.log("Login válido:", auth.autenticar("joao@email.com", "123456"));
  console.log("Login inválido:", auth.autenticar("joao@email.com", "senhaerrada"));
  console.log("Email inexistente:", auth.autenticar("maria@email.com", "123456"));
} catch (error) {
  console.error("Erro:", error.message);
}
```

### Exercício 11: Detecção de Tipos
Crie funções para detectar tipos específicos:

```javascript
// Detector de NaN
function isNaN(valor) {
  return Object.is(valor, NaN);
}

// Detector de zero negativo
function isNegativeZero(valor) {
  return Object.is(valor, -0);
}

// Detector de null ou undefined
function isNullOrUndefined(valor) {
  return valor == null; // Usa == para capturar ambos
}

// Detector de número finito
function isFiniteNumber(valor) {
  return typeof valor === 'number' && 
         !Object.is(valor, NaN) && 
         !Object.is(valor, Infinity) && 
         !Object.is(valor, -Infinity);
}

// Teste os detectores
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN(5):", isNaN(5));
console.log("isNegativeZero(-0):", isNegativeZero(-0));
console.log("isNegativeZero(0):", isNegativeZero(0));
console.log("isNullOrUndefined(null):", isNullOrUndefined(null));
console.log("isNullOrUndefined(undefined):", isNullOrUndefined(undefined));
console.log("isNullOrUndefined(0):", isNullOrUndefined(0));
console.log("isFiniteNumber(5):", isFiniteNumber(5));
console.log("isFiniteNumber(Infinity):", isFiniteNumber(Infinity));
console.log("isFiniteNumber(NaN):", isFiniteNumber(NaN));
```

### Exercício 12: Comparações com Precisão Numérica
Trabalhe com comparações numéricas:

```javascript
// Comparação de números de ponto flutuante
function compararNumeros(a, b, precisao = 0.0001) {
  return Math.abs(a - b) < precisao;
}

// Comparação com tolerância
function compararComTolerancia(a, b, tolerancia = 0.01) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }
  
  if (Object.is(a, NaN) || Object.is(b, NaN)) {
    return false;
  }
  
  return Math.abs(a - b) <= tolerancia;
}

// Teste as comparações
console.log("0.1 + 0.2 == 0.3:", 0.1 + 0.2 == 0.3);
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("compararNumeros(0.1 + 0.2, 0.3):", compararNumeros(0.1 + 0.2, 0.3));

console.log("compararComTolerancia(3.14159, 3.14):", compararComTolerancia(3.14159, 3.14));
console.log("compararComTolerancia(3.14159, 3.15):", compararComTolerancia(3.14159, 3.15));
```

### Exercício 13: Validação de Formulário
Crie validações usando comparações corretas:

```javascript
class ValidadorFormulario {
  validarCampo(valor, tipo, obrigatorio = false) {
    // Validação de campo obrigatório
    if (obrigatorio) {
      if (valor == null || valor === '') {
        return {valido: false, erro: 'Campo obrigatório'};
      }
    }
    
    // Validação por tipo
    switch (tipo) {
      case 'email':
        return this.validarEmail(valor);
      case 'numero':
        return this.validarNumero(valor);
      case 'texto':
        return this.validarTexto(valor);
      case 'boolean':
        return this.validarBoolean(valor);
      default:
        return {valido: true, erro: null};
    }
  }
  
  validarEmail(email) {
    if (typeof email !== 'string') {
      return {valido: false, erro: 'Email deve ser uma string'};
    }
    
    if (email === '') {
      return {valido: false, erro: 'Email não pode estar vazio'};
    }
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
      valido: regex.test(email),
      erro: regex.test(email) ? null : 'Email inválido'
    };
  }
  
  validarNumero(numero) {
    if (typeof numero !== 'number') {
      return {valido: false, erro: 'Valor deve ser um número'};
    }
    
    if (Object.is(numero, NaN)) {
      return {valido: false, erro: 'Número inválido'};
    }
    
    return {valido: true, erro: null};
  }
  
  validarTexto(texto) {
    if (typeof texto !== 'string') {
      return {valido: false, erro: 'Valor deve ser uma string'};
    }
    
    return {valido: true, erro: null};
  }
  
  validarBoolean(valor) {
    if (typeof valor !== 'boolean') {
      return {valido: false, erro: 'Valor deve ser um boolean'};
    }
    
    return {valido: true, erro: null};
  }
}

// Teste o validador
let validador = new ValidadorFormulario();

console.log("Email válido:", validador.validarCampo("joao@email.com", "email", true));
console.log("Email inválido:", validador.validarCampo("email.invalido", "email", true));
console.log("Número válido:", validador.validarCampo(25, "numero", true));
console.log("Número inválido:", validador.validarCampo(NaN, "numero", true));
console.log("Texto válido:", validador.validarCampo("Olá mundo", "texto", true));
console.log("Boolean válido:", validador.validarCampo(true, "boolean", true));
```

### Exercício 14: Sistema de Cache com Comparações
Crie um sistema de cache usando comparações adequadas:

```javascript
class Cache {
  constructor() {
    this.cache = new Map();
  }
  
  set(chave, valor, ttl = 60000) {
    // Use === para comparação estrita
    if (typeof chave !== 'string' && typeof chave !== 'number') {
      throw new Error('Chave deve ser string ou número');
    }
    
    this.cache.set(chave, {
      valor: valor,
      expiracao: Date.now() + ttl
    });
  }
  
  get(chave) {
    const item = this.cache.get(chave);
    
    if (item === undefined) {
      return null;
    }
    
    if (Date.now() > item.expiracao) {
      this.cache.delete(chave);
      return null;
    }
    
    return item.valor;
  }
  
  has(chave) {
    const item = this.cache.get(chave);
    return item !== undefined && Date.now() <= item.expiracao;
  }
  
  delete(chave) {
    return this.cache.delete(chave);
  }
  
  clear() {
    this.cache.clear();
  }
  
  size() {
    // Remove itens expirados antes de contar
    this.limparExpirados();
    return this.cache.size;
  }
  
  limparExpirados() {
    const agora = Date.now();
    for (let [chave, item] of this.cache) {
      if (agora > item.expiracao) {
        this.cache.delete(chave);
      }
    }
  }
}

// Teste o cache
let cache = new Cache();

cache.set("usuario:1", {nome: "João", email: "joao@email.com"});
cache.set("config", {tema: "escuro", idioma: "pt-BR"}, 5000);

console.log("Cache tem usuário:", cache.has("usuario:1"));
console.log("Cache tem config:", cache.has("config"));
console.log("Tamanho do cache:", cache.size());

// Simule expiração
setTimeout(() => {
  console.log("Após 6s - Cache tem config:", cache.has("config"));
  console.log("Tamanho do cache:", cache.size());
}, 6000);
```

### Exercício 15: Comparações com Funções
Trabalhe com comparações de funções:

```javascript
// Funções para comparar
function funcao1() { return "resultado"; }
function funcao2() { return "resultado"; }
function funcao3() { return "diferente"; }

// Comparações de referência
console.log("funcao1 == funcao1:", funcao1 == funcao1);
console.log("funcao1 === funcao1:", funcao1 === funcao1);
console.log("funcao1 == funcao2:", funcao1 == funcao2);
console.log("funcao1 === funcao2:", funcao1 === funcao2);

// Comparação de resultados
console.log("funcao1() == funcao2():", funcao1() == funcao2());
console.log("funcao1() === funcao2():", funcao1() === funcao2());
console.log("funcao1() == funcao3():", funcao1() == funcao3());

// Função para comparar resultados de funções
function compararResultados(fn1, fn2) {
  try {
    const resultado1 = fn1();
    const resultado2 = fn2();
    return resultado1 === resultado2;
  } catch (error) {
    return false;
  }
}

console.log("Comparar resultados funcao1 e funcao2:", compararResultados(funcao1, funcao2));
console.log("Comparar resultados funcao1 e funcao3:", compararResultados(funcao1, funcao3));
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual operador faz conversão de tipo antes da comparação?
- [ ] ===
- [x] ==
- [ ] Object.is()
- [ ] Nenhum

### Pergunta 2
Qual o resultado de `NaN === NaN`?
- [ ] true
- [x] false
- [ ] undefined
- [ ] null

### Pergunta 3
Qual método trata NaN como igual a NaN?
- [ ] ==
- [ ] ===
- [x] Object.is()
- [ ] Nenhum

### Pergunta 4
Qual o resultado de `+0 === -0`?
- [x] true
- [ ] false
- [ ] undefined
- [ ] null

### Pergunta 5
Qual estrutura usa SameValueZero para comparações?
- [ ] Array
- [x] Set
- [ ] Object
- [ ] String

### Pergunta 6
Qual o resultado de `[] == false`?
- [x] true
- [ ] false
- [ ] undefined
- [ ] null

### Pergunta 7
Qual operador é recomendado para uso geral?
- [ ] ==
- [x] ===
- [ ] Object.is()
- [ ] Nenhum

### Pergunta 8
Qual o resultado de `null == undefined`?
- [x] true
- [ ] false
- [ ] undefined
- [ ] null

## 🚀 Desafio Avançado: Sistema de Comparação Universal
Crie um sistema que permite diferentes tipos de comparação:

```javascript
class ComparadorUniversal {
  constructor() {
    this.modos = {
      'loose': this.looseEqual,
      'strict': this.strictEqual,
      'sameValue': this.sameValue,
      'sameValueZero': this.sameValueZero,
      'deep': this.deepEqual
    };
  }
  
  comparar(a, b, modo = 'strict') {
    const funcaoComparacao = this.modos[modo];
    if (!funcaoComparacao) {
      throw new Error(`Modo de comparação '${modo}' não suportado`);
    }
    return funcaoComparacao.call(this, a, b);
  }
  
  looseEqual(a, b) {
    return a == b;
  }
  
  strictEqual(a, b) {
    return a === b;
  }
  
  sameValue(a, b) {
    return Object.is(a, b);
  }
  
  sameValueZero(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      if (a !== a && b !== b) return true; // NaN
      return a === b; // ±0 são iguais
    }
    return a === b;
  }
  
  deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (typeof a !== typeof b) return false;
    
    if (typeof a === 'object') {
      const keys1 = Object.keys(a);
      const keys2 = Object.keys(b);
      
      if (keys1.length !== keys2.length) return false;
      
      return keys1.every(key => 
        keys2.includes(key) && this.deepEqual(a[key], b[key])
      );
    }
    
    return a === b;
  }
  
  compararMultiplos(valores, modo = 'strict') {
    const resultados = [];
    for (let i = 0; i < valores.length - 1; i++) {
      resultados.push({
        a: valores[i],
        b: valores[i + 1],
        resultado: this.comparar(valores[i], valores[i + 1], modo),
        modo: modo
      });
    }
    return resultados;
  }
}

// Teste o sistema
let comparador = new ComparadorUniversal();

// Teste diferentes modos
let a = 5;
let b = "5";
let c = [1, 2, 3];
let d = [1, 2, 3];

console.log("Loose:", comparador.comparar(a, b, 'loose'));
console.log("Strict:", comparador.comparar(a, b, 'strict'));
console.log("SameValue:", comparador.comparar(a, b, 'sameValue'));
console.log("Deep:", comparador.comparar(c, d, 'deep'));

// Teste múltiplas comparações
let valores = [5, "5", 5, 6, "6"];
let resultados = comparador.compararMultiplos(valores, 'loose');

resultados.forEach(resultado => {
  console.log(`${resultado.a} == ${resultado.b}: ${resultado.resultado}`);
});
```

## 💡 Dicas para Resolução

1. **Use === por padrão** - evita conversões inesperadas
2. **Use == apenas quando necessário** - como verificar null/undefined
3. **Use Object.is() para casos especiais** - NaN e ±0
4. **Teste casos extremos** - null, undefined, NaN, ±0
5. **Entenda as conversões** - especialmente com arrays e objetos
6. **Valide tipos antes de comparar** - use typeof quando necessário

---

**⏱️ Tempo estimado de prática**: 3-4 horas
**🏆 Nível**: Intermediário
**📝 Tags**: #javascript #comparações #igualdade #operadores #=== #== #Object.is #exercícios 