// Lib
import { NextPage } from "next"
import FeaturedBlog from "../../public/img/featured-blog.jpg"
import { useRouter } from "next/router"

// Components
import Navbar from "components/reusable/global/Navbar"
import Head from "next/head"
import Container, { container } from "components/reusable/global/Container"
import Image from "next/image"

const Blog: NextPage = () => {
  const router = useRouter()

  const clickHandler = () => {
    setTimeout(() => {
      window.location.href = "https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js"
    }, 500)
  }

  return (
    <>

      <Head>
        <title>Adics</title>
      </Head>

      <main>

        <Navbar />

        <section className="selection:text-black selection:bg-white bg-black text-white min-h-screen pb-10">
          <Container className={container({ size: "medium" })}>

            <div className="py-6 selection:text-black selection:bg-white">
              <h1 className="text-2xl font-bold">Interesting Stuff Here (Maybe)</h1>
              <p className="text-lg text-white/60 mt-1">{"I'm"} just start blogging and I {"don't"}<br /> know how to write a good Article for now.</p>
            </div>

            <div className="grid grid-cols-12 gap-4">

              <figure className="col-span-12 flex lg:items-center lg:flex-row flex-col gap-4">

                <div className="relative aspect-video bg-black lg:w-6/12">
                  <Image
                    src={FeaturedBlog}
                    alt="blog"
                    className="absolute inset-0 group-hover:scale-95 transition-all border-2 border-white"
                    placeholder="blur"
                  />
                </div>

                <figcaption className="lg:w-4/12">

                  <div>
                    <p className="font-medium text-white/60">Aug 29, 2022</p>
                    <a href="https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js" className="select-none cursor-pointer hover:underline inline-block lg:text-3xl text-2xl font-bold mt-2">Using <code className="bg-red-800/80">useRef()</code> To Multiple Elements In React JS</a>
                    <p className="text-lg mt-1 text-white/60">Just like <code className="bg-white/10">querySelectorAll()</code> in ReactJS using <code className="bg-white/10">useRef()</code> hooks</p>
                  </div>

                </figcaption>

              </figure>

              <div className="col-span-12 py-4">
                <article>

                  <div>
                    <p className="font-medium text-white/60">Aug 29, 2022</p>
                    <a href="https://adics.hashnode.dev/apa-itu-internet" className="select-none cursor-pointer hover:underline inline-block text-2xl font-bold mt-2">
                      How Internet Work
                    </a>
                    <p className="text-lg mt-1 text-white/60">
                      Explain about how internet work in Indonesia (Bahasa)
                    </p>
                  </div>

                </article>
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

export default Blog
