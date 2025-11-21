import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const sections = [
  { id: 'structure', name: 'Structure & Semantics', path: '/section/structure', number: '1' },
  { id: 'language', name: 'Language & Text', path: '/section/language', number: '2' },
  { id: 'forms', name: 'Forms & Inputs', path: '/section/forms', number: '3' },
  { id: 'links', name: 'Hyperlinks', path: '/section/links', number: '4' },
  { id: 'keyboard', name: 'Keyboard Navigation', path: '/section/keyboard', number: '5' },
  { id: 'color', name: 'Color & Contrast', path: '/section/color', number: '6' },
  { id: 'images', name: 'Images & Media', path: '/section/images', number: '7' },
  { id: 'components', name: 'Advanced Components', path: '/section/components', number: '8' },
  { id: 'testing', name: 'Testing', path: '/section/testing', number: '9' },
  { id: 'cognitive', name: 'Cognitive Load', path: '/section/cognitive', number: '10' },
  { id: 'ergonomics', name: 'Ergonomics', path: '/section/ergonomics', number: '11' },
  { id: 'environment', name: 'Environment', path: '/section/environment', number: '12' },
  { id: 'advanced', name: 'Advanced Components', path: '/section/advanced', number: '13' },
];

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const location = useLocation();

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-40 hidden lg:block">
        <div className="h-full flex flex-col">
          {/* Logo/Header */}
          <div className="px-6 py-6 border-b border-slate-200 dark:border-slate-800">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DFA</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Design for All
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  UX Mastery
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = location.pathname === section.path;
                return (
                  <li key={section.id}>
                    <Link
                      to={section.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className={`w-6 h-6 flex items-center justify-center text-xs font-semibold rounded ${
                        isActive 
                          ? 'bg-indigo-600 text-white dark:bg-indigo-600 dark:text-white' 
                          : 'bg-slate-200 dark:bg-slate-700'
                      }`}>
                        {section.number}
                      </span>
                      <span className="flex-1">{section.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DC</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Design for All
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 max-h-[calc(100vh-64px)] overflow-y-auto"
          >
            <nav className="p-4">
              <ul className="space-y-1">
                {sections.map((section) => {
                  const isActive = location.pathname === section.path;
                  return (
                    <li key={section.id}>
                      <Link
                        to={section.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className={`w-6 h-6 flex items-center justify-center text-xs font-semibold rounded ${
                          isActive 
                            ? 'bg-indigo-600 text-white dark:bg-indigo-600 dark:text-white' 
                            : 'bg-slate-200 dark:bg-slate-700'
                        }`}>
                          {section.number}
                        </span>
                        <span>{section.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}

