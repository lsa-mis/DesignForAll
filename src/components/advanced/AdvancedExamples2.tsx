// More Advanced Interactive Components Examples

import { useState, useEffect, useRef } from 'react';

// Navigation Menu (Mega Menu) - Bad
export function AmateurMegaMenu() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        <button className="px-4 py-2">Products</button>
        {open && (
          <div className="absolute top-full left-0 bg-white dark:bg-slate-900 p-4 shadow-lg">
            <a href="/products/1" className="block py-2">Product 1</a>
            <a href="/products/2" className="block py-2">Product 2</a>
            <a href="/products/3" className="block py-2">Product 3</a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Navigation Menu (Mega Menu) - Good
export function ProMegaMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (open && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [open]);
  
  return (
    <nav>
      <div 
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setOpen(false);
          }
        }}
      >
        <button
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls="mega-menu"
          className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Products
        </button>
        {open && (
          <div
            ref={menuRef}
            id="mega-menu"
            role="menu"
            className="absolute top-full left-0 bg-white dark:bg-slate-900 p-4 shadow-xl rounded-lg min-w-[200px] z-50"
          >
            <a href="/products/1" role="menuitem" className="block py-2 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
              Product 1
            </a>
            <a href="/products/2" role="menuitem" className="block py-2 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
              Product 2
            </a>
            <a href="/products/3" role="menuitem" className="block py-2 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
              Product 3
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Stepper - Bad
export function AmateurStepper() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          1
        </div>
        <div className="w-16 h-1 bg-gray-300"></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          2
        </div>
        <div className="w-16 h-1 bg-gray-300"></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          3
        </div>
      </div>
      <button onClick={() => setStep(Math.min(step + 1, 3))}>Next</button>
    </div>
  );
}

