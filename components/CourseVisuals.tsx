import React from 'react';

// Common style constants
const STROKE_COLOR = "stroke-axiom-800";
const FILL_COLOR = "fill-axiom-800";
const ACCENT_COLOR = "stroke-axiom-500";

// Helper for wrapper to ensure consistent sizing
const VisualWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full h-full flex items-center justify-center relative select-none">
    {children}
  </div>
);

export const getCourseVisual = (id: string) => {
  switch (id) {
    case '1': // Coffee
      return (
        <VisualWrapper>
           <div className="relative w-16 h-16 flex flex-col items-center justify-end pb-2">
              {/* Steam */}
              <div className="absolute top-0 flex gap-2 opacity-60">
                <div className="w-[2px] h-6 bg-axiom-800 rounded-full animate-[float-up_2s_infinite]"></div>
                <div className="w-[2px] h-8 bg-axiom-800 rounded-full animate-[float-up_2.5s_infinite_delay-100]"></div>
                <div className="w-[2px] h-5 bg-axiom-800 rounded-full animate-[float-up_2.2s_infinite_delay-200]"></div>
              </div>
              {/* Cup */}
              <div className="w-12 h-8 border-2 border-axiom-800 rounded-b-xl relative bg-white">
                 <div className="absolute top-1 -right-3 w-3 h-4 border-2 border-axiom-800 rounded-r-md"></div>
              </div>
              {/* Saucer */}
              <div className="w-14 h-[2px] bg-axiom-800 mt-1 rounded-full"></div>
           </div>
           <style>{`
             @keyframes float-up {
               0% { transform: translateY(5px); opacity: 0; }
               50% { opacity: 1; }
               100% { transform: translateY(-10px); opacity: 0; }
             }
           `}</style>
        </VisualWrapper>
      );
    
    case '2': // Newton's First Law (Inertia)
      return (
        <VisualWrapper>
          <div className="relative w-full h-20 flex items-center justify-center overflow-hidden">
             {/* Floor */}
             <div className="absolute bottom-4 left-0 right-0 h-[1px] bg-axiom-400"></div>
             {/* Moving Object */}
             <div className="w-10 h-10 border-2 border-axiom-800 bg-axiom-50 flex items-center justify-center animate-[slide-across_4s_linear_infinite]">
                <div className="w-2 h-2 bg-axiom-800 rounded-full"></div>
             </div>
             {/* Speed lines */}
             <div className="absolute right-10 top-1/2 w-8 h-[1px] bg-axiom-300 animate-[wind_1s_linear_infinite]"></div>
          </div>
          <style>{`
             @keyframes slide-across {
               0% { transform: translateX(-100px); }
               100% { transform: translateX(100px); }
             }
             @keyframes wind {
               0% { transform: translateX(0); opacity: 1; }
               100% { transform: translateX(-20px); opacity: 0; }
             }
          `}</style>
        </VisualWrapper>
      );

    case '3': // Pendulum
      return (
        <VisualWrapper>
          <div className="relative w-20 h-20 flex justify-center">
             {/* Anchor */}
             <div className="absolute top-0 w-2 h-2 bg-axiom-800 rounded-full z-10"></div>
             {/* Swing */}
             <div className="origin-top animate-[swing_3s_ease-in-out_infinite]">
                <div className="w-[1px] h-14 bg-axiom-800 mx-auto"></div>
                <div className="w-6 h-6 border-2 border-axiom-800 rounded-full bg-axiom-100 -mt-1 mx-auto shadow-sm"></div>
             </div>
          </div>
          <style>{`
             @keyframes swing {
               0%, 100% { transform: rotate(25deg); }
               50% { transform: rotate(-25deg); }
             }
           `}</style>
        </VisualWrapper>
      );

    case '4': // Chemical Reaction Speed (Temp)
      return (
        <VisualWrapper>
           <div className="flex gap-4">
              {/* Cold */}
              <div className="w-12 h-16 border border-axiom-300 rounded-sm relative overflow-hidden bg-axiom-50/50">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-axiom-600 rounded-full animate-[bounce_2s_infinite]"></div>
                    <div className="w-1.5 h-1.5 bg-axiom-600 rounded-full animate-[bounce_3s_infinite_delay-100] absolute top-4 left-2"></div>
                 </div>
                 <div className="absolute bottom-0 w-full text-[8px] text-center bg-axiom-200">COLD</div>
              </div>
              {/* Hot */}
              <div className="w-12 h-16 border border-axiom-800 rounded-sm relative overflow-hidden bg-white">
                 <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                       <div key={i} className="absolute w-1.5 h-1.5 bg-axiom-800 rounded-full animate-[ping_0.8s_linear_infinite]"
                            style={{
                              top: `${Math.random() * 80}%`,
                              left: `${Math.random() * 80}%`,
                              animationDelay: `${Math.random()}s`
                            }}
                       ></div>
                    ))}
                 </div>
                 <div className="absolute bottom-0 w-full text-[8px] text-center bg-axiom-800 text-white">HOT</div>
              </div>
           </div>
        </VisualWrapper>
      );

    case '5': // Muscle Fatigue (Battery/Energy)
      return (
        <VisualWrapper>
           <div className="relative w-16 h-8 border-2 border-axiom-800 rounded-md p-1 flex items-center gap-1">
              <div className="absolute -right-2 top-2 w-1 h-4 bg-axiom-800 rounded-r-sm"></div>
              {/* Bars draining */}
              <div className="h-full bg-axiom-800 flex-1 animate-[drain_4s_steps(4)_infinite]"></div>
              <div className="h-full bg-axiom-800 flex-1 animate-[drain_4s_steps(4)_infinite]"></div>
              <div className="h-full bg-axiom-800 flex-1 animate-[drain_4s_steps(4)_infinite]"></div>
              <div className="h-full bg-axiom-800 flex-1 animate-[drain_4s_steps(4)_infinite]"></div>
           </div>
           <style>{`
             @keyframes drain {
               0% { opacity: 1; }
               50% { opacity: 0; }
               100% { opacity: 0; }
             }
           `}</style>
        </VisualWrapper>
      );

    case '6': // Quick Sort
      return (
        <VisualWrapper>
           <div className="flex items-end gap-1 h-14 w-16 pb-2 border-b border-axiom-300">
              <div className="w-2 bg-axiom-300 h-[40%] rounded-t-sm"></div>
              <div className="w-2 bg-axiom-800 h-[80%] rounded-t-sm animate-[swap-right_2s_ease-in-out_infinite]"></div>
              <div className="w-2 bg-axiom-500 h-[60%] rounded-t-sm animate-[swap-left_2s_ease-in-out_infinite]"></div>
              <div className="w-2 bg-axiom-300 h-[90%] rounded-t-sm"></div>
              <div className="w-2 bg-axiom-300 h-[30%] rounded-t-sm"></div>
           </div>
           <style>{`
             @keyframes swap-right { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(12px); } }
             @keyframes swap-left { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-12px); } }
           `}</style>
        </VisualWrapper>
      );

    case '7': // Onions (Layers/Tears)
      return (
        <VisualWrapper>
           <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Onion Rings */}
              <div className="absolute w-14 h-14 border border-axiom-300 rounded-full"></div>
              <div className="absolute w-10 h-10 border border-axiom-400 rounded-full"></div>
              <div className="absolute w-6 h-6 border border-axiom-500 rounded-full"></div>
              <div className="absolute w-2 h-2 bg-axiom-800 rounded-full"></div>
              
              {/* Gas Particles */}
              <div className="absolute inset-0 animate-spin-slow">
                 <div className="absolute top-0 left-1/2 w-1 h-1 bg-axiom-800 rounded-full animate-[float-out_2s_infinite]"></div>
                 <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-axiom-800 rounded-full animate-[float-out_2s_infinite_delay-300]"></div>
                 <div className="absolute left-0 top-1/2 w-1 h-1 bg-axiom-800 rounded-full animate-[float-out_2s_infinite_delay-700]"></div>
              </div>
           </div>
           <style>{`
             @keyframes float-out {
               0% { transform: translate(-50%, 0) scale(1); opacity: 1; }
               100% { transform: translate(-50%, -20px) scale(0); opacity: 0; }
             }
           `}</style>
        </VisualWrapper>
      );

    case '8': // Pancakes (Bubbles)
      return (
        <VisualWrapper>
           <div className="w-16 h-16 rounded-full bg-axiom-100 border border-axiom-300 relative overflow-hidden">
              <div className="absolute top-3 left-3 w-2 h-2 border border-axiom-600 rounded-full animate-[pop_2s_infinite]"></div>
              <div className="absolute top-8 left-8 w-3 h-3 border border-axiom-600 rounded-full animate-[pop_3s_infinite_delay-100]"></div>
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border border-axiom-600 rounded-full animate-[pop_2.5s_infinite_delay-500]"></div>
              <div className="absolute top-4 right-5 w-1.5 h-1.5 border border-axiom-600 rounded-full animate-[pop_1.5s_infinite_delay-200]"></div>
           </div>
           <style>{`
             @keyframes pop {
               0% { transform: scale(0); opacity: 0; }
               50% { transform: scale(1.2); opacity: 1; }
               51% { opacity: 0; }
               100% { opacity: 0; }
             }
           `}</style>
        </VisualWrapper>
      );

    case '9': // Crowds
      return (
        <VisualWrapper>
           <div className="w-16 h-16 grid grid-cols-4 grid-rows-4 gap-1 p-1">
              {[...Array(16)].map((_, i) => (
                 <div key={i} 
                      className={`w-1.5 h-1.5 rounded-full bg-axiom-800 transition-transform duration-1000 ${
                        i % 5 === 0 ? 'animate-[wander_4s_infinite]' : 'animate-[shiver_0.5s_infinite]'
                      }`}
                      style={{ animationDelay: `${Math.random()}s` }}
                 ></div>
              ))}
           </div>
           <style>{`
             @keyframes wander {
               0%, 100% { transform: translate(0,0); }
               25% { transform: translate(5px, 5px); }
               50% { transform: translate(-5px, 2px); }
               75% { transform: translate(2px, -5px); }
             }
             @keyframes shiver {
               0%, 100% { transform: translate(0,0); }
               50% { transform: translate(0.5px, 0.5px); }
             }
           `}</style>
        </VisualWrapper>
      );
    
    case '10': // Biology (Photosynthesis)
      return (
        <VisualWrapper>
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Sun */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-axiom-800 rounded-full animate-[pulse_3s_infinite]"></div>
            
            {/* Leaf */}
            <div className="relative w-8 h-12 bg-white border-2 border-axiom-600 rounded-tl-3xl rounded-br-3xl flex items-center justify-center overflow-hidden z-10">
               {/* Veins */}
               <div className="w-[1px] h-full bg-axiom-300"></div>
               <div className="absolute w-full h-[1px] bg-axiom-300 rotate-45"></div>
               <div className="absolute w-full h-[1px] bg-axiom-300 -rotate-45"></div>
               
               {/* Energy absorption */}
               <div className="absolute inset-0 bg-axiom-200 opacity-0 animate-[absorb_2s_infinite]"></div>
            </div>

            {/* Rays */}
            <div className="absolute top-3 right-3 w-8 h-[1px] bg-axiom-400 rotate-45 origin-left animate-[ray_2s_infinite]"></div>
          </div>
          <style>{`
            @keyframes absorb {
              0% { opacity: 0; }
              50% { opacity: 0.5; }
              100% { opacity: 0; }
            }
            @keyframes ray {
              0% { transform: rotate(45deg) scaleX(0); opacity: 0; }
              50% { transform: rotate(45deg) scaleX(1); opacity: 1; }
              100% { transform: rotate(45deg) scaleX(1); opacity: 0; }
            }
          `}</style>
        </VisualWrapper>
      );

    case '11': // Arts (Golden Ratio)
      return (
        <VisualWrapper>
           <div className="relative w-16 h-10 border border-axiom-800 flex">
              {/* Large Square */}
              <div className="h-full aspect-square border-r border-axiom-800 relative">
                 <div className="absolute inset-0 border-b-2 border-r-2 border-axiom-300 rounded-br-full opacity-50"></div>
              </div>
              {/* Remaining Rectangle */}
              <div className="h-full flex-1 flex flex-col">
                 <div className="w-full aspect-square border-b border-axiom-800 relative">
                    <div className="absolute inset-0 border-l-2 border-b-2 border-axiom-400 rounded-bl-full opacity-50"></div>
                 </div>
                 <div className="flex-1 flex">
                    <div className="h-full aspect-square border-r border-axiom-800"></div>
                    <div className="flex-1 border-b border-axiom-800"></div>
                 </div>
              </div>
              
              {/* Overlay Spiral - Simplified SVG representation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-axiom-800 fill-none" viewBox="0 0 100 62">
                 <path d="M0,62 A62,62 0 0,1 62,0 A38,38 0 0,1 100,38" strokeWidth="1.5" strokeLinecap="round" className="animate-[draw_3s_ease-out_forwards]" strokeDasharray="200" strokeDashoffset="200" />
              </svg>
           </div>
           <style>{`
             @keyframes draw {
               to { stroke-dashoffset: 0; }
             }
           `}</style>
        </VisualWrapper>
      );

    default:
      return (
        <VisualWrapper>
           <div className="w-10 h-10 border border-axiom-300 rounded-full animate-pulse"></div>
        </VisualWrapper>
      );
  }
};
