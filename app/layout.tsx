import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Ibuiltthis - Share Your creations, Discover New Launches",
  description: "A community for creators to showcase their projects and get feedback from the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <header>Ibuiltthis</header>
        {children}
        <footer>Ibuiltthis</footer>
      </body>
    </html>
  );
}
