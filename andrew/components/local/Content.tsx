import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"

const features = [
  {
    title: "Stuller",
    description: "Largest jewelry manufacturer in North America.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Case%20Studies/stuller.png?t=2025-01-13T02%3A20%3A50.651Z",
    link: "/case-studies/stuller"
  },
  {
    title: "MyJAM",
    description: "Custom software solution for an accountant.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Case%20Studies/myjam.png?t=2025-01-13T02%3A17%3A23.324Z",
    link: "/case-studies/myjam"
  },
  {
    title: "MKON",
    description: "Client sites for a trucking company located in Canada.",
    image:
      "https://mjofrqyopzbcipzeghug.supabase.co/storage/v1/object/public/images/Case%20Studies/mkon.png",
    link: "/case-studies/mkon"
  }
]

export default function ContentSection() {
  return (
    <section className="py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <Badge>Case Studies</Badge>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-100">
                <Link href={item.link} key={item.title}>
                  <Image
                    src={item.image}
                    alt="Feature illustration"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </Link>
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
