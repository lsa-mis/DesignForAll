import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/40 rounded-full text-indigo-800 dark:text-indigo-300 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Accessibility as a Design Superpower</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Design for All
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Transform accessibility constraints into design excellence. Learn how WCAG 2.2 principles 
          create cleaner, more robust, and more beautiful user interfaces.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 mb-12"
      >
        <blockquote className="text-lg text-slate-700 dark:text-slate-300 italic border-l-4 border-indigo-600 pl-6">
          "Accessibility is not a checklist. It is a constraint that forces better, cleaner, 
          and more robust UI design."
        </blockquote>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6"
        >
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
            Interactive Learning
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Toggle between "Amateur" and "Pro" implementations to see the difference. 
            Every example is a live, interactive component you can explore.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6"
        >
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
            Design Logic Explained
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Understand the "why" behind each principle. Learn how accessibility constraints 
            lead to better visual hierarchy, reduced cognitive load, and improved affordance.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-indigo-600 rounded-xl p-8 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-indigo-100 mb-6">
          Begin with Section 3: Forms, Inputs, and Errors—the most visually convincing demonstration 
          of how accessibility creates better design.
        </p>
        <Link
          to="/section/forms"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-indigo-950 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-indigo-600"
        >
          Explore Forms Section
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}

