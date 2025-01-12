import Image from "next/image"

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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-background w-full py-12 md:py-24 lg:py-32 flex flex-col justify-center items-center"
    >
      <div className="container">
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
  )
}
