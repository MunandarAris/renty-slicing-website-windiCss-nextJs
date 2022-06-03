import React, { useState } from "react";

// plugins
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { motion } from "framer-motion";

// constant
const homeData = [
  {
    img: "/home-popular/home-1.jpg",
    address: "Jl. Handayanto, Jakarta Utara",
  },
  {
    img: "/home-popular/home-2.jpg",
    address: "Jl. Sudirto, Jakarta Barat",
  },
  {
    img: "/home-popular/home-3.jpg",
    address: "Jl. Samiyont, Jakarta Pusat",
  },
  {
    img: "/home-popular/home-4.jpg",
    address: "Jl. Loremso, Jakarta Selatan",
  },
  {
    img: "/home-popular/home-5.jpg",
    address: "Jl. Kartomarmo, Jakarta Utara",
  },
];

export default function PopularHome() {
  // initial state
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="px-5 mt-20">
        <div className="flex items-center justify-between">
          <h6 className="text-green text-xs sm:text-base font-semibold">
            Popular
          </h6>
          <div className="flex items-center gap-1">
            <h6 className="text-[0.6em] sm:text-xs text-white font-light">
              Explore All
            </h6>
            <i className="bx bx-right-arrow-alt text-white"></i>
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white w-full md:w-7/12 mt-1 sm:mt-5 md:mt-2">
          Homes for Renty News And Stories
        </h1>

        {/* --- slide popular home --- */}
        <div className="mt-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            modules={[EffectCoverflow]}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            onSlideChange={(index) => setActiveSlide(index.activeIndex)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {homeData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-90">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover grayscale-50 z-10"
                  />

                  <div
                    className={`bg-body absolute w-full top-0 left-0 h-full opacity-45 z-20`}
                  ></div>

                  {activeSlide == index ? (
                    <motion.div
                      initial={{ opacity: 0, left: "50%", top: "40%" }}
                      animate={{ opacity: 1, left: "50%", top: "50%" }}
                      exit={{ opacity: 0, left: "50%", top: "40%" }}
                      transition={{ duration: 0.4 }}
                      className="w-auto z-30 absolute transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <h1 className="font-bold text-white text-lg text-shadow-lg text-center">
                        Editorial House
                      </h1>
                      <p className="text-white font-light text-xs mt-1 bg-body p-2">
                        {item.address}
                      </p>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* --- end slide popular home --- */}
      </div>
    </>
  );
}
