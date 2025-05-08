import React, { useState } from "react";
import flagvn from "../assets/images/icon-flag-vn.png";
import flagen from "../assets/images/icon-flag-en.png";
import banner from "../assets/images/banner_mobile_small.png";
const menuItems = [
  "Website IUH",
  "E-Office",
  "Email",
  "Thư viện",
  "Tin nội bộ",
];

export default function Header() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="bg-[#0d3e84] flex justify-around items-center h-10 px-4">
        <div className="flex items-center h-full">
          {menuItems.map((item, idx) => (
            <div
              key={item}
              className={`relative flex items-center h-full px-4 text-white cursor-pointer text-sm
              ${idx !== menuItems.length - 1 ? "border-r border-[#b3c6e0]" : ""}
              ${
                active === idx
                  ? "after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-1 after:bg-red-700 after:rounded-t"
                  : ""
              }
            `}
              onClick={() => setActive(idx)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          <img
            src={flagvn}
            alt="VN"
            className="w-8 h-6 border-2 border-white bg-white cursor-pointer"
          />
          <img
            src={flagen}
            alt="EN"
            className="w-8 h-6 border-2 border-white bg-white cursor-pointer"
          />
        </div>
      </div>

      <img src={banner} alt="Banner" className="block mx-auto" />
    </>
  );
}
