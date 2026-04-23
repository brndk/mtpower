import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { INITIAL_PRODUCTS } from './constants';

interface AppContextType {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateProduct: (product: Product) => void;
  clearCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('mt_products');
    let parsed: Product[] = saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    
    // Migration: Update Elegance Tower S7 to Elegance - 2 Front
    if (parsed && parsed.length > 0 && parsed[0].id === '1' && (parsed[0].name === 'Elegance Tower S7' || parsed[0].image.includes('pult.ru') || parsed[0].image.includes('unsplash.com'))) {
      parsed[0] = INITIAL_PRODUCTS[0];
    }
    
    return parsed;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('mt_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('mt_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('mt_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const removeProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const clearCart = () => setCart([]);

  return (
    <AppContext.Provider value={{ 
      products, cart, addToCart, removeFromCart, updateQuantity, 
      addProduct, removeProduct, updateProduct, clearCart 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
