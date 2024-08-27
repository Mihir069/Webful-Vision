import { useState } from "react";
import { Link } from "react-router-dom";
import navBarList from "../../../data/mainNavBar.json";

const MainNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const navBarMenu = navBarList.map((item) => (
    <Link
      to={item.path}
      key={item.id}
      className="relative py-3 px-3 w-full hover:bg-[#CE6021] cursor-pointer"
    >
      <li className="text-slate-100 text-lg uppercase w-full text-left">
        {item.name}
      </li>
    </Link>
  ));

  const navBarBmenu = navBarList.map((item) => (
    <li key={item.id} className="relative px-5 py-3 hover:bg-[#CE6021]">
      <Link to={item.path} className="text-slate-100 uppercase">
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="bg-[#15568E]">
      <div className="relative flex md:justify-center items-center px-4 sm:px-48">
        <button
          onClick={toggleMenu}
          className="text-slate-100 py-2 sm:hidden focus:outline-none"
        >
          <img src="/svg/bars-solid.svg" className="w-6 h-6" alt="menu" />
        </button>
        <div
          className={`absolute top-10 left-0 right-0 bg-[#15568E] z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-start">{navBarMenu}</ul>
        </div>
        <ul className="hidden sm:flex items-center space-x-4 list-none">
          {navBarBmenu}
        </ul>
      </div>
    </div>
  );
};

export default MainNavBar;
