import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

// Components
import Navbar from "../components/reusable/global/Navbar"
import Container, { container } from "../components/reusable/global/Container"
import Article from "../components/reusable/project/Article"

// Interface
import IProjectArticle from "../lib/interface/IProjectArticle"

const projectArticles2022: IProjectArticle[] = [
  {
    date: 'Sep 6',
    title: 'Rental Mobil',
    shortDesc: 'The Place To Rent Your Car If You Need Emergency Money'
  },
  {
    date: 'May 29',
    title: 'Toko Online',
    shortDesc: 'Very Minimalistic E-Commerce ft.Discord Friends'
  },
]

const projectArticles2021: IProjectArticle[] = [
  {
    date: 'Dec 6',
    title: 'Auto Manage Files',
    shortDesc: 'Manage Your Donwloads Folder Programmatically'
  },
]

const Projects: NextPage = () => {

  const router = useRouter()

  return (
    <>

      <Head>
        <title>Adics</title>
      </Head>

      <main>

        <Navbar />

        <section className="bg-black text-white min-h-screen pb-10">

          <Container className={container({ size: "medium" })}>

            <div className="py-6 selection:text-black selection:bg-white">
              <h1 className="text-2xl font-bold">Here, The All Project</h1>
              <p className="text-lg">That I Have Done Before</p>
            </div>

            <div>

              <h3 className="text-xl font-medium selection:text-black selection:bg-white">2022</h3>
              <div className="py-4 px-8 border-l-2 border-dashed ml-4 border-white my-4">
                {projectArticles2022.map((article, index) => (
                  <Article {...article} key={index} />
                ))}
              </div>

            </div>

            <div>

              <h3 className="text-xl font-medium selection:text-black selection:bg-white">2021</h3>
              <div className="py-4 px-8 border-l-2 border-dashed ml-4 border-white my-4">
                {projectArticles2021.map((article, index) => (
                  <Article {...article} key={index} />
                ))}
              </div>

            </div>

          </Container>

        </section>

      </main>

      <footer className="p-4 border-t border-white/60 bg-black select-none text-white relative">
        <Container className={container({ size: "large", className: "items-center justify-between flex" })}>
          <h3>&copy; 2023 </h3>
          <a onClick={() => router.push('/')} className="cursor-pointer hover:underline">Adi Cahya Saputra</a>
        </Container>
      </footer>
    </>
  )
}

export default Projects
