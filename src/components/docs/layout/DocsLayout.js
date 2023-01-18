import React, { useState } from "react";
export default function DLayout({ children }) {
  return <div></div>;
}
export function DContainer({ children }) {
  return <div className="py-5">{children}</div>;
}
export function DTitle({ children }) {
  return (
    <div className="text-2xl text-gray-900 font-medium mb-2">{children}</div>
  );
}
export function DDes({ children }) {
  return <div></div>;
}
export function DRow({ children }) {
  return (
    <div className="flex justify-between gap-4 items-center">{children}</div>
  );
}
export function DCopy({ children, id }) {
  const [status, setstatus] = useState("Copy Code");

  return (
    <button
      type="button"
      onClick={() => {
        const html = document.getElementById(id).outerHTML;
        // console.log(html);
        window.navigator.clipboard.writeText(html);
        if (html) {
          setstatus("Copied");
        }
      }}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
    >
      {status}
    </button>
  );
}
