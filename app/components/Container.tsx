import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-6xl px-1.5em md:px-2.5em lg:px-[10.3125em ${className}`}>
      {children}
    </div>
  );
}
