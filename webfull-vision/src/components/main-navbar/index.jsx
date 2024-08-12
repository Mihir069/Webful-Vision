import { Link } from "react-router-dom";
import navBarList from "../../../data/mainNavBar.json";
const MainNavBar = () => (
  <div className="container bg-[#15568E]">
    <div className="flex justify-center items-center px-48 ">
      <ul className=" flex items-center space-x-4 list-none ">
        {navBarList.map((item) => (
          <li key={item.id} className="relative px-5 py-3 hover:bg-[#CE6021]">
            <Link to={item.path} className="text-slate-100 uppercase">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default MainNavBar;
