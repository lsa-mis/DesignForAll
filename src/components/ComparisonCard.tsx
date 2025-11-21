import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
              Amateur
            </span>
            <button
              onClick={() => setIsProMode(!isProMode)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isProMode
                  ? 'bg-purple-600 focus:ring-purple-500'
                  : 'bg-rose-500 focus:ring-rose-500'
              }`}
              aria-label={`Switch to ${isProMode ? 'amateur' : 'pro'} mode`}
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
              Pro
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
      <div className="relative min-h-[300px] p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={isProMode ? 'pro' : 'amateur'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`${
              isProMode
                ? 'bg-pro-bg border-pro-border'
                : 'bg-amateur-bg border-amateur-border'
            } rounded-lg border-2 p-6 transition-colors`}
          >
            {isProMode ? (
              <div className="flex items-start gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-purple-700 dark:text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-purple-800 dark:text-purple-400">
                  Pro Implementation
                </span>
              </div>
            ) : (
              <div className="flex items-start gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
                  Amateur Mistake
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
          className="w-full px-6 py-3 flex items-center justify-between text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>View Code Comparison</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showCode ? 'rotate-180' : ''}`}
          />
        </button>
        
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0 border-t border-slate-200 dark:border-slate-800">
                <div className="border-r border-slate-200 dark:border-slate-800">
                  <div className="px-4 py-2 bg-rose-50 dark:bg-rose-950/20 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase">
                      Amateur Code
                    </span>
                  </div>
                  <SyntaxHighlighter
                    language="tsx"
                    style={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? vscDarkPlus : oneLight}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      fontSize: '0.875rem',
                      padding: '1rem',
                    }}
                  >
                    {badCode}
                  </SyntaxHighlighter>
                </div>
                <div>
                  <div className="px-4 py-2 bg-purple-50 dark:bg-purple-950/30 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-semibold text-purple-800 dark:text-purple-400 uppercase">
                      Pro Code
                    </span>
                  </div>
                  <SyntaxHighlighter
                    language="tsx"
                    style={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? vscDarkPlus : oneLight}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      fontSize: '0.875rem',
                      padding: '1rem',
                    }}
                  >
                    {goodCode}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

