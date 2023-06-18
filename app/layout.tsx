import 'styles/globals.css'
import { Metadata } from "next"

type TProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Adics',
  description: 'My Personal Website'
}

export default RootLayout
