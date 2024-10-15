import Image from "next/image"

export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto py-20">
        <h1>Andrew Virts</h1>
        <p>
          Web designer experienced with Figma, Adobe, UI/UX design, SEO, digital
          marketing as well as HTML, CSS, JavaScript, and React.
        </p>

        <section className="py-20">
          <h2 className="font-bold text-2xl">Specializing in design for...</h2>
          <div className="flex space-x-4 py-4">
            <div className="w-1/3 bg-gray-100 rounded p-4">
              <h3 className="font-bold text-lg">Web</h3>
              <p>
                Beautiful, user-friendly websites that convert visitors and
                provide a seamless experience on any device.
              </p>
            </div>
            <div className="w-1/3 bg-gray-100 rounded p-4">
              <h3 className="font-bold text-lg">Social media</h3>
              <p>
                Eye-catching ads tailored to the brand, designed to engage the
                audience and boost campaigns.
              </p>
            </div>
            <div className="w-1/3 bg-gray-100 rounded p-4">
              <h3 className="font-bold text-lg">Email</h3>
              <p>
                Visually compelling emails crafted to inspire action, increasing
                opens and driving sales.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
