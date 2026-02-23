import React from 'react';
import { Category } from '../types';
import { CourseCard } from './CourseCard';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <section id={category.id} className="mb-12 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{category.title}</h2>
        <p className="text-slate-500 text-sm">{category.description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
