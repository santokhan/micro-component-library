import React, { useState } from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import SideBar from "../components/sidebar/SideBar";
import { SidebarContext } from "../context/SidebarContext";

export default function Form({ children }) {
  const [sideBarState, setsideBarState] = useState(true);

  function handleSideBarState() {
    setsideBarState(!sideBarState);
  }

  return (
    <SidebarContext.Provider value={{ handleSideBarState, sideBarState }}>
      <div className="bg-slate-900">
        <Header></Header>
        <SideBar></SideBar>
        <Main></Main>
      </div>
    </SidebarContext.Provider>
  );
}
