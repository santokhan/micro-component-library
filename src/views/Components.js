import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import SideBar from "../components/sidebar/SideBar";
import { SidebarContext } from "../context/SidebarContext";
import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";

export default function ComponentLibrary({ children }) {
  let { pathname } = useLocation();
  pathname = pathname.split("/")[2];

  const [sideBarState, setsideBarState] = useState(true);

  function handleSideBarState() {
    setsideBarState(!sideBarState);
  }

  return (
    <SidebarContext.Provider value={{ handleSideBarState, sideBarState }}>
      <div className="">
        <Header></Header>
        <SideBar></SideBar>

        <Main>
          <Accordion path={pathname}></Accordion>
          <Alerts path={pathname}></Alerts>
        </Main>
      </div>
    </SidebarContext.Provider>
  );
}
