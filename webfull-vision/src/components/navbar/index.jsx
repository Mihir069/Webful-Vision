import { Link } from "react-router-dom";
import navbarList from "../../../data/navbar.json";
import socialMedia from "../../../data/social.json";
const NavBar = () => (
  <div className="container bg-[#CE6021]">
    <div className="flex justify-between items-center px-48 p-2">
      <ul className=" flex items-center space-x-4 list-none ">
        {navbarList.map((item, index) => (
          <li key={item.id} className="relative">
            <Link
              to={item.path}
              className="text-slate-100 hover:text-[#15568E]"
            >
              {item.name}
            </Link>
            {index < navbarList.length - 1 && (
              <span className="ml-3 text-slate-100">|</span>
            )}
          </li>
        ))}
      </ul>
      <ul className=" flex items-center space-x-4 list-none ">
        {socialMedia.map((item) => (
          <li key={item.id} className="relative w-4">
            <Link to={item.path}>
              <img src={item.src} alt={item.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default NavBar;
