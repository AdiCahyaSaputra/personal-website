import { cn } from "lib/utils";
import { Metadata, Viewport } from "next";
import "styles/globals.css";

import ThemeProvider from "@/components/provider/theme-provider";
import Navbar from "@/components/section/Navbar";
import { Inter } from "next/font/google";
import FloatingLines from "@/components/react-bits/floating-lines";

const inter = Inter({ subsets: ["latin"] });

type TProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-black antialiased selection:text-background selection:bg-foreground",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative">
            <div
              style={{
                width: "100%",
                height: "100vh",
                position: "fixed",
                zIndex: 1,
                opacity: 0.7,
              }}
            >
              <FloatingLines
                enabledWaves={["top", "bottom"]}
                lineCount={[5, 5]}
                lineDistance={[5, 5]}
                bendRadius={5.0}
                bendStrength={-3}
                interactive={false}
                parallax={false}
              />
            </div>
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
  title: "Adi Cahya Saputra — Full-Stack Developer",
  description:
    "Portfolio of Adi Cahya Saputra, a full-stack developer in Jakarta building web and mobile products.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Adi Cahya Saputra — Full-Stack Developer",
    description:
      "Selected web and mobile product work by Adi Cahya Saputra.",
    url: "https://adics.xyz",
    siteName: "Adi Cahya Saputra",
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
