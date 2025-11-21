import ComparisonCard from '../components/ComparisonCard';

const componentsExamples = [
  {
    title: 'Reduced Motion Respect',
    description: 'Respect prefers-reduced-motion media query',
    designLogic: 'Some users experience motion sickness or vestibular disorders. Respecting prefers-reduced-motion shows empathy and creates a more inclusive experience.',
    badCode: `.slide-in {
  animation: slide 0.3s ease-out;
}
/* No reduced motion support */`,
    goodCode: `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
.slide-in {
  animation: slide 0.3s ease-out;
}`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="animate-pulse bg-indigo-500 h-20 rounded"></div>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">Always animates, ignores user preference</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="bg-indigo-500 h-20 rounded"></div>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">✓ Respects prefers-reduced-motion</p>
      </div>
    ),
  },
];

export default function ComponentsSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Advanced Components and Motion
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Advanced components like modals, tooltips, and animations need careful attention to 
          accessibility. Focus management and motion preferences are key.
        </p>
      </div>

      <div className="space-y-12">
        {componentsExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`8.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

