import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import { ShoppingCart, Leaf } from 'lucide-react';
import './App.css';

export default function App() {
  const [view, setView] = useState('landing');
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleGetStartedClick = () => {
    setView('products');
  };

  if (view === 'landing') {
    return <LandingPage onStart={handleGetStartedClick} />;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setView('landing')}
          >
            <div className="p-2 bg-emerald-600 rounded-xl text-white group-hover:rotate-12 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-stone-900 leading-none">Paradise</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Nursery</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => setView('products')}
              className={`text-sm font-medium transition-colors ${view === 'products' ? 'text-emerald-600' : 'text-stone-600 hover:text-stone-900'}`}
            >
              Plants
            </button>
            
            <button 
              onClick={() => setView('about')}
              className={`text-sm font-medium transition-colors ${view === 'about' ? 'text-emerald-600' : 'text-stone-600 hover:text-stone-900'}`}
            >
              About Us
            </button>
            
            <button 
              onClick={() => setView('cart')}
              className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="animate-in fade-in duration-700">
        {view === 'products' && <ProductList />}
        {view === 'about' && <AboutUs />}
        {view === 'cart' && <CartItem onContinueShopping={() => setView('products')} />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-emerald-500" />
            <span className="font-serif italic text-xl">Paradise Nursery</span>
          </div>
          <p className="text-stone-500 text-sm">© 2024 Paradise Nursery. All rights reserved.</p>
          <div className="flex gap-6 text-stone-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
