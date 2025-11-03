
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "HEADPHONES" as const,
    href: "/headphones",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    imgAlt: "Headphones category image",
  },
  {
    title: "SPEAKERS" as const,
    href: "/speakers",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    imgAlt: "Speakers category image",
  },
  {
    title: "EARPHONES" as const,
    href: "/earphones",
    imgSrc: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    imgAlt: "Earphones category image",
  },
];

export default function Categories() {
  return (
    <section aria-label="Shop by category" className="py-12">
      <div
        className="
          grid grid-cols-1 gap-x-6
          lg:grid-cols-3
          md:grid-cols-3
          gap-y-16 sm:gap-y-10
        "
      >
        {categories.map((c) => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
