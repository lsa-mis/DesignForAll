import ComparisonCard from '../components/ComparisonCard';
import {
  AmateurKeyboard1,
  ProKeyboard1,
  AmateurKeyboard2,
  ProKeyboard2,
  AmateurKeyboard3,
  ProKeyboard3,
} from '../components/keyboard/KeyboardExamples';

const keyboardExamples = [
  {
    title: 'All Elements Reachable',
    description: 'All interactive elements must be keyboard-accessible',
    designLogic: 'Every interactive element must be keyboard-accessible. If it\'s not reachable by Tab, it\'s not truly accessible. This ensures feature parity across input methods.',
    badCode: `<div onclick="doSomething()">Click Me</div>`,
    goodCode: `<button onClick={handleClick}>Click Me</button>`,
    BadComponent: AmateurKeyboard1,
    GoodComponent: ProKeyboard1,
  },
  {
    title: 'Visible Focus Indicators',
    description: 'Focus styles must be visible and high contrast',
    designLogic: 'Focus indicators show users where they are. High-contrast focus styles provide essential feedback. Removing them creates an invisible, confusing experience.',
    badCode: `* { outline: none; }`,
    goodCode: `*:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 2px;
}`,
    BadComponent: AmateurKeyboard2,
    GoodComponent: ProKeyboard2,
  },
  {
    title: 'Skip to Main Content',
    description: 'Provide skip link as first focusable element',
    designLogic: 'Skip links allow keyboard users to bypass repetitive navigation. This is like having a "fast-forward" button—it respects users\' time and reduces frustration.',
    badCode: `<nav>...</nav>
<main>...</main>`,
    goodCode: `<a href="#main-content" class="skip-link">
  Skip to main content
</a>
<nav>...</nav>
<main id="main-content" tabindex="-1">...</main>`,
    BadComponent: AmateurKeyboard3,
    GoodComponent: ProKeyboard3,
  },
];

export default function KeyboardSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Keyboard Navigation and Focus
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Not everyone uses a mouse. Keyboard-only operation ensures your interface is accessible 
          to all users and devices. This constraint forces clear, logical interaction patterns.
        </p>
      </div>

      <div className="space-y-12">
        {keyboardExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`5.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

