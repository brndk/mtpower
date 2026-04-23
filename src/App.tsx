/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './store';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Admin } from './pages/Admin';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex min-h-screen bg-ash text-white">
          {/* Sidebar */}
          <aside className="hidden lg:flex w-64 border-r border-white/10 flex-col p-8 bg-black sticky top-0 h-screen">
            <Link to="/" className="mb-12">
              <h1 className="text-2xl font-bold tracking-tighter leading-tight uppercase">
                MT POWER<br/><span className="accent serif lowercase italic">AUDIO</span>
              </h1>
            </Link>
            
            <nav className="space-y-6 text-sm uppercase tracking-[0.2em]">
              <Link to="/" className="block accent font-bold">Shop</Link>
              <Link to="/cart" className="block text-white/50 hover:text-white transition-colors">Bag</Link>
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-[10px] text-white/30 uppercase tracking-[3px] mb-4">Newsletter</p>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Email" 
                  className="bg-transparent border-b border-white/20 pb-2 text-xs w-full outline-none focus:border-white transition-colors"
                />
                <button className="absolute right-0 top-0 text-xs accent">&rarr;</button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
             <Navbar />
             <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
             </main>
             
             <footer className="h-16 bg-accent flex items-center justify-between px-6 md:px-10 text-black overflow-hidden mt-12">
                <div className="flex gap-8 items-center font-bold text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap">
                  <span>Hot Deal: Buy 2 Studio X1, Get 1 Sub 50% Off</span>
                  <Link to="/" className="underline cursor-pointer italic">Claim Now</Link>
                </div>
             </footer>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

