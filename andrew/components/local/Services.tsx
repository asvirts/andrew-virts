import {
  FlaskConical,
  NotebookPen,
  Palette,
  Puzzle,
  Smartphone,
  User
} from "lucide-react"

export default function Portfolio() {
  return (
    <section
      id="services"
      className="bg-background w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
    >
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <NotebookPen className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">UX Research & Strategy</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Uncover what your users truly need through deep research and
              strategic mapping, transforming insights into experiences that
              convert.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Palette className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">UI Design & Prototyping</h3>
            <p className="text-gray-500 dark:text-gray-400">
              From concept to clickable reality. Every screen and interaction is
              crafted with purpose, creating seamless user flows.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Puzzle className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Design Systems</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Scale your product with confidence through robust, consistent
              design systems that unite brand and functionality.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FlaskConical className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">User Testing & Iteration</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Real users, real feedback. Rigorous testing and data-driven
              refinements ensure your interface feels effortless.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Smartphone className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">
              Mobile & Responsive Design
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Flawless experiences across every device. Your design adapts
              intelligently while maintaining its core impact.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <User className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Design Team Leadership</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Empower your design team. I bring proven experience in mentoring,
              processes, and strategic direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
