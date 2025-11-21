import ComparisonCard from '../components/ComparisonCard';

const cognitiveExamples = [
  {
    title: 'Optimal Line Length (60-80 chars)',
    description: 'Limit line length for readability',
    designLogic: 'Line length affects reading speed and comprehension. 60-80 characters is the sweet spot for optimal readability. This is typography best practice that accessibility enforces.',
    badCode: `article {
  width: 100%;
  /* Lines stretch full width, hard to read */
}`,
    goodCode: `article {
  max-width: 65ch; /* ~65 characters */
  margin: 0 auto;
}`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <p className="text-sm leading-relaxed" style={{ maxWidth: '100%' }}>
          This is a very long line of text that stretches across the entire width of the container, making it difficult to read because your eyes have to travel too far from the end of one line to the beginning of the next line, which creates cognitive strain and reduces comprehension.
        </p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <p className="text-sm leading-relaxed max-w-[65ch] mx-auto">
          This is a line of text that is limited to approximately 65 characters, making it much easier to read because your eyes don't have to travel as far, reducing cognitive load and improving comprehension.
        </p>
      </div>
    ),
  },
  {
    title: 'Breadcrumb Navigation',
    description: 'Show location hierarchy',
    designLogic: 'Breadcrumbs show users where they are in the site hierarchy. This reduces disorientation and helps users understand context. It\'s like a "You are here" map.',
    badCode: `<!-- No breadcrumbs, users don't know where they are -->`,
    goodCode: `<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li aria-current="page">Widget</li>
  </ol>
</nav>`,
    BadComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <h2 className="text-lg font-semibold mb-2">Product Page</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">No breadcrumbs - where am I?</p>
      </div>
    ),
    GoodComponent: () => (
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex gap-2 text-sm">
            <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Home</a></li>
            <li className="text-slate-500 dark:text-slate-400">/</li>
            <li><a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Products</a></li>
            <li className="text-slate-500 dark:text-slate-400">/</li>
            <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-medium">Widget</li>
          </ol>
        </nav>
        <h2 className="text-lg font-semibold">Product Page</h2>
      </div>
    ),
  },
];

export default function CognitiveSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Cognitive Load & Neurodiversity
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Universal design principles reduce cognitive load for all users. Plain language, optimal 
          line length, and consistent behavior create a more inclusive experience.
        </p>
      </div>

      <div className="space-y-12">
        {cognitiveExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`10.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

