import ContentSection from "@/components/local/Content"
import Portfolio from "@/components/local/Portfolio"
import Services from "@/components/local/Services"
import Testimonials from "@/components/local/Testimonials"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex-1 flex flex-col w-full max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Hero */}
        <section className="bg-background w-full flex flex-col justify-center items-center">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center space-y-4 text-center py-16">
              <Image
                src="/images/Minimalist Smiling Face Design.jpeg"
                alt="Visual Electric"
                width={640}
                height={920}
              />
              <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <Badge>Steve Jobs once said...</Badge>
                  <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter py-4">
                    Design is not just what it looks like and feels like.{" "}
                    <span className="text-red-500">
                      Design is how it works.
                    </span>
                  </h1>
                  <p className="max-w-[700px] text-lg sm:text-xl md:text-xl text-secondary dark:text-gray-400 py-2">
                    Function follows form in every pixel and interaction. I
                    craft digital experiences that marry beauty with purpose,
                    ensuring your users don&apos;t just see the design—they feel
                    it working for them.
                  </p>
                </div>
                <div className="w-full space-x-4 flex gap-4 justify-center lg:justify-start">
                  <Button className="bg-primary text-white hover:bg-opacity-90">
                    Contact me
                  </Button>
                  <Button className="bg-white text-black hover:bg-neutral-100">
                    See my work
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <ContentSection />

        <Portfolio />

        <Testimonials />

        {/* Contact */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
        >
          <div className="container">
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
      <footer className="w-full max-w-[1400px] mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center border-t">
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