// Stepper - Good
export function ProStepper() {
  const [step, setStep] = useState(1);
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  
  return (
    <div>
      <nav aria-label="Progress">
        <ol className="flex items-center" role="list">
          {steps.map((label, i) => {
            const stepNum = i + 1;
            const isComplete = step > stepNum;
            const isCurrent = step === stepNum;
            
            return (
              <li key={i} className="flex items-center" aria-current={isCurrent ? 'step' : undefined}>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      isComplete || isCurrent
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                    aria-label={`${label}${isComplete ? ', completed' : isCurrent ? ', current step' : ''}`}
                  >
                    {isComplete ? '✓' : stepNum}
                  </div>
                  <span className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    step > stepNum ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`} aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <div className="mt-4">
        <button
          onClick={() => setStep(Math.min(step + 1, steps.length))}
          disabled={step >= steps.length}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Tooltip - Bad
export function AmateurTooltip() {
  return (
    <div className="relative group">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Hover me
      </button>
      <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 text-white p-2 rounded text-sm">
        Tooltip text
      </div>
    </div>
  );
}

// Tooltip - Good
export function ProTooltip() {
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative">
      <button
        aria-describedby="tooltip-1"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setShow(false);
        }}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Hover or focus me
      </button>
      {show && (
        <div
          ref={tooltipRef}
          id="tooltip-1"
          role="tooltip"
          className="absolute bottom-full left-0 mb-2 bg-slate-900 text-white p-2 rounded text-sm shadow-lg z-50 max-w-xs"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Tooltip text
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
        </div>
      )}
    </div>
  );
}

// Card Grid with Keyboard Navigation - Bad
export function AmateurCardGrid() {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => alert(`Clicked ${card}`)}
          className="p-4 bg-slate-200 dark:bg-slate-800 rounded cursor-pointer"
        >
          {card}
        </div>
      ))}
    </div>
  );
}

// Card Grid with Keyboard Navigation - Good
export function ProCardGrid() {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-2 gap-4" role="grid">
      {cards.map((card, i) => (
        <button
          key={i}
          role="gridcell"
          tabIndex={focusedIndex === null ? (i === 0 ? 0 : -1) : (focusedIndex === i ? 0 : -1)}
          onClick={() => alert(`Clicked ${card}`)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              setFocusedIndex((i + 1) % cards.length);
            }
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              setFocusedIndex((i - 1 + cards.length) % cards.length);
            }
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setFocusedIndex(Math.min(i + 2, cards.length - 1));
            }
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              setFocusedIndex(Math.max(i - 2, 0));
            }
          }}
          onFocus={() => setFocusedIndex(i)}
          className="p-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {card}
        </button>
      ))}
    </div>
  );
}

// Chart/Graph - Bad
export function AmateurChart() {
  return (
    <div className="flex items-end gap-2 h-32">
      <div className="bg-blue-500 w-12" style={{ height: '60%' }}></div>
      <div className="bg-blue-500 w-12" style={{ height: '80%' }}></div>
      <div className="bg-blue-500 w-12" style={{ height: '40%' }}></div>
    </div>
  );
}

// Chart/Graph - Good
export function ProChart() {
  const data = [
    { label: 'Q1', value: 60 },
    { label: 'Q2', value: 80 },
    { label: 'Q3', value: 40 },
  ];
  
  return (
    <figure>
      <div className="flex items-end gap-2 h-32" role="img" aria-label="Bar chart showing quarterly data">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="bg-indigo-600 w-12 rounded-t"
              style={{ height: `${item.value}%` }}
              aria-label={`${item.label}: ${item.value}%`}
            />
            <span className="text-xs mt-1 text-slate-700 dark:text-slate-300">{item.label}</span>
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Quarterly performance: Q1 60%, Q2 80%, Q3 40%
      </figcaption>
    </figure>
  );
}

// Media Player - Bad
export function AmateurMediaPlayer() {
  return (
    <div>
      <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded">
        <div className="flex items-center gap-2">
          <button>▶</button>
          <div className="flex-1 bg-slate-300 dark:bg-slate-700 h-2 rounded">
            <div className="bg-blue-500 h-2 rounded" style={{ width: '30%' }}></div>
          </div>
          <span>1:23 / 4:56</span>
        </div>
      </div>
    </div>
  );
}

// Media Player - Good
export function ProMediaPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  
  return (
    <div role="application" aria-label="Media player">
      <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? 'Pause' : 'Play'}
            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {playing ? '⏸' : '▶'}
          </button>
          <div className="flex-1">
            <div
              role="slider"
              aria-label="Progress"
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
              className="bg-slate-300 dark:bg-slate-700 h-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className="bg-indigo-600 h-2 rounded" style={{ width: '30%' }}></div>
            </div>
          </div>
          <span className="text-sm text-slate-700 dark:text-slate-300" aria-label="Time">
            1:23 / 4:56
          </span>
          <div className="flex items-center gap-2">
            <label htmlFor="volume" className="sr-only">Volume</label>
            <input
              id="volume"
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volume"
              className="w-20"
            />
            <span className="text-xs text-slate-600 dark:text-slate-400">{volume}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chat Widget - Bad
export function AmateurChatWidget() {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg">
        💬
      </button>
    </div>
  );
}

// Chat Widget - Good
export function ProChatWidget() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 border-b border-slate-300 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">Chat Support</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              >
                ×
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-sm text-slate-600 dark:text-slate-400">Chat messages...</p>
          </div>
          <div className="p-4 border-t border-slate-300 dark:border-slate-700">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        💬
      </button>
    </div>
  );
}

// Table for Layout - Bad
export function AmateurLayoutTable() {
  return (
    <table>
      <tr>
        <td>Sidebar</td>
        <td>Main Content</td>
      </tr>
    </table>
  );
}

// Table for Layout - Good (using CSS Grid)
export function ProLayoutTable() {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-4">
      <aside className="bg-slate-100 dark:bg-slate-800 p-4 rounded">
        <nav aria-label="Sidebar navigation">
          <ul>
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
          </ul>
        </nav>
      </aside>
      <main className="bg-white dark:bg-slate-900 p-4 rounded">
        <h1>Main Content</h1>
        <p>Using CSS Grid instead of tables for layout</p>
      </main>
    </div>
  );
}

// Breadcrumb - Enhanced
export function ProBreadcrumbEnhanced() {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <a href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
            Home
          </a>
        </li>
        <li aria-hidden="true" className="text-slate-500 dark:text-slate-400">/</li>
        <li>
          <a href="/products" className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
            Products
          </a>
        </li>
        <li aria-hidden="true" className="text-slate-500 dark:text-slate-400">/</li>
        <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-medium">
          Widget
        </li>
      </ol>
    </nav>
  );
}

