// next js
import dynamic from "next/dynamic";

// atoms
const DesktopUI = dynamic(() =>
  import("components/atoms/NavigationBarAtoms/Desktop")
);
const MobileUI = dynamic(() =>
  import("components/atoms/NavigationBarAtoms/Mobile")
);

// constant
const menuOne = [
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
];

const menuTwo = [
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

export default function NavigationBar() {
  return (
    <>
      {/* --- menu md up --- */}
      <DesktopUI menuOne={menuOne} menuTwo={menuTwo} />
      {/* --- end menu md up --- */}

      {/* --- menu sm down --- */}
      <MobileUI />
      {/* --- end menu sm down --- */}
    </>
  );
}
