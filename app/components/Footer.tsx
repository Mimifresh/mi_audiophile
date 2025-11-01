import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-[#101010]">
      <div className="max-w-6xl px-[1.5em] md:px-[2.5em] lg:px-[10.3125em] py-6 text-center text-white">
        <div className="lg:flex lg:justify-between lg:items-center lg:mb-6">
            <Link
                href="/"
                className="sm:block text-white text-lg sm:text-xl font-extrabold tracking-widest
                md:align-left"
            >
                audiophile
            </Link>
            <ul className="flex flex-col md:flex-row md:justify-between items-center gap-5 w-full md:mt-4 py-4 text-white uppercase text-sm tracking-widest">
                <li>
                    <Link href="/" className="hover:text-gray-300">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/headphones" className="hover:text-gray-300">
                    Headphones
                    </Link>
                </li>
                <li>
                    <Link href="/speakers" className="hover:text-gray-300">
                    Speakers
                    </Link>
                </li>
                <li>
                    <Link href="/earphones" className="hover:text-gray-300">
                    Earphones
                    </Link>
                </li>
            </ul>
        </div>
        <p className="md:">Audiophile is an all in one stop to fulfill your audio needs.
            We're a small team of music lovers and sound specialists who are devoted to 
            helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <div className="md:flex items-center justify-between mt-6">
            <p>Copyright 2021. All Rights Reserved</p>
            <ul className="flex items-center justify-center gap-4">
                <li>
                    <Link href="https://www.facebook.com" className="hover:text-gray-300">
                        <FaFacebookSquare/>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitter.com" className="hover:text-gray-300">
                        <FaTwitter />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com" className="hover:text-gray-300">
                        <FaInstagram />
                    </Link> 
                </li>
            </ul>
        </div>
        </div>
    </footer>
  );
}