import { useState } from 'react'
import Layout from './Layout/Layout'
import Button from './Components/Common/Button'
import { IconPlus, IconSettings, IconPencil, IconTrash, IconArrowRight, IconSend, IconDeviceFloppy } from '@tabler/icons-react'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-xl py-lg">
        <section className="text-center space-y-sm">
          <h1 className="typography-h1 text-primary">Component System</h1>
          <p className="typography-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A high-performance UI library built with React, Tailwind CSS v4, and Tabler Icons, following the strict 8px grid system.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

          {/* Button Variants Section */}
          <div className="bg-surface p-lg rounded-lg border border-outline-variant space-y-lg shadow-sm">
            <h2 className="typography-h2 border-b border-outline-variant pb-md">Button Variants</h2>
            <div className="flex flex-wrap gap-md">
              <Button variant="primary" size='sm' className='text-white '>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="neutral">Neutral</Button>
              <Button variant="inverted">Inverted</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Button Sizes Section */}
          <div className="bg-surface p-lg rounded-lg border border-outline-variant space-y-lg shadow-sm">
            <h2 className="typography-h2 border-b border-outline-variant pb-md">Button Sizes</h2>
            <div className="flex items-center flex-wrap gap-md">
              <Button size="sm">Small Action</Button>
              <Button size="md">Medium Default</Button>
              <Button size="lg">Large Call to Action</Button>
            </div>
          </div>

          {/* Icon Combinations Section */}
          <div className="bg-surface p-lg rounded-lg border border-outline-variant space-y-lg shadow-sm">
            <h2 className="typography-h2 border-b border-outline-variant pb-md">Icons & Text</h2>
            <div className="flex flex-wrap gap-md items-center">
              <Button icon={IconPlus}>Create New</Button>
              <Button icon={IconSend} variant="secondary" iconPosition="right">Submit Form</Button>
              <Button icon={IconDeviceFloppy} variant="outlined" isLoading={isLoading} onClick={handleSave}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>

          {/* Icon Only Section */}
          <div className="bg-surface p-lg rounded-lg border border-outline-variant space-y-lg shadow-sm">
            <h2 className="typography-h2 border-b border-outline-variant pb-md">Icon Only</h2>
            <div className="flex flex-wrap gap-md">
              <Button size="icon" icon={IconPlus} aria-label="Add" />
              <Button size="icon" variant="secondary" icon={IconSettings} aria-label="Settings" />
              <Button size="icon" variant="tertiary" icon={IconPencil} aria-label="Edit" />
              <Button size="icon" variant="inverted" icon={IconTrash} aria-label="Delete" />
              <Button size="icon" variant="outlined" icon={IconArrowRight} aria-label="Next" />
            </div>
          </div>

        </div>

        {/* Global State Integration */}
        <div className="bg-primary text-on-primary p-xl rounded-xl shadow-lg flex flex-col items-center gap-lg">
          <div className="text-center space-y-xs">
            <h3 className="typography-h2 font-bold">Interactive State Example</h3>
            <p className="text-on-primary/80">Using the Button component to manage global count state</p>
          </div>

          <div className="flex items-center gap-xl bg-on-primary/10 p-lg rounded-lg border border-on-primary/20">
            <div className="text-center">
              <span className="typography-label-sm block opacity-70 uppercase">Current Count</span>
              <span className="typography-h1 block font-mono">{count}</span>
            </div>
            <div className="flex flex-col gap-sm">
              <Button variant="secondary" size="md" icon={IconPlus} onClick={() => setCount(c => c + 1)}>
                Increase
              </Button>
              <Button variant="outlined" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => setCount(0)} disabled={count === 0}>
                Reset State
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
