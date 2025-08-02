# Padrões de Código - Code Compass

## 1. Princípios Fundamentais

### 1.1 Regra de Ouro
**"Código simples é código que funciona e é fácil de entender"**

### 1.2 Prioridades (em ordem)
1. **Funcionalidade** - O código deve funcionar
2. **Legibilidade** - Fácil de ler e entender
3. **Simplicidade** - Menos é mais
4. **Consistência** - Mesmo padrão sempre
5. **Manutenibilidade** - Fácil de modificar

## 2. Padrões de Nomenclatura

### 2.1 Arquivos e Pastas
```
✅ CORRETO:
- components/Button.tsx
- pages/Dashboard.tsx
- hooks/useAuth.ts
- utils/formatDate.ts

❌ INCORRETO:
- components/button.tsx
- pages/dashboard.tsx
- hooks/useauth.ts
- utils/format-date.ts
```

### 2.2 Componentes React
```typescript
✅ CORRETO:
- Button.tsx
- UserCard.tsx
- NavigationMenu.tsx
- QuizQuestion.tsx

❌ INCORRETO:
- button.tsx
- user-card.tsx
- navigation_menu.tsx
- quiz-question.tsx
```

### 2.3 Variáveis e Funções
```typescript
✅ CORRETO:
- const userName = "João";
- const isLoggedIn = true;
- const handleClick = () => {};
- const getUserData = () => {};

❌ INCORRETO:
- const user_name = "João";
- const is_logged_in = true;
- const handle_click = () => {};
- const get_user_data = () => {};
```

## 3. Estrutura de Componentes

### 3.1 Template Padrão
```typescript
// 1. Imports
import React from 'react';
import { Button } from '@/components/Button';

// 2. Tipos/Interfaces
interface UserCardProps {
  name: string;
  email: string;
  onClick?: () => void;
}

// 3. Componente
export function UserCard({ name, email, onClick }: UserCardProps) {
  // 4. Lógica (se houver)
  const handleClick = () => {
    if (onClick) onClick();
  };

  // 5. Render
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{email}</p>
      <Button onClick={handleClick}>Ver Perfil</Button>
    </div>
  );
}
```

### 3.2 Ordem dos Imports
```typescript
// 1. React e bibliotecas externas
import React from 'react';
import { useState, useEffect } from 'react';

// 2. Bibliotecas de terceiros
import { motion } from 'framer-motion';

// 3. Componentes locais
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

// 4. Hooks customizados
import { useAuth } from '@/hooks/useAuth';

// 5. Utilitários
import { formatDate } from '@/utils/formatDate';

// 6. Tipos
import type { User } from '@/types/user';
```

## 4. Padrões de CSS/Tailwind

### 4.1 Classes Organizadas
```typescript
✅ CORRETO:
className="
  flex items-center justify-between
  p-4 bg-white border rounded-lg
  hover:bg-gray-50 transition-colors
"

❌ INCORRETO:
className="flex p-4 bg-white hover:bg-gray-50 items-center justify-between border rounded-lg transition-colors"
```

### 4.2 Ordem das Classes
```typescript
// 1. Layout (flex, grid, position)
// 2. Spacing (padding, margin)
// 3. Sizing (width, height)
// 4. Background e cores
// 5. Bordas e sombras
// 6. Tipografia
// 7. Estados (hover, focus, etc)
// 8. Transições e animações
```

## 5. Padrões de Estado

### 5.1 useState - Sempre com tipo explícito
```typescript
✅ CORRETO:
const [user, setUser] = useState<User | null>(null);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [items, setItems] = useState<string[]>([]);

❌ INCORRETO:
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [items, setItems] = useState([]);
```

### 5.2 Estados de Loading/Error
```typescript
// Sempre usar este padrão
const [isLoading, setIsLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
const [data, setData] = useState<DataType | null>(null);
```

## 6. Padrões de Funções

