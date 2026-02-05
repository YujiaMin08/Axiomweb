export type Category = 
  | 'All' 
  | 'Language' 
  | 'Biology' 
  | 'Physics' 
  | 'Chemistry' 
  | 'Computer Science' 
  | 'Liberal Arts' 
  | 'Physiology' 
  | 'Arts';

export interface Course {
  id: string;
  category: Category;
  subject: string;
  title: string;
  color: string;
  iconName: string; // Keeping for reference, though visual is used
  description?: string;
}

export interface FilterOption {
  label: string;
  value: Category;
}
