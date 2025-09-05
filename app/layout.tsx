import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lionardo",
  description: "All my music & business links in one place.",
  openGraph: {
    title: "Lionardo",
    description: "All my music & business links in one place.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="pydbtffw2nkq97te3awqtztflymppp"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={
          inter.className +
          " min-h-screen flex flex-col items-center px-4 py-10"
        }
      >
        {children}
        <footer className="mt-16 text-xs text-neutral-600">
          © {new Date().getFullYear()} Lionardo
        </footer>
      </body>
    </html>
  );
}
