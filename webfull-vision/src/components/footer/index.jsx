import { Link } from "react-router-dom";
import navbarList from "../../../data/navbar.json";

const Footer = () => {
  const navBar = navbarList.map((item, index) => (
    <li key={item.id} className="relative">
      <Link to={item.path} className="text-slate-100 hover:text-[#CE6021]">
        {item.name}
      </Link>
      {index < navbarList.length - 1 && (
        <span className="ml-3 text-slate-100 hidden md:inline">|</span>
      )}
    </li>
  ));

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(img/footer-bg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 z-10 pt-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/4 px-3 mb-8 md:mb-0">
            <div className="text-slate-100 text-xl font-medium leading-10">
              About Us
            </div>
            <div className="bg-slate-100 w-16 h-1 mb-4"></div>
            <p className="text-slate-100 text-sm py-2 leading-6">
              Since 2001 We have helped a lot of people to focus on their vision
              and get better visual results we are very proud to announce that
              we are still in business and we will remain for more time.
            </p>
            <button className="py-2 px-4 uppercase text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300">
              Get Appointment
            </button>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-8 md:mb-0">
            <div className="text-slate-100 text-xl font-medium leading-10">
              Quick Links
            </div>
            <div className="bg-slate-100 w-16 h-1 mb-4"></div>
            <div className="flex  md:flex-row gap-8 md:gap-10">
              <ul className="text-slate-100 text-sm leading-6 py-2">
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Lenses
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Eye Glass
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Eye Frames
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Repairing
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Computerized
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Alphabetical
                  </Link>
                </li>
              </ul>
              <ul className="text-slate-100 text-sm leading-6 py-2">
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Lasik
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Fix Vision
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Drops
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Team
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/" className="hover:text-[#CE6021]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-8 md:mb-0">
            <div className="text-slate-100 text-xl font-medium leading-10">
              Institute Hours
            </div>
            <div className="bg-slate-100 w-16 h-1 mb-4"></div>
            <ul className="text-slate-100 text-sm leading-6 py-2">
              <li className="mb-2">Monday: 09:00-17:00</li>
              <li className="mb-2">Tuesday: 09:00-17:00</li>
              <li className="mb-2">Wednesday: 09:00-17:00</li>
              <li className="mb-2">Thursday: 09:00-17:00</li>
              <li className="mb-2">Friday: 09:00-17:00</li>
              <li className="mb-2">Saturday, Sunday: Only By Appointment</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-3">
            <div className="text-slate-100 text-sm leading-6 py-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-start space-x-4">
                  <div className="border border-white p-4 w-16">
                    <img
                      src="svg/house-chimney-solid.svg"
                      alt="house"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <strong className="uppercase block mb-1">Address:</strong>
                    <div className="text-sm">
                      132 Jefferson Avenue, Suite 22, Redwood City, CA 94872,
                      USA
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="border border-white p-4 w-12">
                    <img
                      src="svg/mobile-screen-solid.svg"
                      alt="mobile"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <strong className="uppercase block mb-1">Phone:</strong>
                    <div className="text-sm">(00) 123 456 789</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="border border-white p-4 w-12">
                    <img
                      src="svg/envelope-solid.svg"
                      alt="envelope"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <strong className="uppercase block mb-1">Email:</strong>
                    <div className="text-sm">Name@gmail.com</div>
                  </div>
                </div>
                <div className="bg-slate-100 w-full h-[2px]"></div>
                <div className="flex items-center space-x-4">
                  <strong className="uppercase block text-lg">Social:</strong>
                  <div className="w-6">
                    <img
                      src="svg/square-facebook-brands-solid.svg"
                      alt="facebook"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-6">
                    <img
                      src="svg/square-twitter-brands-solid.svg"
                      alt="twitter"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-6">
                    <img
                      src="svg/square-google-plus-brands-solid.svg"
                      alt="google plus"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-4 text-slate-50 bg-[#7a6d4d]">
        <div className="flex items-center mb-4 md:mb-0">
          2016 ©
          <Link to="/" className="px-1 hover:text-[#CE6021]">
            Webful Creations Vision
          </Link>
          All Rights Reserved.
        </div>
        <div className="flex items-center space-x-4 list-none">{navBar}</div>
      </div>
    </div>
  );
};

export default Footer;
