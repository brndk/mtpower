import React from 'react';
import { useApp } from '../store';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { Headphones, Shield, Zap, Globe } from 'lucide-react';

export const Home: React.FC = () => {
  const { products } = useApp();

  return (
    <div className="p-4 md:p-10 flex flex-col h-full min-h-screen">
      {/* Intro Section */}
      <section className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="accent uppercase tracking-[0.3em] font-bold text-[10px] mb-4 block underline underline-offset-4">Магазин High Fidelity</span>
          <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tighter leading-none mb-6">
            ЧИСТИЙ ЗВУК<br/><span className="accent serif italic font-normal">ІНЖЕНЕРІЯ</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl italic serif">
            Створена за допомогою майстерно відібраного шпону та найсучаснішої акустичної інженерії, наша колекція забезпечує неперевершений звуковий досвід.
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section id="store" className="flex-1">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
           <div className="flex gap-4 md:gap-8 text-[11px] uppercase tracking-widest text-white/60">
              <span className="text-white font-bold underline underline-offset-8 decoration-accent">Увесь асортимент</span>
              <span className="cursor-pointer hover:text-white transition-colors">Акустика</span>
              <span className="cursor-pointer hover:text-white transition-colors">Компоненти</span>
           </div>
           <div className="text-[10px] uppercase text-white/30 tracking-tighter font-mono">
              Відображається {products.length} одиниць
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Seasonal Promo */}
      <section className="mt-24 mb-12">
        <div className="border border-accent p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-accent/5">
           <div className="max-w-xl">
              <h2 className="serif text-4xl md:text-6xl mb-6">Серія Legacy</h2>
              <p className="text-white/60 text-sm italic font-serif leading-relaxed">
                Наш оригінальний дизайн 1996 року, переосмислений для цифрової епохи. Внутрішня проводка з чистого срібла та відполіровані вручну кабінети.
              </p>
           </div>
           <div className="flex flex-col items-center md:items-end gap-6 h-full">
              <div className="text-4xl font-mono tracking-tighter">$4,500.00</div>
              <button className="gold-gradient text-black px-10 py-4 font-bold uppercase tracking-[4px] text-xs hover:scale-105 active:scale-95 transition-all">
                Попереднє замовлення
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};
