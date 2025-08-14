Aula 6: Comparações de Igualdade em JavaScript - Dominando os Operadores de Comparação
🔍 Objetivos de Aprendizado
- Compreender os diferentes tipos de comparação de igualdade
- Dominar os operadores ==, === e Object.is()
- Entender os algoritmos de igualdade (isLooselyEqual, isStrictlyEqual, SameValue, SameValueZero)
- Aplicar as comparações corretas em diferentes cenários
- Evitar armadilhas comuns em comparações
- Implementar comparações personalizadas quando necessário
- Otimizar performance com comparações adequadas
- Seguir boas práticas em código de produção

🔍 O Que São Comparações de Igualdade?
Operadores de comparação são usados em declarações lógicas para determinar igualdade ou diferença entre variáveis ou valores. Em JavaScript, temos diferentes níveis de rigor na comparação, cada um com suas características específicas.

**Tipos de Comparação:**

| Operador | Nome | Comportamento | Type Coercion |
|----------|------|---------------|---------------|
| `==` | Igualdade Solta | Compara valores após conversão | Sim |
| `===` | Igualdade Estrita | Compara valores e tipos | Não |
| `Object.is()` | Igualdade Mesmo Valor | Compara valores idênticos | Não |

**Por que diferentes tipos de comparação?**
- **Flexibilidade**: `==` permite comparações mais flexíveis
- **Precisão**: `===` evita conversões inesperadas
- **Casos Especiais**: `Object.is()` trata casos extremos como NaN e ±0

⚖️ Operador de Igualdade Solta (==)

**Comportamento:**
O operador `==` faz conversão de tipo (coercion) antes da comparação, tentando tornar os operandos do mesmo tipo.

```javascript
// Exemplos básicos
console.log(5 == 5);        // true
console.log("5" == 5);      // true (string convertida para number)
console.log(true == 1);     // true (boolean convertido para number)
console.log(false == 0);    // true (boolean convertido para number)
console.log("" == 0);       // true (string vazia convertida para 0)
console.log(null == undefined); // true (valores especiais)

// Conversões de array
console.log([1, 2] == "1,2"); // true (array convertido para string)
console.log([] == false);     // true (array vazia convertida para 0)

// Conversões de objeto
console.log({} == "[object Object]"); // true (objeto convertido para string)
console.log({} == false);     // false (objeto não vazio é truthy)
```

**Regras de Conversão:**

```javascript
// 1. Se os tipos são iguais, compara diretamente
console.log(5 == 5);        // true
console.log("hello" == "hello"); // true

// 2. null e undefined são iguais entre si
console.log(null == undefined); // true
console.log(null == null);      // true
console.log(undefined == undefined); // true

// 3. String e Number: converte string para number
console.log("42" == 42);    // true
console.log("3.14" == 3.14); // true
console.log("abc" == NaN);  // false (NaN nunca é igual a nada)

// 4. Boolean e qualquer tipo: converte boolean para number
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(true == "1");   // true (true→1, "1"→1)
console.log(false == "");   // true (false→0, ""→0)

// 5. Object e primitivo: converte objeto para primitivo
console.log([1, 2, 3] == "1,2,3"); // true
console.log([1] == 1);      // true (array→"1", "1"→1)
console.log([] == 0);       // true (array→"", ""→0)
```

**Casos Problemáticos:**

```javascript
// Armadilhas comuns
console.log("0" == false);  // true (ambos convertidos para 0)
console.log("" == false);   // true (ambos convertidos para 0)
console.log("" == 0);       // true (ambos convertidos para 0)
console.log("" == [0]);     // true (array→"0", "0"→0, ""→0)

// Arrays vazios
console.log([] == false);   // true (array→"", ""→0, false→0)
console.log([] == 0);       // true (array→"", ""→0)
console.log([] == "");      // true (array→"")

// Objetos
console.log({} == false);   // false (objeto→"[object Object]", não converte para 0)
console.log({} == "[object Object]"); // true
```

