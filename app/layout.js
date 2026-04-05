import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "A Birthday Surprise — From Areeb",
  description: "A simple and elegant celebration.",
  openGraph: {
    title: "A Birthday Surprise — From Areeb",
    description: "A simple and elegant celebration.",
    images: [
      {
        url: "/birthdaypng.jpg",
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full scroll-smooth`}
    >
      <body
        className={`${cormorant.className} flex min-h-full flex-col bg-[var(--bg)] text-[var(--text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
