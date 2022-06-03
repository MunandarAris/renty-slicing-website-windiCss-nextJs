// constant
const services = [
  "Best market",
  "Unstable prices",
  "Top sell",
  "Security of  data",
];

export default function OurServices() {
  return (
    <>
      <div className="flex px-5 items-center pt-17 md:pt-25 justify-between flex-col-reverse md:flex-row">
        {/* --- card left --- */}
        <div className="w-full mt-10 md:mt-0 md:w-5/12">
          <div className="h-80 md:h-110 bg-gray p-3 md:p-5 rounded-xl">
            <img
              src="/our-service.jpg"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* --- end card left --- */}

        {/* --- card right --- */}
        <div className="w-full md:w-6/12">
          <h6 className="text-green font-bold text-xs sm:text-sm">
            Our Service
          </h6>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mt-1">
            We make your comfort our top priority.
          </h1>

          <p className="text-xs sm:text-sm font-light text-zinc-300 mt-5 sm:mt-8">
            In a free hour, when our power of choice is untrammelled and when
            nothing prevents our being able to do what we like best.
          </p>

          <div className="mt-5 md:mt-8 grid grid-cols-2 gap-4">
            {services.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <img src="/dots.svg" />
                <p className="text-xs sm:text-sm font-normal sm:font-semibold text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* --- end card right --- */}
      </div>
    </>
  );
}
