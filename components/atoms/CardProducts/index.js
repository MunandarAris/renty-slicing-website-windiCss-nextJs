export default function CardProducts({ img, size, location, price, bed }) {
  return (
    <div className="bg-body rounded-xl">
      {/* --- img section --- */}
      <div className="bg-gray w-full h-60 rounded-t-xl">
        <img src={img} className="w-full h-full object-cover rounded-t-xl" />
      </div>
      {/* --- end img section --- */}

      {/* --- body section --- */}
      <div className="bg-body py-5 px-4 rounded-b-xl">
        <div className="flex items-center gap-1">
          <i className="bx bxs-location-plus text-green"></i>
          <h6 className="text-white font-light text-sm">{location}</h6>
        </div>

        <div className="flex items-stretch gap-3 mt-1">
          <div className="flex items-center gap-1">
            <i className="bx bx-bed text-zinc-300 text-sm"></i>
            <h6 className="text-zinc-300 text-xs font-light">{bed} bed</h6>
          </div>

          <div className="flex items-center gap-1">
            <i className="bx bx-expand-alt text-zinc-300 text-sm"></i>
            <h6 className="text-zinc-300 text-xs font-light">{size}</h6>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button className="border text-green transition hover:bg-green hover:text-white border-green rounded-md text-xs py-2 px-4 font-light text-white">
            Book Now
          </button>

          <h3 className="text-sm font-bold text-white">$ {price}</h3>
        </div>
      </div>
      {/* --- end body section --- */}
    </div>
  );
}
