import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="background-image relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block mb-8 animate-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Botanical Excellence
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-serif italic text-white mb-8 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Paradise Nursery
        </h1>
        
        <div className="h-px w-24 bg-emerald-500/50 mx-auto mb-10 animate-in zoom-in duration-1000 delay-500" />
        
        <p className="text-xl md:text-2xl text-stone-300 font-light mb-14 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          Where every leaf tells a story. Discover our curated collection of <span className="text-white font-normal italic">aromatic</span> and <span className="text-white font-normal italic">medicinal</span> wonders.
        </p>
        
        <button 
          onClick={onStart}
          className="group relative px-12 py-5 bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-500 rounded-full text-lg font-medium tracking-widest uppercase overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>

      <div className="absolute bottom-12 left-12 text-white/20 text-[10px] tracking-[0.5em] uppercase vertical-rl rotate-180 font-bold hidden md:block">
        Nature's Pharmacy — Est. 2024
      </div>
      
      <div className="absolute top-12 right-12 text-white/20 text-[10px] tracking-[0.5em] uppercase vertical-rl font-bold hidden md:block">
        Scroll to Explore
      </div>
    </div>
  );
};

export default LandingPage;
