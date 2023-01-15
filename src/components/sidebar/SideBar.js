import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import ComponentDropdown from "./dropdown/Component";
import Form from "./dropdown/Form";
import Typography from "./dropdown/Typography";
import SideNav from "./SideNav";
import Icon from "./dropdown/Icon";

export default function SideBar({ children }) {
  const { pathname } = useLocation();

  const { sideBarState } = useContext(SidebarContext);

  const [cDown, setcDown] = useState(true);
  const [fDown, setfDown] = useState(false);
  const [typography, settypography] = useState(false);
  const [icon, seticon] = useState(false);
  function handlecDown() {
    setcDown(!cDown);
  }
  function handlefDown() {
    setfDown(!fDown);
  }
  function handleTypography() {
    settypography(!typography);
  }
  function handleIcon() {
    seticon(!icon);
  }

  if (sideBarState) {
    return (
      <aside className="w-64 h-[calc(100vh_-_48px)] fixed bg-gray-900">
        <div className="h-full overflow-y-auto py-4 px-3 border-r border-gray-600 text-sm">
          <ul className="space-y-2">
            <SideNav to="/dashboard">
              <span className="ml-3 uppercase">dashboard</span>
            </SideNav>
            {/*  */}
            <SideNav clickEvent={handlecDown}>
              <span className="ml-3 uppercase">components</span>
              <AngleDown status={cDown} />
            </SideNav>
            <ComponentDropdown status={cDown}></ComponentDropdown>
            {/*  */}
            <SideNav clickEvent={handlefDown}>
              <span className="ml-3 uppercase">form</span>
              <AngleDown status={fDown} />
            </SideNav>
            <Form status={fDown}></Form>
            {/*  */}
            <SideNav clickEvent={handleTypography}>
              <span className="ml-3 uppercase">typography</span>
              <AngleDown status={typography} />
            </SideNav>
            <Typography status={typography}></Typography>
            {/*  */}
            <SideNav clickEvent={handleIcon}>
              <span className="ml-3 uppercase">icon</span>
              <AngleDown status={icon} />
            </SideNav>
            <Icon status={icon}></Icon>
          </ul>
        </div>
      </aside>
    );
  }
}

export function AngleDown({ status }) {
  return (
    <i
      className={
        status
          ? "ml-auto flex justify-end items-center text-sm fa fa-angle-down"
          : "ml-auto flex justify-end items-center text-sm fa fa-angle-right"
      }
    ></i>
  );
}
