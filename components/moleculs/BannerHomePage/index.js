import { useState } from "react";

// next js
import dynamic from "next/dynamic";

// atoms
const SelectForm = dynamic(() => import("components/atoms/SelectForm"));
const ClientSection = dynamic(() => import("components/atoms/ClientSection"));
const ProductHomePage = dynamic(() =>
  import("components/atoms/ProductHomePage")
);

// plugins
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// constant
const listLocation = [
  "Tangerang",
  "Bandung",
  "Bogor",
  "Jakarta Utara",
  "Jakarta Barat",
];
const type = [
  "Industrial Home",
  "Luxury Furniture",
  "Brick Bathroom",
  "Style At Home",
];
const product = [
  {
    location: "BSD, Tangerang Selatan",
    size: "50m x 100m",
    price: "4,000,000",
    bad: "3 bad",
    img: "home-1",
  },
  {
    location: "BSD, Tangerang Selatan",
    size: "500m x 900m",
    price: "12,000,000",
    bad: "13 bad",
    img: "home-2",
  },
  {
    location: "BSD, Tangerang Selatan",
    size: "100m x 500m",
    price: "7,000,000",
    bad: "6 bad",
    img: "home-3",
  },
];

export default function BannerHomePage() {
  // initial state
  const [showHideDropdownLocation, setShowHideDropdownLocation] =
    useState(false);
  const [showHideDropdownType, setShowHideDropdownType] = useState(false);

  // === hadle show hide dropdown ===
  const handleSHowHideDropdownLocation = () => {
    setShowHideDropdownLocation(!showHideDropdownLocation);
    setShowHideDropdownType(false);
  };

  const handleSHowHideDropdownType = () => {
    setShowHideDropdownType(!showHideDropdownType);
    setShowHideDropdownLocation(false);
  };
  // === hadle show hide dropdown ===

  return (
    <div className="flex items-center pt-6 flex-col-reverse md:flex-col lg:flex-row justify-between px-4 sm:pt-10 md:pt-6 lg:pt-10">
      {/* --- card left --- */}
      <div className="mt-10 md:mt-0 w-full lg:w-5/12">
        <div className="w-full bg-gray h-80 md:h-55 lg:h-110 p-2 md:p-4 rounded-xl">
          <div className="relative h-full">
            <img
              src="/bannerHome.jpg"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* --- product slider --- */}
            <div className="flex bottom-5 right-0 w-12/12 absolute">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                {product.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductHomePage
                      location={item.location}
                      price={item.price}
                      size={item.size}
                      bad={item.bad}
                      img={item.img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* --- end product slider --- */}
          </div>
        </div>

        {/* --- client section mobile --- */}
        <div className="mt-10 md:mt-15 flex md:hidden gap-8 ">
          <ClientSection count="280" desc="Google Review " />
          <ClientSection count="15" desc="Years Experience" />
          <ClientSection count="49" desc="Awward Winning " />
        </div>
        {/* --- end client section mobile --- */}
      </div>
      {/* --- end card left --- */}

      {/* --- card right --- */}
      <div className="md:w-full lg:w-6/12 mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Discover the ideal property here
        </h1>

        <p className="text-zinc-200 font-light my-6 text-sm md:text-sm lg:text-sm md:my-6 lg:my-8">
          As soon as I had found a few properties that suited me, I was able to
          forget about how difficult it was to find a suitable home.
        </p>

        <div className="bg-white w-full rounded-lg sm:rounded-2xl md:w-10/12 o lg:w-full pt-2 pb-4 px-5 flex justify-between items-start sm:items-center flex-col sm:flex-row">
          {/* --- search one --- */}
          <div className="sm:mr-auto">
            <SelectForm
              data={listLocation}
              title="Location"
              icon="bxs-location-plus"
              handleShowHideDropdown={handleSHowHideDropdownLocation}
              open={showHideDropdownLocation}
            />
          </div>
          {/* --- end search one --- */}

          {/* --- search second --- */}
          <div className="sm:mr-auto mt-5 sm:mt-0">
            <SelectForm
              data={type}
              title="Type"
              icon="bxs-home-alt-2"
              handleShowHideDropdown={handleSHowHideDropdownType}
              open={showHideDropdownType}
            />
          </div>
          {/* --- end search second --- */}

          {/* --- button search --- */}
          <button className="bg-green text-white font-normal text-xs md:text-sm py-2 md:py-3 px-4 rounded-lg mt-5 md:mt-1 sm:mt-2 w-full sm:w-auto">
            Search
          </button>
          {/* --- end button search --- */}
        </div>

        {/* --- client section desktop --- */}
        <div className="mt-10 md:mt-15 hidden md:flex gap-8 ">
          <ClientSection count="280" desc="Google Review " />
          <ClientSection count="15" desc="Years Experience" />
          <ClientSection count="49" desc="Awward Winning " />
        </div>
        {/* --- end client section desktop --- */}
      </div>
      {/* --- end card right --- */}
    </div>
  );
}
