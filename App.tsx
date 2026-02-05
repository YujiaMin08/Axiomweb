import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { CourseCard } from './components/CourseCard';
import { CourseDetail } from './components/CourseDetail';
import { getCourseVisual } from './components/CourseVisuals';
import { CATEGORIES, COURSES } from './data';
import { Category, Course } from './types';

// Transition State Interface
interface TransitionState {
  isActive: boolean;
  startRect: DOMRect | null;
  course: Course | null;
  isExpanded: boolean;
}

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  
  // Animation State
  const [transition, setTransition] = useState<TransitionState>({
    isActive: false,
    startRect: null,
    course: null,
    isExpanded: false
  });

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All') return COURSES;
    return COURSES.filter(course => course.category === selectedCategory);
  }, [selectedCategory]);

  const handleCourseClick = (course: Course, e: React.MouseEvent) => {
    // 1. Get position of the clicked card (specifically the book part if possible, or just the card)
    // We look for the 'book-spine' class to get the book dimensions specifically
    const target = e.currentTarget.querySelector('.book-spine') || e.currentTarget;
    const rect = target.getBoundingClientRect();

    // 2. Start Transition: Lock Scroll
    document.body.style.overflow = 'hidden';

    // 3. Set Initial Transition State (Clone appears at rect)
    setTransition({
      isActive: true,
      startRect: rect,
      course: course,
      isExpanded: false
    });

    // 4. Trigger Expansion (Clone moves to fill screen)
    // Small delay to ensure render happens first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
         setTransition(prev => ({ ...prev, isExpanded: true }));
      });
    });

    // 5. Switch to actual page after animation finishes
    setTimeout(() => {
      setActiveCourse(course);
      window.scrollTo(0, 0);
      document.body.style.overflow = ''; // Unlock scroll
      
      // Clear transition overlay after a moment (to hide it behind the new page)
      setTimeout(() => {
         setTransition({
           isActive: false,
           startRect: null,
           course: null,
           isExpanded: false
         });
      }, 100);
    }, 700); // 700ms matches CSS transition duration
  };

  const handleBackToHome = () => {
    // Simple fade transition back
    setActiveCourse(null);
  };

  return (
    <div className="min-h-screen text-axiom-900 font-sans selection:bg-axiom-200 selection:text-axiom-900 relative">
      
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-7xl mx-auto px-6 opacity-30">
        <div className="w-px h-full bg-axiom-200/50"></div>
        <div className="w-px h-full bg-axiom-200/50 hidden md:block"></div>
        <div className="w-px h-full bg-axiom-200/50 hidden lg:block"></div>
        <div className="w-px h-full bg-axiom-200/50"></div>
      </div>

      {/* --- TRANSITION OVERLAY LAYER --- */}
      {transition.isActive && transition.startRect && transition.course && (
         <div 
           className="fixed z-[100] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
           style={{
             top: transition.isExpanded ? 0 : transition.startRect.top,
             left: transition.isExpanded ? 0 : transition.startRect.left,
             width: transition.isExpanded ? '100vw' : transition.startRect.width,
             height: transition.isExpanded ? '100vh' : transition.startRect.height,
             backgroundColor: '#F4F1EA', // Match book color
             borderRadius: transition.isExpanded ? '0px' : '4px',
             boxShadow: transition.isExpanded ? 'none' : '0 10px 25px rgba(0,0,0,0.1)',
           }}
         >
            {/* Inner Content Morphing */}
            <div className={`w-full h-full flex items-center justify-center transition-all duration-500 delay-100 ${transition.isExpanded ? 'opacity-0' : 'opacity-100'}`}>
               {/* Show visual during early stage, but fade it out as we expand to white/fullscreen to avoid pixelation */}
               <div className="transform scale-100">
                  {getCourseVisual(transition.course.id)}
               </div>
            </div>

            {/* Simulated Hero Visual Appearing */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${transition.isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                {/* 
                   We could duplicate the hero visual here for perfect continuity, 
                   but a clean fade into the background color works well too. 
                */}
            </div>
         </div>
      )}

      {/* Main Content Area */}
      <main className={`relative z-10 transition-opacity duration-500 ${transition.isActive ? 'opacity-0' : 'opacity-100'}`}>
        
        {activeCourse ? (
          <CourseDetail course={activeCourse} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            
            <section className="max-w-7xl mx-auto px-6 pb-40 pt-10" id="explore">
              <FilterBar 
                options={CATEGORIES} 
                selected={selectedCategory} 
                onSelect={setSelectedCategory} 
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24 px-8 md:px-0">
                {filteredCourses.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    onClick={handleCourseClick}
                    className={transition.isActive && transition.course?.id === course.id ? 'opacity-0' : 'opacity-100'}
                  />
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-axiom-400 text-xl font-serif italic">The shelves are empty in this section.</p>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default App;
