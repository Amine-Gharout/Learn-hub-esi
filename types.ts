export enum CourseLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}

export interface Course {
  id: string;
  title: string;
  topics: string[];
  level: CourseLevel;
  link: string;
  isRecommended?: boolean;
  details?: string; // Short description for UI
  prerequisites?: string[]; // List for data structure
  aiContent?: string; // Detailed workflow and context strictly for the AI model
}

export interface Category {
  id: string;
  title: string;
  description: string;
  courses: Course[];
}