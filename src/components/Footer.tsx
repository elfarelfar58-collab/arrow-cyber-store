import { Cpu, Terminal, Globe, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Cpu className="w-8 h-8 text-[#00FF41]" />
              <span className="text-2xl font-bold tracking-tighter text-white">ARROW <span className="text-[#00FF41]">TECH</span></span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Equipping security professionals with advanced hardware for penetration testing, network auditing, and forensic analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#00FF41] transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-[#00FF41] transition-colors"><Shield className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-[#00FF41] transition-colors"><Activity className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono text-sm tracking-widest uppercase mb-6">Equipment</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">WiFi Auditing</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">HID Injection</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">SDR Tools</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">Physical Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono text-sm tracking-widest uppercase mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/tutorials" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">Tutorials</Link></li>
              <li><Link to="/docs" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">Documentation</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">Firmware Updates</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-[#00FF41] text-sm transition-colors">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono text-sm tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Stay updated with the latest security tools.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="root@localhost" 
                className="bg-[#121212] border border-white/10 px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-[#00FF41] w-full"
              />
              <button type="button" className="bg-[#00FF41] text-black px-4 py-2 hover:bg-[#00FF41]/80 transition-colors">
                <Terminal className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-xs text-gray-600 font-mono">
          <p>© 2024 ARROW TECH. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white">LICENSE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
