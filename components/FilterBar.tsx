import React from 'react';
import { Category, FilterOption } from '../types';

interface FilterBarProps {
  options: FilterOption[];
  selected: Category;
  onSelect: (category: Category) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ options, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 pb-10 pt-6 px-4">
      {options.map((option) => {
        const isSelected = selected === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out
              ${isSelected 
                ? 'bg-axiom-900 text-white shadow-md ring-2 ring-axiom-200 ring-offset-2 ring-offset-[#FFFEFC]' 
                : 'bg-axiom-100/50 text-axiom-600 hover:bg-axiom-200 hover:text-axiom-900 border border-transparent hover:border-axiom-300'}
            `}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