### 6.1 Funções Simples e Únicas
```typescript
✅ CORRETO:
const handleSubmit = () => {
  setIsLoading(true);
  submitForm();
};

const submitForm = async () => {
  try {
    const result = await api.submit(data);
    setData(result);
  } catch (error) {
    setError('Erro ao enviar formulário');
  } finally {
    setIsLoading(false);
  }
};

❌ INCORRETO:
const handleSubmit = async () => {
  setIsLoading(true);
  try {
    const result = await api.submit(data);
    setData(result);
  } catch (error) {
    setError('Erro ao enviar formulário');
  } finally {
    setIsLoading(false);
  }
};
```

### 6.2 Nomes Descritivos
```typescript
✅ CORRETO:
const handleUserLogin = () => {};
const validateEmail = (email: string) => {};
const formatCurrency = (value: number) => {};

❌ INCORRETO:
const handle = () => {};
const validate = (email: string) => {};
const format = (value: number) => {};
```

## 7. Padrões de Props

### 7.1 Props Obrigatórias Primeiro
```typescript
interface ButtonProps {
  // 1. Props obrigatórias
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  
  // 2. Props opcionais
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

### 7.2 Props com Valores Padrão
```typescript
export function Button({ 
  children, 
  variant = 'primary',
  onClick,
  disabled = false,
  className = ''
}: ButtonProps) {
  // ...
}
```

## 8. Padrões de Comentários

### 8.1 Comentários Úteis
```typescript
// ✅ CORRETO - Explica o "porquê", não o "o quê"
// Validação necessária porque a API aceita apenas emails válidos
const isValidEmail = email.includes('@') && email.includes('.');

// ❌ INCORRETO - Comentário óbvio
// Verifica se o email é válido
const isValidEmail = email.includes('@') && email.includes('.');
```

### 8.2 Sem Comentários Desnecessários
```typescript
// ❌ NÃO FAZER - Código autoexplicativo
const userName = "João"; // Nome do usuário
const isActive = true; // Se está ativo
```

## 9. Padrões de Tratamento de Erro

### 9.1 Try/Catch Padrão
```typescript
const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  
  try {
    const data = await api.getData();
    setData(data);
  } catch (error) {
    setError('Erro ao carregar dados');
    console.error('Erro:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## 10. Padrões de Performance

### 10.1 useCallback para Funções
```typescript
const handleClick = useCallback(() => {
  // Lógica aqui
}, [dependencies]);
```

### 10.2 useMemo para Cálculos
```typescript
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

## 11. Regras de Não Fazer

### 11.1 ❌ NUNCA FAZER
- Usar `any` (sempre tipar)
- Misturar padrões de nomenclatura
- Criar componentes muito complexos
- Usar inline styles
- Ignorar erros de TypeScript
- Criar funções com mais de 20 linhas
- Usar variáveis globais
- Comentar código óbvio

### 11.2 ✅ SEMPRE FAZER
- Usar TypeScript strict mode
- Seguir padrões estabelecidos
- Quebrar componentes grandes
- Usar Tailwind CSS
- Tratar todos os erros
- Manter funções pequenas
- Usar estado local quando possível
- Documentar decisões complexas

## 12. Checklist Antes de Entregar

### 12.1 Para Cada Componente
- [ ] Nome descritivo e em PascalCase
- [ ] Props tipadas corretamente
- [ ] Funções pequenas e focadas
- [ ] Estados bem definidos
- [ ] Tratamento de erro
- [ ] Classes Tailwind organizadas
- [ ] Sem console.log desnecessários

### 12.2 Para Cada Página
- [ ] Loading states
- [ ] Error states
- [ ] Responsividade
- [ ] Acessibilidade básica
- [ ] Navegação funcionando
- [ ] Dados sendo carregados

---

**Lembre-se**: Código simples é código que funciona e é fácil de entender. 
Sempre priorize a legibilidade sobre a "inteligência" do código. 