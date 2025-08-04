import type React from 'react';

// 2. Tipos/Interfaces
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// 3. Componente
export function Card({ children, className = '', hover = false }: CardProps) {
  // 4. Lógica (se houver)
  const baseClasses = 'bg-white border border-gray-200 rounded-lg shadow-sm';
  const hoverClasses = hover
    ? 'hover:shadow-md hover:border-gray-300 transition-all duration-200'
    : '';

  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  // 5. Render
  return <div className={classes}>{children}</div>;
}
