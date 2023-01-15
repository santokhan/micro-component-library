import React from "react";

export default function SocialMedia({ children }) {
  return (
    <div className="flex justify-start pb-4">
      <div className="flex justify-center items-center gap-5 lg:gap-10">
        <a href="/" className="text-xl block icon-jump">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="/" className="text-xl block icon-jump">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-xl block icon-jump">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
