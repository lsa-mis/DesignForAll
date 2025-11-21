import ComparisonCard from '../components/ComparisonCard';

const languageExamples = [
  {
    title: 'Language Declaration',
    description: 'Declare html lang attribute',
    designLogic: 'Declaring language sets pronunciation, text direction, and cultural expectations. It\'s like setting the stage for a performance—everything that follows makes more sense when the context is clear.',
    badCode: `<html>
  <head>...</head>
  <body>...</body>
</html>`,
    goodCode: `<html lang="en">
  <head>...</head>
  <body>...</body>
</html>`,
    BadComponent: () => <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded"><p>No lang attribute</p></div>,
    GoodComponent: () => <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded"><p className="text-sm">✓ html lang="en" declared</p></div>,
  },
  {
    title: 'Relative Text Units',
    description: 'Use rem and em instead of px',
    designLogic: 'Using rem and em creates a scalable typographic system. When users zoom, your entire design scales proportionally, maintaining visual harmony.',
    badCode: `body { font-size: 16px; }
p { font-size: 14px; }
h1 { font-size: 40px; }`,
    goodCode: `:root {
  --font-base: 1rem; /* 16px base */
  --font-sm: 0.875rem; /* 14px */
}
body { font-size: var(--font-base); }
h1 { font-size: 2.5rem; }`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <p style={{ fontSize: '14px' }}>Fixed pixels - doesn't scale</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <p className="text-base">Relative units - scales with zoom</p>
      </div>
    ),
  },
];

export default function LanguageSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Language and Text Handling
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Language declarations and scalable typography create a foundation for internationalization 
          and user customization.
        </p>
      </div>

      <div className="space-y-12">
        {languageExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`2.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

