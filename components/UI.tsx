import React from 'react';

export const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}> = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const baseStyles = "font-mono uppercase tracking-widest text-sm py-3 px-6 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border";
  const variants = {
    primary: "bg-safety text-black border-safety hover:bg-safety-dim hover:border-safety-dim font-bold",
    secondary: "bg-transparent text-industrial-300 border-industrial-600 hover:border-safety hover:text-safety"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-2 font-sans">
      {title}<span className="text-safety">.</span>
    </h2>
    {subtitle && (
      <p className="text-industrial-400 font-mono text-sm md:text-base max-w-2xl border-l-2 border-safety pl-4">
        {subtitle}
      </p>
    )}
  </div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="w-full bg-industrial-900 border border-industrial-700 text-white p-3 font-mono text-sm focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-all placeholder-industrial-600"
  />
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-industrial-900 border border-industrial-800 p-6 ${className}`}>
    {children}
  </div>
);