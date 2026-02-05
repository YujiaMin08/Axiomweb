import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-axiom-50/80 backdrop-blur-md border-b border-axiom-200/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-axiom-200 rounded-full transition-colors">
            <Menu className="w-5 h-5 text-axiom-800" />
          </button>
          <span className="font-display text-2xl font-bold tracking-tight text-axiom-900 lowercase">
            axiom
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-axiom-600">
          <a href="#" className="hover:text-axiom-900 transition-colors">Library</a>
          <a href="#" className="hover:text-axiom-900 transition-colors">Manifesto</a>
          <a href="#" className="hover:text-axiom-900 transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-axiom-800 hover:text-black">Log in</a>
          <button className="bg-axiom-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};