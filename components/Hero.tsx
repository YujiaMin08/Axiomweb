import React, { useState, useEffect } from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';

// Animation Slide Data
const SLIDES = [
  {
    id: 'geometry',
    fig: 'FIG. 1.2',
    label: 'a',
    title: 'The Geometry of Thought',
    tags: ['Philosophy', 'Math'],
    visual: (
      <div className="w-56 h-56 border border-axiom-300 rounded-full flex items-center justify-center relative animate-spin-slow">
        <div className="absolute inset-0 border border-axiom-200 rotate-45"></div>
        <div className="w-40 h-40 border border-axiom-400 rotate-45 transition-all duration-1000 ease-in-out"></div>
        <div className="w-40 h-40 border border-axiom-300 absolute transition-all duration-1000 ease-in-out hover:scale-110"></div>
        <div className="w-2 h-2 bg-accent-orange rounded-full absolute top-0 -translate-y-1 shadow-[0_0_10px_rgba(240,154,117,0.5)]"></div>
      </div>
    )
  },
  {
    id: 'chemistry',
    fig: 'FIG. 4.8',
    label: 'C',
    title: 'Crystalline Structures',
    tags: ['Chemistry', 'Matter'],
    visual: (
      <div className="relative w-48 h-48 flex items-center justify-center">
         <div className="absolute inset-0 flex items-center justify-center animate-[spin_12s_linear_infinite]">
            <div className="w-24 h-24 border border-axiom-400 transform rotate-45 flex items-center justify-center">
               <div className="w-16 h-16 border border-axiom-300"></div>
            </div>
            <div className="absolute w-24 h-24 border border-axiom-400 transform rotate-[22.5deg]"></div>
            <div className="absolute w-2 h-2 bg-axiom-800 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1"></div>
            <div className="absolute w-2 h-2 bg-axiom-800 rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1"></div>
            <div className="absolute w-2 h-2 bg-axiom-800 rounded-full left-0 top-1/2 -translate-x-1 -translate-y-1/2"></div>
            <div className="absolute w-2 h-2 bg-axiom-800 rounded-full right-0 top-1/2 translate-x-1 -translate-y-1/2"></div>
         </div>
         <div className="w-4 h-4 bg-axiom-200 rounded-full border border-axiom-400 z-10"></div>
      </div>
    )
  },
  {
    id: 'physics',
    fig: 'FIG. 2.4',
    label: 'β',
    title: 'Harmonic Resonance',
    tags: ['Physics', 'Music'],
    visual: (
      <div className="w-full h-40 flex items-center justify-center relative">
         {/* Sine Waves */}
         <svg viewBox="0 0 200 100" className="w-64 h-32 stroke-axiom-800 fill-none">
            <path d="M0,50 Q25,0 50,50 T100,50 T150,50 T200,50" strokeWidth="1" className="opacity-30" />
            <path d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50" strokeWidth="1" className="opacity-60" />
            <path d="M0,50 Q25,100 50,50 T100,50 T150,50 T200,50" strokeWidth="1.5" className="stroke-accent-orange" />
         </svg>
         {/* Pendulum */}
         <div className="absolute top-0 left-1/2 w-[1px] h-24 bg-axiom-400 origin-top animate-[ping_3s_ease-in-out_infinite_direction-alternate]"></div>
         <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 bg-axiom-800 rounded-full"></div>
      </div>
    )
  },
  {
    id: 'astronomy',
    fig: 'FIG. 9.1',
    label: 'Ω',
    title: 'Orbital Dynamics',
    tags: ['Space', 'Gravity'],
    visual: (
      <div className="relative w-56 h-40 flex items-center justify-center">
         {/* Central Body */}
         <div className="w-12 h-12 rounded-full border border-axiom-300 bg-axiom-50 z-10 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-axiom-100"></div>
         </div>
         
         {/* Elliptical Orbits */}
         <div className="absolute w-full h-full border border-axiom-200 rounded-[100%] rotate-[-15deg] opacity-60"></div>
         <div className="absolute w-[80%] h-[60%] border border-axiom-300 rounded-[100%] rotate-[-15deg]"></div>
         
         {/* Orbiting Body */}
         <div className="absolute w-full h-full animate-[spin_4s_linear_infinite] rounded-[100%] rotate-[-15deg]">
             <div className="absolute top-0 left-1/2 w-3 h-3 bg-axiom-800 rounded-full -translate-x-1/2 -translate-y-1.5 shadow-sm"></div>
         </div>
      </div>
    )
  },
  {
    id: 'biology',
    fig: 'FIG. 3.1',
    label: 'x',
    title: 'Cellular Automata',
    tags: ['Biology', 'Logic'],
    visual: (
       <div className="relative w-48 h-48 grid grid-cols-4 grid-rows-4 gap-2">
          {[...Array(16)].map((_, i) => (
             <div 
               key={i} 
               className={`rounded-sm border border-axiom-200 transition-all duration-700 ${
                 [0, 2, 5, 8, 10, 15].includes(i) ? 'bg-axiom-800 scale-90' : 'bg-transparent scale-100'
               }`}
             ></div>
          ))}
          <div className="absolute inset-0 border border-axiom-300 rounded-full scale-125 opacity-20 animate-pulse"></div>
       </div>
    )
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 3000); // Switch every 3 seconds (faster)

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToExplore = () => {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Classical Geometry */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[800px] h-[800px] opacity-10 pointer-events-none -z-10">
         {/* Concentric Circles / Planetary Orbits */}
         <div className="absolute inset-0 border border-axiom-900 rounded-full animate-spin-slow"></div>
         <div className="absolute inset-[15%] border border-axiom-400 rounded-full animate-reverse-spin-slow border-dashed"></div>
         <div className="absolute inset-[30%] border border-axiom-300 rounded-full"></div>
         
         {/* Axis Lines */}
         <div className="absolute top-0 bottom-0 left-1/2 w-px bg-axiom-300"></div>
         <div className="absolute left-0 right-0 top-1/2 h-px bg-axiom-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="flex items-center gap-4">
             {/* Brand Name */}
             <span className="font-display font-bold text-3xl md:text-4xl text-axiom-900 tracking-tight lowercase">axiom</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-axiom-900 leading-[0.95] tracking-tight">
            Where <br/> understanding <br/> <span className="font-serif italic text-axiom-600 block mt-2">takes form.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-axiom-600 max-w-lg leading-relaxed font-sans border-l border-axiom-200 pl-6">
            Axiom transforms abstract concepts into dynamic, tangible learning experiences tailored for your curious mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={scrollToExplore}
              className="bg-axiom-900 text-white px-8 py-4 rounded-[2px] font-serif italic text-lg hover:bg-axiom-800 transition-all shadow-md flex items-center justify-center gap-3"
            >
              Join Waitlist
            </button>
            <button 
              onClick={scrollToExplore}
              className="group bg-transparent border border-axiom-300 text-axiom-800 px-8 py-4 rounded-[2px] font-medium hover:border-axiom-900 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-axiom-400 group-hover:text-axiom-900 transition-colors" />
              See how it works
            </button>
          </div>
        </div>

        {/* Right Visual - Interactive Aesthetic Card Switcher */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
          <div className="absolute top-10 right-10 w-full max-w-md">
             
             {/* The Card Container */}
             <div 
                className="relative h-[500px] w-full cursor-pointer group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setCurrentIndex((prev) => (prev + 1) % SLIDES.length)}
             >
                {SLIDES.map((slide, index) => {
                  const isActive = index === currentIndex;
                  
                  // Calculate animation states
                  // If it's active: full opacity, correct rotation
                  // If it's not active: fade out, slight scale down
                  const activeClasses = "opacity-100 rotate-2 translate-y-0 z-20 scale-100";
                  const inactiveClasses = "opacity-0 rotate-0 translate-y-4 z-10 scale-95 pointer-events-none";

                  return (
                    <div 
                      key={slide.id}
                      className={`
                        absolute inset-0 transition-all duration-700 ease-in-out
                        bg-white/90 backdrop-blur-sm rounded-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
                        p-4 border border-white hover:rotate-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                        ${isActive ? activeClasses : inactiveClasses}
                      `}
                    >
                       {/* Inner border frame */}
                       <div className="border border-axiom-100 p-1 h-full">
                          <div className="bg-axiom-50 h-full w-full border border-axiom-100 flex flex-col p-8 relative overflow-hidden">
                              
                              {/* Background Grid */}
                              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                              
                              {/* Top Meta Data */}
                              <div className="flex justify-between items-start z-10 relative mb-8">
                                <div className="text-xs font-mono text-axiom-400 tracking-widest">{slide.fig}</div>
                                <div className="w-8 h-8 rounded-full border border-axiom-200 flex items-center justify-center font-serif italic text-axiom-600 bg-white/50">
                                  {slide.label}
                                </div>
                              </div>

                              {/* Main Visual */}
                              <div className="flex-grow flex items-center justify-center z-10 relative">
                                {slide.visual}
                              </div>

                              {/* Bottom Text */}
                              <div className="mt-auto space-y-3 z-10 relative">
                                <h3 className="font-display text-4xl text-axiom-900 leading-tight">
                                  {slide.title.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                      {word} {i === 1 && <br/>}
                                    </React.Fragment>
                                  ))}
                                </h3>
                              </div>
                          </div>
                       </div>

                       {/* Tags - Animated */}
                       {slide.tags.map((tag, i) => (
                         <div 
                           key={tag}
                           className={`
                             absolute bg-[#F5F1E8] px-4 py-1.5 shadow-sm border border-[#E5DACE] flex gap-2 items-center
                             transition-all duration-1000 delay-300
                             ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                           `}
                           style={{
                             bottom: i === 0 ? '-1.25rem' : '-2rem',
                             left: i === 0 ? '2rem' : 'auto',
                             right: i === 0 ? 'auto' : '4rem',
                             transform: isActive 
                                ? `rotate(${i === 0 ? '-2deg' : '3deg'}) translateY(0)` 
                                : `rotate(0) translateY(10px)`
                           }}
                         >
                            <span className="font-serif italic text-axiom-800 text-sm">{tag}</span>
                         </div>
                       ))}
                    </div>
                  );
                })}
             </div>

             {/* Progress / Navigation Dots */}
             <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-3">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentIndex ? 'w-8 bg-axiom-800' : 'w-1.5 bg-axiom-200 hover:bg-axiom-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};
