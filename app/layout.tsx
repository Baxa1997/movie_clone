import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
import {ThemeProvider} from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disney",
  description: "For educational purposes",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
