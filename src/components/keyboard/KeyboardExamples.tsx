// Section 5: Keyboard Navigation Examples

// 5.2 All Elements Reachable - Bad
export function AmateurKeyboard1() {
  return (
    <div className="space-y-3">
      <div 
        onClick={() => alert('Clicked')}
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer inline-block"
      >
        Click Me (div with onClick)
      </div>
    </div>
  );
}

// 5.2 All Elements Reachable - Good
export function ProKeyboard1() {
  return (
    <div className="space-y-3">
      <button 
        onClick={() => alert('Clicked')}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
      >
        Click Me (button)
      </button>
    </div>
  );
}

// 5.6 Visible Focus Indicators - Bad
export function AmateurKeyboard2() {
  return (
    <div className="space-y-3">
      <button className="px-4 py-2 bg-blue-500 text-white rounded outline-none">
        No Focus Indicator
      </button>
      <a href="#" className="text-blue-600 outline-none">
        Link with no focus
      </a>
    </div>
  );
}

// 5.6 Visible Focus Indicators - Good
export function ProKeyboard2() {
  return (
    <div className="space-y-3">
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
        Clear Focus Ring
      </button>
      <a 
        href="#" 
        className="text-indigo-600 dark:text-indigo-400 underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded px-1"
      >
        Link with visible focus
      </a>
    </div>
  );
}

// 5.4 Skip Link - Bad
export function AmateurKeyboard3() {
  return (
    <div>
      <nav className="p-4 bg-slate-200 dark:bg-slate-800 mb-4">
        <a href="/" className="mr-4">Home</a>
        <a href="/about" className="mr-4">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <main className="p-4">
        <h1>Main Content</h1>
        <p>No skip link - keyboard users must tab through all navigation</p>
      </main>
    </div>
  );
}

// 5.4 Skip Link - Good
export function ProKeyboard3() {
  return (
    <div>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded focus:ring-2 focus:ring-indigo-500"
      >
        Skip to main content
      </a>
      <nav className="p-4 bg-slate-200 dark:bg-slate-800 mb-4">
        <a href="/" className="mr-4">Home</a>
        <a href="/about" className="mr-4">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <main id="main-content" tabIndex={-1} className="p-4 focus:outline-none">
        <h1>Main Content</h1>
        <p>Skip link allows keyboard users to bypass navigation</p>
      </main>
    </div>
  );
}