⚖️ Operador de Igualdade Estrita (===)

**Comportamento:**
O operador `===` compara tanto o valor quanto o tipo dos operandos, sem fazer conversão de tipo.

```javascript
// Exemplos básicos
console.log(5 === 5);       // true
console.log("5" === 5);     // false (tipos diferentes)
console.log(true === 1);    // false (tipos diferentes)
console.log(false === 0);   // false (tipos diferentes)
console.log("" === 0);      // false (tipos diferentes)
console.log(null === undefined); // false (valores diferentes)

// Arrays e objetos
console.log([1, 2] === [1, 2]); // false (referências diferentes)
console.log({} === {});     // false (referências diferentes)

// Strings
console.log("hello" === "hello"); // true
console.log("5" === "5");   // true
```

**Casos Especiais:**

```javascript
// NaN nunca é igual a nada, nem a si mesmo
console.log(NaN === NaN);   // false
console.log(Number.NaN === Number.NaN); // false

// ±0 são considerados iguais
console.log(+0 === -0);     // true
console.log(0 === -0);      // true

// null e undefined
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined); // false
```

**Comparação com == vs ===:**

```javascript
// Exemplos comparativos
let valor = "5";

console.log(valor == 5);    // true (conversão de tipo)
console.log(valor === 5);   // false (sem conversão)

let booleano = true;
console.log(booleano == 1); // true (true → 1)
console.log(booleano === 1); // false (boolean !== number)

let array = [1, 2];
console.log(array == "1,2"); // true (array → string)
console.log(array === "1,2"); // false (array !== string)
```

🔬 Object.is() - Igualdade Mesmo Valor

**Comportamento:**
`Object.is()` determina se dois valores são o mesmo valor, tratando casos especiais como NaN e ±0 de forma diferente do `===`.

```javascript
// Casos básicos (mesmo comportamento do ===)
console.log(Object.is(5, 5));           // true
console.log(Object.is("5", 5));         // false
console.log(Object.is(true, 1));        // false
console.log(Object.is([], []));         // false

// Casos especiais onde Object.is() difere do ===

// 1. NaN é igual a NaN
console.log(NaN === NaN);               // false
console.log(Object.is(NaN, NaN));       // true

// 2. +0 e -0 são diferentes
console.log(+0 === -0);                 // true
console.log(Object.is(+0, -0));         // false

// 3. Outros casos são iguais ao ===
console.log(null === undefined);        // false
console.log(Object.is(null, undefined)); // false

console.log("hello" === "hello");       // true
console.log(Object.is("hello", "hello")); // true
```

**Implementação de Object.is():**

```javascript
// Como Object.is() funciona internamente
function meuObjectIs(x, y) {
  if (x === y) {
    // Trata o caso especial de +0 e -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Trata o caso especial de NaN
    return x !== x && y !== y;
  }
}

// Teste da implementação
console.log(meuObjectIs(NaN, NaN));     // true
console.log(meuObjectIs(+0, -0));       // false
console.log(meuObjectIs(5, 5));         // true
console.log(meuObjectIs("5", 5));       // false
```

**Casos de Uso para Object.is():**

```javascript
// 1. Verificação de NaN
function verificarNaN(valor) {
  return Object.is(valor, NaN);
}

console.log(verificarNaN(NaN));         // true
console.log(verificarNaN(5));           // false
console.log(verificarNaN("abc"));       // false

// 2. Verificação de zero negativo
function verificarZeroNegativo(valor) {
  return Object.is(valor, -0);
}

console.log(verificarZeroNegativo(-0)); // true
console.log(verificarZeroNegativo(0));  // false
console.log(verificarZeroNegativo(5));  // false

// 3. Comparação precisa em algoritmos matemáticos
function calcularInverso(valor) {
  if (Object.is(valor, 0)) {
    return Infinity;
  } else if (Object.is(valor, -0)) {
    return -Infinity;
  }
  return 1 / valor;
}

console.log(calcularInverso(0));        // Infinity
console.log(calcularInverso(-0));       // -Infinity
console.log(calcularInverso(2));        // 0.5
```

