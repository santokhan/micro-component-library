import NavBar from "./navbar/Navbar";

export default function Header({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-gray-900">
      <NavBar></NavBar>
    </div>
  );
}
