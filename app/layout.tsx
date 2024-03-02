import { cn } from "lib/utils";
import { Metadata, Viewport } from "next";
import "styles/globals.css";

import ThemeProvider from "@/components/provider/theme-provider";
import Navbar from "@/components/section/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type TProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased selection:text-background selection:bg-foreground",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="md:w-8/12 container py-10 relative">
            <Navbar />
            {children}
            <footer className="mt-14 flex justify-between items-center text-sm">
              <p>&copy; {new Date().getFullYear()}</p>
              <p>Adi Cahya Saputra</p>
            </footer>
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
    url: "https://adics.xyz",
    type: "website",
    title: "Personal Website",
    description: "Fullstuck Developer From Indonesia",
    images: "/og.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default RootLayout;
