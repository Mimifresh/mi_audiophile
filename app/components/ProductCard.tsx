import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  alt: string;
  isNew?: boolean;
  href: string;
  reverse?: boolean;
}


export default function ProductCard({
  name,
  description,
  images,
  alt,
  isNew = false,
  href,
  reverse = false,
}: ProductCardProps) {
  return (
    <div
      className={`
        
        flex flex-col items-center text-center gap-10
        md:gap-20 md:text-left md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* Image */}
      <div className="relative w-full max-w-[500px] flex-shrink-0">
        <div className="rounded-lg bg-[#f1f1f1]">
  {/* Mobile */}
        <Image
          src={images.mobile.replace("./assets", "/assets")}
          alt={alt}
          width={500}
          height={500}
          className="block sm:hidden object-contain mx-auto"
        />

        {/* Tablet */}
        <Image
          src={images.tablet.replace("./assets", "/assets")}
          alt={alt}
          width={600}
          height={600}
          className="hidden sm:block lg:hidden object-contain mx-auto"
        />

        {/* Desktop */}
        <Image
          src={images.desktop.replace("./assets", "/assets")}
          alt={alt}
          width={700}
          height={700}
          className="hidden lg:block object-contain mx-auto"
        />
      </div>

      </div>

      {/* Text Content */}
      <div className="max-w-md">
        {isNew && (
          <p className="text-[#D87D4A] uppercase tracking-[0.5em] text-sm mb-3">
            New Product
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide mb-6">
          {name}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="
            inline-block bg-[#D87D4A] text-white uppercase
            tracking-widest text-sm font-bold px-8 py-3
            hover:bg-[#FBAF85] transition
          "
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
