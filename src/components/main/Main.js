import React, { useState } from "react";

export default function Main({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 bg-gray-50">
      {children}
    </div>
  );
}
