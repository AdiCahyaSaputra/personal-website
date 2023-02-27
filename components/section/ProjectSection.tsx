// Lib
import { useRouter } from 'next/router'
import Image from 'next/image'

// Components
import Container, { container } from "../reusable/global/Container"
import Link from 'next/link'

const ProjectSection: React.FC = () => {
  const router = useRouter()

  const clickHandler = () => {
    setTimeout(() => {
      router.push('/projects')
    }, 500);
  }

  return (
    <section className="bg-black text-white py-12 select-none">

      <Container className={container({ size: "medium", className: "h-full" })}>

        <h1 className='text-2xl font-bold text-center'>What I&apos;ve Done <br />While Working On Programming</h1>

        <div className='flex justify-center mt-7'>
          <div className='w-full lg:w-2/3 aspect-video shadow-lg shadow-white' style={{
            backgroundImage: `url('/img/rental-mobil.png')`,
            backgroundSize: 'cover'
          }}>
          </div>
        </div>

        <div className='flex flex-col space-y-4 items-center justify-center mt-10'>

          <div className='overflow-hidden w-full lg:w-1/2'>
            <div className="transition-all duration-500 relative w-full group overflow-hidden">

              <button className="py-4 px-8 bg-transparent w-full text-white font-bold
                border-4 border-white select-none group-hover:text-black cursor-pointer
                active:scale-95 uppercase tracking-widest relative z-10 transition-all duration-500">
                Demo Link
              </button>
              <div className="z-0 absolute py-4 px-8 left-0 top-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-all duration-500" />

            </div>
          </div>

          <Link href='/projects' className='text-sky-500 hover:underline'>
            Another Project
          </Link>
        </div>

      </Container>

    </section>
  )
}

export default ProjectSection
