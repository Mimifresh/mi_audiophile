import "./globals.css";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyApp',
  description: 'Responsive Next.js app with Tailwind CSS and TypeScript',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className=""
      >
      <div className="">
        <Navbar />
          <hr />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
