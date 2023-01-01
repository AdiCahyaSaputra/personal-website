import Container, { container } from "../reusable/global/Container"

const blogs = [
  {
    link: "https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js",
    label: <>Using <code className="bg-black/10">useRef()</code> To Multiple Elements In React JS</>,
    desc: <>Just like <code>querySelectorAll()</code> in ReactJS using <code>useRef()</code> hooks</>
  },
  {
    link: "https://adics.hashnode.dev/apa-itu-internet",
    label: <>How Internet Work</>,
    desc: <>Explain about how internet work in Indonesian (Bahasa)</>
  },
]

const BlogSection: React.FC = () => {

  return (
    <section className="py-12 h-screen">
      <Container className={container({ size: "medium" })}>

        <div>

          <h1 className="text-3xl font-bold selection:text-white selection:bg-black">{"I'm Also Writing A Blog"}</h1>
          <p className="text-lg selection:text-white selection:bg-black text-black/60">
            To inspire other developers
          </p>

        </div>

        <div className="mt-6 space-y-2 lg:w-8/12">

          {blogs.map((blog, index) => (
            <article key={index} className="p-4 border-2 border-black">
              <a href={blog.link} className="text-xl font-bold cursor-pointer hover:underline select-none">
                {blog.label}
              </a>
              <p className="mt-2 selection:bg-black selection:text-white text-black/60">
                {blog.desc}
              </p>
            </article>
          ))}

        </div>

        <div className="mt-6 relative lg:w-max group overflow-hidden">
          <a className="select-none cursor-pointer transition-all duration-500 lg:w-max w-full text-center text-black group-hover:text-white border-2 border-black py-2 px-4 active:scale-95 inline-block text-lg font-medium bg-transparent relative z-10">
            See More Blog
          </a>
          <div className="duration-500 absolute left-0 top-0 w-full h-full bg-black translate-x-full group-hover:translate-x-0 transition-all z-0"/>
        </div>

      </Container>
    </section>
  )
}

export default BlogSection
