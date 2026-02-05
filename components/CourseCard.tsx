import React from 'react';
import { Course } from '../types';
import { getCourseVisual } from './CourseVisuals';

interface CourseCardProps {
  course: Course;
  onClick?: (course: Course, e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick, style, className }) => {
  const VisualComponent = getCourseVisual(course.id);

  return (
    <div 
      onClick={(e) => onClick?.(course, e)}
      className={`relative group w-full flex flex-col items-center cursor-pointer select-none ${className || ''}`}
      style={style}
    >
      
      {/* The Book Container - Added 'book-spine' class for querying if needed */}
      <div className={`
        book-spine relative w-full aspect-[3/4] 
        ${course.color} 
        rounded-r-[4px] rounded-l-[2px] 
        shadow-[4px_0_10px_rgba(43,37,34,0.08),inset_2px_0_5px_rgba(255,255,255,0.4)]
        group-hover:-translate-y-2 group-hover:shadow-[8px_10px_20px_rgba(43,37,34,0.12)]
        transition-all duration-500 ease-out
        border-r border-b border-axiom-900/10
        flex flex-col overflow-hidden
        origin-bottom
      `}>
        
        {/* 1. Spine Effect (Left gradient) */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-axiom-900/15 via-axiom-900/5 to-transparent z-20 mix-blend-multiply"></div>
        <div className="absolute left-[2px] top-0 bottom-0 w-[1px] bg-white/40 z-20"></div>

        {/* 2. Paper Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30 mix-blend-multiply pointer-events-none z-10"></div>

        {/* 3. Cover Layout */}
        <div className="flex-grow flex flex-col p-6 relative z-0 h-full text-center">
          
          {/* Top: Subject only */}
          <div className="mb-2 opacity-60">
             <span className="font-serif italic text-xs tracking-wider text-axiom-700">{course.subject}</span>
          </div>

          {/* Middle: The Dynamic Visual */}
          <div className="flex-grow flex items-center justify-center py-2">
            <div className="relative w-full h-full max-h-[160px] flex items-center justify-center">
               <div className="absolute inset-0 border border-axiom-900/5 bg-axiom-900/[0.02] rounded-sm"></div>
               <div className="transform scale-[1.2] group-hover:scale-[1.4] transition-transform duration-700 ease-in-out">
                 {VisualComponent}
               </div>
            </div>
          </div>

          {/* Bottom: Title only */}
          <div className="mt-auto pt-6 border-t border-axiom-900/10">
            <h3 className="font-serif text-2xl text-axiom-900 leading-[1.1] tracking-tight line-clamp-3">
              {course.title}
            </h3>
          </div>
        </div>
      </div>

      {/* The Shelf (Visual Anchor) */}
      <div className="shelf-base w-[110%] h-4 mt-0 relative -z-10">
         {/* Shelf Surface */}
         <div className="absolute inset-0 bg-[#E3D4C4] border-t border-[#F5EBE0] shadow-sm rounded-sm"></div>
         {/* Darker edge */}
         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9B8A5]"></div>
         {/* Shadow cast by book - Warm Tone */}
         <div className="absolute top-0 left-[15%] right-[15%] h-1 bg-axiom-900/10 blur-[2px] transition-all duration-500 group-hover:blur-[4px] group-hover:opacity-40 group-hover:scale-x-90"></div>
      </div>
    </div>
  );
};
