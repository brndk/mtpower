import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../store';

export const FloatingCTA: React.FC = () => {
  const { cart } = useApp();
  const location = useLocation();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Hide on cart and admin pages
  if (['/cart', '/admin'].includes(location.pathname)) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <Link 
          to="/cart"
          className="relative flex items-center gap-3 bg-gold text-ash px-6 py-4 rounded-full font-bold shadow-2xl shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 overflow-hidden"
        >
          {/* Pulse Effect */}
          <span className="absolute inset-0 bg-white/20 animate-ping rounded-full opacity-20 pointer-events-none"></span>
          
          <ShoppingCart size={20} className="relative z-10" />
          <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-black">
            {cartCount > 0 ? `Checkout (${cartCount})` : 'Купити зараз'}
          </span>

          {/* Animated Background Gradient */}
          <motion.div 
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </Link>

        {/* Floating tooltip/hint on hover */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <div className="bg-black/90 text-white text-[10px] uppercase tracking-widest px-3 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
            Premium Audio Experience
          </div>
          <div className="w-2 h-2 bg-black/90 border-r border-b border-white/10 rotate-45 mx-auto mt-[-4px] ml-auto mr-8"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
