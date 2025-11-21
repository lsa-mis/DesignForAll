import ComparisonCard from '../components/ComparisonCard';
import {
  AmateurAccordion,
  ProAccordion,
  AmateurModal,
  ProModal,
  AmateurTabs,
  ProTabs,
  AmateurCarousel,
  ProCarousel,
  AmateurDropdown,
  ProDropdown,
  AmateurDataTable,
  ProDataTable,
  AmateurSearch,
  ProSearch,
  AmateurToggle,
  ProToggle,
  AmateurProgress,
  ProProgress,
  AmateurToast,
  ProToast,
  AmateurGallery,
  ProGallery,
} from '../components/advanced/AdvancedExamples';
import {
  AmateurMegaMenu,
  ProMegaMenu,
  AmateurStepper,
  ProStepper,
  AmateurTooltip,
  ProTooltip,
  AmateurCardGrid,
  ProCardGrid,
  AmateurChart,
  ProChart,
  AmateurMediaPlayer,
  ProMediaPlayer,
  AmateurChatWidget,
  ProChatWidget,
  AmateurLayoutTable,
  ProLayoutTable,
} from '../components/advanced/AdvancedExamples2';

const advancedExamples = [
  {
    title: 'Accordions / Disclosure Widgets',
    description: 'Collapsible content sections with proper ARIA attributes',
    designLogic: 'Accordions need proper button semantics, aria-expanded, and aria-controls to communicate state to assistive technology. This creates predictable, keyboard-accessible interactions.',
    badCode: `<div onClick={() => setOpen(!open)}>
  <span>Section Title</span>
</div>`,
    goodCode: `<button
  aria-expanded={open}
  aria-controls="accordion-content"
  onClick={() => setOpen(!open)}
>
  Section Title
</button>
<div id="accordion-content">...</div>`,
    BadComponent: AmateurAccordion,
    GoodComponent: ProAccordion,
  },
  {
    title: 'Modal Dialogs',
    description: 'Focus management and backdrop handling',
    designLogic: 'Modals must trap focus, move focus to the first element on open, return focus on close, and make the background inert. This maintains spatial context and prevents users from getting lost.',
    badCode: `{open && (
  <div className="overlay">
    <div>Modal content</div>
  </div>
)}`,
    goodCode: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Modal Title</h2>
  <!-- Focus management -->
  <!-- Escape key handling -->
</div>`,
    BadComponent: AmateurModal,
    GoodComponent: ProModal,
  },
  {
    title: 'Tab Interfaces',
    description: 'Arrow key navigation and proper ARIA roles',
    designLogic: 'Tabs should use Arrow keys for internal navigation (not Tab). Tab moves between components; Arrows move within components. This creates intuitive, native-feeling interactions.',
    badCode: `<div onClick={() => setActive(0)}>Tab 1</div>
<div onClick={() => setActive(1)}>Tab 2</div>`,
    goodCode: `<div role="tablist">
  <button role="tab" aria-selected={active === 0}>
    Tab 1
  </button>
</div>
<div role="tabpanel">Content</div>`,
    BadComponent: AmateurTabs,
    GoodComponent: ProTabs,
  },
  {
    title: 'Carousels / Image Sliders',
    description: 'Play/pause controls and keyboard navigation',
    designLogic: 'Carousels need play/pause controls, keyboard navigation, and proper ARIA live regions. Auto-playing content should be stoppable to respect user agency.',
    badCode: `<div className="carousel">
  <button onClick={prev}>←</button>
  <button onClick={next}>→</button>
</div>`,
    goodCode: `<div aria-label="Image carousel" aria-live="polite">
  <button aria-label="Previous slide">←</button>
  <button aria-label={paused ? 'Play' : 'Pause'}>⏸</button>
  <button aria-label="Next slide">→</button>
</div>`,
    BadComponent: AmateurCarousel,
    GoodComponent: ProCarousel,
  },
  {
    title: 'Custom Dropdowns / Select Menus',
    description: 'Listbox pattern with keyboard navigation',
    designLogic: 'Custom dropdowns must implement the listbox pattern with proper ARIA roles, keyboard navigation (Arrow keys, Enter, Escape), and focus management.',
    badCode: `<div onClick={() => setOpen(!open)}>
  Select option
</div>
{open && <div>Options...</div>}`,
    goodCode: `<button aria-haspopup="listbox" aria-expanded={open}>
  Select option
</button>
<ul role="listbox">
  <li role="option">Option 1</li>
</ul>`,
    BadComponent: AmateurDropdown,
    GoodComponent: ProDropdown,
  },
  {
    title: 'Data Tables (Sortable)',
    description: 'Sortable columns with proper table semantics',
    designLogic: 'Sortable tables need proper table semantics (th, caption), aria-sort attributes, and keyboard-accessible sort controls. This makes data accessible to screen reader users.',
    badCode: `<div className="table">
  <div className="row">
    <div className="cell">Name</div>
  </div>
</div>`,
    goodCode: `<table>
  <caption>User Data Table</caption>
  <thead>
    <tr>
      <th>
        <button aria-sort="ascending">Name ↑</button>
      </th>
    </tr>
  </thead>
</table>`,
    BadComponent: AmateurDataTable,
    GoodComponent: ProDataTable,
  },
  {
    title: 'Search Autocomplete / Typeahead',
    description: 'Combobox pattern with live results',
    designLogic: 'Search components need the combobox pattern with aria-autocomplete, aria-controls, and keyboard navigation through results. This creates a predictable, accessible search experience.',
    badCode: `<input type="text" />
{results && <div>Results...</div>}`,
    goodCode: `<input
  aria-autocomplete="list"
  aria-controls="search-results"
  aria-expanded={results.length > 0}
/>
<ul id="search-results" role="listbox">
  <li role="option">Result</li>
</ul>`,
    BadComponent: AmateurSearch,
    GoodComponent: ProSearch,
  },
  {
    title: 'Custom Toggle Switches',
    description: 'Switch role with proper state communication',
    designLogic: 'Toggle switches need the switch role, aria-checked, and clear visual state. This communicates the current state to assistive technology.',
    badCode: `<div onClick={() => setOn(!on)}>
  <div className={on ? 'on' : 'off'} />
</div>`,
    goodCode: `<button
  role="switch"
  aria-checked={on}
  onClick={() => setOn(!on)}
>
  <span className="sr-only">Toggle {on ? 'on' : 'off'}</span>
</button>`,
    BadComponent: AmateurToggle,
    GoodComponent: ProToggle,
  },
  {
    title: 'Navigation Menus (Mega Menus)',
    description: 'Multi-level navigation with keyboard support',
    designLogic: 'Mega menus need proper ARIA menu roles, keyboard navigation, and focus management. They should work with both mouse and keyboard, and remain open when navigating with keyboard.',
    badCode: `<div onMouseEnter={() => setOpen(true)}>
  <button>Products</button>
  {open && <div>Menu items...</div>}
</div>`,
    goodCode: `<div>
  <button
    aria-expanded={open}
    aria-haspopup="true"
    aria-controls="mega-menu"
  >
    Products
  </button>
  <div id="mega-menu" role="menu">
    <a role="menuitem">Item</a>
  </div>
</div>`,
    BadComponent: AmateurMegaMenu,
    GoodComponent: ProMegaMenu,
  },
  {
    title: 'Progress Bars / Steppers',
    description: 'Progress indicators with current state',
    designLogic: 'Progress indicators need role="progressbar" with aria-valuenow, or proper step navigation with aria-current. This communicates progress to assistive technology.',
    badCode: `<div className="progress">
  <div style={{ width: '60%' }} />
</div>`,
    goodCode: `<div
  role="progressbar"
  aria-valuenow={60}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Progress"
>
  <div style={{ width: '60%' }} />
</div>`,
    BadComponent: AmateurProgress,
    GoodComponent: ProProgress,
  },
  {
    title: 'Steppers / Multi-step Forms',
    description: 'Step navigation with current step indication',
    designLogic: 'Steppers need clear indication of current step, completed steps, and remaining steps. This helps users understand their progress and location in a multi-step process.',
    badCode: `<div className="steps">
  <div className={step >= 1 ? 'active' : ''}>1</div>
  <div className={step >= 2 ? 'active' : ''}>2</div>
</div>`,
    goodCode: `<nav aria-label="Progress">
  <ol role="list">
    <li aria-current={isCurrent ? 'step' : undefined}>
      <div aria-label="Step 1, completed">✓</div>
    </li>
  </ol>
</nav>`,
    BadComponent: AmateurStepper,
    GoodComponent: ProStepper,
  },
  {
    title: 'Toast Notifications / Alerts',
    description: 'Non-intrusive announcements with aria-live',
    designLogic: 'Toast notifications need role="alert" or aria-live regions to announce to screen readers. They should be dismissible and not steal focus from the user\'s current task.',
    badCode: `<div className="toast">
  Notification message
</div>`,
    goodCode: `<div
  role="alert"
  aria-live="polite"
  className="toast"
>
  <button aria-label="Close">×</button>
  Notification message
</div>`,
    BadComponent: AmateurToast,
    GoodComponent: ProToast,
  },
  {
    title: 'Image Galleries',
    description: 'Keyboard navigation and image descriptions',
    designLogic: 'Image galleries need keyboard navigation, proper alt text for each image, and clear indication of which image is currently displayed. This makes galleries accessible to all users.',
    badCode: `<div className="gallery">
  {images.map(img => (
    <img src={img.src} />
  ))}
</div>`,
    goodCode: `<div role="tablist" aria-label="Image gallery">
  {images.map((img, i) => (
    <button
      role="tab"
      aria-selected={selected === i}
      aria-controls={"image-" + i}
    >
      <img src={img.src} alt={img.alt} />
    </button>
  ))}
</div>`,
    BadComponent: AmateurGallery,
    GoodComponent: ProGallery,
  },
  {
    title: 'Card Grids with Keyboard Navigation',
    description: 'Grid navigation with arrow keys',
    designLogic: 'Card grids need keyboard navigation with Arrow keys to move between cards. This allows keyboard users to navigate grid layouts efficiently.',
    badCode: `<div className="grid">
  {cards.map(card => (
    <div onClick={handleClick}>{card}</div>
  ))}
</div>`,
    goodCode: `<div role="grid">
  {cards.map((card, i) => (
    <button
      role="gridcell"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') {
          // navigate to next card
        }
      }}
    >
      {card}
    </button>
  ))}
