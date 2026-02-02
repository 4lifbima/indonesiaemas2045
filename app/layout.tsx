import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Indonesia Emas 2045 | Visi Menuju Indonesia Maju",
  description: "Website resmi Indonesia Emas 2045 - Mewujudkan visi Indonesia sebagai negara maju, berdaulat, dan sejahtera pada tahun 2045.",
  keywords: "Indonesia Emas 2045, RPJPN 2025-2045, Visi Indonesia, Pembangunan Nasional, Indonesia Maju",
  authors: [{ name: "Kementerian PPN/Bappenas" }],
  openGraph: {
    title: "Indonesia Emas 2045 | Visi Menuju Indonesia Maju",
    description: "Mewujudkan visi Indonesia sebagai negara maju, berdaulat, dan sejahtera pada tahun 2045.",
    type: "website",
    locale: "id_ID",
    siteName: "Indonesia Emas 2045",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesia Emas 2045 | Visi Menuju Indonesia Maju",
    description: "Mewujudkan visi Indonesia sebagai negara maju, berdaulat, dan sejahtera pada tahun 2045.",
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
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Lewati ke konten utama
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
