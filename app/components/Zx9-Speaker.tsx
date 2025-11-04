import Image from "next/image";
import Link from "next/link";

export default function Zx9Promo() {
  return (
    <section className="mt-8">
      <div
        className="
          relative overflow-hidden rounded-2xl bg-[#D87D4A] text-white
          px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-0
        "
      >
        {/* ===== Circles Background Pattern ===== */}
        <div
          className="
            pointer-events-none absolute z-0
            flex items-center justify-center
            left-1/2 -translate-x-1/2
            w-[380px] h-[380px]
            sm:w-[640px] sm:h-[640px]
            lg:w-[1100px] lg:h-[1100px]

            /* Mobile: center vertically */
            top-[50%] -translate-y-1/2

            /* Tablet: move up slightly */
            sm:top-[40%]

            /* Desktop: move left */
            lg:left-[-250px] lg:top-[40%] lg:translate-x-0 lg:-translate-y-1/2
          "
        >
          <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt=""
            fill
            className="object-contain opacity-60 mix-blend-overlay"
            priority
          />
        </div>

        {/* ===== Layout Container ===== */}
        <div
          className="
            mx-auto grid max-w-6xl items-center gap-10
            lg:grid-cols-2 lg:gap-0
          "
        >
          {/* Product image */}
          <div className="flex justify-center lg:justify-start relative z-10">
            <Image
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="ZX9 Speaker"
              width={520}
              height={620}
              priority
              className="
                drop-shadow-2xl
                w-[180px] sm:w-[260px] md:w-[320px] lg:w-[520px]
                h-auto translate-y-0 lg:translate-y-8
              "
            />
          </div>

          {/* Text content */}
          <div className="relative z-10 text-center lg:text-left lg:pr-8">
            <h2
              className="
                font-extrabold uppercase tracking-[0.18em]
                text-3xl sm:text-5xl lg:text-6xl leading-tight
              "
            >
              ZX9<br className="hidden sm:block" />
              <span className="sm:ml-2">Speaker</span>
            </h2>

            <p
              className="
                mt-4 max-w-md text-white/85 text-sm sm:text-base mx-auto lg:mx-0
              "
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <Link
              href="/speakers/zx9"
              className="
                mt-6 inline-block rounded-none bg-black px-8 py-3 text-xs
                font-bold uppercase tracking-widest
                transition hover:bg-black/80
              "
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
      <div
        className="my-20 flex flex-col items-start justify-center rounded-2xl
          bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-no-repeat bg-cover h-[300px]
          md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] md:h-[300px]
          lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] lg:h-[250px]
          px-[1.5em] md:px-[2.5em] lg:px-[10.3125em]
        "
      >
        <h3 className="uppercase text-2xl font-bold mt-4 text-[#000]">ZX7 Speaker</h3>
        <button className="mt-6 inline-block rounded-none 
            bg-none border-solid border-[#000] px-8 py-3 text-xs font-bold 
            uppercase tracking-widest text-[#000] transition hover:bg-black hover:text-white">See Product</button>
      </div>
      <div className="grid grid-cols-1 gap-8 mb-20
          md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8">
        <picture>
                {/* Desktop */}
                <source
                    srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
                    media="(min-width:1024px)"
                />
                {/* Tablet */}
                <source
                    srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                    media="(min-width:640px)"
                />
                {/* Mobile fallback */}
                <img
                    src="/assets/home/mobile/image-earphones-yx1.jpg"
                    alt="YX1 Earphones"
                    className="w-full h-auto rounded-lg md:w-[339px] lg:w-[480px]"
                />
            </picture>
            <div className="bg-[#f1f1f1] w-full h-[200px] md:w-[339px] lg:w-[450px] md:h-80 lg:h-[268px] shrink-0 rounded-lg
                flex flex-col items-start justify-center text-center px-4">
                <h3>YX1 Earphones</h3>
                <button className="mt-6 inline-block rounded-none 
                    bg-none border-solid border-[#000] px-8 py-3 text-xs font-bold 
                    uppercase tracking-widest text-[#000] transition hover:bg-black hover:text-white">See Product</button>
            </div>
      </div>
    </section>
  );
}
