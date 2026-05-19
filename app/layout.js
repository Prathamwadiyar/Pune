import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "./components/BackgroundVideo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Jan Saathi — AI-Powered Governance for Every Indian",
  description: "India's first AI governance platform. Discover government schemes you qualify for, get multilingual voice assistance, and access civic services — in your language.",
  keywords: "Jan Saathi, AI governance, government schemes, India, welfare, multilingual, voice assistant, eligibility checker",
  openGraph: {
    title: "Jan Saathi — AI-Powered Governance for Every Indian",
    description: "Discover government schemes, get multilingual voice assistance, and access civic services.",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#090a15',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased relative min-h-screen ${inter.className}`}>
        <BackgroundVideo />
        {children}
      </body>
    </html>
  );
}

