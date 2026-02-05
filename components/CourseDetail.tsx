import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Clock, Share2, Bookmark, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { getCourseVisual } from './CourseVisuals';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  const VisualComponent = getCourseVisual(course.id);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-axiom-50 relative pb-20 overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-axiom-50/90 backdrop-blur-md border-b border-axiom-200 animate-[slide-up-fade_0.6s_ease-out]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-axiom-600 hover:text-axiom-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Library</span>
          </button>
          
          <div className="flex items-center gap-4">
             <button className="p-2 text-axiom-400 hover:text-axiom-900 transition-colors">
               <Share2 className="w-5 h-5" />
             </button>
             <button className="p-2 text-axiom-400 hover:text-axiom-900 transition-colors">
               <Bookmark className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-[slide-up-fade_0.8s_both_0.1s]">
           <span className="inline-block px-4 py-1 rounded-full border border-axiom-200 text-xs font-serif italic text-axiom-500 mb-6 bg-white">
             {course.category} • {course.subject}
           </span>
           <h1 className="font-display text-5xl md:text-6xl text-axiom-900 leading-[1.1] mb-8">
             {course.title}
           </h1>
           
           <div className="flex items-center justify-center gap-8 text-sm text-axiom-500 border-y border-axiom-200 py-4 max-w-lg mx-auto">
              <div className="flex items-center gap-2">
                 <Clock className="w-4 h-4" />
                 <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                 <BookOpen className="w-4 h-4" />
                 <span>Beginner Level</span>
              </div>
           </div>
        </div>

        {/* Hero Visual - Expanded */}
        <div className="relative w-full aspect-video bg-[#F4F1EA] rounded-lg border border-axiom-200 mb-16 overflow-hidden flex items-center justify-center shadow-inner animate-[scale-reveal_0.8s_both_0.2s]">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           
           <div className="transform scale-[2.5]">
              {VisualComponent}
           </div>
        </div>

        {/* Content Body */}
        <div className="max-w-2xl mx-auto font-serif text-lg md:text-xl text-axiom-800 leading-relaxed space-y-8 animate-[slide-up-fade_0.8s_both_0.3s]">
           <p className="first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px] first-letter:font-display first-letter:text-axiom-900">
             Imagine you are standing at the edge of a vast concept, waiting to be understood. This lesson explores the fundamental principles behind {course.title.toLowerCase()}, breaking down complex interactions into simple, observable phenomena.
           </p>

           <h3 className="font-display text-3xl text-axiom-900 mt-12 mb-4">1. The Core Principle</h3>
           <p>
             At its heart, this topic is about relationship and causality. Whether we are discussing the physics of motion or the sociology of crowds, the underlying pattern remains strikingly consistent. Notice how in the visualization above, the elements react not randomly, but according to a set of invisible rules.
           </p>

           <div className="my-10 p-8 bg-white border-l-4 border-axiom-900 shadow-sm rounded-r-md">
              <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-axiom-400 mb-2">Key Insight</h4>
              <p className="italic text-axiom-700">
                "Understanding is not just about knowing facts, but seeing the geometry of how those facts connect."
              </p>
           </div>

           <h3 className="font-display text-3xl text-axiom-900 mt-12 mb-4">2. Practical Application</h3>
           <p>
             How do we apply this in the real world? Consider the daily interactions you encounter. The same mechanism that governs the swing of a pendulum or the sorting of a list can be observed in the rhythm of your daily walk or the way you organize your bookshelf.
           </p>
           
           <p>
             By observing these patterns, we move from passive observers to active participants in the world of ideas.
           </p>

           {/* Interactive Prompt */}
           <div className="mt-16 pt-10 border-t border-axiom-200">
              <button className="w-full py-6 border-2 border-dashed border-axiom-300 rounded-lg text-axiom-500 font-sans text-base hover:border-axiom-900 hover:text-axiom-900 transition-all flex items-center justify-center gap-3 group">
                 <span className="group-hover:translate-x-1 transition-transform">Start Interactive Quiz</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
