import { Link } from "react-router-dom";

const NavBar = () => {
    const navBarList = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    const socialMedia = [
        {id: 1, src: '/svg/square-facebook-brands-solid.svg', alt: 'facebook', path: '/'},
        {id: 2, src: '/svg/square-google-plus-brands-solid.svg', alt: 'google plus', path: '/'},
        {id: 3, src: '/svg/square-twitter-brands-solid.svg', alt: 'twitter', path: '/'},
        {id: 4, src: '/svg/linkedin-brands-solid.svg', alt: 'linkedin', path: '/'},
        {id: 5, src: '/svg/square-youtube-brands-solid.svg', alt: 'youtube', path: '/'},
        {id: 6, src: '/svg/square-pinterest-brands-solid.svg', alt: 'pinterest', path: '/'},
    ]

    return (
        <div className="container bg-[#CE6021]">
            <div className="flex justify-between items-center px-48 p-2">
                <ul className=" flex items-center space-x-4 list-none ">
                    {navBarList.map((item, index) => (
                        <li key={item.id} className="relative">
                            <Link 
                                to={item.path} 
                                className="text-slate-100 hover:text-[#15568E]"
                            >
                                {item.name}
                            </Link>
                            {index < navBarList.length - 1 && (
                                <span className="ml-3 text-slate-100">|</span>
                            )}
                        </li>
                    ))}
                </ul>
                <ul className=" flex items-center space-x-4 list-none ">
                    {socialMedia.map((item) => (
                        <li key={item.id} className="relative w-4">
                            <Link 
                                to={item.path} 
                                
                            >
                                <img src={item.src} alt={item.alt} />
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
};

export default NavBar;
