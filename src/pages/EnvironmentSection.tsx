import ComparisonCard from '../components/ComparisonCard';

const environmentExamples = [
  {
    title: 'Dark Mode Support',
    description: 'Respect prefers-color-scheme media query',
    designLogic: 'Dark mode reduces eye strain in low-light environments and is preferred by many users. Respecting prefers-color-scheme shows you care about user comfort.',
    badCode: `body {
  background: #ffffff;
  color: #1a1a1a;
}
/* No dark mode support */`,
    goodCode: `:root {
  --bg: #ffffff;
  --text: #1a1a1a;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #ffffff;
  }
}`,
    BadComponent: () => (
      <div className="p-4 bg-white border border-slate-300 rounded">
        <p className="text-slate-900">Always light mode</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded">
        <p className="text-slate-900 dark:text-slate-100">✓ Adapts to system preference</p>
      </div>
    ),
  },
  {
    title: 'RTL Support (Logical Properties)',
    description: 'Use logical properties for internationalization',
    designLogic: 'Using logical properties (margin-inline-start instead of margin-left) ensures your layout works for RTL languages. This future-proofs your design.',
    badCode: `.card {
  margin-left: 1rem;
  padding-right: 1rem;
  /* Requires separate RTL stylesheet */
}`,
    goodCode: `.card {
  margin-inline-start: 1rem;
  padding-inline-end: 1rem;
  /* Automatically flips for RTL */
}`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="p-3 bg-white dark:bg-slate-900 rounded" style={{ marginLeft: '1rem' }}>
          <p className="text-sm">Fixed left margin - breaks RTL</p>
        </div>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="p-3 bg-white dark:bg-slate-900 rounded ml-4">
          <p className="text-sm">✓ Logical properties - works RTL</p>
        </div>
      </div>
    ),
  },
];

export default function EnvironmentSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Environment & Adaptability
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Your design should adapt to user preferences and environments. Dark mode, RTL support, 
          and data-saving modes create a more inclusive, respectful experience.
        </p>
      </div>

      <div className="space-y-12">
        {environmentExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`12.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

