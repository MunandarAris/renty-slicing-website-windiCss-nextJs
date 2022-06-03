// plugins
import CountUp from "react-countup";

export default function ClientSection({ count, desc }) {
  return (
    <div>
      <div className="flex items-center gap-1">
        <h1 className="text-xl sm:text-4xl font-bold text-white">
          <CountUp end={count} duration={3} start={0} />
        </h1>
        <i className="bx bx-plus-medical text-xl sm:text-2xl font-bold text-blue"></i>
      </div>

      <h1 className="text-gray font-normal text-xs sm:text-sm mt-1">{desc}</h1>
    </div>
  );
}
