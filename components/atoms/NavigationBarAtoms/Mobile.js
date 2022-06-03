import { useState } from "react";

// next js
import Link from "next/link";

// constant
const menuLink = [
  {
    name: "Buying",
    path: "#",
  },
  {
    name: "Renting",
    path: "#",
  },
  {
    name: "Selling",
    path: "#",
  },
  {
    name: "About Us",
    path: "#",
  },
  {
    name: "Services",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
];

export default function Mobile() {
  // initial state
  const [showHideDrawerMenu, setShowHideDrawerMenu] = useState(false);

  // === handle show hide drawer menu ===
  const handleShowHideDrawerMenu = () => {
    setShowHideDrawerMenu(!showHideDrawerMenu);
  };
  // === end handle show hide drawer menu ===

  return (
    <>
      {/* --- menu navigation --- */}
      <div className="p-4 flex bg-body md:hidden fixed w-full items-center z-50 justify-between">
        <img src="/logo.png" className="w-20 sm:w-24 h-auto object-contain" />

        <h1
          className="text-2xl sm:text-3xl bg-white rounded"
          onClick={handleShowHideDrawerMenu}
        >
          <i className="bx bx-menu block"></i>
        </h1>
      </div>
      {/* --- end menu navigation --- */}

      {/* --- drawer menu --- */}
      {showHideDrawerMenu ? (
        <div className="flex md:hidden flex-col w-full animate-showHideDrawerMobile mt-14 sm:mt-15 bg-white justify-center gap-7 py-5 items-center fixed z-50">
          {menuLink.map((item, index) => (
            <Link href={item.path} key={index}>
              <a className="text-body text-sm font-bold">{item.name}</a>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}

      {/* --- end drawer menu --- */}
    </>
  );
}
