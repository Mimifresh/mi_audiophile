interface PageHeaderProps {
  title: string;
  backgroundImage?: string; // optional, for unique backgrounds later
}

export default function PageHeader({
  title,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <header
      className={`
        relative flex items-center justify-center
        bg-black text-white uppercase
        py-24 sm:py-32 lg:py-40
        text-center
        ${backgroundImage ? "bg-cover bg-center" : ""}
      `}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* Optional overlay for background readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      )}

      <h1
        className="
          relative z-10 text-3xl sm:text-5xl font-extrabold tracking-widest
        "
      >
        {title}
      </h1>
    </header>
  );
}
