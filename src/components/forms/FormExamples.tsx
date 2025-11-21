// Amateur Form Component - Bad Examples
export function AmateurForm1() {
  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
}

// Pro Form Component - Good Examples
export function ProForm1() {
  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="email-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Email Address
        </label>
        <input
          id="email-input"
          type="email"
          className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          aria-describedby="email-help"
        />
        <p id="email-help" className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          We'll never share your email
        </p>
      </div>
      <div>
        <label htmlFor="password-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Password <span className="text-rose-600 dark:text-rose-400" aria-label="required">*</span>
        </label>
        <input
          id="password-input"
          type="password"
          required
          aria-required="true"
          className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          aria-describedby="password-help"
        />
        <p id="password-help" className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          Must be 8+ characters with numbers
        </p>
      </div>
      <button className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
        Submit
      </button>
    </div>
  );
}

// Amateur Form Component - Placeholder Only
export function AmateurForm2() {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />
    </div>
  );
}

// Pro Form Component - Persistent Labels
export function ProForm2() {
  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="name-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Full Name
        </label>
        <input
          id="name-input"
          type="text"
          className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label htmlFor="email-input-2" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Email Address
        </label>
        <input
          id="email-input-2"
          type="email"
          className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
      </div>
    </div>
  );
}

// Amateur Form Component - No Error Messages
export function AmateurForm3() {
  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border-2 border-red-500 rounded"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
}

// Pro Form Component - Text-Based Errors
export function ProForm3() {
  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="email-error-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          Email Address
        </label>
        <input
          id="email-error-input"
          type="email"
          aria-invalid="true"
          aria-describedby="email-error"
          className="w-full px-4 py-2.5 border-2 border-rose-500 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
        />
        <div id="email-error" role="alert" className="mt-1.5 flex items-start gap-2">
          <span className="text-rose-600 dark:text-rose-400 text-sm font-medium">⚠️</span>
          <p className="text-sm text-rose-700 dark:text-rose-300">
            Email field: Invalid format. Please enter an email like name@example.com
          </p>
        </div>
      </div>
      <button className="w-full px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
        Submit
      </button>
    </div>
  );
}

// Amateur Form Component - No Fieldset Grouping
export function AmateurForm4() {
  return (
    <div className="space-y-4">
      <p className="font-semibold">Shipping Method</p>
      <label className="flex items-center gap-2">
        <input type="radio" name="shipping" />
        <span>Standard</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="shipping" />
        <span>Express</span>
      </label>
    </div>
  );
}

// Pro Form Component - Fieldset Grouping
export function ProForm4() {
  return (
    <fieldset className="space-y-3 p-4 border border-slate-300 dark:border-slate-600 rounded-lg">
      <legend className="px-2 text-base font-semibold text-slate-900 dark:text-slate-100">
        Shipping Method
      </legend>
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="radio"
          name="shipping-pro"
          className="w-4 h-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
          Standard (3-5 business days)
        </span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="radio"
          name="shipping-pro"
          className="w-4 h-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
        />
        <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
          Express (1-2 business days)
        </span>
      </label>
    </fieldset>
  );
}

