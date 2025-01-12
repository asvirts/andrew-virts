import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Laptop,
  Smartphone,
  Globe,
  Users,
  Mail,
  ArrowRight
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between w-full max-w-[1400px]">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="sr-only">Acme Web Design</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Crafting Digital Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We design and develop stunning websites that drive results for
                  your business.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Laptop className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Web Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Beautiful, responsive websites tailored to your brand.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Smartphone className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Intuitive mobile applications for iOS and Android.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  User-centric design that enhances engagement and conversions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Portfolio item ${item}`}
                    className="object-cover"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO, TechCorp",
                  content:
                    "Working with this agency was a game-changer for our online presence. Highly recommended!"
                },
                {
                  name: "Sarah Lee",
                  role: "Marketing Director, StyleHub",
                  content:
                    "The team's creativity and attention to detail exceeded our expectations. Fantastic results!"
                },
                {
                  name: "Michael Brown",
                  role: "Founder, EcoStart",
                  content:
                    "Their expertise in UX design significantly improved our user engagement and conversion rates."
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=100`}
                    alt={testimonial.name}
                    className="rounded-full mb-4"
                    width={100}
                    height={100}
                  />
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {testimonial.content}
                  </p>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ready to start your next project? Contact us today for a free
                  consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your name" />
                  <Input type="email" placeholder="Your email" />
                  <Textarea placeholder="Your message" />
                  <Button type="submit" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="max-w-[1400px] flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Web Design. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
