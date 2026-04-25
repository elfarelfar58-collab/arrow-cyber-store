import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Store', path: '/' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Documentation', path: '/docs' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[#00FF41]/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Cpu className="w-8 h-8 text-[#00FF41] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tighter text-white">ARROW <span className="text-[#00FF41]">TECH</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-mono tracking-widest uppercase transition-colors hover:text-[#00FF41] ${location.pathname === link.path ? 'text-[#00FF41]' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <button className="relative p-2 text-gray-400 hover:text-[#00FF41] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#00FF41] text-black text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-[#00FF41]">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-[#00FF41]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-[#00FF41]/20 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-4 text-base font-mono tracking-widest uppercase text-gray-400 hover:text-[#00FF41]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
