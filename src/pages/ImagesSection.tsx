import ComparisonCard from '../components/ComparisonCard';

const imagesExamples = [
  {
    title: 'Concise Alt Text',
    description: 'Alt text should be concise and meaningful',
    designLogic: 'Alt text should convey the image\'s purpose, not describe every detail. It\'s like a headline—concise and meaningful.',
    badCode: `<img src="chart.png" alt="A bar chart showing quarterly sales data with blue bars representing revenue in millions of dollars..." />`,
    goodCode: `<img src="chart.png" alt="Sales increased 23% in Q3" />`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="w-32 h-32 bg-slate-300 dark:bg-slate-700 rounded flex items-center justify-center text-xs text-center p-2">
          Image with verbose alt text (announced fully)
        </div>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <div className="w-32 h-32 bg-slate-300 dark:bg-slate-700 rounded flex items-center justify-center text-xs text-center p-2">
          Image with concise alt: "Sales +23%"
        </div>
      </div>
    ),
  },
  {
    title: 'Functional Icon Labels',
    description: 'Icons need text labels describing the action',
    designLogic: 'Icons need text labels that describe the action, not the appearance. "Close" is better than "X icon." This creates clear affordance.',
    badCode: `<button><span class="icon">×</span></button>`,
    goodCode: `<button aria-label="Close dialog">
  <span class="icon" aria-hidden="true">×</span>
</button>`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <button className="w-8 h-8 flex items-center justify-center bg-slate-300 dark:bg-slate-700 rounded">
          <span>×</span>
        </button>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">No label - unclear action</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <button 
          aria-label="Close dialog"
          className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span aria-hidden="true">×</span>
        </button>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">✓ aria-label="Close dialog"</p>
      </div>
    ),
  },
];

export default function ImagesSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Images and Multimedia
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Images and media need proper alternatives to be accessible. Alt text, captions, and 
          transcripts ensure all users can access the information.
        </p>
      </div>

      <div className="space-y-12">
        {imagesExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`7.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

