import React, { useState, useEffect } from 'react';
import { COURSE_DATA } from './constants';
import { CategorySection } from './components/CategorySection';
import { ChatBot } from './components/ChatBot';
import { Search, Menu, X, Github, BookOpen, Sparkles, Linkedin } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('recommended');
  const [searchQuery, setSearchQuery] = useState('');

  // Simple smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  // Filter courses based on search
  const filteredData = COURSE_DATA.map(category => ({
    ...category,
    courses: category.courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.courses.length > 0);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = COURSE_DATA.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150; // Offset

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Learn<span className="text-blue-600">Hub</span></h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search topics, courses..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-slate-500 hover:text-slate-900 hidden md:block">
              <Github className="w-5 h-5" />
            </a>
            <button
              className="md:hidden p-2 text-slate-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 animate-in slide-in-from-top-5">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                className="block w-full pl-10 p-2 border border-slate-200 rounded-lg bg-slate-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <nav className="space-y-1">
              {COURSE_DATA.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${activeSection === category.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex gap-8">

        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
              Course Categories
            </h3>
            <nav className="space-y-1">
              {COURSE_DATA.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${activeSection === category.id
                    ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  <span className="truncate">{category.title}</span>
                  {category.id === 'recommended' && <Sparkles className="w-3 h-3 text-yellow-500" />}
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl text-white">
              <h4 className="font-bold text-sm mb-2">Career Path?</h4>
              <p className="text-xs text-slate-300 mb-3">
                Start with the recommended courses.
              </p>
              <button
                onClick={() => scrollToSection('recommended')}
                className="w-full py-1.5 px-3 bg-blue-600 hover:bg-blue-500 rounded text-xs font-medium transition-colors"
              >
                View Path
              </button>
            </div>
          </div>
        </aside>

        {/* Course Feed */}
        <div className="flex-1 min-w-0">
          {filteredData.length > 0 ? (
            filteredData.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">No courses found</h3>
              <p className="mt-1 text-slate-500">Try adjusting your search terms.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">

            <div className="mt-8 mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 inline-block max-w-2xl">
              <p className="text-slate-600 font-medium mb-4">
                Built by 2nd Year Students at <span className="font-semibold text-slate-800">ESI Algiers</span> 🇩🇿
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">
                <a
                  href="https://www.linkedin.com/in/karim-merzouk-589479323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group"
                >
                  <div className="p-1.5 bg-white rounded-full border border-slate-200 group-hover:border-blue-200 shadow-sm mr-2 group-hover:bg-blue-50">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <span className="font-medium">Karim Merzouk</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/amine-gharout-a03965252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-600 hover:text-blue-600 transition-all duration-200 group"
                >
                  <div className="p-1.5 bg-white rounded-full border border-slate-200 group-hover:border-blue-200 shadow-sm mr-2 group-hover:bg-blue-50">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </div>
                  <span className="font-medium">Amine Gharout</span>
                </a>
              </div>
            </div>

            <p className="mt-2 text-slate-400">&copy; {new Date().getFullYear()} Learning Hub.</p>
          </footer>
        </div>
      </main>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default App;
