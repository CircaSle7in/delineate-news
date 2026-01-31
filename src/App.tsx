import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import NewsArticle from "./pages/NewsArticle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Initialize dark mode
function ThemeInitializer() {
  useEffect(() => {
    // Default to dark mode
    const savedTheme = localStorage.getItem('delineate-theme') || 'dark';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  return null;
}

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <ThemeInitializer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis/:slug" element={<NewsArticle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
