// next js
import dynamic from "next/dynamic";

// atoms
const CardProducts = dynamic(() => import("components/atoms/CardProducts"));

// plugins
import { Swiper, SwiperSlide } from "swiper/react";

// constant
const popularProducts = [
  {
    img: "/popular/home-1.jpg",
    location: "Jakarta Utara",
    bed: "5",
    size: "40m x 60m",
    price: "4.300.000",
  },
  {
    img: "/popular/home-2.jpg",
    location: "Jakarta Pusat",
    bed: "10",
    size: "100m x 150m",
    price: "7.000.000",
  },
  {
    img: "/popular/home-3.jpg",
    location: "Jakarta Barat",
    bed: "12",
    size: "200m x 300m",
    price: "10.000.000",
  },
  {
    img: "/popular/home-4.jpg",
    location: "Jakarta Utara",
    bed: "6",
    size: "100m x 100m",
    price: "12.000.000",
  },
  {
    img: "/popular/home-5.jpg",
    location: "Bogor",
    bed: "10",
    size: "200m x 300m",
    price: "30.000.000",
  },
];

export default function PopularProducts() {
  return (
    <div className="mt-10 px-4 relative">
      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-between">
          <h6 className="text-green text-xs sm:text-base font-bold">Popular</h6>

          <div className="items-center text-white font-light flex sm:hidden">
            <p className="text-[0.6em] sm:text-sm">Explore All</p>
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 sm:mt-0">
          <h1 className="text-xl sm:text-3xl text-white font-bold">
            Our Popular Residence
          </h1>

          <div className="items-center text-white font-light hidden sm:flex">
            <p className="text-[0.6em] sm:text-sm">Explore All</p>
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </div>

        {/* --- products section --- */}
        <div className="mt-5 sm:mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {popularProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <CardProducts
                  img={item.img}
                  price={item.price}
                  size={item.size}
                  location={item.location}
                  bed={item.bed}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* --- end products section --- */}
      </div>

      {/* --- element --- */}
      <img
        src="/bg-popular.png"
        className="absolute -bottom-10 left-0 h-60 object-cover w-full"
      />
      {/* --- end element --- */}
    </div>
  );
}
