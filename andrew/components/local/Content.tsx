import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "MyJAM",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Lively%20Group%20Discussion.jpeg?t=2025-01-12T20%3A49%3A27.148Z",
    link: "/portfolio/1"
  },
  {
    title: "Talent Hub",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Professional%20Team%20Brainstorming%20Session.jpeg?t=2025-01-12T23%3A50%3A57.647Z",
    link: "/portfolio/3"
  },
  {
    title: "MKON",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Lively%20Group%20Discussion.jpeg?t=2025-01-12T20%3A49%3A27.148Z",
    link: "/portfolio/2"
  },
  {
    title: "Mobile App Mock Up",
    description: "This is a description of the portfolio item.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Professional%20Team%20Brainstorming%20Session.jpeg?t=2025-01-12T23%3A50%3A57.647Z",
    link: "/portfolio/4"
  }
]

export default function ContentSection() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium">Tagline</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Medium length section heading goes here
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image}
                  alt="Feature illustration"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Button variant="outline">Button</Button>
          <Button className="gap-2">
            Button
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
