import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastViewport } from "@/components/ui/Feedback";
import { AlertTicker } from "@/components/ui/Primitives";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = "https://duta-connect.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DUTA Connect — Komunitas Orang Indonesia di Malaysia",
    template: "%s · DUTA Connect",
  },
  description:
    "Platform komunitas terpadu untuk WNI di Malaysia. Temukan informasi visa, lowongan kerja, properti, acara, dan layanan terpercaya. Terhubung dengan ribuan orang Indonesia.",
  keywords: [
    "WNI Malaysia",
    "komunitas Indonesia Malaysia",
    "kerja di Malaysia",
    "visa Malaysia",
    "Employment Pass",
    "kos Kuala Lumpur",
    "KBRI",
  ],
  authors: [{ name: "DUTA Connect" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "DUTA Connect",
    title: "DUTA Connect — Komunitas Orang Indonesia di Malaysia",
    description:
      "Platform komunitas terpadu untuk WNI di Malaysia. Informasi, pekerjaan, properti, acara, dan layanan — semua dalam satu tempat.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUTA Connect — Komunitas WNI di Malaysia",
    description:
      "Platform komunitas terpadu untuk orang Indonesia di Malaysia.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#058f68",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen font-sans">
        <AppProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Lewati ke konten utama
          </a>
          <AlertTicker />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <ToastViewport />
        </AppProvider>
      </body>
    </html>
  );
}
