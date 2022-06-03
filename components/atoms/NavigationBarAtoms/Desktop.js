// next js
import Link from "next/link";

export default function Desktop({ menuOne, menuTwo }) {
  return (
    <div className="hidden md:flex items-center justify-between p-4">
      {/* --- menu one --- */}
      <div className="flex gap-10">
        {menuOne.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className="text-white font-light text-sm hover:underline-offset-8 hover:underline hover:underline-green hover:decoration-3">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
      {/* --- end menu one --- */}

      {/* --- logo --- */}
      <Link href="#">
        <img
          src="/logo.png"
          className="w-24 h-auto object-contain cursor-pointer"
        />
      </Link>
      {/* --- end logo --- */}

      {/* --- menu two --- */}
      <div className="flex gap-10">
        {menuTwo.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className="text-white font-light text-sm hover:underline-offset-8 hover:underline hover:underline-green hover:decoration-3">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
      {/* --- end menu two --- */}
    </div>
  );
}
