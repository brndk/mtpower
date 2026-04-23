import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Settings } from 'lucide-react';
import { useApp } from '../store';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { cart } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <nav className="sticky top-0 z-50 bg-ash/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-full px-6 md:px-10 h-20 flex items-center justify-between">
        <div className="flex gap-4 md:gap-8 items-center overflow-hidden">
          <Link to="/" className="lg:hidden text-lg font-bold tracking-tighter text-white">MT <span className="accent serif italic">A</span></Link>
          <div className="hidden sm:block h-4 w-[1px] bg-white/20 lg:hidden"></div>
          <h2 className="serif text-sm md:text-xl whitespace-nowrap">Professional Sound Solutions</h2>
        </div>

        <div className="flex gap-4 md:gap-8 items-center">
          <div className="hidden md:block text-right">
            <p className="text-[10px] uppercase text-white/40 tracking-wider">Shopping Bag</p>
            <p className="text-xs font-bold">{cartCount} Items — ${cartTotal.toLocaleString()}</p>
          </div>
          
          <Link to="/cart" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:border-accent transition-colors group">
            <span className="group-hover:scale-110 transition-transform text-lg">🛒</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white/70 hover:text-gold">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-smoke border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-widest text-accent">Store</Link>
              <Link to="/cart" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white">Cart</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
