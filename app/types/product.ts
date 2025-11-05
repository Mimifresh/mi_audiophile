
export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  new: boolean;
  features: string;
  includes: { quantity: number; item: string }[];
  image: {
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
    categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
