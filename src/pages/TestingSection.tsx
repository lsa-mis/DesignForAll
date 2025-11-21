import ComparisonCard from '../components/ComparisonCard';

const testingExamples = [
  {
    title: 'Keyboard Walkthrough',
    description: 'Test all functionality with keyboard only',
    designLogic: 'Testing with keyboard (Tab, Shift+Tab, Enter, Esc, Space, Arrows) validates that your interface works for all input methods. This catches issues that visual testing misses.',
    badCode: `// Only tested with mouse clicks
// Keyboard navigation not verified`,
    goodCode: `// Test checklist:
// ✓ Tab through all interactive elements
// ✓ Shift+Tab reverses order
// ✓ Enter/Space activate buttons
// ✓ Esc closes modals
// ✓ Arrows navigate radio groups/tabs`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <p className="text-sm text-slate-600 dark:text-slate-400">❌ Mouse-only testing</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <p className="text-sm text-slate-600 dark:text-slate-400">✓ Comprehensive keyboard testing</p>
      </div>
    ),
  },
  {
    title: 'Zoom Testing (200%)',
    description: 'Test layout at 200% browser zoom',
    designLogic: 'Testing at 200% zoom ensures your layout remains usable at high zoom levels. This validates that your responsive design truly works across different viewing contexts.',
    badCode: `.container { width: 1200px; }
/* Horizontal scroll appears at 200% */`,
    goodCode: `article {
  max-width: 65ch;
  margin: 0 auto;
}
/* No horizontal scroll at 200% */`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="w-full overflow-x-auto">
          <div className="w-[1200px] bg-slate-300 dark:bg-slate-700 h-20 rounded"></div>
        </div>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">Fixed width - breaks at zoom</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="max-w-2xl mx-auto bg-slate-300 dark:bg-slate-700 h-20 rounded"></div>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">✓ Responsive - works at any zoom</p>
      </div>
    ),
  },
];

export default function TestingSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Testing
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Accessibility testing validates that your design works for all users. Keyboard testing, 
          zoom testing, and screen reader testing catch issues that visual testing misses.
        </p>
      </div>

      <div className="space-y-12">
        {testingExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`9.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

