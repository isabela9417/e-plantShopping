import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6">Our Story</h2>
        <div className="h-px w-24 bg-emerald-500 mx-auto mb-8" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" 
            alt="Nursery" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-stone-600 leading-relaxed">
            Welcome to <span className="text-emerald-700 font-medium">Paradise Nursery</span>, where we believe that every home deserves a touch of nature's magic. Founded in 2024, our mission has been to curate the finest collection of aromatic and medicinal plants.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Our team of passionate botanists works tirelessly to ensure that every plant we ship is healthy, vibrant, and ready to thrive in its new home. Whether you're looking for the calming scent of Lavender or the healing touch of Aloe Vera, we have something special for you.
          </p>
        </div>
      </div>

      <div className="bg-emerald-900 text-white rounded-3xl p-12 text-center">
        <h3 className="text-2xl font-serif mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <div className="text-3xl mb-4">🌿</div>
            <h4 className="font-bold mb-2">Expertly Grown</h4>
            <p className="text-emerald-200 text-sm">Nurtured by professionals with decades of experience.</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-4">🚚</div>
            <h4 className="font-bold mb-2">Safe Delivery</h4>
            <p className="text-emerald-200 text-sm">Specially designed packaging to protect your plants.</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-4">💚</div>
            <h4 className="font-bold mb-2">Lifetime Support</h4>
            <p className="text-emerald-200 text-sm">We're here to help your garden grow, forever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
