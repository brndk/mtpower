import React, { useState } from 'react';
import { useApp } from '../store';
import { Plus, Edit2, Trash2, X, Save, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export const Admin: React.FC = () => {
  const { products, addProduct, removeProduct, updateProduct } = useApp();
  const [isEditing, setIsEditing] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ user: '', pass: '' });
  const [error, setError] = useState('');

  const initialForm: Product = {
    id: Date.now().toString(),
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    specs: [{ label: '', value: '' }]
  };

  const [formData, setFormData] = useState<Product>(initialForm);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.user === 'admin' && loginData.pass === 'admin777') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-smoke border border-white/10 p-8 md:p-12 rounded-3xl w-full max-w-md shadow-2xl"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tighter">RESTRICTED ACCESS</h1>
            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">Username</label>
              <input 
                autoFocus
                type="text"
                value={loginData.user}
                onChange={e => setLoginData({...loginData, user: e.target.value})}
                className="w-full bg-ash border border-white/10 rounded-xl p-4 text-white outline-none focus:border-accent transition-colors"
                placeholder="User ID"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 font-bold">Secret Key</label>
              <input 
                type="password"
                value={loginData.pass}
                onChange={e => setLoginData({...loginData, pass: e.target.value})}
                className="w-full bg-ash border border-white/10 rounded-xl p-4 text-white outline-none focus:border-accent transition-colors"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-500 text-xs text-center font-bold tracking-tight">{error}</p>}
            <button 
              type="submit"
              className="w-full btn-primary py-5 text-xs tracking-[0.4em]"
            >
              Verify Identity
            </button>
          </form>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
             <p className="text-[9px] text-white/20 uppercase tracking-widest">MT Power Audio Management Portal</p>
          </div>
        </motion.div>
      </div>
    );
  }

  const handleEdit = (product: Product) => {
    setIsEditing(product);
    setFormData(product);
  };

  const handleSave = () => {
    if (isEditing) {
      updateProduct(formData);
      setIsEditing(null);
    } else {
      addProduct({ ...formData, id: Date.now().toString() });
      setIsAdding(false);
    }
    setFormData(initialForm);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      removeProduct(id);
    }
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Inventory Management</h1>
          <p className="text-white/50">Manage your premium product catalog.</p>
        </div>
        <button 
          onClick={() => { setIsAdding(true); setFormData(initialForm); }}
          className="bg-gold text-ash px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:scale-105 transition-all"
        >
          <Plus size={20} />
          <span>New Product</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {products.map(product => (
          <div key={product.id} className="glass-card p-6 rounded-2xl flex items-center space-x-6">
            <img src={product.image} className="w-24 h-24 rounded-xl object-cover border border-white/10" alt={product.name} />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-gold font-bold">${product.price.toLocaleString()}</p>
              <div className="text-xs text-white/40 uppercase mt-2">{product.category}</div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => handleEdit(product)}
                className="p-3 bg-white/5 hover:bg-gold hover:text-ash rounded-xl transition-all text-white/60"
              >
                <Edit2 size={18} />
              </button>
              <button 
                onClick={() => handleDelete(product.id)}
                className="p-3 bg-white/5 hover:bg-red-500/80 rounded-xl transition-all text-white/60"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {(isEditing || isAdding) && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsEditing(null); setIsAdding(false); }}
              className="absolute inset-0 bg-ash/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-smoke border border-white/10 w-full max-w-2xl rounded-3xl p-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                <button onClick={() => { setIsEditing(null); setIsAdding(false); }} className="p-2 hover:bg-white/10 rounded-full">
                  <X />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Name</label>
                  <input 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-ash border border-white/10 rounded-xl p-4 focus:border-gold outline-none text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Price ($)</label>
                    <input 
                      type="number"
                      value={formData.price}
                      onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="w-full bg-ash border border-white/10 rounded-xl p-4 focus:border-gold outline-none text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Category</label>
                    <input 
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-ash border border-white/10 rounded-xl p-4 focus:border-gold outline-none text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Image URL</label>
                  <div className="flex space-x-2">
                    <input 
                      value={formData.image}
                      onChange={e => setFormData({ ...formData, image: e.target.value })}
                      className="flex-1 bg-ash border border-white/10 rounded-xl p-4 focus:border-gold outline-none text-white"
                    />
                    <div className="w-14 h-14 rounded-xl border border-white/10 overflow-hidden flex-shrink-0">
                      {formData.image ? <img src={formData.image} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-white/20"><ImageIcon /></div>}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Description</label>
                  <textarea 
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-ash border border-white/10 rounded-xl p-4 focus:border-gold outline-none text-white resize-none"
                  />
                </div>
                
                <button 
                  onClick={handleSave}
                  className="w-full gold-gradient text-ash font-bold py-5 rounded-2xl flex items-center justify-center space-x-2 text-lg"
                >
                  <Save size={20} />
                  <span>{isEditing ? 'Save Changes' : 'Publish Product'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
