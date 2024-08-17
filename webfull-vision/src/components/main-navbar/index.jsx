import { useState } from "react";
import { Link } from "react-router-dom";
import navBarList from "../../../data/mainNavBar.json";

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navBarMenu = navBarList.map((item) => (
    <li key={item.id} className="py-3">
      <Link
        to={item.path}
        className="text-slate-100 text-lg uppercase"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
    </li>
  ));

  const navBarBmenu = navBarList.map((item) => (
    <li key={item.id} className="relative px-5 py-3 hover:bg-[#CE6021]">
      <Link to={item.path} className="text-slate-100 uppercase">
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="container bg-[#15568E]">
      <div className="flex justify-end items-center px-4 sm:px-48">
        <button
          onClick={toggleMenu}
          className="text-slate-100 sm:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`fixed inset-0 bg-[#15568E] z-[100] h-[70%] transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-slate-100 text-2xl"
          >
            &times;
          </button>
          <ul className="flex flex-col items-center mt-16">{navBarMenu}</ul>
        </div>
        <ul className="hidden sm:flex items-center space-x-4 list-none">
          {navBarBmenu}
        </ul>
      </div>
    </div>
  );
};

export default MainNavBar;
