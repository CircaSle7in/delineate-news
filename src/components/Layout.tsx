import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Layout = ({
  children,
  className = '',
  fullWidth = false,
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main-content" className={cn(
        'flex-grow pt-20 pb-12',
        className
      )}>
        {fullWidth ? (
          children
        ) : (
          <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-3xl">
            {children}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
