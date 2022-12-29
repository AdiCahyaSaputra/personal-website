import Container, { container } from "../reusable/global/Container"

const blogs = [
  {
    link: "https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js",
    label: <>Using <code className="bg-black/10">useRef()</code> To Multiple Elements In React JS</>,
    desc: <>Just Like <code>querySelectorAll()</code> In ReactJS Using <code>useRef()</code> Hooks</>
  },
  {
    link: "https://adics.hashnode.dev/apa-itu-internet",
    label: <>How Internet Work</>,
    desc: <>Explain About How Internet Work In Indonesian (Bahasa)</>
  },
]

const BlogSection: React.FC = () => {

  return (
    <section className="py-12 lg:h-screen">
      <Container className={container({ size: "medium" })}>

        <h1 className="text-2xl font-bold selection:bg-black selection:text-white">Blog</h1>

        <div className="mt-6 space-y-2 lg:w-8/12">

          {blogs.map((blog, index) => (
            <article key={index} className="p-4 border-2 border-black">
              <a href={blog.link} className="text-xl font-bold cursor-pointer hover:underline select-none">
                {blog.label}
              </a>
              <p className="mt-2 selection:bg-black selection:text-white">
                {blog.desc}
              </p>
            </article>
          ))}

        </div>

        <a className="select-none cursor-pointer lg:w-max w-full text-center text-white hover:text-black border-2 border-black hover:bg-transparent py-2 px-4 active:scale-95 mt-6 inline-block text-lg font-medium bg-black">See More Blog</a>

      </Container>
    </section>
  )
}

export default BlogSection