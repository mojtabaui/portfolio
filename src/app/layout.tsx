import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mojtaba Yazdanpanah — Product Designer & UX Researcher",
    template: "%s — Mojtaba Yazdanpanah",
  },
  description:
    "Product Designer and UX Researcher with 6+ years of experience. MSc Design Thinking. Bridging industry practice with academic inquiry. Open to funded PhD/EngD positions in Europe.",
  keywords: [
    "Product Designer",
    "UX Researcher",
    "Design Thinking",
    "HCI",
    "Service Design",
    "Design Education",
    "UI/UX",
    "Mojtaba Yazdanpanah",
  ],
  authors: [{ name: "Mojtaba Yazdanpanah" }],
  creator: "Mojtaba Yazdanpanah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mojtaba.design",
    siteName: "Mojtaba Yazdanpanah",
    title: "Mojtaba Yazdanpanah — Product Designer & UX Researcher",
    description:
      "Product Designer and UX Researcher with 6+ years of experience. MSc Design Thinking. Open to funded PhD/EngD positions in Europe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mojtaba Yazdanpanah — Product Designer & UX Researcher",
    description:
      "Product Designer and UX Researcher with 6+ years of experience. MSc Design Thinking.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fafaf8] text-[#0f0f0f]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
