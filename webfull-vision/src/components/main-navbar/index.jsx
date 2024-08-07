import { Link } from "react-router-dom";

const MainNavBar = () => {
    const navBarList = [
        { id: 1, name: "Home Page", path: "/" },
        { id: 2, name: "Pages", path: "/" },
        { id: 3, name: "Services", path: "/" },
        { id: 4, name: "Staff", path: "/" },
        { id: 5, name: "Appointment", path: "/" },
        { id: 6, name: "Shop", path: "/" },
        { id: 7, name: "Blog", path: "/" },
        { id: 8, name: "Contact", path: "/" },
    ];

    return (
        <div className="container bg-[#15568E]">
            <div className="flex justify-center items-center px-48 ">
                <ul className=" flex items-center space-x-4 list-none ">
                    {navBarList.map((item) => (
                        <li key={item.id} className="relative px-5 py-3 hover:bg-[#CE6021]">
                            <Link
                                to={item.path}
                                className="text-slate-100 uppercase"
                            > 
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default MainNavBar;
