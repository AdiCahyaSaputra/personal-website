import 'styles/globals.css'
import { Metadata } from "next"

import { fontSans } from '@/lib/fonts'
import { cn } from 'lib/utils'

import ThemeProvider from '@/components/section/ThemeProvider'
import ProgressProvider from '@/components/provider/progress-provider'

type TProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased selection:text-background selection:bg-foreground', fontSans.variable)}>
        <ProgressProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </ProgressProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Adics',
  description: 'My Personal Website',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: '/favicon.png'
  }
}

export default RootLayout
