import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  sectionNumber?: string; // e.g., "1.1", "3.2"
  category: 'chapter' | 'subsection' | 'principle';
}

// Complete search data with chapters, subsections, and principles
const searchData: SearchResult[] = [
  // Chapters
  { id: 'structure', title: 'Structure & Semantics', description: 'The foundation of accessible HTML', path: '/section/structure', category: 'chapter' },
  { id: 'language', title: 'Language & Text', description: 'Typography and internationalization', path: '/section/language', category: 'chapter' },
  { id: 'forms', title: 'Forms & Inputs', description: 'Form design best practices', path: '/section/forms', category: 'chapter' },
  { id: 'links', title: 'Hyperlinks', description: 'Link accessibility and UX', path: '/section/links', category: 'chapter' },
  { id: 'keyboard', title: 'Keyboard Navigation', description: 'Keyboard-first design', path: '/section/keyboard', category: 'chapter' },
  { id: 'color', title: 'Color & Contrast', description: 'Visual accessibility', path: '/section/color', category: 'chapter' },
  { id: 'images', title: 'Images & Media', description: 'Multimedia accessibility', path: '/section/images', category: 'chapter' },
  { id: 'advanced', title: 'Advanced Components', description: 'Modals, tooltips, and more', path: '/section/advanced', category: 'chapter' },
  { id: 'testing', title: 'Testing', description: 'Accessibility testing strategies', path: '/section/testing', category: 'chapter' },
  { id: 'cognitive', title: 'Cognitive Load', description: 'Universal design principles', path: '/section/cognitive', category: 'chapter' },
  { id: 'ergonomics', title: 'Ergonomics', description: 'Touch targets and Fitts\'s Law', path: '/section/ergonomics', category: 'chapter' },
  { id: 'environment', title: 'Environment', description: 'Dark mode, RTL, and adaptability', path: '/section/environment', category: 'chapter' },
  
  // Section 1: Structure & Semantics Subsections
  { id: '1.1', title: 'Sequential Headings', description: 'Organize headings to form a clear, logical outline', path: '/section/structure', sectionNumber: '1.1', category: 'subsection' },
  { id: '1.2', title: 'Single H1 Per Page', description: 'Ensure there is only one H1 per page', path: '/section/structure', sectionNumber: '1.2', category: 'subsection' },
  { id: '1.3', title: 'Descriptive Headings', description: 'Use short, descriptive headings', path: '/section/structure', sectionNumber: '1.3', category: 'subsection' },
  { id: '1.4', title: 'Semantic Landmarks', description: 'Use semantic HTML5 elements for page structure', path: '/section/structure', sectionNumber: '1.4', category: 'subsection' },
  { id: '1.5', title: 'Real Lists', description: 'Lists must be real ul or ol elements', path: '/section/structure', sectionNumber: '1.5', category: 'subsection' },
  { id: '1.6', title: 'Semantic Tables', description: 'Tables are for data only, use semantic structure', path: '/section/structure', sectionNumber: '1.6', category: 'subsection' },
  
  // Section 2: Language & Text Subsections
  { id: '2.1', title: 'Language Declaration', description: 'Declare html lang attribute', path: '/section/language', sectionNumber: '2.1', category: 'subsection' },
  { id: '2.2', title: 'Relative Text Units', description: 'Use rem and em instead of px', path: '/section/language', sectionNumber: '2.2', category: 'subsection' },
  
  // Section 3: Forms & Inputs Subsections
  { id: '3.1', title: 'All Inputs Labeled', description: 'Labels make form fields discoverable and understandable', path: '/section/forms', sectionNumber: '3.1', category: 'subsection' },
  { id: '3.2', title: 'Persistent Labels', description: 'Placeholders vanish when typing, forcing users to rely on memory', path: '/section/forms', sectionNumber: '3.2', category: 'subsection' },
  { id: '3.3', title: 'Text-Based Error Messages', description: 'Color alone is insufficient—errors must be text-based', path: '/section/forms', sectionNumber: '3.3', category: 'subsection' },
  { id: '3.4', title: 'Fieldset Grouping', description: 'Group related form fields semantically', path: '/section/forms', sectionNumber: '3.4', category: 'subsection' },
  
  // Section 4: Hyperlinks Subsections
  { id: '4.1', title: 'Meaningful Link Text', description: 'Links must be meaningful in isolation', path: '/section/links', sectionNumber: '4.1', category: 'subsection' },
  { id: '4.2', title: 'Visual Link Affordance', description: 'Links must look like links', path: '/section/links', sectionNumber: '4.2', category: 'subsection' },
  { id: '4.3', title: 'File Type & Size Context', description: 'Identify file type and size for downloads', path: '/section/links', sectionNumber: '4.3', category: 'subsection' },
  { id: '4.4', title: 'Context Change Warnings', description: 'Warn users before opening new windows', path: '/section/links', sectionNumber: '4.4', category: 'subsection' },
  
  // Section 5: Keyboard Navigation Subsections
  { id: '5.1', title: 'All Elements Reachable', description: 'All interactive elements must be keyboard-accessible', path: '/section/keyboard', sectionNumber: '5.1', category: 'subsection' },
  { id: '5.2', title: 'Visible Focus Indicators', description: 'Focus styles must be visible and high contrast', path: '/section/keyboard', sectionNumber: '5.2', category: 'subsection' },
  { id: '5.3', title: 'Skip to Main Content', description: 'Provide skip link as first focusable element', path: '/section/keyboard', sectionNumber: '5.3', category: 'subsection' },
  
  // Section 6: Color & Contrast Subsections
  { id: '6.1', title: 'Text Contrast (4.5:1)', description: 'Normal text requires sufficient contrast ratio', path: '/section/color', sectionNumber: '6.1', category: 'subsection' },
  { id: '6.2', title: 'Meaning Beyond Color', description: 'Do not use color alone to convey meaning', path: '/section/color', sectionNumber: '6.2', category: 'subsection' },
  
  // Section 7: Images & Media Subsections
  { id: '7.1', title: 'Concise Alt Text', description: 'Alt text should be concise and meaningful', path: '/section/images', sectionNumber: '7.1', category: 'subsection' },
  { id: '7.2', title: 'Functional Icon Labels', description: 'Icons need text labels describing the action', path: '/section/images', sectionNumber: '7.2', category: 'subsection' },
  
  // Section 8: Advanced Components Subsections
  { id: '8.1', title: 'Reduced Motion Respect', description: 'Respect prefers-reduced-motion media query', path: '/section/advanced', sectionNumber: '8.1', category: 'subsection' },
  { id: '8.2', title: 'Accordions / Disclosure Widgets', description: 'Collapsible content sections with proper ARIA attributes', path: '/section/advanced', sectionNumber: '8.2', category: 'subsection' },
  { id: '8.3', title: 'Modal Dialogs', description: 'Focus management and backdrop handling', path: '/section/advanced', sectionNumber: '8.3', category: 'subsection' },
  { id: '8.4', title: 'Tab Interfaces', description: 'Arrow key navigation and proper ARIA roles', path: '/section/advanced', sectionNumber: '8.4', category: 'subsection' },
  { id: '8.5', title: 'Carousels / Image Sliders', description: 'Play/pause controls and keyboard navigation', path: '/section/advanced', sectionNumber: '8.5', category: 'subsection' },
  { id: '8.6', title: 'Custom Dropdowns / Select Menus', description: 'Listbox pattern with keyboard navigation', path: '/section/advanced', sectionNumber: '8.6', category: 'subsection' },
  { id: '8.7', title: 'Data Tables (Sortable)', description: 'Sortable columns with proper table semantics', path: '/section/advanced', sectionNumber: '8.7', category: 'subsection' },
  { id: '8.8', title: 'Search Autocomplete / Typeahead', description: 'Combobox pattern with live results', path: '/section/advanced', sectionNumber: '8.8', category: 'subsection' },
  { id: '8.9', title: 'Custom Toggle Switches', description: 'Switch role with proper state communication', path: '/section/advanced', sectionNumber: '8.9', category: 'subsection' },
  { id: '8.10', title: 'Navigation Menus (Mega Menus)', description: 'Multi-level navigation with keyboard support', path: '/section/advanced', sectionNumber: '8.10', category: 'subsection' },
  { id: '8.11', title: 'Progress Bars / Steppers', description: 'Progress indicators with current state', path: '/section/advanced', sectionNumber: '8.11', category: 'subsection' },
  { id: '8.12', title: 'Steppers / Multi-step Forms', description: 'Step navigation with current step indication', path: '/section/advanced', sectionNumber: '8.12', category: 'subsection' },
  { id: '8.13', title: 'Toast Notifications / Alerts', description: 'Live regions for dynamic announcements', path: '/section/advanced', sectionNumber: '8.13', category: 'subsection' },
  { id: '8.14', title: 'Image Galleries', description: 'Keyboard navigation and proper image semantics', path: '/section/advanced', sectionNumber: '8.14', category: 'subsection' },
  { id: '8.15', title: 'Card Grids', description: 'Accessible card layouts with proper focus management', path: '/section/advanced', sectionNumber: '8.15', category: 'subsection' },
  { id: '8.16', title: 'Data Visualization (Charts)', description: 'Accessible charts with proper descriptions', path: '/section/advanced', sectionNumber: '8.16', category: 'subsection' },
  { id: '8.17', title: 'Media Players', description: 'Video and audio players with full keyboard control', path: '/section/advanced', sectionNumber: '8.17', category: 'subsection' },
  { id: '8.18', title: 'Chat Widgets / Floating Action Buttons', description: 'Accessible floating UI elements', path: '/section/advanced', sectionNumber: '8.18', category: 'subsection' },
  { id: '8.19', title: 'Tooltips', description: 'Accessible tooltips with proper ARIA attributes', path: '/section/advanced', sectionNumber: '8.19', category: 'subsection' },
  { id: '8.20', title: 'Layout Tables', description: 'Accessible table layouts for complex data', path: '/section/advanced', sectionNumber: '8.20', category: 'subsection' },
];

