import { Tutorial } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TutorialCardProps {
  tutorial: Tutorial;
}

const TutorialCard = ({ tutorial }: TutorialCardProps) => {
  return (
    <div className="bg-[#121212] border border-white/5 group hover:border-[#00FF41]/20 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tutorial.image} 
          alt={tutorial.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#00FF41] text-black px-2 py-1 text-[10px] font-mono font-bold uppercase">
            {tutorial.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {tutorial.date}</span>
          <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {tutorial.author}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FF41] transition-colors">{tutorial.title}</h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {tutorial.excerpt}
        </p>
        <Link 
          to={`/tutorial/${tutorial.id}`} 
          className="inline-flex items-center text-xs font-mono text-[#00FF41] hover:underline"
        >
          READ DOCUMENTATION <ArrowRight className="w-3 h-3 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default TutorialCard;
