import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Accessible dark theme with WCAG AA compliant contrast ratios
const accessibleDarkTheme = {
  'code[class*="language-"]': {
    color: '#E5E7EB', // Light gray - 4.5:1+ contrast on dark background
    background: '#1E293B', // slate-800
    textShadow: 'none',
  },
  'pre[class*="language-"]': {
    color: '#E5E7EB',
    background: '#1E293B',
    textShadow: 'none',
  },
  comment: {
    color: '#94A3B8', // slate-400 - sufficient contrast
    fontStyle: 'italic',
  },
  prolog: { color: '#94A3B8' },
  doctype: { color: '#94A3B8' },
  cdata: { color: '#94A3B8' },
  punctuation: { color: '#E5E7EB' },
  property: { color: '#60A5FA' }, // blue-400 - good contrast
  tag: { color: '#F87171' }, // red-400 - good contrast
  boolean: { color: '#60A5FA' },
  number: { color: '#FBBF24' }, // amber-400 - good contrast
  constant: { color: '#60A5FA' },
  symbol: { color: '#F87171' },
  deleted: { color: '#F87171' },
  selector: { color: '#34D399' }, // emerald-400 - good contrast
  'attr-name': { color: '#FBBF24' },
  string: { color: '#34D399' },
  char: { color: '#34D399' },
  builtin: { color: '#A78BFA' }, // violet-400 - good contrast
  inserted: { color: '#34D399' },
  operator: { color: '#F87171' },
  entity: { color: '#E5E7EB', cursor: 'help' },
  url: { color: '#60A5FA' },
  'attr-value': { color: '#34D399' },
  keyword: { color: '#A78BFA' },
  'class-name': { color: '#FBBF24' },
  function: { color: '#60A5FA' },
  regex: { color: '#FBBF24' },
  important: { color: '#F87171', fontWeight: 'bold' },
  variable: { color: '#E5E7EB' },
};

interface ComparisonCardProps {
  title: string;
  description: string;
  designLogic: string;
  badCode: string;
  goodCode: string;
  BadComponent: React.ComponentType;
  GoodComponent: React.ComponentType;
  sectionNumber: string;
}

export default function ComparisonCard({
  title,
  description,
  designLogic,
  badCode,
  goodCode,
  BadComponent,
  GoodComponent,
  sectionNumber,
}: ComparisonCardProps) {
  const [isProMode, setIsProMode] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {sectionNumber}
            </span>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          </div>
          
          {/* Toggle Switch */}
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors ${
              !isProMode ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-slate-400'
            }`}>
              Beginner
            </span>
            <button
              onClick={() => setIsProMode(!isProMode)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isProMode
                  ? 'bg-purple-600 focus:ring-purple-500'
                  : 'bg-rose-500 focus:ring-rose-500'
              }`}
              aria-label={`Switch to ${isProMode ? 'beginner' : 'expert'} mode`}
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg"
                animate={{ x: isProMode ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${
              isProMode ? 'text-purple-700 dark:text-purple-500' : 'text-slate-500 dark:text-slate-400'
            }`}>
              Expert
            </span>
          </div>
        </div>
        {description && (
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {/* Component Preview */}
      <div className={`relative p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 ${
        title.toLowerCase().includes('chat') || title.toLowerCase().includes('floating') 
          ? 'min-h-[500px]' 
          : 'min-h-[300px]'
      }`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={isProMode ? 'expert' : 'beginner'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`${
              isProMode
                ? 'bg-expert-bg dark:bg-slate-800 border-expert-border'
                : 'bg-beginner-bg dark:bg-rose-950/40 border-beginner-border dark:border-rose-800'
            } rounded-lg border-2 p-6 transition-colors`}
          >
            {isProMode ? (
              <div className="flex items-start gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-purple-700 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-purple-900 dark:text-purple-300">
                  Expert Implementation
                </span>
              </div>
            ) : (
              <div className="flex items-start gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-rose-700 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-rose-900 dark:text-rose-200">
                  Beginner Mistake
                </span>
              </div>
            )}
            <div className={isProMode ? '' : 'opacity-90'}>
              {isProMode ? <GoodComponent /> : <BadComponent />}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Design Logic */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
              Design Logic
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {designLogic}
            </p>
          </div>
        </div>
      </div>

      {/* Code Comparison */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setShowCode(!showCode)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setShowCode(!showCode);
            }
          }}
          aria-expanded={showCode}
          aria-controls="code-comparison"
          className="w-full px-6 py-3 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" aria-hidden="true" />
            <span>View Code Comparison</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showCode ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
        
        <AnimatePresence>
          {showCode && (
            <motion.div
              id="code-comparison"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
              role="region"
              aria-label="Code comparison"
            >
              <div className="grid md:grid-cols-2 gap-0 border-t border-slate-200 dark:border-slate-800">
                <div className="border-r border-slate-200 dark:border-slate-800" role="region" aria-label="Beginner code example">
                  <div className="px-4 py-2 bg-rose-50 dark:bg-rose-950/30 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase">
                      Beginner Code
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-800">
                    <SyntaxHighlighter
                      language="tsx"
                      style={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? accessibleDarkTheme : oneLight}
                      customStyle={{
                        margin: 0,
                        borderRadius: 0,
                        fontSize: '0.875rem',
                        padding: '1rem',
                        background: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#1E293B' : '#FFFFFF',
                        color: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#1F2937',
                        lineHeight: '1.6',
                      }}
                      PreTag="pre"
                      CodeTag="code"
                      aria-label="Beginner code example"
                    >
                      {badCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <div role="region" aria-label="Expert code example">
                  <div className="px-4 py-2 bg-purple-50 dark:bg-purple-950/30 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-semibold text-purple-800 dark:text-purple-400 uppercase">
                      Expert Code
                    </span>
                  </div>
                  <div className="bg-white dark:bg-slate-800">
                    <SyntaxHighlighter
                      language="tsx"
                      style={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? accessibleDarkTheme : oneLight}
                      customStyle={{
                        margin: 0,
                        borderRadius: 0,
                        fontSize: '0.875rem',
                        padding: '1rem',
                        background: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#1E293B' : '#FFFFFF',
                        color: typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#1F2937',
                        lineHeight: '1.6',
                      }}
                      PreTag="pre"
                      CodeTag="code"
                      aria-label="Expert code example"
                    >
                      {goodCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

