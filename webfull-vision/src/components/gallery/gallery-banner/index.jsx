import { Link } from "react-router-dom";

const GalleryBanner = () => (
  <div className="relative w-full">
    <img src="./img/title-bg.jpg" className="object-cover w-full h-full" />
    <div className="absolute  inset-0 px-48 py-6 bg-gradient-to-t from-slate-900 to-transparent z-10 uppercase">
      <div className=" text-white text-xs sm:text-3xl font-bold font-customFont py-5">
        Our Pictures Gallery
      </div>
      <div className="text-white  sm:text-xs  font-customFont  ">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <span>/</span>
          <li>
            <Link to="/">Gene Splicing</Link>
          </li>
          <span>/</span>
          <li>
            <Link to="/">Cloning</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
export default GalleryBanner;
