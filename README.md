# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


// Icon + Text
<Button icon={IconPlus}>Add Item</Button>

// Icon only
<Button size="icon" icon={IconPlus} />

// Normal Text
<Button variant="secondary">Cancel</Button>

## Understanding the `cn()` Utility

The `cn()` function is a powerful pattern used throughout this project to merge Tailwind CSS classes safely.

### What it does
It combines two highly-used libraries:
1. **`clsx`**: Allows you to conditionally construct class names (e.g., `condition && 'text-primary'`). It safely filters out `false`, `null`, or `undefined`.
2. **`tailwind-merge` (`twMerge`)**: Understands Tailwind CSS properties and automatically resolves cascading conflicts.

### Why we use it (The Problem it Solves)
Due to CSS specificity, simply concatenating strings (e.g., ``className={`p-4 ${className}`}``) is dangerous. If a parent component passes `p-2` via the `className` prop, the final HTML class list becomes `p-4 p-2`. Depending on how the CSS was generated, `p-4` might still override `p-2`, breaking your intended layout.

By using `cn("p-4", className)`, `tailwind-merge` detects the conflict between the padding classes. It strips out the older `p-4` and keeps the newer `p-2`, resulting in a clean, predictable HTML output: `class="p-2"`.

### Where to use it
You should use the `cn()` utility **anytime you build a reusable component that accepts a `className` prop**. It ensures that the parent component can safely and reliably override the default styles of the child component without CSS cascade issues.

**Example Usage:**
```tsx
import { cn } from './utils'; // Assuming cn is exported from a utils file

export const Card = ({ className, children }) => {
  return (
    <div className={cn("bg-surface rounded-lg shadow-sm p-md", className)}>
      {children}
    </div>
  )
}
```
