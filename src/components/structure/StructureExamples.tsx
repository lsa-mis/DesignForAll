// Section 1: Structure & Semantics Examples

// 1.1 Sequential Headings - Bad
export function AmateurHeadings1() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Page Title</h1>
      <h4 className="text-lg">Subtitle</h4>
      <p>Content here...</p>
    </div>
  );
}

// 1.1 Sequential Headings - Good
export function ProHeadings1() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Page Title</h1>
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Section</h2>
      <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300">Subsection</h3>
      <p className="text-base text-slate-600 dark:text-slate-400">Content here...</p>
    </div>
  );
}

// 1.2 Single H1 - Bad
export function AmateurHeadings2() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl">Site Logo</h1>
      <h1 className="text-xl">Page Title</h1>
      <h1 className="text-xl">Banner</h1>
    </div>
  );
}

// 1.2 Single H1 - Good
export function ProHeadings2() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="sr-only">Dashboard</h1>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Welcome Back</h2>
      </header>
    </div>
  );
}

// 1.3 Descriptive Headings - Bad
export function AmateurHeadings3() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl">Information</h2>
      <h2 className="text-xl">Details About Your Purchase and What Happens Next</h2>
    </div>
  );
}

// 1.3 Descriptive Headings - Good
export function ProHeadings3() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Order Confirmation</h2>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Shipping Address</h2>
    </div>
  );
}

// 1.6 Semantic Landmarks - Bad
export function AmateurLandmarks() {
  return (
    <div>
      <div className="border p-4 mb-4">Header Content</div>
      <div className="border p-4 mb-4">Main Content</div>
      <div className="border p-4 mb-4">Sidebar Content</div>
    </div>
  );
}

// 1.6 Semantic Landmarks - Good
export function ProLandmarks() {
  return (
    <div>
      <header className="border border-slate-300 dark:border-slate-700 p-4 mb-4 rounded-lg">
        <nav aria-label="Main navigation" className="text-sm font-medium">
          Navigation Links
        </nav>
      </header>
      <main id="main-content" className="border border-slate-300 dark:border-slate-700 p-4 mb-4 rounded-lg">
        <p>Main content area</p>
      </main>
      <aside aria-label="Related links" className="border border-slate-300 dark:border-slate-700 p-4 rounded-lg">
        <p className="text-sm">Related content</p>
      </aside>
    </div>
  );
}

// 1.7 Real Lists - Bad
export function AmateurList() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span>•</span>
        <span>First item</span>
      </div>
      <div className="flex items-center gap-2">
        <span>•</span>
        <span>Second item</span>
      </div>
    </div>
  );
}

// 1.7 Real Lists - Good
export function ProList() {
  return (
    <ul className="space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300">
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  );
}

// 1.8 Semantic Tables - Bad
export function AmateurTable() {
  return (
    <div className="border border-slate-300 dark:border-slate-700 rounded">
      <div className="flex border-b">
        <div className="flex-1 p-2 font-semibold">Month</div>
        <div className="flex-1 p-2 font-semibold">Revenue</div>
      </div>
      <div className="flex border-b">
        <div className="flex-1 p-2">January</div>
        <div className="flex-1 p-2">$10,000</div>
      </div>
    </div>
  );
}

// 1.8 Semantic Tables - Good
export function ProTable() {
  return (
    <table className="w-full border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden">
      <caption className="text-left font-semibold mb-2 text-slate-900 dark:text-slate-100">
        Monthly Sales Report
      </caption>
      <thead className="bg-slate-100 dark:bg-slate-800">
        <tr>
          <th className="p-3 text-left font-semibold text-slate-900 dark:text-slate-100">Month</th>
          <th className="p-3 text-left font-semibold text-slate-900 dark:text-slate-100">Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-slate-300 dark:border-slate-700">
          <td className="p-3 text-slate-700 dark:text-slate-300">January</td>
          <td className="p-3 text-slate-700 dark:text-slate-300">$10,000</td>
        </tr>
        <tr className="border-t border-slate-300 dark:border-slate-700">
          <td className="p-3 text-slate-700 dark:text-slate-300">February</td>
          <td className="p-3 text-slate-700 dark:text-slate-300">$12,000</td>
        </tr>
      </tbody>
    </table>
  );
}

