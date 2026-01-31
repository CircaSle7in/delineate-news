import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 text-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-4">
          A free public resource.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-muted-foreground/30">•</span>
          <a
            href="mailto:hello@delineate.news"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60 mt-6">
          &copy; {new Date().getFullYear()} Delineate
        </p>
      </div>
    </footer>
  );
};

export default Footer;
