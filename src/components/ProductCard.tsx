import { Product } from '../types';
import { ShoppingCart, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group cyber-card">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Link to={`/product/${product.id}`} className="p-3 bg-white text-black rounded-full hover:bg-[#00FF41] transition-colors">
            <Eye className="w-5 h-5" />
          </Link>
          <button className="p-3 bg-[#00FF41] text-black rounded-full hover:bg-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-[#00FF41]/30">
          <span className="text-[10px] font-mono text-[#00FF41] tracking-widest uppercase">{product.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FF41] transition-colors">{product.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#00FF41] font-mono font-bold">${product.price}</span>
          <Link to={`/product/${product.id}`} className="text-xs font-mono text-gray-400 flex items-center hover:text-white transition-colors">
            DETAILS <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00FF41]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00FF41]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ProductCard;
