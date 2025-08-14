# Exercícios da Aula 2: Variáveis em JavaScript

## 🎯 Exercícios Práticos Interativos

### Exercício 1: Identificando Problemas
Analise o código e corrija os erros relacionados a variáveis:

```javascript
function calcularTotal() {
  var preco = 100;
  LET desconto = 0.1; // Erro 1
  const imposto = 0.05;
  
  if (preco > 50) {
    var taxaAdicional = 5;
    let descontoEspecial = 2; // Erro 2?
  }
  
  total = preco - (preco * desconto) + imposto + taxaAdicional; // Erro 3
  console.log(descontoEspecial); // O que acontece aqui?
  
  return total;
}
```

### Exercício 2: Conversão de Temperatura
Crie um conversor de Celsius para Fahrenheit:

```javascript
const FATOR_CONVERSAO = 9/5;
const AJUSTE = 32;

// Complete o código:
let celsius = parseFloat(prompt("Temperatura em Celsius:"));
let fahrenheit = __________;

console.log(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);
```

### Exercício 3: Calculadora Financeira
Desenvolva uma calculadora de juros compostos:

```javascript
const capital = parseFloat(prompt("Capital inicial:"));
const taxaJuros = parseFloat(prompt("Taxa de juros mensal (%):")) / 100;
const meses = parseInt(prompt("Período (meses):"));

// Use let para o montante
let montante = __________;

console.log(`Montante final: R$${montante.toFixed(2)}`);
```

### Exercício 4: Debugging de Escopos
Corrija os problemas de escopo:

```javascript
function processarPedido(itens) {
  var total = 0;
  const TAXA = 0.1;
  
  for (var i = 0; i < itens.length; i++) {
    let precoItem = itens[i].preco;
    total += precoItem;
  }
  
  if (total > 100) {
    var desconto = 10;
  }
  
  console.log(`Itens processados: ${i}`);
  return total + (total * TAXA) - desconto;
}
```

### Exercício 5: Declaração de Variáveis
Identifique qual tipo de declaração usar em cada situação:

```javascript
// 1. Número de PI (nunca muda)
__________ PI = 3.14159;

// 2. Nome do usuário (pode ser alterado)
__________ nomeUsuario = "João";

// 3. Array de cores (referência não muda, conteúdo sim)
__________ cores = ["vermelho", "azul", "verde"];

// 4. Contador de tentativas (muda frequentemente)
__________ tentativas = 0;

// 5. Configuração da API (nunca muda)
__________ API_URL = "https://api.exemplo.com";
```

### Exercício 6: Hoisting na Prática
Preveja o que será exibido em cada console.log:

```javascript
console.log("1:", x);
var x = 5;
console.log("2:", x);

console.log("3:", y);
let y = 10;
console.log("4:", y);

function teste() {
  console.log("5:", z);
  var z = 15;
  console.log("6:", z);
}
teste();
```

### Exercício 7: Nomenclatura de Variáveis
Corrija os nomes de variáveis seguindo as boas práticas:

```javascript
// Corrija estes nomes:
let n = 10; // __________
let p = "produto"; // __________
let qtd = 5; // __________
let preco_total = 100; // __________
let 1valor = 50; // __________
let let = "teste"; // __________
```

### Exercício 8: Escopo de Bloco
Analise o código e determine o que será exibido:

```javascript
let contador = 0;

for (let i = 0; i < 3; i++) {
  let contador = i * 2;
  console.log("Dentro do loop:", contador);
}

console.log("Fora do loop:", contador);
console.log("Variável i:", i);
```

### Exercício 9: Const com Objetos
Entenda como const funciona com objetos:

```javascript
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

// O que acontece em cada linha?
carro.ano = 2021; // __________
carro.cor = "azul"; // __________
// carro = {marca: "Honda"}; // __________

console.log(carro);
```

### Exercício 10: Variáveis em Funções
Analise o escopo das variáveis:

```javascript
let globalVar = "global";

function funcao1() {
  let localVar = "local1";
  var antigaVar = "antiga";
  
  function funcao2() {
    let localVar2 = "local2";
    console.log(globalVar); // __________
    console.log(localVar); // __________
    console.log(antigaVar); // __________
  }
  
  funcao2();
  console.log(localVar2); // __________
}

funcao1();
```

