import "./globals.css";

export const metadata = {
  title: "Jan Saathi — Find Every Government Benefit You Deserve",
  description: "AI-powered welfare navigator for Indian citizens. Find government schemes you qualify for, get step-by-step application guides, and claim your benefits — in your language.",
  keywords: "government schemes, welfare, PM-KISAN, Ayushman Bharat, MGNREGA, India, benefits",
  openGraph: {
    title: "Jan Saathi — Your Personal Welfare Navigator",
    description: "Find every government benefit you deserve — in minutes",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f97316',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
