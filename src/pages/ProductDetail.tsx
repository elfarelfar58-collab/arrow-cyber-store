import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { ShoppingCart, ShieldCheck, Truck, RefreshCw, ChevronRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'specs' | 'features'>('specs');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl text-white mb-4">Product Not Found</h2>
        <Link to="/" className="text-[#00FF41] hover:underline">Back to Store</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-[10px] font-mono uppercase tracking-widest text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-white">STORE</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-gray-400">{product.category}</span>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-[#00FF41]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-[#121212] border border-white/5 overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#121212] border border-white/5 hover:border-[#00FF41]/50 cursor-pointer overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover opacity-50 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-8">
              <span className="text-[10px] font-mono text-[#00FF41] tracking-widest uppercase mb-2 block">{product.category}</span>
              <h1 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-mono font-bold text-[#00FF41]">${product.price}</span>
                <span className="text-xs font-mono text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                <span className="bg-[#00FF41]/10 text-[#00FF41] px-2 py-1 text-[10px] font-bold">-20%</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-1 cyber-button flex items-center justify-center py-4">
                <ShoppingCart className="w-5 h-5 mr-2" />
                ADD TO ARSENAL
              </button>
              <button className="px-8 py-4 bg-white text-black hover:bg-[#00FF41] transition-colors font-mono text-sm tracking-widest uppercase">
                BUY NOW
              </button>
            </div>

            {/* Product Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 py-8 border-y border-white/5">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#00FF41]" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">1Y WARRANTY</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-[#00FF41]" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">GLOBAL SHIPPING</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5 text-[#00FF41]" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">30D RETURNS</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex border-b border-white/5 mb-6">
                <button 
                  onClick={() => setActiveTab('specs')}
                  className={`pb-4 px-6 text-xs font-mono tracking-widest uppercase transition-colors relative ${activeTab === 'specs' ? 'text-[#00FF41]' : 'text-gray-500'}`}
                >
                  Technical Specs
                  {activeTab === 'specs' && <div className="absolute bottom-0 left-0 w-full h-px bg-[#00FF41]" />}
                </button>
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`pb-4 px-6 text-xs font-mono tracking-widest uppercase transition-colors relative ${activeTab === 'features' ? 'text-[#00FF41]' : 'text-gray-500'}`}
                >
                  Key Features
                  {activeTab === 'features' && <div className="absolute bottom-0 left-0 w-full h-px bg-[#00FF41]" />}
                </button>
              </div>

              <div className="bg-[#121212] p-6 border border-white/5">
                {activeTab === 'specs' ? (
                  <dl className="grid grid-cols-1 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                        <dt className="text-gray-500 font-mono text-xs uppercase">{key}</dt>
                        <dd className="text-white font-mono text-xs">{value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1 h-1 bg-[#00FF41] mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-400 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <Link to="/" className="inline-flex items-center text-xs font-mono text-gray-500 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO INVENTORY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
