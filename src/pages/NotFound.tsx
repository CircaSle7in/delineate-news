import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found - Delineate</title>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-playfair font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Home size={18} />
              Go Home
            </Link>
            <Link
              to="/analysis"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors"
            >
              <ArrowLeft size={18} />
              View Analysis
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
