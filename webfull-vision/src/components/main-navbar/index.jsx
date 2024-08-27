import { useState } from "react";
import { Link } from "react-router-dom";
import navBarList from "../../../data/mainNavBar.json";

const MainNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const renderNestedMenu = (nestedItems) => (
    <ul className="absolute  lg:left-0 md:right-0 top-full mt-1 z-[100] bg-[#CE6021] shadow-lg w-48 hidden group-hover:block">
      {nestedItems.map((item) => (
        <li key={item.id} className="relative px-5 py-2 hover:bg-[#15568E]">
          <Link
            to={item.path}
            className="text-slate-100 font-customFont text-sm"
          >
            <span className="text-xs pr-2">{">>"}</span> {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const navBarMenu = navBarList.map((item) => (
    <li
      key={item.id}
      className={`relative py-3 px-3 w-full ${
        item.more ? "group" : ""
      } hover:bg-[#CE6021] cursor-pointer`}
    >
      <Link
        to={item.path}
        className="text-slate-100 text-lg uppercase w-full text-left"
      >
        {item.name}
      </Link>
      {item.more && renderNestedMenu(item.more)}
    </li>
  ));

  const navBarBmenu = navBarList.map((item) => (
    <li
      key={item.id}
      className={`relative px-5 py-3 cursor-pointer ${
        item.more ? "group" : ""
      } hover:bg-[#CE6021]`}
    >
      <Link to={item.path} className="text-slate-100 uppercase">
        {item.name}
      </Link>
      {item.more && renderNestedMenu(item.more)}
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
