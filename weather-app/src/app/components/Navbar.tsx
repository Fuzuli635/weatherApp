import React, { useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";
type Props = {};

export default function Navbar({ }: Props) {
  const [city, setCity] = useState("");
  return (
    <nav className="shadow-sm top-0 left-0 sticky z-50 bg-white ">
      <div className="h-[80px]     w-full    flex   justify-between items-center  max-w-7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        {/*  */}
        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl  text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm"> Azerbaijan </p>
          <div>
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}
