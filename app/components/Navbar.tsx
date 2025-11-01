'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const backgroundClass = isHome
    ? isScrolled
      ? 'bg-black/90 backdrop-blur-md shadow-md'
      : 'bg-transparent'
    : 'bg-black';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${backgroundClass}`}
    >
      <div className="max-w-6xl px-[1.5em] md:px-[2.5em] lg:px-[10.3125em] py-5 flex items-center justify-between relative">
        {/* ===== LEFT: Burger + Logo (tablet & desktop) ===== */}
        <div className="flex items-center gap-4">
          {/* Burger icon — visible on all below desktop */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Tablet & Desktop Logo — hidden on mobile */}
          <Link
            href="/"
            className="hidden sm:block text-white text-lg sm:text-xl font-extrabold tracking-widest uppercase"
          >
            audiophile
          </Link>
        </div>

        {/* ===== CENTER: Mobile Logo (only visible on small screens) ===== */}
        <Link
          href="/"
          className="sm:hidden absolute left-1/2 -translate-x-1/2 text-white text-lg font-extrabold tracking-widest uppercase"
        >
          audiophile
        </Link>

        <ul className="hidden lg:flex items-center justify-center gap-10 py-4 text-white uppercase text-sm tracking-widest">
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

        {/* ===== RIGHT: Cart Icon ===== */}
        <Link href="/cart" className="relative text-white">
          <ShoppingCart className="h-6 w-6" />
        </Link>
      </div>

      {/* ===== DESKTOP LINKS ===== */}
      <div className="hidden lg:block border-t border-gray-700">
        
      </div>

      {/* ===== MOBILE/TABLET SIDE MENU ===== */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center text-white space-y-6 text-lg font-semibold uppercase">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/headphones" onClick={() => setIsMenuOpen(false)}>
            Headphones
          </Link>
          <Link href="/speakers" onClick={() => setIsMenuOpen(false)}>
            Speakers
          </Link>
          <Link href="/earphones" onClick={() => setIsMenuOpen(false)}>
            Earphones
          </Link>
        </div>
      )}
    </nav>
  );
}
