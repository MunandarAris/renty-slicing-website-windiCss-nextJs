import { useState } from "react";

export default function SelectForm({
  data,
  title,
  icon,
  handleShowHideDropdown,
  open,
}) {
  // initial state
  const [indexPosition, setIndexPosition] = useState(0);

  // === handle get value ===
  const handleGetValue = (index) => {
    setIndexPosition(index);
  };
  // === end handle get value ===

  return (
    <>
      <div className="flex gap-3 items-center">
        <i
          className={`bx ${icon} text-lg md:text-xl text-green border rounded-full border-gray py-1 px-[9px] md:px-2`}
        ></i>

        <div className="group cursor-pointer" onClick={handleShowHideDropdown}>
          <div className="flex items-center">
            <h1 className="text-gray font-light text-xs md:text-sm">{title}</h1>
            <i className="bx bx-chevron-down text-2xl text-gray"></i>
          </div>

          <div className="relative -mt-1">
            <h6 className="text-body text-xs md:text-sm font-semibold z-30">
              {data[indexPosition]}
            </h6>

            {open ? (
              <div className="absolute z-40 bg-green top-2 text-center p-3 w-40 rounded-lg shadow-lg left-0">
                {data.map((item, index) => (
                  <>
                    <h6
                      key={index}
                      className="font-normal text-xs md:text-sm my-2 text-white"
                      onClick={() => handleGetValue(index)}
                    >
                      {item}
                    </h6>

                    {data.length - 1 == index ? (
                      ""
                    ) : (
                      <div className="w-full h-[0.2px] bg-zinc-300"></div>
                    )}
                  </>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
