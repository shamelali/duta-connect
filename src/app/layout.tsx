import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { AppProvider } from "@/lib/store";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastViewport } from "@/components/ui/Feedback";

const SITE_URL = "https://duta-connect.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DUTA Connect — Komunitas Orang Indonesia di Malaysia",
    template: "%s · DUTA Connect",
  },
  description:
    "Ruang komunitas untuk WNI di Malaysia. Temukan panduan praktis, peluang kerja, tempat tinggal, acara, layanan, dan jawaban dari sesama orang Indonesia.",
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
      "Panduan praktis, peluang, tempat tinggal, dan jawaban komunitas untuk WNI di Malaysia—semuanya dalam satu ruang bersama.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUTA Connect — Komunitas WNI di Malaysia",
    description:
      "Ruang komunitas untuk orang Indonesia yang menjalani hidup di Malaysia.",
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
    <html lang="id">
      <body className="min-h-screen font-sans">
        <AppProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Lewati ke konten utama
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <ToastViewport />
        </AppProvider>
      </body>
    </html>
  );
}
