// Lib
import FeaturedIMG from '../../public/img/featured.jpg'
import { useRouter } from 'next/router'

// Components
import Container, { container } from "../reusable/global/Container"
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const ProjectSection: React.FC = () => {
  const router = useRouter()

  const clickHandler = () => {
    setTimeout(() => {
      router.push('/projects')
    }, 500);
  }

  return (
    <section className="bg-slate-100 text-dark py-12 select-none">

      <Container className={container({ size: "medium", className: "h-full" })}>

        <div className='flex items-start space-x-8'>

          <div className='w-6/12'>

            <div className='p-8 shadow-lg shadow-black rounded-md bg-dark text-white w-full aspect-video'>
              <h3 className='space-x-2'>
                <span className='font-bold text-blue-500'>personal-website</span>
                <span className='text-white'>on</span>
                <span className='text-green-500 font-semibold'>{'/me'}</span>
              </h3>

              <div className='mt-1 flex space-x-2 items-end'>
                <ChevronRightIcon className='w-5 stroke-red-500 aspect-square' />
                <p className='font-mono'>Project That I&apos;ve Made Before<span className='ml-1 text-white bg-white px-1 py-px'></span></p>
              </div>

            </div>

          </div>

          <div className='w-6/12'>

            <p className='font-bold text-red-600'>Frontend</p>
            <h1 className='text-2xl font-bold hover:underline cursor-pointer w-max'>Rental Mobil</h1>

            <p className='mt-2 text-dark/80 font-semibold'>
              The place to rent your car, <br />If you need emergency money
            </p>

            <div className='overflow-hidden'>
              <div className="transition-all duration-500 relative mt-6 w-max group overflow-hidden">

                <button onClick={clickHandler} className="py-2 px-4 bg-transparent w-max text-dark font-bold
                  border-2 border-dark select-none group-hover:text-white cursor-pointer
                  active:scale-95 relative z-10 transition-all duration-500">
                  See More Project
                </button>

                <div className="z-0 absolute py-2 px-4 left-0 top-0 w-full h-full bg-dark -translate-x-full group-hover:translate-x-0 transition-all duration-500" />

              </div>
            </div>

          </div>

        </div>

      </Container>

    </section>
  )
}

export default ProjectSection
