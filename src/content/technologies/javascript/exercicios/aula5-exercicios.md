# Exercícios da Aula 5: Estruturas de Dados em JavaScript

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Manipulação de Arrays
Crie e manipule arrays de diferentes formas:

```javascript
// Crie um array com 5 frutas
let frutas = ["maçã", "banana", "laranja", "uva", "morango"];

// Adicione uma fruta no final
frutas.push("abacaxi");

// Remova a primeira fruta
frutas.shift();

// Adicione uma fruta no início
frutas.unshift("kiwi");

// Verifique o tamanho do array
let tamanho = frutas.length;

console.log("Frutas:", frutas);
console.log("Tamanho:", tamanho);
```

### Exercício 2: Objetos Aninhados
Trabalhe com objetos complexos:

```javascript
// Crie um objeto pessoa com dados aninhados
let pessoa = {
  nome: "João Silva",
  idade: 28,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP"
  },
  telefones: ["11987654321", "11987654322"]
};

// Acesse a cidade do endereço
let cidade = pessoa.endereco.cidade;

// Adicione um novo telefone
pessoa.telefones.push("11987654323");

// Crie uma propriedade 'profissao'
pessoa.profissao = "Desenvolvedor";

console.log("Cidade:", cidade);
console.log("Telefones:", pessoa.telefones);
console.log("Profissão:", pessoa.profissao);
```

### Exercício 3: Map - Coleções Chaveadas
Pratique com Map:

```javascript
// Crie um Map para armazenar informações de usuários
let usuarios = new Map();

// Adicione usuários com diferentes tipos de chave
usuarios.set(1, {nome: "Ana", email: "ana@email.com"});
usuarios.set("admin", {nome: "Admin", email: "admin@email.com"});
usuarios.set({id: "especial"}, {nome: "Especial", email: "especial@email.com"});

// Verifique se existe um usuário
let existeAdmin = usuarios.has("admin");

// Obtenha o tamanho do Map
let totalUsuarios = usuarios.size;

// Itere sobre todos os usuários
usuarios.forEach((usuario, chave) => {
  console.log(`Chave: ${chave} → Nome: ${usuario.nome}`);
});

console.log("Existe admin?", existeAdmin);
console.log("Total de usuários:", totalUsuarios);
```

### Exercício 4: Set - Valores Únicos
Trabalhe com Set:

```javascript
// Crie um Set para armazenar tags únicas
let tags = new Set();

// Adicione algumas tags
tags.add("javascript");
tags.add("programação");
tags.add("web");
tags.add("javascript"); // Duplicado - não será adicionado

// Verifique se uma tag existe
let temJavaScript = tags.has("javascript");

// Converta para array
let arrayTags = Array.from(tags);

// Adicione múltiplas tags de uma vez
let novasTags = ["react", "node", "css"];
novasTags.forEach(tag => tags.add(tag));

console.log("Tem JavaScript?", temJavaScript);
console.log("Tags como array:", arrayTags);
console.log("Todas as tags:", Array.from(tags));
```

### Exercício 5: WeakMap - Gerenciamento de Memória
Entenda WeakMap:

```javascript
// Crie um WeakMap para cache de dados
let cache = new WeakMap();

// Crie alguns objetos
let obj1 = {id: 1, nome: "Produto 1"};
let obj2 = {id: 2, nome: "Produto 2"};

// Armazene dados no cache
cache.set(obj1, {preco: 100, estoque: 50});
cache.set(obj2, {preco: 200, estoque: 30});

// Acesse os dados do cache
let dadosObj1 = cache.get(obj1);
let dadosObj2 = cache.get(obj2);

// Verifique se existem no cache
let existeObj1 = cache.has(obj1);

console.log("Dados do Obj1:", dadosObj1);
console.log("Dados do Obj2:", dadosObj2);
console.log("Existe Obj1 no cache?", existeObj1);

// Simule remoção do objeto (garbage collection)
obj1 = null;
// Os dados associados serão automaticamente removidos
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual estrutura permite chaves de qualquer tipo?
- [ ] Object
- [x] Map
- [ ] Set
- [ ] Array

### Pergunta 2
Qual estrutura não permite valores duplicados?
- [ ] Array
- [ ] Object
- [x] Set
- [ ] Map

### Pergunta 3
Qual método converte objeto para string JSON?
- [ ] JSON.parse()
- [x] JSON.stringify()
- [ ] JSON.convert()
- [ ] JSON.serialize()

### Pergunta 4
Qual array tipado usa 1 byte por elemento?
- [ ] Int16Array
- [x] Int8Array
- [ ] Int32Array
- [ ] Float32Array

### Pergunta 5
Qual estrutura é automaticamente limpa pelo garbage collector?
- [ ] Map
- [ ] Set
- [x] WeakMap
- [ ] Array

### Pergunta 6
Qual método converte Map para array?
- [ ] map.toArray()
- [x] Array.from(map)
- [ ] map.convert()
- [ ] map.array()

## 💡 Dicas para Resolução

1. **Use Map para chaves complexas** - quando precisar de chaves que não são strings
2. **Use Set para valores únicos** - quando precisar garantir unicidade
3. **Use WeakMap/WeakSet para cache** - quando quiser garbage collection automático
4. **Use arrays tipados para performance** - quando trabalhar com dados binários
5. **Valide JSON sempre** - use try/catch ao fazer parse
6. **Escolha a estrutura certa** - baseado no seu caso de uso específico

---

**⏱️ Tempo estimado de prática**: 4-5 horas
**🏆 Nível**: Intermediário/Avançado
**📝 Tags**: #javascript #estruturasdedados #map #set #json #arrays #exercícios 