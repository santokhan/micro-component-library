import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Logo() {
  const text = "Santo's Component Library";
  const [data, setdata] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdata(text.slice(0, data.length + 1));
      // console.count(data);
    }, 100);
  }, [data]);

  return (
    <Link to="/" className="flex items-center gap-2">
      {/* <img
        src="https://flowbite.com/images/logo.svg"
        alt="https://flowbite.com/images/logo.svg"
        className="w-6 lg:w-8 h-6 lg:h-8 object-contain"
      /> */}
      <div className="text-base md:text-lg lg:text-xl font-medium uppercase flex">
        {data}
        {data.length === text.length ? (
          ""
        ) : (
          <div className="w-[2px] h-6 bg-white translate-y-[3px]"></div>
        )}
      </div>
    </Link>
  );
}
