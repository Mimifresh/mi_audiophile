export type Product = {
  slug: string;
  category: "headphones" | "speakers" | "earphones";
  name: string;
  description: string;
  price: number;
  isNew?: boolean;
  features: string;
  includes: { quantity: number; item: string }[];
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
   gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
};


export const products: Product[] = [
  {
    slug: "xx99-mark-two",
    category: "headphones",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio...",
    price: 2999,
    isNew: true,
    features: `Featuring a genuine leather head strap and premium earcups...`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    images: {
      mobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
    },
    gallery: {
    first: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-1.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-1.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-2.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-2.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-3.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-3.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-one",
      name: "XX99 MARK I",
      image: {
        mobile: "/images/shared/mobile/image-xx99-mark-one.jpg",
        tablet: "/images/shared/tablet/image-xx99-mark-one.jpg",
        desktop: "/images/shared/desktop/image-xx99-mark-one.jpg",
      },
    },
    {
      slug: "xx59",
      name: "XX59",
      image: {
        mobile: "/images/shared/mobile/image-xx59.jpg",
        tablet: "/images/shared/tablet/image-xx59.jpg",
        desktop: "/images/shared/desktop/image-xx59.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 SPEAKER",
      image: {
        mobile: "/images/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/images/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/images/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
  },
  {
    slug: "xx99-mark-one",
    category: "headphones",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I...",
      price: 2999,
    isNew: true,
    features: `Featuring a genuine leather head strap and premium earcups...`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    images: {
      mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    },
    gallery: {
    first: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-1.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-1.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-2.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-2.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-3.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-3.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-one",
      name: "XX99 MARK I",
      image: {
        mobile: "/images/shared/mobile/image-xx99-mark-one.jpg",
        tablet: "/images/shared/tablet/image-xx99-mark-one.jpg",
        desktop: "/images/shared/desktop/image-xx99-mark-one.jpg",
      },
    },
    {
      slug: "xx59",
      name: "XX59",
      image: {
        mobile: "/images/shared/mobile/image-xx59.jpg",
        tablet: "/images/shared/tablet/image-xx59.jpg",
        desktop: "/images/shared/desktop/image-xx59.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 SPEAKER",
      image: {
        mobile: "/images/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/images/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/images/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
  },
  {
    slug: "xx59",
    category: "headphones",
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your taste...",
      price: 2999,
    features: `Featuring a genuine leather head strap and premium earcups...`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    images: {
      mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
      tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
    },
    gallery: {
    first: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-1.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-1.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-2.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-2.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-3.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-3.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-one",
      name: "XX99 MARK I",
      image: {
        mobile: "/images/shared/mobile/image-xx99-mark-one.jpg",
        tablet: "/images/shared/tablet/image-xx99-mark-one.jpg",
        desktop: "/images/shared/desktop/image-xx99-mark-one.jpg",
      },
    },
    {
      slug: "xx59",
      name: "XX59",
      image: {
        mobile: "/images/shared/mobile/image-xx59.jpg",
        tablet: "/images/shared/tablet/image-xx59.jpg",
        desktop: "/images/shared/desktop/image-xx59.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 SPEAKER",
      image: {
        mobile: "/images/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/images/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/images/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
  },

  // speakers
  {
    slug: "zx9",
    category: "speakers",
    name: "ZX9 Speaker",
    description: "Premium speaker with outstanding depth...",
      price: 2999,
    isNew: true,
    features: `Featuring a genuine leather head strap and premium earcups...`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    images: {
      mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
    },
    gallery: {
    first: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-1.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-1.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-2.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-2.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-3.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-3.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-one",
      name: "XX99 MARK I",
      image: {
        mobile: "/images/shared/mobile/image-xx99-mark-one.jpg",
        tablet: "/images/shared/tablet/image-xx99-mark-one.jpg",
        desktop: "/images/shared/desktop/image-xx99-mark-one.jpg",
      },
    },
    {
      slug: "xx59",
      name: "XX59",
      image: {
        mobile: "/images/shared/mobile/image-xx59.jpg",
        tablet: "/images/shared/tablet/image-xx59.jpg",
        desktop: "/images/shared/desktop/image-xx59.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 SPEAKER",
      image: {
        mobile: "/images/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/images/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/images/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
  },

  {
    slug: "zx7",
    category: "speakers",
    name: "ZX7 Speaker",
    description: "Compact speaker with rich sound...",
      price: 2999,
    features: `Featuring a genuine leather head strap and premium earcups...`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    images: {
      mobile: "/assets/shared/mobile/image-zx7-speaker.jpg",
      tablet: "/assets/shared/tablet/image-zx7-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx7-speaker.jpg",
    },
    gallery: {
    first: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-1.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-1.jpg",
      desktop: "/assets/man.png",
    },
    second: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-2.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-2.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-3.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-3.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-one",
      name: "XX99 MARK I",
      image: {
        mobile: "/images/shared/mobile/image-xx99-mark-one.jpg",
        tablet: "/images/shared/tablet/image-xx99-mark-one.jpg",
        desktop: "/images/shared/desktop/image-xx99-mark-one.jpg",
      },
    },
    {
      slug: "xx59",
      name: "XX59",
      image: {
        mobile: "/images/shared/mobile/image-xx59.jpg",
        tablet: "/images/shared/tablet/image-xx59.jpg",
        desktop: "/images/shared/desktop/image-xx59.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 SPEAKER",
      image: {
        mobile: "/images/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/images/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/images/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
  },

    // earphones
  {
    slug: "yx1-earphones",
    category: "earphones",
    name: "yX1 Earphones",
    description: "Tailored earphones with high-fidelity sound...",
      price: 2999,
    isNew: true,
    features: `Featuring a genuine leather head strap and premium earcups...`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm 5m Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    images: {
      mobile: "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    },
    gallery: {
    first: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-1.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-1.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-2.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-2.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "/images/product-xx99-mark-two/mobile/image-gallery-3.jpg",
      tablet: "/images/product-xx99-mark-two/tablet/image-gallery-3.jpg",
      desktop: "/images/product-xx99-mark-two/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-one",
      name: "XX99 MARK I",
      image: {
        mobile: "/images/shared/mobile/image-xx99-mark-one.jpg",
        tablet: "/images/shared/tablet/image-xx99-mark-one.jpg",
        desktop: "/images/shared/desktop/image-xx99-mark-one.jpg",
      },
    },
    {
      slug: "xx59",
      name: "XX59",
      image: {
        mobile: "/images/shared/mobile/image-xx59.jpg",
        tablet: "/images/shared/tablet/image-xx59.jpg",
        desktop: "/images/shared/desktop/image-xx59.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 SPEAKER",
      image: {
        mobile: "/images/shared/mobile/image-zx9-speaker.jpg",
        tablet: "/images/shared/tablet/image-zx9-speaker.jpg",
        desktop: "/images/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
  },
];
