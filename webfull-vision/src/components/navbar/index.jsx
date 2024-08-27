import { Link } from "react-router-dom";
import navbarList from "../../../data/navbar.json";
import socialMedia from "../../../data/social.json";

const NavBar = () => {
  const navBar = navbarList.map((item, index) => (
    <li key={item.id} className="relative text-sm">
      <Link to={item.path} className="text-slate-100 hover:text-[#15568E]">
        {item.name}
      </Link>
      {index < navbarList.length - 1 && (
        <span className="ml-3 text-slate-100 md:inline">|</span>
      )}
    </li>
  ));

  const social = socialMedia.map((item) => (
    <li key={item.id} className="relative w-4">
      <Link to={item.path}>
        <img src={item.src} alt={item.alt} />
      </Link>
    </li>
  ));

  return (
    <div className="bg-[#CE6021]">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-48 py-2">
        <ul className="flex md:flex-row items-center space-x-2 space-y-0 md:space-y-0 md:space-x-4 list-none">
          {navBar}
        </ul>
        <ul className="flex md:flex-row items-center space-x-8 space-y-0 md:space-y-0 md:space-x-4 list-none mt-4 md:mt-0">
          {social}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
