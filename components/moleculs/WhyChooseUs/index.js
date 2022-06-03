// constant
const benefits = [
  {
    icon: "/benefits/benefit-1.png",
    name: "Trusted Developer",
  },
  {
    icon: "/benefits/benefit-2.png",
    name: "No Commisions",
  },
  {
    icon: "/benefits/benefit-3.png",
    name: "A safe and Trustworthy",
  },
  {
    icon: "/benefits/benefit-4.png",
    name: "Buy with Confidence",
  },
];

const users = [
  "/users/user-1.jpg",
  "/users/user-2.jpg",
  "/users/user-3.jpg",
  "/users/user-4.jpg",
];

export default function WhyChooseUs() {
  return (
    <>
      <div className="px-5 mt-15 md:mt-20 flex flex-col sm:flex-row items-center justify-between">
        {/* --- card left --- */}
        <div className="w-full sm:w-5/12">
          <p className="text-green text-xs md:text-base font-bold">Benefits</p>
          <h1 className="text-3xl md:text-5xl text-white font-bold mt-1">
            Why Choose us
          </h1>
          <p className="text-zinc-300 text-sm font-light my-5">
            Renty is a trustworthy developer in the real estate business. He has
            developed a reputation for trust and will have that reputation for
            years to come.
          </p>

          {benefits.map((item, index) => (
            <div key={index} className="flex items-center mt-5 gap-2">
              <img src={item.icon} className="w-4 h-4" />
              <p className="font-semibold text-sm text-white">{item.name}</p>
            </div>
          ))}
        </div>
        {/* --- end card left --- */}

        {/* --- card right --- */}
        <div className="w-full sm:w-6/12 relative mt-10">
          <div className="h-80 md:h-130 bg-gray p-2 sm:p-3 md:p-4 rounded-tl-[150px] sm:rounded-tl-[200px] rounded-b-3xl rounded-tr-3xl relative">
            <img
              src="/benefit.jpg"
              className="w-full h-full object-cover rounded-tl-[145px] sm:rounded-tl-[185px] rounded-b-3xl rounded-tr-3xl"
            />
          </div>

          {/* --- user reviews --- */}
          <div className="absolute flex items-center bottom-10 left-4 sm:left-7 md:left-7 lg:left-10 bg-gradient-to-tr rounded-2xl px-3 md:px-4 py-5 md:py-8 from-body to-gray opacity-90 gap-5 sm:gap-7 md:gap-10 sm:w-auto">
            <div>
              <h1 className="font-semibold text-md md:text-lg lg:text-2xl text-white">
                70+ Employee
              </h1>

              <div className="flex items-center text-white gap-1 mt-1">
                <i className="bx bxs-star"></i>
                <h4 className="text-[0.6em] md:text-xs">4.9</h4>
                <p className="text-[0.6em] md:text-xs text-zinc-300">
                  (6.4k reviews)
                </p>
              </div>
            </div>

            <div className="flex items-center">
              {users.map((item, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-3 border-white md:-ml-3 sm:-ml-5 -ml-3"
                >
                  <img
                    src={item}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* --- end user reviews --- */}
        </div>
        {/* --- end card right --- */}
      </div>
    </>
  );
}
