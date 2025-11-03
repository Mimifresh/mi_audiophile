import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: "HEADPHONES" | "SPEAKERS" | "EARPHONES";
  href: string;                    // e.g. /headphones
  imgSrc: string;                  // public path or remote URL
  imgAlt: string;
};

export default function CategoryCard({ title, href, imgSrc, imgAlt }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group relative block rounded-xl bg-neutral-100
        transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
      "
    >
      {/* Image sits on top, centered */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={220}
          height={220}
          className="h-[140px] w-[220px] object-contain drop-shadow-xl"
          priority
        />
      </div>

      {/* Subtle ground shadow under the product */}
      <div className="pointer-events-none absolute top-6 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-black/10 blur-xl" />

      {/* Card body */}
      <div className="flex h-48 flex-col items-center justify-center rounded-xl px-6 pb-6 pt-20">
        <h3 className="text-sm tracking-[0.2em] text-black/80 sm:text-base md:text-lg font-extrabold uppercase">
          {title}
        </h3>

        <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-black/60">
          <span className="transition-colors group-hover:text-primary-600">Shop</span>
          <span className="translate-x-0 transition-transform group-hover:translate-x-1">›</span>
        </div>
      </div>
    </Link>
  );
}
