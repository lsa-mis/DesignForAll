import ComparisonCard from '../components/ComparisonCard';
import {
  AmateurColor1,
  ProColor1,
  AmateurColor2,
  ProColor2,
} from '../components/color/ColorExamples';

const colorExamples = [
  {
    title: 'Text Contrast (4.5:1)',
    description: 'Normal text requires sufficient contrast ratio',
    designLogic: 'Sufficient contrast ensures text is readable for everyone, including users with low vision or in bright sunlight. This isn\'t just accessibility—it\'s fundamental typography.',
    badCode: `body {
  color: #999999; /* 2.8:1 - fails contrast */
  background: #ffffff;
}`,
    goodCode: `:root {
  --text-primary: #1a1a1a; /* 16.8:1 on white */
  --bg: #ffffff;
}
body {
  color: var(--text-primary);
  background: var(--bg);
}`,
    BadComponent: AmateurColor1,
    GoodComponent: ProColor1,
  },
  {
    title: 'Meaning Beyond Color',
    description: 'Do not use color alone to convey meaning',
    designLogic: 'Using color alone to convey meaning excludes 8% of men (colorblind). Adding icons, patterns, or text creates redundant information channels that work for everyone.',
    badCode: `<div class="status red">Warning</div>
<div class="chart">
  <div class="bar red"></div>
  <div class="bar blue"></div>
</div>`,
    goodCode: `<div class="status">
  <span class="icon">⚠️</span>
  <span class="text">Warning: Low battery</span>
</div>
<div class="chart">
  <div class="bar" style="height: 60%">
    <span class="label">Q1: 60%</span>
  </div>
</div>`,
    BadComponent: AmateurColor2,
    GoodComponent: ProColor2,
  },
];

export default function ColorSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Color, Contrast, and Visual Cues
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Color is powerful, but it shouldn't be the only way to communicate. Sufficient contrast 
          and redundant information channels ensure your design works for everyone.
        </p>
      </div>

      <div className="space-y-12">
        {colorExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`6.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

