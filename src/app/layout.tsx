import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ian Angelo Valmores — Full-Stack Developer",
    template: "%s | Ian Angelo Valmores",
  },
  description:
    "Full-Stack Developer focused on building high-performance, user-centric web applications. View my projects, skills, and experience.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Ian Angelo Valmores" }],
  openGraph: {
    title: "Ian Angelo Valmores — Full-Stack Developer",
    description:
      "Full-Stack Developer focused on building high-performance, user-centric web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
