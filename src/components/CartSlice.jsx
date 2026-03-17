import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      return total + (cost * item.quantity);
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-stone-300" />
        </div>
        <h2 className="text-2xl font-serif text-stone-800 mb-2">Your cart is empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't added any botanical wonders yet.</p>
        <button 
          onClick={onContinueShopping}
          className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-serif text-stone-900">Your Shopping Cart</h2>
        <button 
          onClick={onContinueShopping}
          className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={item.name} className="flex gap-6 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  className="w-full h-full object-cover" 
                  src={item.image} 
                  alt={item.name} 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-grow flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-stone-900">{item.name}</h3>
                    <p className="text-stone-500 text-sm">{item.cost} each</p>
                  </div>
                  <button 
                    onClick={() => handleRemove(item)}
                    className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3 bg-stone-50 p-1 rounded-lg border border-stone-200">
                    <button 
                      onClick={() => handleDecrement(item)}
                      className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-stone-600"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium text-stone-900">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncrement(item)}
                      className="p-1 hover:bg-white hover:shadow-sm rounded transition-all text-stone-600"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Subtotal</p>
                    <p className="text-lg font-bold text-stone-900">
                      ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-stone-900 text-white rounded-3xl p-8 sticky top-8">
            <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-stone-400">
                <span>Items ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
                <span>${calculateTotalAmount().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Shipping</span>
                <span className="text-emerald-400">Free</span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${calculateTotalAmount().toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Checkout functionality coming soon!')}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20"
            >
              Checkout Now
            </button>
            
            <p className="text-center text-stone-500 text-xs mt-6">
              Secure checkout powered by Paradise Nursery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
