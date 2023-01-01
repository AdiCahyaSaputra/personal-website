// Lib
import { NextPage } from "next"

// Components
import Navbar from "components/reusable/global/Navbar"
import Head from "next/head"
import Container, { container } from "components/reusable/global/Container"

const Blog: NextPage = () => {
  return (
    <>
      
      <Head>
        <title>Adics</title>
      </Head>

      <main>

        <Navbar/>

        <section className="bg-black text-white min-h-screen pb-10">
          <Container className={container({ size: "medium" })}>

            <div className="py-6 selection:text-black selection:bg-white">
              <h1 className="text-2xl font-bold">Interesting Stuff Here (Maybe)</h1>
              <p className="text-lg mt-1">{"I'm"} Just Start Blogging And I {"Don't"}<br/> Know How To Write A Good Article For Now. Sorry...</p>
            </div>

          </Container>
        </section>

      </main>

    </>
  )
}

export default Blog
