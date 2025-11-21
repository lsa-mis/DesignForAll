import ComparisonCard from '../components/ComparisonCard';

const ergonomicsExamples = [
  {
    title: 'Minimum Touch Target (44x44px)',
    description: 'Touch targets must be at least 44x44 CSS pixels',
    designLogic: 'Larger targets are easier to hit. 44x44px is the minimum for comfortable touch interaction. This reduces errors and creates a more pleasant mobile experience.',
    badCode: `button {
  width: 20px;
  height: 20px;
  /* Too small, hard to tap */
}`,
    goodCode: `button {
  min-width: 44px;
  min-height: 44px;
  padding: 0.75rem 1rem;
}`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <button className="w-5 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
          ×
        </button>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">20x20px - too small</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <button className="w-11 h-11 bg-indigo-600 hover:bg-indigo-700 rounded text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500">
          ×
        </button>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">44x44px - comfortable size</p>
      </div>
    ),
  },
  {
    title: 'Touch Target Spacing (8px min)',
    description: 'Minimum 8px spacing between touch targets',
    designLogic: 'Spacing between touch targets prevents accidental taps. 8px minimum spacing reduces errors and creates a cleaner, more professional layout.',
    badCode: `.button-group {
  display: flex;
  /* No gap, buttons too close */
}`,
    goodCode: `.button-group {
  display: flex;
  gap: 0.5rem; /* 8px minimum */
}`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="flex gap-0">
          <button className="px-3 py-2 bg-blue-500 text-white rounded-l">Save</button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-r">Cancel</button>
        </div>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">No spacing - accidental taps</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">Save</button>
          <button className="px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-slate-500">Cancel</button>
        </div>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">✓ 8px spacing - safe to tap</p>
      </div>
    ),
  },
];

export default function ErgonomicsSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Ergonomics (Touch & Fitts's Law)
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Touch targets and spacing follow Fitts's Law—larger, well-spaced targets are easier to 
          hit and reduce errors. This creates a more comfortable mobile experience.
        </p>
      </div>

      <div className="space-y-12">
        {ergonomicsExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`11.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

