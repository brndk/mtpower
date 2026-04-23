import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../store';
import { ShoppingCart, ArrowLeft, Check, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useApp();
  const product = products.find(p => p.id === id);

  if (!product) return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center">
      <h2 className="serif text-4xl mb-4">Product Not Found</h2>
      <Link to="/" className="accent text-xs uppercase tracking-widest flex items-center space-x-2">
        <ArrowLeft size={14} />
        <span>Back to Store</span>
      </Link>
    </div>
  );

  return (
    <div className="p-4 md:p-10">
      <Link to="/" className="inline-flex items-center space-x-2 text-white/30 hover:text-accent transition-colors mb-12 text-[10px] uppercase tracking-widest font-bold">
        <ArrowLeft size={14} />
        <span>Return to Selection</span>
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 aspect-square lg:aspect-[4/5] flex items-center justify-center border border-white/5 overflow-hidden group"
        >
          <img 
            src={product.image} 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-95 group-hover:scale-100"
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1594106182463-759c60473528?q=80&w=800';
            }}
          />
        </motion.div>

        {/* Details Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col h-full py-4"
        >
          <div className="accent uppercase tracking-[0.4em] font-bold text-[10px] mb-6">
            Ref. {product.category}
          </div>
          <h1 className="text-5xl md:text-8xl font-sans font-black mb-8 tracking-tighter leading-none border-b border-white/10 pb-8">
            {product.name}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="text-4xl font-mono tracking-tighter text-white font-light">
              ${product.price.toLocaleString()}.00
            </div>
            <div className="flex gap-4">
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40">
                  <Shield size={18} />
               </div>
               <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40">
                  <Check size={18} />
               </div>
            </div>
          </div>
          
          <div className="max-w-xl text-white/60 text-sm md:text-base italic serif leading-relaxed mb-12">
            {product.description}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-16 border-t border-white/5 pt-12">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{spec.label}</span>
                <span className="text-sm font-medium italic serif">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <button 
              onClick={() => addToCart(product)}
              className="w-full gold-gradient text-black font-bold py-6 rounded-none flex items-center justify-center space-x-4 text-xs uppercase tracking-[0.5em] active:scale-[0.99] transition-all"
            >
              <ShoppingCart size={16} />
              <span>Add to Collection</span>
            </button>
            <div className="mt-6 flex justify-between items-center text-[9px] uppercase tracking-[2px] text-white/20 font-bold">
               <span>Secure Transaction</span>
               <span>Worldwide Courier Delivery</span>
               <span>Authenticity Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
