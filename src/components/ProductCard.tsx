import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../store';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card p-4 rounded-none group flex flex-col h-full relative border border-white/5 hover:border-accent transition-all"
    >
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-accent/10 border border-accent/20 accent text-[9px] px-2 py-1 rounded tracking-widest font-bold">
          PRO
        </span>
      </div>

      <Link to={`/product/${product.id}`} className="block relative aspect-square mb-4 bg-white/5 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-100"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1594106182463-759c60473528?q=80&w=800';
          }}
        />
      </Link>
      
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1 overflow-hidden">
          <h3 className="text-sm font-bold uppercase tracking-tighter truncate pr-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </div>
        <p className="text-[10px] text-white/40 mb-4 leading-tight line-clamp-2 italic serif">
          {product.category} — {product.description}
        </p>
        
        <div className="mt-auto flex justify-between items-center bg-white/5 p-3">
          <span className="text-xs font-mono tracking-tight">${product.price.toLocaleString()}</span>
          <button 
            onClick={() => addToCart(product)}
            className="btn-primary"
          >
            Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
};
