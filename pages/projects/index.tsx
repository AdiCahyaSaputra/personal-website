import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

// Components
import Navbar from "components/reusable/global/Navbar"
import Container, { container } from "components/reusable/global/Container"
import Article from "components/reusable/project/Article"

// Interface
import IProjectArticle from "lib/interface/IProjectArticle"

export const getStaticProps: GetStaticProps = async () => {
  const data: IProjectArticle[] = require('asset/data/projects.json')
  const years: number[] = Array.from(new Set(data.map(article => article.year))).sort().reverse()

  return {
    props: {
      data,
      years
    }
  }
}

type Props = {
  data: IProjectArticle[],
  years: number[]
}

const Projects: NextPage<Props> = ({ data, years }) => {

  const router = useRouter()

  return (
    <>

      <Head>
        <title>Adics</title>
      </Head>

      <main className="bg-black">

        <Navbar />

        <section className="bg-black text-white min-h-screen pb-10">

          <Container className={container({ size: "medium" })}>

            <div className="py-6 selection:text-black selection:bg-white">
              <h1 className="text-2xl font-bold">Here, The All Project</h1>
              <p className="text-lg text-white/60">That I have done before</p>
            </div>

            {years.map((year, index) => (
              <div key={index}>

                <h3 className="text-xl text-white font-bold selection:text-black selection:bg-white">{year}</h3>
                <div className="py-4 px-8 border-l-2 border-dashed ml-4 border-red-600 my-4">
                  {data.filter(article => article.year === year).map((article, index) => (
                    <Article {...article} key={index} />
                  ))}
                </div>

              </div>
            ))}

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