</div>`,
    BadComponent: AmateurCardGrid,
    GoodComponent: ProCardGrid,
  },
  {
    title: 'Interactive Charts or Graphs',
    description: 'Text alternatives and data descriptions',
    designLogic: 'Charts need text alternatives (figcaption or aria-label) describing the data. This ensures users who cannot see the visual can still access the information.',
    badCode: `<div className="chart">
  <div className="bar" style={{ height: '60%' }} />
</div>`,
    goodCode: `<figure>
  <div role="img" aria-label="Bar chart showing Q1: 60%, Q2: 80%">
    <div aria-label="Q1: 60%" />
  </div>
  <figcaption>Quarterly performance data</figcaption>
</figure>`,
    BadComponent: AmateurChart,
    GoodComponent: ProChart,
  },
  {
    title: 'Media Players (Audio/Video)',
    description: 'Accessible controls and captions',
    designLogic: 'Media players need accessible controls (play/pause, volume, progress), proper labels, and support for captions/transcripts. This makes media accessible to all users.',
    badCode: `<div className="player">
  <button>▶</button>
  <div className="progress" />
</div>`,
    goodCode: `<div role="application" aria-label="Media player">
  <button aria-label="Play">▶</button>
  <div role="slider" aria-label="Progress" />
  <input type="range" aria-label="Volume" />
