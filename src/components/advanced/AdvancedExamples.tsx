// Advanced Interactive Components Examples

import { useState, useEffect, useRef } from 'react';

// Accordions / Disclosure widgets - Bad
export function BeginnerAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-300 dark:border-slate-700 rounded">
      <div 
        onClick={() => setOpen(!open)}
        className="p-4 cursor-pointer bg-slate-100 dark:bg-slate-800"
      >
        <span>Section Title</span>
        <span className="float-right">{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div className="p-4">
          <p>Content here...</p>
        </div>
      )}
    </div>
  );
}

// Accordions / Disclosure widgets - Good
export function ExpertAccordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-300 dark:border-slate-700 rounded">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="accordion-content"
        className="w-full p-4 text-left bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-t flex items-center justify-between"
      >
        <span className="font-semibold">Section Title</span>
        <span aria-hidden="true" className="text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id="accordion-content" className="p-4">
          <p>Content here...</p>
        </div>
      )}
    </div>
  );
}

// Modal dialogs - Bad
export function BeginnerModal() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Open Modal
      </button>
      {open && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center rounded">
          <div className="bg-white dark:bg-slate-800 p-6 rounded max-w-md mx-4 shadow-xl relative z-20">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Modal Title</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">Modal content</p>
            <button onClick={() => setOpen(false)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
      {open && <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">Fixed positioning - appears outside component context</p>}
    </div>
  );
}

// Modal dialogs - Good
export function ExpertModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (open && modalRef.current) {
      const firstFocusable = modalRef.current.querySelector('button, [href], input');
      (firstFocusable as HTMLElement)?.focus();
    }
  }, [open]);

  return (
    <div className="relative min-h-[200px]">
      <button 
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Open Modal
      </button>
      {open && (
        <>
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center rounded"
            onClick={() => setOpen(false)}
          >
            <div 
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="bg-white dark:bg-slate-900 p-6 rounded-lg max-w-md w-full mx-4 shadow-xl relative z-20"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setOpen(false);
              }}
            >
              <h2 id="modal-title" className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                Modal Title
              </h2>
              <p className="mb-4 text-slate-700 dark:text-slate-300">Modal content</p>
              <button 
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">✓ Proper focus management, ARIA roles, keyboard accessible</p>
        </>
      )}
    </div>
  );
}

// Tabs - Bad
export function BeginnerTabs() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b">
        <div 
          onClick={() => setActive(0)}
          className={`px-4 py-2 cursor-pointer ${active === 0 ? 'border-b-2 border-blue-500' : ''}`}
        >
          Tab 1
        </div>
        <div 
          onClick={() => setActive(1)}
          className={`px-4 py-2 cursor-pointer ${active === 1 ? 'border-b-2 border-blue-500' : ''}`}
        >
          Tab 2
        </div>
      </div>
      <div className="p-4">
        {active === 0 && <p>Content 1</p>}
        {active === 1 && <p>Content 2</p>}
      </div>
    </div>
  );
}

