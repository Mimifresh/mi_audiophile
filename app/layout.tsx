import "./globals.css";
import { ConvexReactClient } from "convex/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./Providers"


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const metadata = {
  title: "Audiophile",
  description: "High-end audio equipment store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

