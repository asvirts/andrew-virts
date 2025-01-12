import { Button } from "@/components/ui/button"
import Image from "next/image"

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

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
    >
      <div className="container">
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
                <Button className="bg-white text-gray-500 border-white hover:bg-neutral-50 hover:text-primary">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
