import { tutorials } from '../data/mockData';
import TutorialCard from '../components/TutorialCard';
import { Search, Filter, BookOpen } from 'lucide-react';

const Tutorials = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[#00FF41] mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-mono text-xs tracking-widest uppercase">Knowledge Base</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Field <span className="text-[#00FF41]">Documentation</span></h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Technical guides, setup procedures, and offensive security methodologies for security professionals.
            </p>
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search tutorials..." 
                className="bg-[#121212] border border-white/10 pl-10 pr-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-[#00FF41] w-64"
              />
            </div>
            <button className="p-2 border border-white/10 text-gray-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative h-[400px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Featured Tutorial"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
              <span className="bg-[#00FF41] text-black px-3 py-1 text-[10px] font-mono font-bold uppercase mb-4 inline-block">Featured Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Advanced WiFi Reconnaissance: Master the Marauder</h2>
              <p className="text-gray-300 text-sm md:text-base mb-6 font-light leading-relaxed">
                Step-by-step guide on using the ESP32 Marauder for wardriving and passive packet collection in high-density urban environments.
              </p>
              <button className="cyber-button">Read Full Briefing</button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
          {/* Repeat some for visual fill */}
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id + '-2'} tutorial={tutorial} />
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center space-x-2 font-mono text-xs">
          <button className="w-10 h-10 border border-[#00FF41] text-[#00FF41] flex items-center justify-center bg-[#00FF41]/10">01</button>
          <button className="w-10 h-10 border border-white/10 text-gray-500 hover:border-[#00FF41]/50 hover:text-white flex items-center justify-center">02</button>
          <button className="w-10 h-10 border border-white/10 text-gray-500 hover:border-[#00FF41]/50 hover:text-white flex items-center justify-center">03</button>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
