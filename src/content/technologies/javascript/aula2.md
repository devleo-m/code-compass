Aula 2: Variáveis em JavaScript - Domine os Pilares do Armazenamento de Dados
🚀 Objetivos de Aprendizado
- Compreender o conceito e a importância das variáveis
- Dominar os diferentes tipos de declaração (var, let, const)
- Entender escopos (global, função, bloco) e hoisting
- Aplicar regras de nomenclatura de forma profissional
- Utilizar variáveis eficientemente em projetos reais

📦 O Que São Variáveis e Por Que São Importantes?
Variáveis são containers que armazenam dados em seu programa JavaScript. Imagine-as como caixas etiquetadas onde você guarda informações para uso posterior.

```javascript
// Exemplo prático:
let produto = "Smartphone";
const preco = 1999.90;
var desconto = 0.15;

console.log(`Produto: ${produto}`);
console.log(`Preço final: R$${preco - (preco * desconto)}`);
```

Por que usamos variáveis?
- **Reutilização de valores** - Armazenar dados para múltiplos usos
- **Legibilidade do código** - Nomes significativos explicam a função
- **Manutenção facilitada** - Alterar valor em um único lugar
- **Manipulação de dados** - Realizar operações com valores armazenados

🔍 Os Três Pilares da Declaração de Variáveis
**Evolução histórica:**
- 1995-2015: `var` era o único método
- ES6 (2015): Revolução com `let` e `const`

**Comparação detalhada:**

| Característica | var | let | const |
|----------------|-----|-----|-------|
| Escopo | Função | Bloco | Bloco |
| Pode ser redeclarada | Sim | Não | Não |
| Pode ser reatribuída | Sim | Sim | Não (imutável) |
| Hoisting | Sim (undefined) | Sim (TDZ) | Sim (TDZ) |
| Uso recomendado | Evitar | Variáveis mutáveis | Valores constantes |

**Exemplos práticos:**
```javascript
// Usando var (comportamento antigo)
function calcular() {
  if (true) {
    var x = 10; // Escopo de função!
  }
  console.log(x); // 10 (vazamento de escopo)
}

// Usando let (moderno)
function calcularModerno() {
  if (true) {
    let y = 20; // Escopo de bloco
    console.log(y); // 20
  }
  console.log(y); // Erro: y is not defined
}

// Usando const (valores constantes)
const PI = 3.14159;
// PI = 3.14; // Erro! Constante não pode ser reatribuída

// Const com objetos (propriedades podem mudar)
const pessoa = {nome: "João"};
pessoa.nome = "Maria"; // Permitido!
// pessoa = {nome: "Pedro"}; // Erro!
```

🧭 Entendendo Escopos em Profundidade
Escopo define onde uma variável pode ser acessada no seu código.

**Tipos de Escopo:**

1. **Global**: Visível em qualquer lugar
```javascript
const API_KEY = "abc123"; // Escopo global
```

2. **Função**: Visível apenas na função
```javascript
function login() {
  let token = "xyz789"; // Escopo de função
}
```

3. **Bloco**: Visível apenas no bloco { }
```javascript
if (user.loggedIn) {
  let sessionId = generateId(); // Escopo de bloco
}
```

⬆️ Hoisting: O Comportamento "Misterioso"
JavaScript move declarações para o topo do escopo durante a compilação.

**Comportamentos diferentes:**

- **var**: São hoisted e inicializadas com `undefined`
- **let/const**: São hoisted mas não inicializadas (Temporal Dead Zone)

```javascript
// Exemplo com var:
console.log(nome); // undefined (não dá erro)
var nome = "João";

// Exemplo com let:
console.log(sobrenome); // Erro: Cannot access before initialization
let sobrenome = "Silva";

// Funciona com funções:
ola(); // "Olá!" (hoisting de função)
function ola() {
  console.log("Olá!");
}
```

📝 Regras de Ouro para Nomenclatura de Variáveis
- **Caracteres permitidos**: Letras, dígitos, $, _
- **Não pode começar com dígito**
- **Case sensitive**: `nome` ≠ `Nome` ≠ `NOME`
- **Palavras reservadas**: Evite `let`, `function`, `class`, etc.

**Boas Práticas Profissionais:**
- Use `camelCase` para nomes compostos: `precoTotal`
- Seja descritivo: `numeroProdutos` > `n`
- Constantes em `UPPER_CASE`: `TAXA_JUROS`
- Evite abreviações obscuras

**Exemplos:**
```javascript
// Ruim:
let p = 100; // preço?
let q = 5; // quantidade?

// Bom:
let precoProduto = 100;
let quantidade = 5;
const TAXA_DESCONTO = 0.1;
```

💻 Atividades Práticas

Os exercícios desta aula foram movidos para o arquivo separado: `exercicios/aula2-exercicios.md`

Para praticar os conceitos aprendidos sobre variáveis, escopos e hoisting, acesse o arquivo de exercícios correspondente.

📚 Recursos Essenciais
- **Documentação Oficial**
  - MDN: Variáveis JavaScript
  - JavaScript.info: Variáveis
  - ES6: Let e Const

- **Ferramentas Práticas**
  - ESLint - Analisador de código
  - JSFiddle - Ambiente de teste online
  - Chrome DevTools - Debugging

🌟 Próximos Passos
Na próxima aula dominaremos:
- Tipos de Dados em JavaScript (primitivos e objetos)
- Operadores Aritméticos, Lógicos e de Comparação
- Conversão entre Tipos (coerção)
- Valores Truthy e Falsy

💡 Dica Profissional: Sempre prefira `const` por padrão. Use `let` apenas quando realmente necessário alterar o valor. Evite `var` em código novo.

⏱️ Tempo estimado de prática: 3-4 horas
🏆 Nível: Iniciante/Intermediário
📝 Tags: #javascript #variáveis #escopo #hoisting #programação

👉 Ação Imediata: Abra o console do navegador AGORA e declare variáveis com let e const em diferentes escopos para testar os conceitos!