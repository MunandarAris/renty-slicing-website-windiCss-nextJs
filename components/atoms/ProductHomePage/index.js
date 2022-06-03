export default function ProductHomePage({ location, price, bad, size, img }) {
  return (
    <div className="flex w-auto gap-5 p-2 md:p-3 mx-1 md:mx-3 rounded-lg shadow-2xl bg-white ">
      {/* --- left --- */}
      <div className="w-50 h-auto">
        <img
          src={`/home/${img}.jpg`}
          className="w-full h-full object-cover object-left rounded-lg"
        />
      </div>
      {/* --- end left --- */}

      {/* --- right --- */}
      <div className="w-full">
        <div className="flex items-center gap-1">
          <i className="bx bxs-location-plus text-sm md:text-lg text-green"></i>
          <h6 className="text-gray text-[0.5em] md:text-xs font-normal">
            {location}
          </h6>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="flex gap-2 items-center">
            <i className="bx bx-bed text-body text-sm md:text-xl"></i>
            <h6 className="text-gray text-[0.5em] md:text-xs">{bad}</h6>
          </div>

          <div className="flex gap-2 items-center">
            <i className="bx bx-expand-alt text-body text-sm md:text-xl"></i>
            <h6 className="text-gray text-[0.5em] md:text-xs">{size}</h6>
          </div>
        </div>

        <h6 className="font-bold text-body text-xs md:text-sm mt-1">
          $ {price}
        </h6>

        <button className="bg-green ml-auto block text-[0.4em] md:text-xs py-2 px-3 rounded md:rounded-md mt-3 text-white text-light">
          Book Now
        </button>
      </div>
      {/* --- end right --- */}
    </div>
  );
}
