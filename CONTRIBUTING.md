# Contributing to Design for All

Thank you for your interest in contributing to Design for All! This document provides guidelines and instructions for contributing to the project.

## 🎯 Our Mission

Design for All aims to demonstrate how accessibility principles create better, more beautiful user interfaces. We believe that accessibility constraints lead to superior design, not compromises.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Adding New Examples](#adding-new-examples)
- [Coding Standards](#coding-standards)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Submitting Changes](#submitting-changes)
- [Questions?](#questions)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We welcome contributors of all backgrounds and experience levels.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/designforall.git
   cd designforall
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠 Development Setup

### Prerequisites

- Node.js 20+ and npm
- Git
- A code editor (VS Code recommended)

### Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Development Workflow

1. Make your changes
2. Test locally with `npm run dev`
3. Run linter: `npm run lint`
4. Build to verify: `npm run build`
5. Commit your changes (see [Commit Guidelines](#commit-guidelines))

## 📁 Project Structure

```
designforall/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/                      # Static assets
├── src/
│   ├── components/             # Reusable components
│   │   ├── ComparisonCard.tsx  # Core comparison component
│   │   ├── Layout.tsx          # App shell with navigation
│   │   ├── forms/              # Form examples
│   │   ├── keyboard/           # Keyboard navigation examples
│   │   ├── links/              # Link examples
│   │   ├── color/              # Color examples
│   │   ├── structure/          # Structure examples
│   │   └── advanced/           # Advanced component examples
│   ├── pages/                  # Page components
│   │   ├── Home.tsx            # Landing page
│   │   ├── FormsSection.tsx   # Forms section
│   │   └── ...                 # Other sections
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies
```

## ✏️ Making Changes

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes** - Fix issues or improve existing code
- ✨ **New examples** - Add new "Amateur vs Pro" comparisons
- 📝 **Documentation** - Improve docs, add comments, fix typos
- 🎨 **Design improvements** - Enhance UI/UX while maintaining accessibility
- 🌐 **Internationalization** - Add translations or RTL support
- ♿ **Accessibility** - Improve accessibility features
- 🧪 **Testing** - Add tests or improve test coverage

### Adding New Examples

To add a new comparison example:

1. **Create component files** in the appropriate directory:
   ```typescript
   // src/components/your-section/YourExample.tsx
   
   // Amateur version
   export function AmateurYourExample() {
     return (
       <div>
         {/* Bad implementation */}
       </div>
     );
   }
   
   // Pro version
   export function ProYourExample() {
     return (
       <div>
         {/* Good implementation */}
       </div>
     );
   }
   ```

2. **Add to the section page**:
   ```typescript
   // src/pages/YourSection.tsx
   import { AmateurYourExample, ProYourExample } from '../components/your-section/YourExample';
   
   const examples = [
     {
       title: 'Your Example Title',
       description: 'Brief description',
       designLogic: 'Explain why the pro version is better',
       badCode: `// Amateur code example`,
       goodCode: `// Pro code example`,
       BadComponent: AmateurYourExample,
       GoodComponent: ProYourExample,
       sectionNumber: 'X.Y',
     },
   ];
   ```

3. **Follow the pattern**:
   - Amateur version should demonstrate common mistakes
   - Pro version should show best practices
   - Include clear design logic explanation
   - Provide code examples for both

## 📐 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Follow React best practices
- Use proper prop types/interfaces
- Keep components focused and reusable

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system (UM Blue & Maize)
- Ensure dark mode support
- Maintain responsive design

### Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Follow existing code patterns
- Add comments for complex logic

### Example Component Structure

```typescript
import { useState } from 'react';
import { SomeIcon } from 'lucide-react';

interface ComponentProps {
  title: string;
  description?: string;
}

export function Component({ title, description }: ComponentProps) {
  const [state, setState] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
```

## ♿ Accessibility Guidelines

**This is critical!** All contributions must maintain or improve accessibility:

- ✅ **Semantic HTML** - Use proper elements (`<button>`, `<nav>`, etc.)
- ✅ **ARIA attributes** - Add when semantic HTML isn't enough
- ✅ **Keyboard navigation** - All interactive elements must be keyboard accessible
- ✅ **Focus management** - Visible focus indicators
- ✅ **Color contrast** - Meet WCAG AA standards (4.5:1 for text)
- ✅ **Alt text** - Descriptive alt text for images
- ✅ **Screen reader testing** - Test with screen readers when possible

### Testing Accessibility

- Use browser DevTools accessibility checker
- Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify color contrast ratios
- Test in dark mode

## 📝 Commit Guidelines

We follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Commit Message Format

```
<type>: <short description>

<optional longer description>
```

Examples:
```
feat: add keyboard navigation example for dropdowns

Adds a new comparison example demonstrating proper keyboard
navigation patterns for custom dropdown components.
```

```
fix: improve color contrast in dark mode navigation

Updates indigo-400 to indigo-300 for better contrast ratio
in dark mode navigation active states.
```

## 🔄 Submitting Changes

### Pull Request Process

1. **Update your fork**:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Push your changes**:
   ```bash
   git push origin your-branch
   ```

3. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Reference any related issues
   - Describe what changes you made and why
   - Include screenshots for UI changes
   - Ensure all checks pass

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] All accessibility requirements met
- [ ] Works in both light and dark modes
- [ ] Responsive design maintained
- [ ] No console errors or warnings
- [ ] Linter passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated if needed
- [ ] Commit messages follow guidelines

### Review Process

- Maintainers will review your PR
- Address any feedback or requested changes
- Be patient and respectful during reviews
- All feedback is meant to improve the project

## 🐛 Reporting Issues

Found a bug or have a suggestion? Open an issue!

### Bug Reports

Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case or problem it solves
- Proposed solution (if you have one)
- Examples or mockups (if applicable)

## 💡 Ideas for Contributions

Looking for ideas? Here are some areas we'd love help with:

- 🌍 **Internationalization** - Add i18n support
- 📱 **Mobile examples** - More mobile-specific patterns
- 🎨 **Design system** - Expand color/typography examples
- 📚 **Documentation** - Improve guides and explanations
- 🧪 **Testing** - Add unit/integration tests
- ♿ **Accessibility** - More ARIA pattern examples
- 🌐 **RTL support** - Right-to-left language examples
- 📊 **Analytics** - Usage tracking (privacy-friendly)

## ❓ Questions?

- Open an issue for questions or discussions
- Check existing issues and PRs first
- Be respectful and patient

## 🙏 Thank You!

Your contributions make Design for All better for everyone. We appreciate your time and effort!

---

**Remember**: Accessibility isn't optional—it's essential. Every contribution should make the web more inclusive.

