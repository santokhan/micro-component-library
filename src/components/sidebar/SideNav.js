import { Link } from "react-router-dom";

export default function SideNav({ to, children, clickEvent }) {
  if (to) {
    return (
      <li className="capitalize">
        <Link
          to={to}
          onClick={clickEvent}
          className="flex items-center p-2 font-medium text-gray-400 rounded-lg transition duration-75 hover:bg-gray-800 group"
        >
          {children}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="capitalize">
        <button
          type="button"
          onClick={clickEvent}
          className="flex items-center w-full p-2 font-medium text-gray-400 rounded-lg transition duration-75 hover:bg-gray-800 group"
        >
          {children}
        </button>
      </li>
    );
  }
}