// Tabs - Good
export function ExpertTabs() {
  const [active, setActive] = useState(0);
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  
  return (
    <div>
      <div role="tablist" className="flex border-b border-slate-300 dark:border-slate-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={active === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            onClick={() => setActive(index)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') setActive((active + 1) % tabs.length);
              if (e.key === 'ArrowLeft') setActive((active - 1 + tabs.length) % tabs.length);
            }}
            className={`px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              active === index 
                ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div 
        role="tabpanel"
        id={`tabpanel-${active}`}
        aria-labelledby={`tab-${active}`}
        className="p-4"
      >
        <p>Content {active + 1}</p>
      </div>
    </div>
  );
}

// Carousel - Bad
export function BeginnerCarousel() {
  const [index, setIndex] = useState(0);
  const items = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop', alt: '' },
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop', alt: '' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop', alt: '' },
  ];
  
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 aspect-video">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setIndex((index - 1 + items.length) % items.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
        ←
      </button>
      <button onClick={() => setIndex((index + 1) % items.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
        →
      </button>
    </div>
  );
}

// Carousel - Good
export function ExpertCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop', alt: 'Mountain landscape with lake reflection at sunset' },
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop', alt: 'Ocean waves crashing on rocky shore' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop', alt: 'Forest path with sunlight filtering through trees' },
  ];
  
  return (
    <div className="relative" aria-label="Image carousel">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live={paused ? 'polite' : 'off'}
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              className="w-full flex-shrink-0 aspect-video"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${items.length}: ${item.alt}`}
            >
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setIndex((index - 1 + items.length) % items.length)}
          aria-label="Previous slide"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          ←
        </button>
        <button
          onClick={() => setPaused(!paused)}
          aria-label={paused ? 'Play carousel' : 'Pause carousel'}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {paused ? '▶' : '⏸'}
        </button>
        <button
          onClick={() => setIndex((index + 1) % items.length)}
          aria-label="Next slide"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          →
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              i === index ? 'bg-indigo-600' : 'bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Custom Dropdown - Bad
export function BeginnerDropdown() {
  const [open, setOpen] = useState(false);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  
  return (
    <div className="relative">
      <div 
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded cursor-pointer"
      >
        Select option
      </div>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-lg">
          {options.map((opt, i) => (
            <div 
              key={i}
              onClick={() => {
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Custom Dropdown - Good
export function ExpertDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Select option');
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const listboxRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    if (open && listboxRef.current) {
      const firstOption = listboxRef.current.querySelector('li');
      firstOption?.focus();
    }
  }, [open]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select option"
        className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900 text-left w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {selected}
      </button>
      {open && (
        <ul
          ref={listboxRef}
          role="listbox"
          aria-label="Options"
          className="absolute top-full left-0 mt-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-lg w-full z-10"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
              const options = Array.from(listboxRef.current?.querySelectorAll('li') || []);
              const current = options.indexOf(e.target as HTMLLIElement);
              const next = e.key === 'ArrowDown' 
                ? (current + 1) % options.length
                : (current - 1 + options.length) % options.length;
              options[next]?.focus();
            }
          }}
        >
          {options.map((opt, i) => (
            <li
              key={i}
              role="option"
              aria-selected={selected === opt}
              tabIndex={0}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelected(opt);
                  setOpen(false);
                }
              }}
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer focus:outline-none focus:bg-indigo-50 dark:focus:bg-indigo-950"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Data Table - Bad
export function BeginnerDataTable() {
  const data = [
    { name: 'John', age: 30, city: 'NYC' },
    { name: 'Jane', age: 25, city: 'LA' },
  ];
  
  return (
    <div className="border border-slate-300 dark:border-slate-700 rounded">
      <div className="flex border-b">
        <div className="flex-1 p-2 font-semibold">Name</div>
        <div className="flex-1 p-2 font-semibold">Age</div>
        <div className="flex-1 p-2 font-semibold">City</div>
      </div>
      {data.map((row, i) => (
        <div key={i} className="flex border-b">
          <div className="flex-1 p-2">{row.name}</div>
          <div className="flex-1 p-2">{row.age}</div>
          <div className="flex-1 p-2">{row.city}</div>
        </div>
      ))}
    </div>
  );
}

// Data Table - Good
export function ExpertDataTable() {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const data = [
    { name: 'John', age: 30, city: 'NYC' },
    { name: 'Jane', age: 25, city: 'LA' },
  ];
  
  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    const aVal = a[sortBy as keyof typeof a];
    const bVal = b[sortBy as keyof typeof b];
    return sortDir === 'asc' 
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });
  
  return (
    <table className="w-full border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
      <caption className="text-left font-semibold mb-2 p-2 text-slate-900 dark:text-slate-100">
        User Data Table
      </caption>
      <thead className="bg-slate-100 dark:bg-slate-800">
        <tr>
          <th className="p-3 text-left">
            <button
              onClick={() => {
                setSortBy('name');
                setSortDir(sortBy === 'name' && sortDir === 'asc' ? 'desc' : 'asc');
              }}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              aria-sort={sortBy === 'name' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
            >
              Name {sortBy === 'name' && (sortDir === 'asc' ? '↑' : '↓')}
            </button>
          </th>
          <th className="p-3 text-left">
            <button
              onClick={() => {
                setSortBy('age');
                setSortDir(sortBy === 'age' && sortDir === 'asc' ? 'desc' : 'asc');
              }}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              aria-sort={sortBy === 'age' ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
            >
              Age {sortBy === 'age' && (sortDir === 'asc' ? '↑' : '↓')}
            </button>
          </th>
          <th className="p-3 text-left">City</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i} className="border-t border-slate-300 dark:border-slate-700">
            <td className="p-3">{row.name}</td>
            <td className="p-3">{row.age}</td>
            <td className="p-3">{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Search Autocomplete - Bad
export function BeginnerSearch() {
  const [query, setQuery] = useState('');
  const results = ['Result 1', 'Result 2', 'Result 3'].filter(r => 
    r.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded"
      />
      {results.length > 0 && (
        <div className="mt-2 border border-slate-300 dark:border-slate-700 rounded">
          {results.map((r, i) => (
            <div key={i} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Search Autocomplete - Good
export function ExpertSearch() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(-1);
  const results = ['Result 1', 'Result 2', 'Result 3'].filter(r => 
    r.toLowerCase().includes(query.toLowerCase())
  );
  const listboxRef = useRef<HTMLUListElement>(null);
  
  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">Search</label>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelected(-1);
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelected(Math.min(selected + 1, results.length - 1));
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelected(Math.max(selected - 1, -1));
          }
          if (e.key === 'Enter' && selected >= 0) {
            setQuery(results[selected]);
            setSelected(-1);
          }
        }}
        aria-autocomplete="list"
        aria-controls="search-results"
        aria-expanded={results.length > 0}
        placeholder="Search..."
        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {results.length > 0 && (
        <ul
          ref={listboxRef}
          id="search-results"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded shadow-lg max-h-60 overflow-y-auto z-10"
        >
          {results.map((r, i) => (
            <li
              key={i}
              role="option"
              aria-selected={selected === i}
              className={`p-2 cursor-pointer focus:outline-none focus:bg-indigo-50 dark:focus:bg-indigo-950 ${
                selected === i ? 'bg-indigo-50 dark:bg-indigo-950' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              onClick={() => {
                setQuery(r);
                setSelected(-1);
              }}
            >
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Toggle Switch - Bad
export function BeginnerToggle() {
  const [on, setOn] = useState(false);
  return (
    <div 
      onClick={() => setOn(!on)}
      className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
        on ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
        on ? 'translate-x-6' : 'translate-x-0.5'
      } mt-0.5`} />
    </div>
  );
}

// Toggle Switch - Good
export function ExpertToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`relative w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        on ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <span className="sr-only">Toggle {on ? 'on' : 'off'}</span>
      <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
        on ? 'translate-x-6' : 'translate-x-0'
      }`} />
    </button>
  );
}

// Progress Bar - Bad
export function BeginnerProgress() {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
    </div>
  );
}

// Progress Bar - Good
export function ExpertProgress() {
  const progress = 60;
  return (
    <div>
      <div 
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress"
        className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"
      >
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 sr-only">
        {progress}% complete
      </p>
    </div>
  );
}

// Toast Notification - Bad
export function BeginnerToast() {
  return (
    <div className="relative">
      <div className="bg-blue-500 text-white p-4 rounded shadow-lg max-w-sm">
        <p>Notification message</p>
      </div>
      <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">Fixed positioning - appears outside component context</p>
    </div>
  );
}

// Toast Notification - Good
export function ExpertToast() {
  return (
    <div className="relative">
      <div
        role="alert"
        aria-live="polite"
        className="bg-indigo-600 text-white p-4 rounded-lg shadow-xl max-w-sm"
      >
        <div className="flex items-start gap-3">
          <span aria-hidden="true">✓</span>
          <p className="flex-1">Notification message</p>
          <button
            aria-label="Close notification"
            className="text-white hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            ×
          </button>
        </div>
      </div>
      <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">✓ Proper ARIA roles, dismissible, accessible</p>
    </div>
  );
}

// Image Gallery - Bad
export function BeginnerGallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: '' },
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop', alt: '' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', alt: '' },
  ];
  const [selected, setSelected] = useState(0);
  
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className="aspect-video rounded cursor-pointer overflow-hidden border-2 border-slate-300 dark:border-slate-700"
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-4 aspect-video bg-slate-100 dark:bg-slate-900 rounded overflow-hidden">
        <img src={images[selected].src} alt={images[selected].alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

// Image Gallery - Good
export function ExpertGallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', alt: 'Mountain landscape with lake reflection at sunset' },
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop', alt: 'Ocean waves crashing on rocky shore' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', alt: 'Forest path with sunlight filtering through trees' },
  ];
  const [selected, setSelected] = useState(0);
  
  return (
    <div>
      <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Image gallery">
        {images.map((img, i) => (
          <button
            key={i}
            id={`gallery-tab-${i}`}
            role="tab"
            aria-selected={selected === i}
            aria-controls={`gallery-image-${i}`}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' && i < images.length - 1) {
                setSelected(i + 1);
              } else if (e.key === 'ArrowLeft' && i > 0) {
                setSelected(i - 1);
              }
            }}
            className="aspect-video rounded overflow-hidden border-2 hover:border-indigo-500 dark:hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            <img src={img.src} alt={`Thumbnail: ${img.alt}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <div 
        id={`gallery-image-${selected}`}
        role="tabpanel"
        aria-labelledby={`gallery-tab-${selected}`}
        className="mt-4 aspect-video bg-slate-100 dark:bg-slate-900 rounded overflow-hidden"
      >
        <img 
          src={images[selected].src} 
          alt={images[selected].alt}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 text-center">
        {images[selected].alt}
      </p>
    </div>
  );
}


