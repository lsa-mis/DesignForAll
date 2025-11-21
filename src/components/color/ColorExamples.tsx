// Section 6: Color & Contrast Examples

// 6.1 Text Contrast - Bad
export function AmateurColor1() {
  return (
    <div className="bg-white p-6 rounded">
      <p className="text-gray-400 text-lg">
        Low contrast text (2.8:1) - hard to read
      </p>
    </div>
  );
}

// 6.1 Text Contrast - Good
export function ProColor1() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded border border-slate-200 dark:border-slate-800">
      <p className="text-slate-900 dark:text-slate-100 text-lg">
        High contrast text (16.8:1) - easy to read
      </p>
    </div>
  );
}

// 6.4 Meaning Beyond Color - Bad
export function AmateurColor2() {
  return (
    <div className="space-y-3">
      <div className="p-3 bg-red-100 rounded text-red-800">
        Warning
      </div>
      <div className="p-3 bg-green-100 rounded text-green-800">
        Success
      </div>
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-red-500 rounded"></div>
        <div className="w-16 h-16 bg-blue-500 rounded"></div>
      </div>
    </div>
  );
}

// 6.4 Meaning Beyond Color - Good
export function ProColor2() {
  return (
    <div className="space-y-3">
      <div className="p-3 bg-rose-100 dark:bg-rose-950 rounded flex items-center gap-2">
        <span aria-hidden="true">⚠️</span>
        <span className="text-rose-800 dark:text-rose-200 font-medium">Warning: Low battery</span>
      </div>
      <div className="p-3 bg-emerald-100 dark:bg-emerald-950 rounded flex items-center gap-2">
        <span aria-hidden="true">✓</span>
        <span className="text-emerald-800 dark:text-emerald-200 font-medium">Success: Order confirmed</span>
      </div>
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-red-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          Q1: 60%
        </div>
        <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          Q2: 40%
        </div>
      </div>
    </div>
  );
}

