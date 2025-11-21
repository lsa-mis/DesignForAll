# Design for All

> **"Accessibility is not a checklist. It is a constraint that forces better, cleaner, and more robust UI design."**

An interactive learning platform that demonstrates how accessibility principles create better, more beautiful user interfaces.

## 🚀 Live Site

Visit the live site at: **https://rayraycodes.github.io/designforall/**

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to GitHub Pages.

## Features

- 🎨 **Interactive Comparison Cards** - Toggle between "Amateur" and "Pro" implementations
- 💡 **Design Logic Explanations** - Understand the "why" behind each principle
- 📱 **Responsive Design** - Works beautifully on all devices
- 🌙 **Dark Mode** - Full dark mode support with system preference detection
- ⚡ **Modern Stack** - Built with Vite, React, TypeScript, and Tailwind CSS
- 🎭 **Smooth Animations** - Powered by Framer Motion

## Tech Stack

- **Build Tool:** Vite
- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Syntax Highlighting:** react-syntax-highlighter

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ComparisonCard.tsx    # Core interactive comparison component
│   ├── Layout.tsx             # App shell with sidebar navigation
│   └── forms/
│       └── FormExamples.tsx   # Form component examples
├── pages/
│   ├── Home.tsx               # Landing page
│   └── FormsSection.tsx       # Section 3: Forms demonstration
├── App.tsx                     # Main app with routing
├── main.tsx                    # Entry point
└── index.css                   # Global styles with Tailwind
```

## Sections

The platform covers 12 comprehensive sections:

1. **Structure & Semantics** - The foundation of accessible HTML
2. **Language & Text** - Typography and internationalization
3. **Forms & Inputs** - Form design best practices (⭐ Featured)
4. **Hyperlinks** - Link accessibility and UX
5. **Keyboard Navigation** - Keyboard-first design
6. **Color & Contrast** - Visual accessibility
7. **Images & Media** - Multimedia accessibility
8. **Advanced Components** - Modals, tooltips, and more
9. **Testing** - Accessibility testing strategies
10. **Cognitive Load** - Universal design principles
11. **Ergonomics** - Touch targets and Fitts's Law
12. **Environment** - Dark mode, RTL, and adaptability

## Design Philosophy

Every accessibility constraint is an opportunity to create better design:

- **Visual Hierarchy** - Semantic HTML creates natural information architecture
- **Cognitive Load** - Accessible patterns reduce mental strain
- **Affordance** - Proper labels and structure make interfaces more intuitive
- **Vertical Rhythm** - Relative units create scalable, harmonious layouts

## 🤝 Contributing

We welcome contributions! Design for All is an open-source project, and we're excited to see what you'll build.

**First time contributing?** Check out our [Contributing Guide](./CONTRIBUTING.md) for detailed instructions.

### Quick Start for Contributors

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/designforall.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature`
5. Make your changes
6. Commit: `git commit -m "feat: your feature description"`
7. Push: `git push origin feature/your-feature`
8. Open a Pull Request

### Types of Contributions We Welcome

- 🐛 Bug fixes
- ✨ New accessibility examples
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements
- 🌐 Internationalization
- 🧪 Tests

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- University of Michigan for the Blue & Maize color inspiration
- WCAG 2.2 guidelines
- The accessibility community for continuous learning and improvement
