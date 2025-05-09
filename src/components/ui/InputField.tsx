'use client';

import React, { InputHTMLAttributes, useId } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = '',
  containerClassName = '',
  type = 'text',
  placeholder,
  ...props
}) => {
  // Generate a unique ID for this input field
  const uniqueId = useId();

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-white mb-1" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <div 
        // Apply suppressHydrationWarning to prevent hydration errors
        // from browser extensions like LastPass that inject elements
        suppressHydrationWarning 
      >
        <input
          id={uniqueId}
          type={type}
          placeholder={placeholder}
          className={`w-full px-3 py-2 bg-[#e7edf9] text-[#081227] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ddde1] ${
            error ? 'border border-red-500' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;