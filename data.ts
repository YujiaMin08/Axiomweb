import { Course, FilterOption } from './types';

export const CATEGORIES: FilterOption[] = [
  { label: 'All', value: 'All' },
  { label: 'Language', value: 'Language' },
  { label: 'Biology', value: 'Biology' },
  { label: 'Physics', value: 'Physics' },
  { label: 'Chemistry', value: 'Chemistry' },
  { label: 'Computer Science', value: 'Computer Science' },
  { label: 'Liberal Arts', value: 'Liberal Arts' },
  { label: 'Physiology', value: 'Physiology' },
  { label: 'Arts', value: 'Arts' },
];

// Unified color for all books to maintain the "European Bookshelf" aesthetic
const UNIFIED_BOOK_COLOR = "bg-[#F4F1EA]"; 

export const COURSES: Course[] = [
  // Language
  {
    id: '1',
    category: 'Language',
    subject: 'Linguistics',
    title: 'How to order coffee in a coffee shop',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Coffee'
  },
  
  // Biology
  {
    id: '10',
    category: 'Biology',
    subject: 'Botany',
    title: 'How do plants convert sunlight into energy?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Sun'
  },

  // Physics
  {
    id: '2',
    category: 'Physics',
    subject: 'Mechanics',
    title: 'What is Newton\'s First Law?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Box'
  },
  {
    id: '3',
    category: 'Physics',
    subject: 'Mechanics',
    title: 'What determines how fast a pendulum swings?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Activity'
  },

  // Chemistry
  {
    id: '4',
    category: 'Chemistry',
    subject: 'Kinetics',
    title: 'How does temperature affect reaction speed?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Flame'
  },
  {
    id: '7',
    category: 'Chemistry',
    subject: 'Organic Chemistry',
    title: 'Why do we cry when we cut onions?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'ChefHat'
  },

  // Computer Science
  {
    id: '6',
    category: 'Computer Science',
    subject: 'Algorithms',
    title: 'What is Quick Sort?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'ArrowUpDown'
  },

  // Liberal Arts
  {
    id: '8',
    category: 'Liberal Arts',
    subject: 'Culinary Physics',
    title: 'Why do holes form on pancakes?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'CircleDot'
  },
  {
    id: '9',
    category: 'Liberal Arts',
    subject: 'Sociology',
    title: 'Why do people behave differently in crowds?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Users'
  },

  // Physiology
  {
    id: '5',
    category: 'Physiology',
    subject: 'Musculoskeletal',
    title: 'Why do muscles get tired after repeated use?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Zap'
  },

  // Arts
  {
    id: '11',
    category: 'Arts',
    subject: 'Design Theory',
    title: 'What is the Golden Ratio?',
    color: UNIFIED_BOOK_COLOR,
    iconName: 'Layout'
  }
];
