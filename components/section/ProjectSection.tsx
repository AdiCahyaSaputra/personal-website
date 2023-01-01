// Lib
import FeaturedIMG from '../../public/img/featured.jpg'
import { useRouter } from 'next/router'

// Components
import Container, { container } from "../reusable/global/Container"
import Image from 'next/image'

const ProjectSection: React.FC = () => {
  const router = useRouter()

  const clickHandler = () => {
    setTimeout(() => {
      router.push('/projects')
    }, 500);
  }

  return (
    <section className="bg-white pb-10">

      <Container className={container({ size: "medium", className: "h-full" })}>

        <div>

          <h1 className="text-3xl font-bold selection:text-white selection:bg-black">What Have I Done</h1>
          <p className="text-lg selection:text-white selection:bg-black text-black/60">
            While working on programming hell
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

            <a onClick={() => router.push('/projects/rental-mobil')} className="text-2xl group-hover:underline font-bold">Rental Mobil</a>
            <p className="text-lg text-black/60">The place to rent your car if you need emergency money</p>

          </figcaption>

        </figure>

        <div className="mt-6 relative lg:w-max group overflow-hidden">
          <a onClick={clickHandler} className="select-none cursor-pointer transition-all duration-500 lg:w-max w-full text-center text-black group-hover:text-white border-2 border-black py-2 px-4 active:scale-95 inline-block text-lg font-medium bg-transparent relative z-10">
            See More Project
          </a>
          <div className="duration-500 absolute left-0 top-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-all z-0" />
        </div>

      </Container>

    </section>
  )
}

export default ProjectSection
