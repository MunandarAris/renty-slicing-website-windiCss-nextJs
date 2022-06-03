// constant
const moreRenty = [
  "FAQ",
  "About Us",
  "Contact Us",
  "Feedback",
  "Join Our Community",
  "Agent support",
];
const iconSosmed = [
  "bx bxl-instagram",
  "bx bxl-linkedin-square",
  "bx bxl-twitter",
  "bx bxl-facebook-circle",
];

export default function Footer() {
  return (
    <>
      <div className="px-5 mt-20">
        <div className="flex items-stretch gap-10 sm:gap-3 md:gap-10 flex-col sm:flex-row">
          {/* --- left --- */}
          <div className="w-full sm:w-7/12 md:w-8/12">
            <h2 className="underline decoration-3 underline-green text-white underline-offset-6 font-bold pb-3 sm:pb-5">
              More Renty
            </h2>

            {moreRenty.map((item, index) => (
              <p
                key={index}
                className="text-zinc-300 font-light text-xs sm:text-sm mt-4"
              >
                {item}
              </p>
            ))}

            <div className="flex items-center gap-3 my-6">
              {iconSosmed.map((item, index) => (
                <i
                  key={index}
                  className={`${item} text-2xl text-zinc-400 cursor-pointer hover:text-zinc-200 transition`}
                ></i>
              ))}
            </div>

            <p className="font-light text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Renty Group is committed to ensuring digital accessibility for
              individuals with disabilities. We are continuously working to
              improve the accessibility of our web experience for everyone.
            </p>
          </div>
          {/* --- end left --- */}

          {/* --- right --- */}
          <div className="w-full sm:w-5/12 md:w-4/12">
            <h2 className="underline decoration-3 underline-green text-white underline-offset-6 font-bold pb-5">
              Stay Connected
            </h2>

            <p className="font-light text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Sign up for inspiration for nourishing your body, mind and shine
              from inside. Added bonus: you'll get 10% off your first Renty
              order.
            </p>

            <input
              placeholder="Email Address"
              className="text-xs sm:text-sm py-3 pr-2 w-full mt-5 bg-transparent border-b text-zinc-300 border-zinc-400 outline-none"
            />

            <button className="bg-green text-white border-none px-5 py-3 rounded-md mt-5 text-xs sm:text-sm font-semibold block ml-auto w-full sm:w-auto mb-6 sm:mb-0">
              Subscribe
            </button>
          </div>
          {/* --- end right --- */}
        </div>

        <div className="w-full bg-zinc-400 h-[1px] mt-10 hidden sm:block" />

        <div className="flex sm:items-center justify-between py-6 sm:py-8 md:py-6 flex-col sm:flex-row">
          {/* --- left --- */}
          <h6 className="text-zinc-300 text-xs sm:text-sm font-light">
            ©2022. All Rights Reserved.
          </h6>
          {/* --- end left --- */}

          {/* --- right --- */}
          <div className="flex sm:items-center gap-0 sm:gap-8 flex-col sm:flex-row">
            <p className="text-zinc-300 text-xs sm:text-sm font-light my-3 sm:my-0">
              Terms of Use
            </p>
            <p className="text-zinc-300 text-xs sm:text-sm font-light">
              Terms & Privacy
            </p>
          </div>
          {/* --- end right --- */}
        </div>
      </div>
    </>
  );
}
