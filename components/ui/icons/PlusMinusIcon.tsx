import React from 'react';

interface PlusMinusIconProps {
  isOpen: boolean;
  className?: string;
  strokeWidth?: number;
  size?: number; // Nueva prop para controlar el tamaño
}

export const PlusMinusIcon = ({
  isOpen,
  className = '',
  strokeWidth = 2,
  size = 6, // Valor por defecto equivalente a w-6 h-6 (24px)
}: PlusMinusIconProps) => {
  return (
    <svg
      className={`w-${size} h-${size} transition-transform duration-300 ${className}`}
      viewBox="0 0 24 24" // ViewBox ligeramente más grande
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round" // Para terminaciones de línea redondeadas
    >
      {isOpen ? (
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
        />
      ) : (
        <>
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          />
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          />
        </>
      )}
    </svg>
  );
};
