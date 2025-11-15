'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartModal from './CartModal';
import Categories from './Categories';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, badgeCount } = useCart();
  const [openCartModal, setOpenCartModal] = useState(false);

  // Badge should reflect number of Add-to-Cart clicks (badgeCount).
  const totalItems = typeof badgeCount === 'number' ? badgeCount : 0;

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
        <button onClick={() => setOpenCartModal(true)} className="relative text-white">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* ===== DESKTOP LINKS ===== */}
      <div className="hidden lg:block border-t border-gray-700">
        
      </div>

      {/* ===== MOBILE/TABLET SIDE MENU ===== */}
      {isMenuOpen && (
        <div className="px-4 bg-white">
          <Categories onClose={() => setIsMenuOpen(false)} />
        </div>
      )}
      {/* ===== CART MODAL ===== */}
      <CartModal open={openCartModal} onClose={() => setOpenCartModal(false)} />
    </nav>
  );
}
