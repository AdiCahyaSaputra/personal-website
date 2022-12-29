// Lib
import FeaturedIMG from '../../public/img/featured.jpg'

// Components
import Container, { container } from "../reusable/global/Container"
import Image from 'next/image'

const ProjectSection: React.FC = () => {
  return (
    <section className="bg-white pb-10">

      <Container className={container({ size: "medium", className: "h-full" })}>

        <div>

          <h1 className="text-3xl font-bold selection:text-white selection:bg-black">What Have I Done</h1>
          <p className="text-lg selection:text-white selection:bg-black">
            While Working On Programming Hell
          </p>

        </div>

        <figure className="mt-4 select-none">

          <div className="lg:w-8/12 overflow-hidden group cursor-pointer bg-black aspect-video relative">
            <Image
              src={FeaturedIMG}
              alt="Featured IMG"
              className="absolute inset-0 group-hover:scale-95 transition-all"
              placeholder="blur"
            />
          </div>

          <figcaption className="cursor-pointer mt-4 group">

            <a className="text-2xl group-hover:underline font-bold">Rental Mobil</a>

            <p className="text-lg">The Place To Rent Your Car If You Need Emergency Money</p>

          </figcaption>

        </figure>

        <a className="select-none cursor-pointer lg:w-max w-full text-center text-white hover:text-black border-2 border-black hover:bg-transparent py-2 px-4 active:scale-95 mt-6 inline-block text-lg font-medium bg-black">See More Project</a>

      </Container>

    </section>
  )
}

export default ProjectSection