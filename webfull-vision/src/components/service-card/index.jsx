import { useState, useEffect } from "react";
import servicesList from "../../../data/servicesList.json";
import { Link } from "react-router-dom";

const ServicesCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = servicesList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const transformValue = `translateX(-${currentIndex * (300 / totalPages)}%)`;

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex py-5 transition-transform duration-500 ease-in-out"
        style={{ transform: transformValue }}
      >
        {servicesList.map((item, index) => (
          <div key={index} className="p-3 flex-none w-[380px]">
            <div className="bg-slate-100">
              <div className="w-full bg-slate-100">
                <img src={item.img} alt={item.alt} className="w-full h-auto " />
              </div>
              <div className="py-4 px-2 text-start">
                <h1 className="text-[#CE6021] text-xl hover:text-[#15568E]">
                  <Link to={item.path}>{item.title}</Link>
                </h1>
                <p className="text-sm leading-7 text-slate-600">
                  {item.desciption}{" "}
                  <Link
                    to={item.path}
                    className="cursor-pointer hover:text-[#CE6021]"
                  >
                    Read More{">>"}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 py-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => goToPage(pageIndex)}
            className={`w-[25px] h-[7px] border border-[#CE6021] ${
              currentIndex === pageIndex ? "bg-[#CE6021]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
