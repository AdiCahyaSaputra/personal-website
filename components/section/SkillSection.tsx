import Container, { container } from "../reusable/global/Container"
import TechStack, { card } from "../reusable/card/TechStack"

const techStacks = [
  {
    name: "Next JS",
    variant: "black"
  },
  {
    name: "Laravel",
    variant: "red"
  },
  {
    name: "Tailwind CSS",
    variant: "sky"
  },
  {
    name: "Typescript",
    variant: "blue"
  },
  {
    name: "My SQL",
    variant: "dark-blue"
  },
  {
    name: "Git",
    variant: "orange"
  },
]

const SkillSection: React.FC = () => {
  return (
    <section className="mt-6 text-white">
      <div className="bg-black border-2 border-black py-12">
        <Container className={container({ size: "medium" })}>

          <div>

            <h1 className="text-2xl font-bold selection:bg-white selection:text-black">Tech Stack Or Tools</h1>
            <p className="text-lg text-white/60 selection:bg-white selection:text-black">{"I've currently used"}</p>

          </div>

          <ul className="grid grid-cols-12 gap-4 mt-4 select-none">
            {techStacks.map((tech, index) => (
              /** @ts-ignore */
              <TechStack tech={tech.name} key={index} className={card({ intent: tech.variant })} />
            ))}
          </ul>

        </Container>
      </div>
    </section>
  )
}

export default SkillSection