### Exercício 11: Calculadora de IMC
Crie uma calculadora de IMC usando variáveis apropriadas:

```javascript
// Solicite peso e altura
const peso = parseFloat(prompt("Peso (kg):"));
const altura = parseFloat(prompt("Altura (m):"));

// Calcule o IMC
let imc = __________;

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

console.log(`IMC: ${imc.toFixed(1)} - ${categoria}`);
```

### Exercício 12: Gerador de Senha
Crie um gerador de senha simples:

```javascript
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let senha = "";

// Gere uma senha de 8 caracteres
for (let i = 0; i < 8; i++) {
  let indice = Math.floor(Math.random() * caracteres.length);
  senha += caracteres[indice];
}

console.log("Senha gerada:", senha);
```

### Exercício 13: Validação de Email
Crie uma função para validar formato de email:

```javascript
function validarEmail(email) {
  const arroba = email.includes("@");
  const ponto = email.includes(".");
  const posicaoArroba = email.indexOf("@");
  const posicaoPonto = email.lastIndexOf(".");
  
  let valido = arroba && ponto && posicaoArroba > 0 && posicaoPonto > posicaoArroba + 1;
  
  return valido;
}

// Teste com diferentes emails
console.log(validarEmail("usuario@exemplo.com")); // __________
console.log(validarEmail("email.invalido")); // __________
console.log(validarEmail("@dominio.com")); // __________
```

### Exercício 14: Contador de Palavras
Crie um contador de palavras em uma frase:

```javascript
function contarPalavras(frase) {
  // Remova espaços extras e quebre em palavras
  let palavras = frase.trim().split(/\s+/);
  let contador = palavras.length;
  
  return contador;
}

// Teste a função
console.log(contarPalavras("JavaScript é incrível!")); // __________
console.log(contarPalavras("  Muitos   espaços   extras  ")); // __________
```

### Exercício 15: Conversor de Moeda
Crie um conversor de moeda com taxas fixas:

```javascript
const TAXA_USD = 5.20;
const TAXA_EUR = 5.80;
const TAXA_GBP = 6.50;

function converterMoeda(valor, moedaOrigem, moedaDestino) {
  let valorConvertido = 0;
  
  if (moedaOrigem === "BRL") {
    if (moedaDestino === "USD") {
      valorConvertido = valor / TAXA_USD;
    } else if (moedaDestino === "EUR") {
      valorConvertido = valor / TAXA_EUR;
    }
  }
  
  return valorConvertido.toFixed(2);
}

console.log(converterMoeda(100, "BRL", "USD")); // __________
```

### Exercício 16: Validador de CPF
Crie uma validação básica de CPF:

```javascript
function validarCPF(cpf) {
  // Remove caracteres não numéricos
  let cpfLimpo = cpf.replace(/\D/g, "");
  
  // Verifica se tem 11 dígitos
  let valido = cpfLimpo.length === 11;
  
  // Verifica se não são todos iguais
  let todosIguais = true;
  for (let i = 1; i < cpfLimpo.length; i++) {
    if (cpfLimpo[i] !== cpfLimpo[0]) {
      todosIguais = false;
      break;
    }
  }
  
  return valido && !todosIguais;
}

console.log(validarCPF("123.456.789-09")); // __________
console.log(validarCPF("111.111.111-11")); // __________
```

### Exercício 17: Calculadora de Juros Simples
Crie uma calculadora de juros simples:

```javascript
function calcularJurosSimples(capital, taxa, tempo) {
  const juros = capital * taxa * tempo;
  const montante = capital + juros;
  
  return {
    juros: juros.toFixed(2),
    montante: montante.toFixed(2)
  };
}

let resultado = calcularJurosSimples(1000, 0.05, 12);
console.log(`Juros: R$${resultado.juros}`);
console.log(`Montante: R$${resultado.montante}`);
```

### Exercício 18: Gerador de Números Aleatórios
Crie um gerador de números em um intervalo:

