import { Shield, Target, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 uppercase tracking-tighter">About <span className="text-[#00FF41]">Arrow Tech</span></h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Founded in 2020, Arrow Tech was born out of a need for reliable, high-performance hardware for the cybersecurity community. We specialize in custom-engineered tools that bridge the gap between hobbyist electronics and professional-grade security equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#121212] p-8 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-[#00FF41] mr-3" /> OUR MISSION
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To empower security researchers and penetration testers with the highest quality hardware tools available. We believe in open-source foundations, rigorous testing, and ethical security practices.
            </p>
          </div>
          <div className="bg-[#121212] p-8 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-[#00FF41] mr-3" /> OUR STANDARDS
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Every piece of hardware that leaves our facility is tested against real-world scenarios. We ensure that our firmware is secure, our components are authentic, and our tools are built to last in the field.
            </p>
          </div>
        </div>

        <div className="bg-[#00FF41]/5 border border-[#00FF41]/20 p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-tight">The Core Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Zap className="w-8 h-8 text-[#00FF41] mx-auto mb-4" />
              <h4 className="text-white font-mono text-sm tracking-widest uppercase mb-2">Efficiency</h4>
              <p className="text-gray-500 text-xs">Fast deployment, intuitive interfaces.</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-[#00FF41] mx-auto mb-4" />
              <h4 className="text-white font-mono text-sm tracking-widest uppercase mb-2">Community</h4>
              <p className="text-gray-500 text-xs">Built for researchers, by researchers.</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-[#00FF41] mx-auto mb-4" />
              <h4 className="text-white font-mono text-sm tracking-widest uppercase mb-2">Reliability</h4>
              <p className="text-gray-500 text-xs">Tools you can trust when it matters most.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
