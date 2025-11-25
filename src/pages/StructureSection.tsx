import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ComparisonCard from '../components/ComparisonCard';
import {
  BeginnerHeadings1,
  ExpertHeadings1,
  BeginnerHeadings2,
  ExpertHeadings2,
  BeginnerHeadings3,
  ExpertHeadings3,
  BeginnerLandmarks,
  ExpertLandmarks,
  BeginnerList,
  ExpertList,
  BeginnerTable,
  ExpertTable,
} from '../components/structure/StructureExamples';

const structureExamples = [
  {
    title: 'Sequential Headings',
    description: 'Organize headings to form a clear, logical outline',
    designLogic: 'Just as you use font-weight and color to guide the eye, HTML tags establish the document\'s structural "skeleton." Skipping levels (e.g., H1 to H4) creates a disjointed outline, making the content feel "messy" to both machines and humans.',
    badCode: `<h1>Title</h1>
<h4>Subtitle</h4>`,
    goodCode: `<h1 class="text-3xl font-bold">Page Title</h1>
<h2 class="text-2xl font-semibold">Section</h2>
<h3 class="text-xl font-medium">Subsection</h3>`,
    BadComponent: BeginnerHeadings1,
    GoodComponent: ExpertHeadings1,
  },
  {
    title: 'Single H1 Per Page',
    description: 'Ensure there is only one H1 per page',
    designLogic: 'In design, you establish one primary focal point. The H1 is that focal point for content. Multiple H1s create visual confusion and dilute the page\'s purpose.',
    badCode: `<h1>Site Logo</h1>
<h1>Page Title</h1>
<h1>Banner</h1>`,
    goodCode: `<h1 class="sr-only">Dashboard</h1>
<header>
  <h2 class="text-2xl">Welcome Back</h2>
</header>`,
    BadComponent: BeginnerHeadings2,
    GoodComponent: ExpertHeadings2,
  },
  {
    title: 'Descriptive Headings',
    description: 'Use short, descriptive headings',
    designLogic: 'Short, descriptive headings act as "signposts" that help users scan and understand content quickly. Long, vague headings force users to read entire paragraphs to understand context.',
    badCode: `<h2>Information</h2>
<h2>Details About Your Purchase and What Happens Next</h2>`,
    goodCode: `<h2>Order Confirmation</h2>
<h2>Shipping Address</h2>`,
    BadComponent: BeginnerHeadings3,
    GoodComponent: ExpertHeadings3,
  },
  {
    title: 'Semantic Landmarks',
    description: 'Use semantic HTML5 elements for page structure',
    designLogic: 'Landmarks (header, nav, main, aside, footer) create a mental map of the page. They\'re like chapters in a book—users can jump directly to what they need.',
    badCode: `<div class="header">...</div>
<div class="content">...</div>
<div class="sidebar">...</div>`,
    goodCode: `<header>
  <nav aria-label="Main navigation">...</nav>
</header>
<main id="main-content">...</main>
<aside aria-label="Related links">...</aside>`,
    BadComponent: BeginnerLandmarks,
    GoodComponent: ExpertLandmarks,
  },
  {
    title: 'Real Lists',
    description: 'Lists must be real ul or ol elements',
    designLogic: 'Real ul and ol elements provide native indentation, bullets/numbers, and list spacing. This creates consistent vertical rhythm.',
    badCode: `<div class="list">
  <div class="item">• First item</div>
  <div class="item">• Second item</div>
</div>`,
    goodCode: `<ul class="space-y-2">
  <li>First item</li>
  <li>Second item</li>
</ul>`,
    BadComponent: BeginnerList,
    GoodComponent: ExpertList,
  },
  {
    title: 'Semantic Tables',
    description: 'Tables are for data only, use semantic structure',
    designLogic: 'Tables are for tabular data, not layout. Using th and caption creates a clear data model that both humans and machines understand.',
    badCode: `<div class="table">
  <div class="row">
    <div class="cell">Month</div>
  </div>
</div>`,
    goodCode: `<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr><th>Month</th><th>Revenue</th></tr>
  </thead>
  <tbody>...</tbody>
</table>`,
    BadComponent: BeginnerTable,
    GoodComponent: ExpertTable,
  },
];

export default function StructureSection() {
  const location = useLocation();

  // Scroll to section when hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(elementId);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Page Structure & Semantics
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          The foundation of accessible design. Semantic HTML creates a clear information architecture 
          that works for both humans and machines.
        </p>
      </div>

      <div className="space-y-12">
        {structureExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`1.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

