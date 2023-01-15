import { Link } from "react-router-dom";
import Toggler from "./Toggler";
import Logo from "./logo/Logo";

export default function NavBar() {
  return (
    <div className="h-12 flex items-center border-b border-gray-700 text-white">
      <div className="w-full flex gap-2 justify-between items-center px-4">
        <Toggler></Toggler>
        <Logo></Logo>
        <div></div>
      </div>
    </div>
  );
}
