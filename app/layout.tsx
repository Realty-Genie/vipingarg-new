import type { Metadata } from "next";
import { Gelasio, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Vipin Garg Finance Coaching | CSC, IFC, CIRE & LLQP Classes Canada",
  description: "Live Canadian finance certification coaching for CSC Level 1, CSC Level 2, IFC, CIRE and LLQP in Greater Vancouver & Online. New batches starting May 6, 2026. $500 + taxes. First class is a free trial & orientation.",
  keywords: "CSC coaching Canada, IFC coaching Canada, CIRE exam preparation, LLQP coaching, Canadian finance certifications, investment advisor course Canada, banking certification Canada, finance career path Canada, Vancouver finance coaching",
  alternates: {
    canonical: "https://vipingarg.com",
  },
  openGraph: {
    title: "Vipin Garg Finance Coaching | Canadian Finance Exam Prep",
    description: "Pass CSC, IFC, CIRE & LLQP with expert coaching from a CFA Charterholder. Classes in Vancouver & Online.",
    url: "https://vipingarg.com",
    siteName: "Vipin Garg Finance Coaching",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gelasio.variable} scroll-smooth`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
