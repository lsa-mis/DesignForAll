// Section 4: Hyperlinks Examples

// 4.1 Meaningful Link Text - Bad
export function AmateurLink1() {
  return (
    <div className="space-y-3">
      <a href="/products" className="text-blue-600">Click here</a>
      <br />
      <a href="/contact" className="text-blue-600">Click here</a>
    </div>
  );
}

// 4.1 Meaningful Link Text - Good
export function ProLink1() {
  return (
    <div className="space-y-3">
      <a href="/products" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300">
        View our product catalog
      </a>
      <br />
      <a href="/contact" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300">
        Contact our support team
      </a>
    </div>
  );
}

// 4.3 Visual Link Affordance - Bad
export function AmateurLink2() {
  return (
    <div className="space-y-3">
      <a href="/about" className="text-slate-700 dark:text-slate-300 no-underline">
        About Us
      </a>
      <br />
      <span className="text-slate-700 dark:text-slate-300 underline">
        Not a link but looks like one
      </span>
    </div>
  );
}

// 4.3 Visual Link Affordance - Good
export function ProLink2() {
  return (
    <div className="space-y-3">
      <a 
        href="/about" 
        className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 decoration-2 hover:decoration-indigo-800 dark:hover:decoration-indigo-300 transition-colors"
      >
        About Us
      </a>
      <br />
      <span className="text-slate-700 dark:text-slate-300">
        Regular text, no underline
      </span>
    </div>
  );
}

// 4.4 File Type & Size - Bad
export function AmateurLink3() {
  return (
    <div>
      <a href="/report.pdf" className="text-blue-600 underline">
        Download Report
      </a>
    </div>
  );
}

// 4.4 File Type & Size - Good
export function ProLink3() {
  return (
    <div>
      <a 
        href="/report.pdf" 
        download
        className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300"
      >
        Annual Report <span className="text-sm text-slate-500 dark:text-slate-400">(PDF, 2.4 MB)</span>
      </a>
    </div>
  );
}

// 4.6 Context Change Warnings - Bad
export function AmateurLink4() {
  return (
    <div>
      <a href="/external" target="_blank" className="text-blue-600 underline">
        External Resource
      </a>
    </div>
  );
}

// 4.6 Context Change Warnings - Good
export function ProLink4() {
  return (
    <div>
      <a 
        href="/external" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1"
      >
        External Resource
        <span className="sr-only">(opens in new tab)</span>
        <span aria-hidden="true" className="text-xs">↗</span>
      </a>
    </div>
  );
}

