import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden";
  
  const variants = {
    primary: "bg-forest text-white",
    outline: "border border-anthracite text-anthracite hover:bg-anthracite hover:text-white transition-colors duration-300",
    ghost: "text-anthracite hover:bg-stone/20",
    light: "bg-cream text-anthracite",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button 
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Optional: Shine effect for primary buttons could go here */}
      {children}
    </motion.button>
  );
};

export default Button;