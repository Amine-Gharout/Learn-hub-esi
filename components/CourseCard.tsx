import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Star, BookOpen } from 'lucide-react';
import { Course, CourseLevel } from '../types';

const levelColors: Record<CourseLevel, string> = {
  [CourseLevel.Beginner]: 'bg-green-100 text-green-700',
  [CourseLevel.Intermediate]: 'bg-yellow-100 text-yellow-700',
  [CourseLevel.Advanced]: 'bg-red-100 text-red-700',
};

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden group">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {course.isRecommended && (
                <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 fill-yellow-500" />
              )}
              <h3 className="text-base font-semibold text-slate-900 leading-tight truncate">
                {course.title}
              </h3>
            </div>
            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[course.level]}`}>
              {course.level}
            </span>
          </div>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Open course in new tab"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {course.topics.slice(0, isExpanded ? course.topics.length : 4).map((topic) => (
            <span
              key={topic}
              className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
            >
              {topic}
            </span>
          ))}
          {!isExpanded && course.topics.length > 4 && (
            <span className="text-xs text-slate-400 px-1 py-0.5">
              +{course.topics.length - 4} more
            </span>
          )}
        </div>

        {/* Details (expandable) */}
        {course.details && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3 h-3" /> Less details
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3" /> More details
              </>
            )}
          </button>
        )}

        {isExpanded && (
          <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-top-2">
            {course.details && (
              <p className="text-sm text-slate-600 leading-relaxed">{course.details}</p>
            )}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Prerequisites</p>
                <ul className="text-sm text-slate-600 space-y-0.5">
                  {course.prerequisites.map((prereq) => (
                    <li key={prereq} className="flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Start Course <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
