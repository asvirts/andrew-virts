import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ContentSection() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        {/* Header */}
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
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Lively%20Group%20Discussion.jpeg?t=2025-01-12T20%3A49%3A27.148Z"
                  alt="Feature illustration"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="text-xl font-bold">
                Medium length section heading goes here
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
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
