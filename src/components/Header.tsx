import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isMethodologyPath = location.pathname === '/about';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link to="/" className="shrink-0">
          <span
            className="font-playfair text-xl font-medium tracking-wide text-foreground"
            style={{ fontVariant: 'small-caps' }}
          >
            Delineate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "text-sm transition-colors",
              isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm transition-colors",
              isActive('/about') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
            )}
          >
            About
          </Link>
          {isMethodologyPath && (
            <a
              href="/about#methodology"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Methodology
            </a>
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
