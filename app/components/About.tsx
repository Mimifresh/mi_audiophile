

export default function About(){
    return(
        <div className="px-[1.5em] md:px-[2.5em] lg:px-[10.3125em] py-6 text-center lg:text-left text-black
        grid gap-8 lg:grid-cols-2 items-center lg:items-start mb-20">
            <picture className="order-1 lg:order-2">
                <source media="(min-width:1024px)"
                srcSet="/assets/shared/desktop/image-best-gear.jpg" />

                <source media="(min-width:640px)" 
                srcSet="/assets/shared/tablet/image-best-gear.jpg" />

                <img src="/assets/shared/mobile/image-best-gear.jpg"
                    alt="About Us Hero Image"
                    className="w-full h-auto mb-8 rounded-lg" />
            </picture>
            <div className="order-2 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:h-full">           
                <h2 className="text-3xl font-bold mb-4 uppercase">Bringing you the best audio gear</h2>
                <p className="mb-4">Located at the heart of New York City,
                    Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. 
                    We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide 
                    range of our products. Stop by our store to meet some of 
                    the fantastic people who make Audiophile the best place to 
                    buy your portable audio equipment.</p>
            </div>
        </div>
    )
}