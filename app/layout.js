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
    url: "https://your-domain.com", // replace with your site
    siteName: "Birthday Surprise",
    images: [
      {
        url: "https://res.cloudinary.com/dliahmplq/image/upload/v1775376504/birthdaypng_pzgu0n.jpg",
        width: 1200,
        height: 630,
        alt: "Birthday",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "A Birthday Surprise — From Areeb",
    description: "A simple and elegant celebration.",
    images: [
      "https://res.cloudinary.com/dliahmplq/image/upload/v1775376504/birthdaypng_pzgu0n.jpg",
    ],
  },
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
