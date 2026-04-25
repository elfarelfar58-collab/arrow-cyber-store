import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Tutorials from './pages/Tutorials';
import About from './pages/About';
import Docs from './pages/Docs';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="scanline pointer-events-none" />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/about" element={<About />} />
            <Route path="/docs" element={<Docs />} />
            {/* Fallback routes could go here */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Terminal Effect Overlay (Static for design) */}
        <div className="fixed bottom-4 left-4 z-40 hidden xl:block pointer-events-none">
          <div className="bg-black/80 backdrop-blur-md border border-[#00FF41]/20 p-3 rounded font-mono text-[10px] text-[#00FF41]/60">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#00FF41] rounded-full animate-pulse" />
              <span>SECURE_CONNECTION: ESTABLISHED</span>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
