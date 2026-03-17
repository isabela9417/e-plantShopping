import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { ShoppingCart, Leaf, Wind, HeartPulse } from 'lucide-react';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Aromatic Plants",
      icon: <Wind className="w-5 h-5" />,
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?auto=format&fit=crop&w=800&q=80", description: "Calming scent for relaxation.", cost: "$15" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1534710962475-4a2aa050239b?auto=format&fit=crop&w=800&q=80", description: "Sweet fragrance that lingers.", cost: "$20" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=80", description: "Invigorating aroma for your kitchen.", cost: "$12" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80", description: "Fresh and cooling scent.", cost: "$10" }
      ]
    },
    {
      category: "Medicinal Plants",
      icon: <HeartPulse className="w-5 h-5" />,
      plants: [
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80", description: "Healing properties for skin.", cost: "$12" },
        { name: "Echinacea", image: "https://images.unsplash.com/photo-1588531897513-1c3ab5235030?auto=format&fit=crop&w=800&q=80", description: "Boosts your immune system naturally.", cost: "$18" },
        { name: "Calendula", image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80", description: "Soothing for minor skin irritations.", cost: "$14" },
        { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1615485240384-552e40076c14?auto=format&fit=crop&w=800&q=80", description: "Reduces stress and anxiety.", cost: "$16" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (name) => cartItems.some(item => item.name === name);

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Leaf className="w-3 h-3" />
            Our Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-4">Botanical Wonders</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Carefully selected plants to bring life, scent, and healing to your home sanctuary.</p>
        </header>

        {plantsArray.map((category, index) => (
          <section key={index} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-stone-200">
                {category.icon}
              </div>
              <h3 className="text-2xl font-serif text-stone-800">{category.category}</h3>
              <div className="flex-grow h-px bg-stone-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.plants.map((plant, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-stone-900 shadow-sm">
                      {plant.cost}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-medium text-stone-900 mb-2">{plant.name}</h4>
                    <p className="text-stone-500 text-sm mb-6 line-clamp-2">{plant.description}</p>
                    
                    <button 
                      disabled={isAdded(plant.name)}
                      onClick={() => handleAddToCart(plant)}
                      className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-medium ${
                        isAdded(plant.name) 
                        ? "bg-stone-100 text-stone-400 cursor-not-allowed" 
                        : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200"
                      }`}
                    >
                      {isAdded(plant.name) ? (
                        "Added to Cart"
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;