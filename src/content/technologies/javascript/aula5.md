Aula 5: Estruturas de Dados em JavaScript - Organizando e Gerenciando Informações
🏗️ Objetivos de Aprendizado
- Compreender o que são estruturas de dados e sua importância
- Dominar estruturas primitivas (Arrays e Objetos)
- Trabalhar com coleções chaveadas (Map, Set, WeakMap, WeakSet)
- Entender arrays tipados e suas aplicações
- Manipular dados estruturados com JSON
- Implementar estruturas de dados personalizadas
- Aplicar estruturas de dados em cenários reais
- Otimizar performance com estruturas adequadas

🏗️ O Que São Estruturas de Dados?
Estruturas de dados são formatos para organizar, gerenciar e armazenar dados de forma que permita acesso e modificação eficientes. Em JavaScript, temos estruturas primitivas (nativas) e não-primitivas (que precisamos implementar).

**Classificação das Estruturas:**

| Tipo | Estruturas | Características |
|------|------------|-----------------|
| **Primitivas** | Arrays, Objetos | Já disponíveis na linguagem |
| **Coleções Chaveadas** | Map, Set, WeakMap, WeakSet | Estruturas especializadas |
| **Arrays Tipados** | Int8Array, Uint8Array, etc. | Para dados binários |
| **Não-Primitivas** | Stack, Queue, Tree, Graph | Precisam ser implementadas |

**Por que usar estruturas de dados?**
- **Organização**: Dados bem estruturados são mais fáceis de gerenciar
- **Performance**: Estruturas adequadas melhoram a eficiência
- **Manutenibilidade**: Código mais limpo e organizado
- **Escalabilidade**: Soluções que crescem com o projeto

📦 Estruturas Primitivas: Arrays e Objetos

**Arrays: Coleções Indexadas**
Arrays são coleções ordenadas de valores com índices numéricos.

```javascript
// Criação de arrays
const frutas = ["maçã", "banana", "laranja"];
const numeros = [1, 2, 3, 4, 5];
const misto = [1, "texto", true, {nome: "João"}];

// Acesso por índice
console.log(frutas[0]); // "maçã"
console.log(frutas.length); // 3

// Métodos essenciais
frutas.push("uva"); // Adiciona no final
frutas.pop(); // Remove do final
frutas.unshift("morango"); // Adiciona no início
frutas.shift(); // Remove do início
```

**Objetos: Coleções Chaveadas**
Objetos são coleções de propriedades (chave-valor).

```javascript
// Criação de objetos
const pessoa = {
  nome: "Maria",
  idade: 30,
  profissao: "Desenvolvedora",
  endereco: {
    rua: "Rua das Flores",
    numero: 123
  }
};

// Acesso às propriedades
console.log(pessoa.nome); // "Maria"
console.log(pessoa["idade"]); // 30
console.log(pessoa.endereco.rua); // "Rua das Flores"

// Adicionando propriedades
pessoa.email = "maria@email.com";
pessoa["telefone"] = "11987654321";
```

🔑 Coleções Chaveadas: Map e Set

**Map: Chaves de Qualquer Tipo**
Map é uma coleção de pares chave-valor que permite chaves de qualquer tipo.

```javascript
// Criação de Map
const mapa = new Map();

// Adicionando elementos
mapa.set("string", "valor string");
mapa.set(42, "valor número");
mapa.set({id: 1}, "valor objeto");
mapa.set(() => {}, "valor função");

// Acesso e verificação
console.log(mapa.get("string")); // "valor string"
console.log(mapa.has(42)); // true
console.log(mapa.size); // 4

// Iteração
mapa.forEach((valor, chave) => {
  console.log(`${chave} → ${valor}`);
});

// Conversão
const arrayDeMap = Array.from(mapa);
const objetoDeMap = Object.fromEntries(mapa);
```

**Set: Valores Únicos**
Set é uma coleção de valores únicos de qualquer tipo.

```javascript
// Criação de Set
const conjunto = new Set();

// Adicionando valores
conjunto.add("valor1");
conjunto.add("valor2");
conjunto.add("valor1"); // Não adiciona (duplicado)

// Verificação e tamanho
console.log(conjunto.has("valor1")); // true
console.log(conjunto.size); // 2

// Iteração
conjunto.forEach(valor => {
  console.log(valor);
});

// Conversão para array
const arrayDoSet = Array.from(conjunto);
```

**Comparação: Map vs Objeto**

| Característica | Map | Objeto |
|----------------|-----|--------|
| Chaves | Qualquer tipo | Apenas string/symbol |
| Tamanho | Propriedade size | Precisa calcular |
| Iteração | Nativo | Object.keys/values/entries |
| Performance | Melhor para adições/remoções | Melhor para acesso |
| Serialização | Precisa converter | JSON nativo |

**Comparação: Set vs Array**

| Característica | Set | Array |
|----------------|-----|-------|
| Duplicatas | Não permite | Permite |
| Índices | Não tem | Tem |
| Busca | O(1) | O(n) |
| Inserção | O(1) | O(n) no início |
| Ordem | Inserção | Mantém ordem |

🔗 WeakMap e WeakSet: Gerenciamento de Memória

**WeakMap: Map com Referências Fracas**
WeakMap permite que as chaves sejam coletadas pelo garbage collector.

