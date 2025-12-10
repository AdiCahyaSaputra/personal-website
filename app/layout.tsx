import { cn } from "lib/utils";
import { Metadata, Viewport } from "next";
import "styles/globals.css";

import ThemeProvider from "@/components/provider/theme-provider";
import Navbar from "@/components/section/Navbar";
import { Inter } from "next/font/google";
// import FloatingLines from "@/components/react-bits/floating-lines";

const inter = Inter({ subsets: ["latin"] });

type TProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased selection:text-background selection:bg-foreground gradient-bg",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative">
            <div className="relative z-20">
              <Navbar />
              <div className="md:w-8/12 container pb-10">
                {children}
                <footer className="mt-14 flex justify-between items-center text-sm">
                  <p>&copy; {new Date().getFullYear()}</p>
                  <p>Adi Cahya Saputra</p>
                </footer>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Adics",
  description: "Fullstuck Developer From Indonesia",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Personal Website",
    description: "Fullstack Developer",
    url: "https://adics.xyz",
    siteName: "Adi Cahya Saputra",
    images: [
      {
        url: "https://adics.xyz/og.png", // Must be an absolute URL
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default RootLayout;