</div>`,
    BadComponent: AmateurMediaPlayer,
    GoodComponent: ProMediaPlayer,
  },
  {
    title: 'Chat Widgets / Floating Action Buttons',
    description: 'Accessible floating UI elements',
    designLogic: 'Floating widgets need proper ARIA labels, keyboard accessibility, and focus management when opened. They should not trap focus unnecessarily and should be dismissible.',
    badCode: `<div className="fixed bottom-4 right-4">
  <button>💬</button>
</div>`,
    goodCode: `<button
  aria-label="Open chat"
  aria-expanded={open}
  className="fixed bottom-4 right-4"
>
  💬
</button>
{open && (
  <div role="dialog" aria-label="Chat support">
    {/* Chat content */}
  </div>
)}`,
    BadComponent: AmateurChatWidget,
    GoodComponent: ProChatWidget,
  },
  {
    title: 'Tooltips and Hover Cards',
    description: 'Keyboard accessible and dismissible',
    designLogic: 'Tooltips need to be keyboard accessible (via focus), dismissible with Escape, and should not disappear when the mouse moves to the tooltip itself.',
    badCode: `<div className="group">
  <button>Hover me</button>
  <div className="hidden group-hover:block">Tooltip</div>
</div>`,
    goodCode: `<button aria-describedby="tooltip-1">
  Hover or focus me
</button>
<div
  id="tooltip-1"
  role="tooltip"
  onKeyDown={(e) => {
    if (e.key === 'Escape') hide();
  }}
>
  Tooltip text
</div>`,
    BadComponent: AmateurTooltip,
    GoodComponent: ProTooltip,
  },
  {
    title: 'Tables for Layout vs. Data',
    description: 'Use CSS Grid instead of tables for layout',
    designLogic: 'Tables should only be used for tabular data, not layout. Using CSS Grid or Flexbox for layout creates more flexible, accessible designs that work better on all devices.',
    badCode: `<table>
  <tr>
    <td>Sidebar</td>
    <td>Main Content</td>
  </tr>
</table>`,
    goodCode: `<div className="grid grid-cols-[200px_1fr]">
  <aside>Sidebar</aside>
  <main>Main Content</main>
</div>`,
    BadComponent: AmateurLayoutTable,
    GoodComponent: ProLayoutTable,
  },
];

export default function AdvancedComponentsSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Advanced Interactive Components
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Complex interactive components need careful attention to accessibility. From modals and 
          tabs to carousels and data tables, each component has specific ARIA patterns and keyboard 
          navigation requirements.
        </p>
      </div>

      <div className="space-y-12">
        {advancedExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`Advanced.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