```javascript
// Criação de WeakMap
const weakMap = new WeakMap();

// Chaves devem ser objetos
const obj1 = {id: 1};
const obj2 = {id: 2};

weakMap.set(obj1, "dados do objeto 1");
weakMap.set(obj2, "dados do objeto 2");

// Acesso
console.log(weakMap.get(obj1)); // "dados do objeto 1"

// Quando obj1 é removido, os dados também são
obj1 = null; // Dados são automaticamente removidos
```

**WeakSet: Set com Referências Fracas**
WeakSet armazena objetos únicos que podem ser coletados pelo garbage collector.

```javascript
// Criação de WeakSet
const weakSet = new WeakSet();

const obj1 = {id: 1};
const obj2 = {id: 2};

weakSet.add(obj1);
weakSet.add(obj2);

// Verificação
console.log(weakSet.has(obj1)); // true

// Quando obj1 é removido, também é removido do WeakSet
obj1 = null;
```

**Casos de Uso:**
- **WeakMap**: Cache de dados associados a objetos
- **WeakSet**: Rastreamento de objetos visitados
- **Garbage Collection**: Evita vazamentos de memória

📊 Arrays Tipados: Dados Binários

**Tipos Disponíveis:**

| Tipo | Tamanho | Descrição |
|------|---------|-----------|
| Int8Array | 1 byte | Inteiros com sinal (-128 a 127) |
| Uint8Array | 1 byte | Inteiros sem sinal (0 a 255) |
| Int16Array | 2 bytes | Inteiros com sinal (-32768 a 32767) |
| Uint16Array | 2 bytes | Inteiros sem sinal (0 a 65535) |
| Int32Array | 4 bytes | Inteiros com sinal (-2^31 a 2^31-1) |
| Uint32Array | 4 bytes | Inteiros sem sinal (0 a 2^32-1) |
| Float32Array | 4 bytes | Números de ponto flutuante |
| Float64Array | 8 bytes | Números de ponto flutuante dupla precisão |

**Criação e Uso:**

```javascript
// Criação de arrays tipados
const int8Array = new Int8Array(4); // [0, 0, 0, 0]
const uint8Array = new Uint8Array([1, 2, 3, 4]);
const float32Array = new Float32Array([1.1, 2.2, 3.3]);

// Manipulação
int8Array[0] = 127;
int8Array[1] = -128;

console.log(int8Array); // Int8Array [127, -128, 0, 0]
console.log(int8Array.length); // 4
console.log(int8Array.byteLength); // 4 bytes

// Conversão
const arrayNormal = Array.from(int8Array);
const buffer = int8Array.buffer;
```

**Aplicações:**
- **Processamento de Imagens**: Manipulação de pixels
- **Áudio/Video**: Processamento de dados binários
- **WebGL**: Gráficos 3D
- **Criptografia**: Manipulação de bytes
- **Protocolos de Rede**: Parsing de dados binários

📄 JSON: Dados Estruturados

**O que é JSON?**
JSON (JavaScript Object Notation) é um formato de dados baseado na sintaxe de objetos JavaScript.

```javascript
// Objeto JavaScript
const pessoa = {
  nome: "João",
  idade: 25,
  ativo: true,
  hobbies: ["música", "esporte"],
  endereco: {
    rua: "Rua A",
    numero: 123
  }
};

// Conversão para JSON
const jsonString = JSON.stringify(pessoa, null, 2);
console.log(jsonString);
/*
{
  "nome": "João",
  "idade": 25,
  "ativo": true,
  "hobbies": ["música", "esporte"],
  "endereco": {
    "rua": "Rua A",
    "numero": 123
  }
}
*/

// Conversão de JSON para objeto
const objetoRecuperado = JSON.parse(jsonString);
console.log(objetoRecuperado.nome); // "João"
```

**Métodos JSON:**

```javascript
// JSON.stringify - Converte objeto para string
const obj = {nome: "Ana", idade: 30};

// Formato básico
console.log(JSON.stringify(obj)); // '{"nome":"Ana","idade":30}'

// Com formatação
console.log(JSON.stringify(obj, null, 2));
/*
{
  "nome": "Ana",
  "idade": 30
}
*/

// Com replacer function
const replacer = (key, value) => {
  if (key === 'idade') return value + ' anos';
  return value;
};
console.log(JSON.stringify(obj, replacer, 2));

// JSON.parse - Converte string para objeto
const jsonString = '{"nome":"Carlos","idade":28}';
const objeto = JSON.parse(jsonString);
console.log(objeto.nome); // "Carlos"
```

**Validação e Tratamento de Erros:**

```javascript
function parseJSONSeguro(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Erro ao fazer parse do JSON:", error.message);
    return null;
  }
}

// Teste com JSON válido
const resultado1 = parseJSONSeguro('{"nome":"João"}');
console.log(resultado1); // {nome: "João"}

// Teste com JSON inválido
const resultado2 = parseJSONSeguro('{"nome":"João"'); // JSON incompleto
console.log(resultado2); // null
```

**Casos de Uso:**
- **APIs**: Comunicação cliente-servidor
- **Configurações**: Armazenamento de dados de configuração
- **Local Storage**: Persistência de dados no navegador
- **Importação/Exportação**: Troca de dados entre sistemas

---

**💡 Dica Profissional**: Escolha a estrutura de dados baseada no seu caso de uso específico. Arrays para dados ordenados, Map para chaves complexas, Set para valores únicos, e arrays tipados para performance com dados binários.

**⏱️ Tempo estimado de estudo**: 2-3 horas
**🏆 Nível**: Intermediário
**📝 Tags**: #javascript #estruturasdedados #arrays #objetos #map #set #json