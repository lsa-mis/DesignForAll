import ComparisonCard from '../components/ComparisonCard';
import {
  AmateurLink1,
  ProLink1,
  AmateurLink2,
  ProLink2,
  AmateurLink3,
  ProLink3,
  AmateurLink4,
  ProLink4,
} from '../components/links/LinkExamples';

const linkExamples = [
  {
    title: 'Meaningful Link Text',
    description: 'Links must be meaningful in isolation',
    designLogic: 'Links should make sense out of context. Users often scan pages by tabbing through links. "Click here" provides no information—it\'s cognitive dead weight.',
    badCode: `<a href="/products">Click here</a>
<a href="/contact">Click here</a>`,
    goodCode: `<a href="/products">View our product catalog</a>
<a href="/contact">Contact our support team</a>`,
    BadComponent: AmateurLink1,
    GoodComponent: ProLink1,
  },
  {
    title: 'Visual Link Affordance',
    description: 'Links must look like links',
    designLogic: 'Links must look like links. Underlines or strong contrast create visual affordance that guides users. Underlining non-links creates false affordances.',
    badCode: `a { color: #333; text-decoration: none; }
.button { text-decoration: underline; }`,
    goodCode: `a {
  color: var(--link-color);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}`,
    BadComponent: AmateurLink2,
    GoodComponent: ProLink2,
  },
  {
    title: 'File Type & Size Context',
    description: 'Identify file type and size for downloads',
    designLogic: 'Users need to know what they\'re downloading. File type and size set expectations and help users prepare. This transparency builds trust.',
    badCode: `<a href="/report.pdf">Download Report</a>`,
    goodCode: `<a href="/report.pdf" download>
  Annual Report <span class="text-sm">(PDF, 2.4 MB)</span>
</a>`,
    BadComponent: AmateurLink3,
    GoodComponent: ProLink3,
  },
  {
    title: 'Context Change Warnings',
    description: 'Warn users before opening new windows',
    designLogic: 'Opening new windows changes context without user consent. Warning users respects user agency and prevents disorientation.',
    badCode: `<a href="/external" target="_blank">External Resource</a>`,
    goodCode: `<a href="/external" target="_blank" rel="noopener noreferrer">
  External Resource 
  <span class="sr-only">(opens in new tab)</span>
  <span aria-hidden="true">↗</span>
</a>`,
    BadComponent: AmateurLink4,
    GoodComponent: ProLink4,
  },
];

export default function LinksSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Hyperlinks and Links
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Links are the navigation arteries of the web. Clear, predictable links create better 
          information architecture and reduce cognitive load.
        </p>
      </div>

      <div className="space-y-12">
        {linkExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`4.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

