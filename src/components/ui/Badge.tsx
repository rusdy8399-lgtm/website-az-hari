import React from 'react';

export type BadgeVariant =
  | 'emerald'
  | 'gold'
  | 'neutral'
  | 'blue'
  | 'amber'
  | 'red'
  | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 font-medium',
    md: 'text-xs px-3 py-1 font-semibold',
  };

  const variantStyles = {
    emerald: 'bg-sky-50 text-[#00609C] border border-sky-100',
    gold: 'bg-[#FDF8ED] text-[#B47B12] border border-amber-200',
    neutral: 'bg-gray-100 text-gray-700 border border-gray-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200',
    red: 'bg-rose-50 text-rose-700 border border-rose-200',
    outline: 'border border-[#00609C] text-[#00609C] bg-transparent',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export const StatusBadge: React.FC<{ status: string; className?: string }> = ({
  status,
  className = '',
}) => {
  let variant: BadgeVariant = 'neutral';

  switch (status) {
    case 'Menunggu Verifikasi':
      variant = 'amber';
      break;
    case 'Sedang Diverifikasi':
      variant = 'blue';
      break;
    case 'Data Perlu Diperbaiki':
      variant = 'red';
      break;
    case 'Lulus Administrasi':
      variant = 'emerald';
      break;
    case 'Diterima':
      variant = 'emerald';
      break;
    case 'Ditolak':
      variant = 'red';
      break;
    default:
      variant = 'neutral';
  }

  return (
    <Badge variant={variant} className={className}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </Badge>
  );
};
