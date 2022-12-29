import { cva } from "class-variance-authority"

export const card = cva("font-medium col-span-6 md:col-span-4 lg:col-span-3 py-2 px-4 border-2 border-white text-white", {
  variants: {
    intent: {
      black: "bg-black",
      red: "bg-red-600",
      sky: "bg-sky-600",
      blue: "bg-blue-600",
      "dark-blue": "bg-blue-800",
      orange: "bg-orange-600",
    }
  }
})

type Props = {
  className: string,
  tech: string
}

const TechStack: React.FC<Props> = ({ className, tech }) => {
  return (
    <li className={className}>
      {tech}
    </li>
  )
}

export default TechStack