import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  border?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hover = true,
  border = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-2xl ${
        border ? 'border border-[#F0EFEA]' : ''
      } shadow-subtle ${
        hover
          ? 'transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
