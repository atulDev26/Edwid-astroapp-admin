import { useState } from 'react'
import Layout from './Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-background text-on-background py-md">
        <div className="bg-surface border border-outline-variant p-xl rounded-xl shadow-sm max-w-2xl w-full text-center">
          <h1 className="text-h1 text-primary mb-md">Astro Hora Admin</h1>
          <p className="text-body-lg text-on-surface-variant mb-xl">
            This project is now configured with the custom design system from <code>skills/DESIGN.md</code> and the folder structure from <code>skills/architecture.md</code>.
          </p>
          
          <div className="flex flex-col gap-md items-center bg-surface-container-low p-lg rounded-lg border border-outline-variant">
            <h2 className="text-h2 text-on-surface">Interactive Component</h2>
            <button
              className="px-lg py-sm bg-primary text-on-primary rounded hover:bg-primary-container hover:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all"
              onClick={() => setCount((count) => count + 1)}
            >
              <span className="text-label-sm uppercase tracking-wider">Click Count</span>
              <div className="text-h3 mt-xs">{count}</div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
