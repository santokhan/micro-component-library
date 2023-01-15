import React, { useState, useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";

export default function Toggler({ children }) {
  // const [toggle, settoggle] = useState(false);
  const { sideBarState, handleSideBarState } = useContext(SidebarContext);

  function handleToggle(e) {
    e.preventDefault();
    // settoggle(!toggle);
    handleSideBarState();
  }

  return (
    <div>
      <button
        type="button"
        className="ease-in duration-200 transition-all"
        onClick={handleToggle}
      >
        {sideBarState ? (
          <i className="fa fa-angle-left border-2 rounded-lg w-5 h-5 flex justify-center items-center"></i>
        ) : (
          <i className="fa fa-bars w-5 h-5 flex justify-center items-center"></i>
        )}
      </button>
    </div>
  );
}
