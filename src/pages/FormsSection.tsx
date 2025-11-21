import ComparisonCard from '../components/ComparisonCard';
import {
  AmateurForm1,
  ProForm1,
  AmateurForm2,
  ProForm2,
  AmateurForm3,
  ProForm3,
  AmateurForm4,
  ProForm4,
} from '../components/forms/FormExamples';

const formExamples = [
  {
    title: 'All Inputs Labeled',
    description: 'Labels make form fields discoverable and understandable',
    designLogic: 'Labels make form fields discoverable and understandable. Without labels, users must guess what each field does—increasing cognitive load and error rates. Labels are the "instructions" that make forms usable.',
    badCode: `<input
  type="email"
  placeholder="Email"
  className="w-full px-3 py-2 border border-gray-300 rounded"
/>`,
    goodCode: `<label htmlFor="email-input" className="block text-sm font-medium mb-1.5">
  Email Address
</label>
<input
  id="email-input"
  type="email"
  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg"
  aria-describedby="email-help"
/>
<p id="email-help" className="mt-1.5 text-sm text-slate-500">
  We'll never share your email
</p>`,
    BadComponent: AmateurForm1,
    GoodComponent: ProForm1,
  },
  {
    title: 'Persistent Labels',
    description: 'Placeholders vanish when typing, forcing users to rely on memory',
    designLogic: 'Placeholders vanish when typing, forcing users to rely on short-term memory ("Was this field Email or Name?"). Persistent labels anchor the layout and reduce mental strain. They create visual stability in your form design.',
    badCode: `<input
  type="email"
  placeholder="Email Address"
  className="w-full px-3 py-2 border border-gray-300 rounded"
/>`,
    goodCode: `<label htmlFor="email-input" className="block text-sm font-medium mb-1.5">
  Email Address
</label>
<input
  id="email-input"
  type="email"
  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg"
/>`,
    BadComponent: AmateurForm2,
    GoodComponent: ProForm2,
  },
  {
    title: 'Text-Based Error Messages',
    description: 'Color alone is insufficient—errors must be text-based',
    designLogic: 'Color alone is insufficient because 8% of men are colorblind. Error messages must be text-based, clearly identifying the problem. This creates better information design that works for everyone.',
    badCode: `<input
  type="email"
  placeholder="Email"
  className="w-full px-3 py-2 border-2 border-red-500 rounded"
/>`,
    goodCode: `<label htmlFor="email-error-input" className="block text-sm font-medium mb-1.5">
  Email Address
</label>
<input
  id="email-error-input"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
  className="w-full px-4 py-2.5 border-2 border-rose-500 rounded-lg"
/>
<div id="email-error" role="alert" className="mt-1.5 flex items-start gap-2">
  <span className="text-rose-600 text-sm font-medium">⚠️</span>
  <p className="text-sm text-rose-700">
    Email field: Invalid format. Please enter an email like name@example.com
  </p>
</div>`,
    BadComponent: AmateurForm3,
    GoodComponent: ProForm3,
  },
  {
    title: 'Fieldset Grouping',
    description: 'Group related form fields semantically',
    designLogic: 'Fieldset and legend create both visual and semantic groups. This reduces cognitive load by chunking related information together. It\'s Gestalt\'s "proximity" principle applied to forms.',
    badCode: `<div>
  <p className="font-semibold">Shipping Method</p>
  <label className="flex items-center gap-2">
    <input type="radio" name="shipping" />
    <span>Standard</span>
  </label>
  <label className="flex items-center gap-2">
    <input type="radio" name="shipping" />
    <span>Express</span>
  </label>
</div>`,
    goodCode: `<fieldset className="space-y-3 p-4 border border-slate-300 rounded-lg">
  <legend className="px-2 text-base font-semibold">
    Shipping Method
  </legend>
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="shipping"
      className="w-4 h-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
    />
    <span>Standard (3-5 business days)</span>
  </label>
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="radio"
      name="shipping"
      className="w-4 h-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
    />
    <span>Express (1-2 business days)</span>
  </label>
</fieldset>`,
    BadComponent: AmateurForm4,
    GoodComponent: ProForm4,
  },
];

export default function FormsSection() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Forms, Inputs, and Errors
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          Forms are the bridge between user intent and system action. Every input, label, and error message 
          is an opportunity to reduce cognitive load and create a professional, trustworthy experience.
        </p>
      </div>

      <div className="space-y-12">
        {formExamples.map((example, index) => (
          <ComparisonCard
            key={index}
            title={example.title}
            description={example.description}
            designLogic={example.designLogic}
            badCode={example.badCode}
            goodCode={example.goodCode}
            BadComponent={example.BadComponent}
            GoodComponent={example.GoodComponent}
            sectionNumber={`3.${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