/**
 * Highlights matching text in a string
 */
function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <mark key={index} className="bg-indigo-600 dark:bg-indigo-500 text-white dark:text-white px-0.5 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function HeroSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter results based on query
  useEffect(() => {
    if (!query.trim()) {
      setFilteredResults([]);
      setIsOpen(false);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      (item.sectionNumber && item.sectionNumber.includes(query))
    );

    setFilteredResults(filtered);
    setIsOpen(filtered.length > 0);
    setFocusedIndex(-1);
  }, [query]);

  // Group results by category
  const chapters = filteredResults.filter(r => r.category === 'chapter');
  const subsections = filteredResults.filter(r => r.category === 'subsection');
  const principles = filteredResults.filter(r => r.category === 'principle');

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const totalResults = filteredResults.length;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < totalResults - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : totalResults - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredResults[focusedIndex]) {
          const result = filteredResults[focusedIndex];
          setIsOpen(false);
          setQuery('');
          const targetPath = result.sectionNumber 
            ? `${result.path}#${result.sectionNumber}`
            : result.path;
          navigate(targetPath);
        }
        break;
      case 'Escape':
        setQuery('');
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.querySelector(
        `[data-index="${focusedIndex}"]`
      ) as HTMLElement;
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [focusedIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // Calculate global index for a result
  const getGlobalIndex = (result: SearchResult): number => {
    if (result.category === 'chapter') {
      return chapters.findIndex(r => r.id === result.id);
    } else if (result.category === 'subsection') {
      return chapters.length + subsections.findIndex(r => r.id === result.id);
    } else {
      return chapters.length + subsections.length + principles.findIndex(r => r.id === result.id);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none z-10">
          <Search className="w-5 h-5" aria-hidden="true" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (filteredResults.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder="Search accessible components and patterns..."
          className="w-full h-14 pl-12 pr-4 bg-white/90 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all text-base shadow-sm dark:shadow-none"
          aria-label="Search accessible components and patterns"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-activedescendant={
            focusedIndex >= 0 ? `result-${focusedIndex}` : undefined
          }
          role="combobox"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl overflow-hidden z-50"
            role="listbox"
            id="search-results"
          >
            {filteredResults.length === 0 ? (
              <div className="px-4 py-8 text-left">
                <p className="text-slate-500 dark:text-slate-400">
                  No matching components or patterns found
                </p>
              </div>
            ) : (
              <ul ref={listRef} className="max-h-96 overflow-y-auto">
                {chapters.length > 0 && (
                  <li className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-left">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Sections
                    </span>
                  </li>
                )}
                {chapters.map((result) => {
                  const globalIndex = getGlobalIndex(result);
                  const isFocused = focusedIndex === globalIndex;
                  return (
                    <li key={result.id}>
                      <Link
                        to={result.sectionNumber ? `${result.path}#${result.sectionNumber}` : result.path}
                        data-index={globalIndex}
                        id={`result-${globalIndex}`}
                        className={`block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 focus:bg-slate-50 dark:focus:bg-slate-800 focus:outline-none transition-colors ${
                          isFocused ? 'bg-slate-50 dark:bg-slate-800' : ''
                        }`}
                        role="option"
                        aria-selected={isFocused}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery('');
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0 text-left">
                            <div className="text-slate-900 dark:text-white font-medium mb-1 text-left">
                              {highlightText(result.title, query)}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 text-left">
                              {highlightText(result.description, query)}
                            </div>
                          </div>
                          <ArrowRight 
                            className={`w-5 h-5 flex-shrink-0 text-slate-400 dark:text-slate-500 transition-opacity ${
                              isFocused ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
                
                {subsections.length > 0 && (
                  <li className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 border-b border-slate-200 dark:border-slate-700 text-left">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Components & Examples
                    </span>
                  </li>
                )}
                {subsections.map((result) => {
                  const globalIndex = getGlobalIndex(result);
                  const isFocused = focusedIndex === globalIndex;
                  return (
                    <li key={result.id}>
                      <Link
                        to={result.sectionNumber ? `${result.path}#${result.sectionNumber}` : result.path}
                        data-index={globalIndex}
                        id={`result-${globalIndex}`}
                        className={`block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 focus:bg-slate-50 dark:focus:bg-slate-800 focus:outline-none transition-colors ${
                          isFocused ? 'bg-slate-50 dark:bg-slate-800' : ''
                        }`}
                        role="option"
                        aria-selected={isFocused}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery('');
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 text-left">
                              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                {result.sectionNumber}
                              </span>
                              <div className="text-slate-900 dark:text-white font-medium text-left">
                                {highlightText(result.title, query)}
                              </div>
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 text-left">
                              {highlightText(result.description, query)}
                            </div>
                          </div>
                          <ArrowRight 
                            className={`w-5 h-5 flex-shrink-0 text-slate-400 dark:text-slate-500 transition-opacity ${
                              isFocused ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
                
                {principles.length > 0 && (
                  <li className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 border-b border-slate-200 dark:border-slate-700 text-left">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Best Practices
                    </span>
                  </li>
                )}
                {principles.map((result) => {
                  const globalIndex = getGlobalIndex(result);
                  const isFocused = focusedIndex === globalIndex;
                  return (
                    <li key={result.id}>
                      <Link
                        to={result.sectionNumber ? `${result.path}#${result.sectionNumber}` : result.path}
                        data-index={globalIndex}
                        id={`result-${globalIndex}`}
                        className={`block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 focus:bg-slate-50 dark:focus:bg-slate-800 focus:outline-none transition-colors ${
                          isFocused ? 'bg-slate-50 dark:bg-slate-800' : ''
                        }`}
                        role="option"
                        aria-selected={isFocused}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery('');
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0 text-left">
                            <div className="text-slate-900 dark:text-white font-medium mb-1 text-left">
                              {highlightText(result.title, query)}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 text-left">
                              {highlightText(result.description, query)}
                            </div>
                          </div>
                          <ArrowRight 
                            className={`w-5 h-5 flex-shrink-0 text-slate-400 dark:text-slate-500 transition-opacity ${
                              isFocused ? 'opacity-100' : 'opacity-0'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