```javascript
function gerarNumeroAleatorio(min, max) {
  let numero = Math.random() * (max - min) + min;
  return Math.floor(numero);
}

// Gere 5 números entre 1 e 100
for (let i = 0; i < 5; i++) {
  let numero = gerarNumeroAleatorio(1, 100);
  console.log(`Número ${i + 1}: ${numero}`);
}
```

### Exercício 19: Formatador de Telefone
Crie um formatador de número de telefone:

```javascript
function formatarTelefone(telefone) {
  // Remove tudo que não é número
  let numeros = telefone.replace(/\D/g, "");
  
  // Formata baseado no tamanho
  if (numeros.length === 11) {
    return `(${numeros.slice(0,2)}) ${numeros.slice(2,7)}-${numeros.slice(7)}`;
  } else if (numeros.length === 10) {
    return `(${numeros.slice(0,2)}) ${numeros.slice(2,6)}-${numeros.slice(6)}`;
  } else {
    return "Telefone inválido";
  }
}

console.log(formatarTelefone("11987654321")); // __________
console.log(formatarTelefone("1187654321")); // __________
```

### Exercício 20: Sistema de Pontuação
Crie um sistema de pontuação para um jogo:

```javascript
const PONTOS_ACERTO = 10;
const PONTOS_ERRO = -2;
const BONUS_SEQUENCIA = 5;

let pontuacao = 0;
let sequenciaAcertos = 0;

function registrarAcerto() {
  pontuacao += PONTOS_ACERTO;
  sequenciaAcertos++;
  
  if (sequenciaAcertos >= 3) {
    pontuacao += BONUS_SEQUENCIA;
    console.log("Bônus de sequência!");
  }
}

function registrarErro() {
  pontuacao += PONTOS_ERRO;
  sequenciaAcertos = 0;
}

// Simule algumas jogadas
registrarAcerto(); // +10
registrarAcerto(); // +10
registrarAcerto(); // +10 +5 (bônus)
registrarErro();   // -2
registrarAcerto(); // +10

console.log(`Pontuação final: ${pontuacao}`);
```

## 🔍 Quiz de Conhecimento

### Pergunta 1
Qual declaração permite redeclaração da variável?
- [ ] let
- [ ] const
- [x] var
- [ ] Nenhuma

### Pergunta 2
Onde uma variável let declarada dentro de um bloco if pode ser acessada?
- [ ] Em toda a função
- [ ] Globalmente
- [x] Apenas dentro do bloco if
- [ ] Em qualquer bloco

### Pergunta 3
O que é Temporal Dead Zone?
- [ ] Um bug em navegadores antigos
- [ ] Período entre declaração e inicialização de var
- [x] Estado onde let/const existem mas não podem ser acessadas
- [ ] Fase de execução de funções

### Pergunta 4
Qual nome segue as boas práticas de nomenclatura?
- [ ] let = "valor"
- [ ] 1produto
- [ ] preço_total
- [x] usuarioAtivo

## 🚀 Desafio Avançado: Gerenciador de Perfil
Crie um sistema de perfil de usuário que:

- Use `const` para informações fixas (data de registro)
- Use `let` para informações mutáveis (nome, email)
- Valide escopos adequados
- Implemente atualização de dados

```javascript
const dataRegistro = new Date().toISOString().split('T')[0];
let usuario = {
  nome: "Ana Silva",
  email: "ana@exemplo.com",
  nivel: "iniciante"
};

function atualizarPerfil(novoNome, novoEmail) {
  // Implemente a atualização aqui
  // Valide os parâmetros
}

function promoverUsuario() {
  // Atualize o nível do usuário
}

// Teste suas funções!
atualizarPerfil("Ana Costa", "ana.costa@novoemail.com");
promoverUsuario();
console.log(usuario);
```

## 💡 Dicas para Resolução

1. **Use const por padrão** - só use let quando realmente necessário
2. **Evite var** em código novo
3. **Teste escopos** no console do navegador
4. **Valide declarações** antes de usar
5. **Use nomes descritivos** para variáveis

---

**⏱️ Tempo estimado de prática**: 3-4 horas
**🏆 Nível**: Iniciante/Intermediário
**📝 Tags**: #javascript #variáveis #escopo #hoisting #exercícios 