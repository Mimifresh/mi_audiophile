import Image from "next/image";
import Categories from "./components/Categories";
import Zx9Speaker from "./components/Zx9-Speaker";

export default function Home() {
  return (
    <div className="">
      <header className=" w-full bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/tablet/image-header.jpg')] 
              lg:bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center h-[37.5rem] md:h-[45.5625rem] lg:h-[45.5625rem] 
              flex flex-col items-center justify-center lg:items-start lg:justify-center gap-6 lg:gap-8 px-[1.5em] md:px-[2.5em] lg:px-[10.3125em] text-center lg:text-left">
        <div className="md:w-[395px] md:h-[346px]">
            <p>NEW PRODUCT</p>
            <h1 className="text-white text-center text-4xl not-italic font-bold leading-10 tracking-[1.286px] uppercase
                          md:text-[56px] md:leading-[58px] md:tracking-[2px]">XX99 Mark II Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button>SEE PRODUCT</button>
        </div>
      </header>

      <main className="bg-[#ffffff] px-[1.5em] md:px-[2.5em] lg:px-[10.3125em]">
        <Categories />
        <Zx9Speaker />
      </main>
    </div>
  );
}
