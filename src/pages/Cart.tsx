import React from 'react';
import { useApp } from '../store';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useApp();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center pt-24 text-center px-4">
        <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-gold/30 mb-8">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-4xl font-display font-bold mb-4">Your bag is empty</h2>
        <p className="text-white/50 mb-8 max-w-sm">Discover our signature collection and find the perfect sound for your space.</p>
        <Link to="/" className="gold-gradient text-ash px-12 py-4 rounded-full font-bold text-lg">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-display font-bold mb-12">Review Your Bag</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <motion.div 
              layout
              key={item.id} 
              className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-8"
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover" 
                  alt={item.name} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1594106182463-759c60473528?q=80&w=800';
                  }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <button onClick={() => removeFromCart(item.id)} className="text-white/30 hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="text-gold font-bold mb-4">${item.price.toLocaleString()}</p>
                
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ash transition-all">
                    <Minus size={14} />
                  </button>
                  <span className="text-lg font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-ash transition-all">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="text-right flex flex-col justify-end">
                <p className="text-xl font-bold">${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="glass-card p-8 rounded-3xl sticky top-28">
            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-white/50">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Shipping</span>
                <span className="text-white">Complimentary</span>
              </div>
              <div className="flex justify-between text-white/50 border-t border-white/5 pt-4">
                <span>Total</span>
                <span className="text-2xl font-bold text-gold">${subtotal.toLocaleString()}</span>
              </div>
            </div>
            
            <button className="w-full gold-gradient text-ash font-bold py-5 rounded-2xl flex items-center justify-center space-x-2 text-lg active:scale-[0.98] transition-all mb-6">
              <span>Secure Checkout</span>
              <ArrowRight size={20} />
            </button>
            
            <div className="space-y-4 text-xs text-white/30 text-center">
              <p>Financing options available at checkout.</p>
              <button onClick={clearCart} className="hover:text-white transition-colors underline">Empty Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
