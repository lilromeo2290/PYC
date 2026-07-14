import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Progressive Youth Club, Ho (PYC Club) — We Stand For Support",
  description:
    "Progressive Youth Club, Ho is a youth-led NGO empowering young people through education, leadership, community development, advocacy, environmental sustainability, and social support in the Volta Region of Ghana.",
  keywords: [
    "PYC Club",
    "Progressive Youth Club Ho",
    "NGO Ghana",
    "Youth empowerment",
    "Volunteer Ghana",
    "Community development",
    "Ho Volta Region",
    "Non-profit organization",
  ],
  authors: [{ name: "Progressive Youth Club, Ho" }],
  icons: {
    icon: "/pyc-favicon.svg",
    apple: "/pyc-favicon.svg",
  },
  openGraph: {
    title: "Progressive Youth Club, Ho — We Stand For Support",
    description:
      "Empowering youth. Transforming communities. Join PYC Club in building a stronger, more inclusive future for young people across Ghana.",
    url: "https://pycclub.org",
    siteName: "Progressive Youth Club, Ho",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Progressive Youth Club, Ho — We Stand For Support",
    description:
      "Empowering youth. Transforming communities. Join PYC Club in building a stronger, more inclusive future for young people across Ghana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