📊 Algoritmos de Igualdade

**1. isLooselyEqual (==)**
Compara valores com conversão de tipo.

```javascript
// Algoritmo isLooselyEqual
function isLooselyEqual(x, y) {
  // Se os tipos são iguais, usa comparação estrita
  if (typeof x === typeof y) {
    return x === y;
  }
  
  // Casos especiais
  if (x == null && y == null) return true;
  if (x == null || y == null) return false;
  
  // Conversões de tipo
  if (typeof x === 'string' && typeof y === 'number') {
    return Number(x) === y;
  }
  if (typeof x === 'number' && typeof y === 'string') {
    return x === Number(y);
  }
  if (typeof x === 'boolean') {
    return isLooselyEqual(Number(x), y);
  }
  if (typeof y === 'boolean') {
    return isLooselyEqual(x, Number(y));
  }
  
  // Conversão de objetos
  if (typeof x === 'object') {
    return isLooselyEqual(x.toString(), y);
  }
  if (typeof y === 'object') {
    return isLooselyEqual(x, y.toString());
  }
  
  return false;
}

// Teste
console.log(isLooselyEqual("5", 5));    // true
console.log(isLooselyEqual(true, 1));   // true
console.log(isLooselyEqual([1], 1));    // true
```

**2. isStrictlyEqual (===)**
Compara valores e tipos sem conversão.

```javascript
// Algoritmo isStrictlyEqual
function isStrictlyEqual(x, y) {
  // Se os tipos são diferentes, retorna false
  if (typeof x !== typeof y) {
    return false;
  }
  
  // Para números, trata casos especiais
  if (typeof x === 'number') {
    if (x !== x && y !== y) return true;  // NaN
    if (x === 0 && y === 0) return 1/x === 1/y; // ±0
  }
  
  return x === y;
}

// Teste
console.log(isStrictlyEqual(5, 5));     // true
console.log(isStrictlyEqual("5", 5));   // false
console.log(isStrictlyEqual(NaN, NaN)); // true
console.log(isStrictlyEqual(+0, -0));   // true
```

**3. SameValueZero**
Usado em estruturas como Set e Map, trata ±0 como iguais.

```javascript
// Algoritmo SameValueZero
function sameValueZero(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    if (x !== x && y !== y) return true;  // NaN
    return x === y; // ±0 são iguais
  }
  return x === y;
}

// Teste
console.log(sameValueZero(NaN, NaN));   // true
console.log(sameValueZero(+0, -0));     // true
console.log(sameValueZero(5, 5));       // true
console.log(sameValueZero("5", 5));     // false
```

**4. SameValue (Object.is)**
Trata ±0 como diferentes e NaN como iguais.

```javascript
// Algoritmo SameValue
function sameValue(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    if (x !== x && y !== y) return true;  // NaN
    if (x === 0 && y === 0) return 1/x === 1/y; // ±0
  }
  return x === y;
}

// Teste
console.log(sameValue(NaN, NaN));       // true
console.log(sameValue(+0, -0));         // false
console.log(sameValue(5, 5));           // true
```

🎯 Comparação dos Algoritmos

| Algoritmo | NaN | ±0 | Conversão de Tipo | Uso |
|-----------|-----|----|-------------------|-----|
| **isLooselyEqual** | false | iguais | Sim | `==` |
| **isStrictlyEqual** | false | iguais | Não | `===` |
| **SameValueZero** | iguais | iguais | Não | Set, Map |
| **SameValue** | iguais | diferentes | Não | `Object.is()` |

**Exemplos Práticos:**

