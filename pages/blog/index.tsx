// Lib
import { NextPage } from "next"
import { useRouter } from "next/router"

// Components
import Navbar from "components/reusable/global/Navbar"
import Head from "next/head"
import Container, { container } from "components/reusable/global/Container"

const Blog: NextPage = () => {
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
              <h1 className="text-2xl font-bold">Interesting Stuff Here (Maybe)</h1>
              <p className="text-lg text-white/60 mt-1">{"I'm"} Just Start Blogging And I {"Don't"}<br /> Know How To Write A Good Article For Now.</p>
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

export default Blog
