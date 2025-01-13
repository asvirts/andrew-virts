import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, User, Target } from 'lucide-react'

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gray-900 text-white">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Project Hero Image"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Project Title
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A brief description of the project and its main goal.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Duration: 8 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Role: Lead UX Designer</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>Platform: Web & Mobile</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600">
            Provide a brief summary of the project, including the client, the challenge, and the overall outcome.
          </p>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-gray-600">
            Clearly state the problem that your project aimed to solve. Discuss any user pain points or business challenges.
          </p>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Design Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-gray-600">Describe your research methods and key findings.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ideation</h3>
              <p className="text-gray-600">Explain your brainstorming process and initial concepts.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
              <p className="text-gray-600">Discuss how you created and iterated on prototypes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">User Testing</h3>
              <p className="text-gray-600">Share insights from user testing and how they informed your design.</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-gray-600 mb-4">
            Present your final design solution and explain how it addresses the problem.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Solution Screenshot 1"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Solution Screenshot 2"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Results and Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Results and Impact</h2>
          <p className="text-gray-600 mb-4">
            Share any quantitative or qualitative results from the project. How did your solution impact the users or the business?
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Key metric improvement 1</li>
            <li>Key metric improvement 2</li>
            <li>Positive user feedback</li>
            <li>Business impact</li>
          </ul>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Lessons Learned</h2>
          <p className="text-gray-600">
            Reflect on what you learned from this project. What went well? What would you do differently next time?
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-600 mb-8">
            I'm always looking for new and exciting projects. Let's create something amazing together!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Get in Touch
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </a>
        </section>
      </main>
    </div>
  )
}

