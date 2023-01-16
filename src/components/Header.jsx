import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-yellow-400 w-full p-3 border-b border-neutral-400 shadow-xl">
      <nav className="flex space-x-5 text-xl font-bold text-white">
        <Link to={"/"} className="hover:text-amber-600 duration-500">
          Notes List
        </Link>
        <Link to={"/add"} className="hover:text-amber-600 duration-500">
          Add New Note
        </Link>
      </nav>
    </header>
  );
};

export default Header;