```javascript
// 1. Set usa SameValueZero
let set = new Set();
set.add(0);
set.add(-0);
console.log(set.size); // 1 (mesmo valor)

// 2. Map usa SameValueZero
let map = new Map();
map.set(0, "zero");
map.set(-0, "zero negativo");
console.log(map.size); // 1 (mesmo valor)

// 3. Array.includes() usa SameValueZero
let array = [0, NaN];
console.log(array.includes(-0)); // true
console.log(array.includes(NaN)); // true

// 4. indexOf() usa Strict Equality
console.log(array.indexOf(-0)); // 0
console.log(array.indexOf(NaN)); // -1 (não encontrado)
```

🚨 Armadilhas Comuns e Como Evitá-las

**1. Comparações com Arrays:**

```javascript
// ❌ Problema
let array = [1, 2, 3];
if (array == "1,2,3") {
  console.log("Arrays são iguais!");
}

// ✅ Solução
if (array.toString() === "1,2,3") {
  console.log("Arrays são iguais!");
}

// Ou melhor ainda
if (JSON.stringify(array) === JSON.stringify([1, 2, 3])) {
  console.log("Arrays são iguais!");
}
```

**2. Comparações com Objetos:**

```javascript
// ❌ Problema
let obj1 = {nome: "João"};
let obj2 = {nome: "João"};
if (obj1 == obj2) {
  console.log("Objetos são iguais!");
}

// ✅ Solução
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log("Objetos são iguais!");
}

// Ou para comparação profunda
function objetosIguais(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

**3. Comparações com Boolean:**

```javascript
// ❌ Problema
let valor = "true";
if (valor == true) {
  console.log("Valor é verdadeiro!");
}

// ✅ Solução
if (valor === "true") {
  console.log("Valor é verdadeiro!");
}

// Ou para verificar se é truthy
if (Boolean(valor)) {
  console.log("Valor é truthy!");
}
```

**4. Comparações com null/undefined:**

```javascript
// ❌ Problema
let valor = null;
if (valor == undefined) {
  console.log("Valor é null ou undefined!");
}

// ✅ Solução
if (valor === null || valor === undefined) {
  console.log("Valor é null ou undefined!");
}

// Ou mais conciso
if (valor == null) {
  console.log("Valor é null ou undefined!");
}
```

💡 Boas Práticas

**1. Use === por padrão:**
```javascript
// ✅ Recomendado
if (valor === 5) { }
if (nome === "João") { }
if (ativo === true) { }

// ❌ Evite
if (valor == 5) { }
if (nome == "João") { }
if (ativo == true) { }
```

**2. Use == apenas quando necessário:**
```javascript
// ✅ Casos válidos para ==
if (valor == null) { } // null ou undefined
if (typeof valor == "string") { } // verificação de tipo

// ❌ Evite conversões inesperadas
if (array == "1,2,3") { }
if (objeto == "[object Object]") { }
```

**3. Use Object.is() para casos especiais:**
```javascript
// ✅ Para NaN
if (Object.is(valor, NaN)) { }

// ✅ Para zero negativo
if (Object.is(valor, -0)) { }

// ✅ Para comparações precisas
if (Object.is(resultado, esperado)) { }
```

**4. Implemente comparações personalizadas quando necessário:**
```javascript
// Comparação profunda de objetos
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

// Teste
let obj1 = {a: 1, b: {c: 2}};
let obj2 = {a: 1, b: {c: 2}};
console.log(comparacaoProfunda(obj1, obj2)); // true
```

---

**💡 Dica Profissional**: Sempre use `===` como padrão. Use `==` apenas quando você realmente precisa de conversão de tipo (como verificar `null` ou `undefined`). Use `Object.is()` para casos especiais como `NaN` e zero negativo.

**⏱️ Tempo estimado de estudo**: 2-3 horas
**🏆 Nível**: Intermediário
**📝 Tags**: #javascript #comparações #igualdade #operadores #=== #== #Object.is