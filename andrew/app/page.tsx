import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Laptop, Smartphone, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    title: "MyJAM",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/MyJAM%20-%20Internal%20Dashboard%20-%20Striped%20table.png",
    link: "/portfolio/1"
  },
  {
    title: "Talent Hub",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Talent%20Hub.png",
    link: "/portfolio/3"
  },
  {
    title: "MKON",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/MKON%20-%20Desktop%20-%202.png",
    link: "/portfolio/2"
  },
  {
    title: "Mobile App Mock Up",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/One%20Step%203.png?t=2025-01-12T02%3A13%3A57.643Z",
    link: "/portfolio/4"
  },
  {
    title: "Case By Case",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Case%20by%20Case.png",
    link: "/portfolio/5"
  },
  {
    title: "Valentine's Day 2024",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Valentines%20Day.png",
    link: "/portfolio/6"
  }
]

const testimonials = [
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
]

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex-1 flex flex-col w-full">
        {/* Hero */}
        <section
          className="w-full flex flex-col justify-center items-center"
          style={{
            backgroundColor: "#f2ece1"
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center space-y-4 text-center lg:pb-0 pb-16">
              <Image
                src="/images/Minimalist Smiling Face Design.jpeg"
                alt="Visual Electric"
                width={640}
                height={960}
              />
              <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <Badge>Steve Jobs</Badge>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter py-4 ">
                    Design is not just what it looks like and feels like.{" "}
                    <span className="text-red-500">
                      Design is how it works.
                    </span>
                  </h1>
                  <p className="max-w-[700px]  text-lg sm:text-xl md:text-xl dark:text-gray-400 py-2">
                    Function follows form in every pixel and interaction. I
                    craft digital experiences that marry beauty with purpose,
                    ensuring your users don&apos;t just see the design—they feel
                    it working for them.
                  </p>
                </div>
                <div className="w-full space-x-4 flex gap-4 justify-center lg:justify-start">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Services
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
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  User-centric design that enhances engagement and conversions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Smartphone className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Intuitive web applications written in React.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <div
                  key={item.title}
                  className="relative aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={`Portfolio item ${item.title}`}
                    className="object-cover w-full h-full"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      className="text-gray-500 border-white hover:bg-white hover:text-black"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What My Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
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

        {/* Contact */}
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
      <footer className="w-full max-w-[1400px] mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Andrew Virts. All rights reserved.
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
