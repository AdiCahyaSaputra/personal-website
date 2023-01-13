import { useRouter } from "next/router"
import Container, { container } from "../reusable/global/Container"

const blogs = [
  {
    link: "https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js",
    label: <>Using <code className="bg-red-600/60">useRef()</code> To Multiple Elements In React JS</>,
    desc: <>Just like <code className="bg-white/10">querySelectorAll()</code> in ReactJS using <code className="bg-white/10">useRef()</code> hooks</>
  },
  {
    link: "https://adics.hashnode.dev/apa-itu-internet",
    label: <>How Internet Work</>,
    desc: <>Explain about how internet work in Indonesian (Bahasa)</>
  },
]

const BlogSection: React.FC = () => {
  const router = useRouter()
  
  const clickHandler = () => {
      setTimeout(() => {
        router.push('/blog')
      }, 500);
    }

  return (
    <section className="bg-black text-white py-12 h-screen">
      <Container className={container({ size: "medium" })}>

        <div>

          <h1 className="text-3xl font-bold selection:text-black selection:bg-white">{"I'm Also Writing A Blog"}</h1>
          <p className="text-lg selection:text-black selection:bg-white text-white/60">
            To inspire other developers
          </p>

        </div>

        <div className="mt-6 space-y-2 lg:w-8/12">

          {blogs.map((blog, index) => (
            <article key={index} className="p-4 border-2 border-white">
              <a href={blog.link} className="text-xl font-bold cursor-pointer hover:underline select-none">
                {blog.label}
              </a>
              <p className="mt-1 selection:bg-white selection:text-black text-white/60">
                {blog.desc}
              </p>
            </article>
          ))}

        </div>

        <div className="mt-6 relative lg:w-max group overflow-hidden">
          <button onClick={clickHandler} className="select-none cursor-pointer transition-all duration-500 lg:w-max w-full text-center text-white group-hover:text-black border-2 border-white py-2 px-4 active:scale-95 text-lg font-medium bg-transparent relative z-10">
            See More Blog
          </button>
          <div className="duration-500 absolute left-0 top-0 w-full h-full bg-white translate-x-full group-hover:translate-x-0 transition-all z-0"/>
        </div>

      </Container>
    </section>
  )
}

export default BlogSection
