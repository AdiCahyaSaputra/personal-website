import { cva } from 'class-variance-authority'

type Props = {
  children: React.ReactNode,
  className: string
}

export const container = cva("w-full px-4 mx-auto", {
  variants: {
    size: {
      large: "md:w-10/12",
      medium: "md:w-9/12"
    }
  },
  defaultVariants: {
    size: "medium"
  }
})

const Container: React.FC<Props> = (props) => {
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}

export default Container
