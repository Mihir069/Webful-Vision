import { useState } from "react";
import team from "../../../data/team.json";

const TeamModule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = team.length;

  const handleResize = () => {
    if (window.innerWidth < 768) {
      return 1;
    } else {
      return 2;
    }
  };

  const [itemsPerPageState, setItemsPerPageState] = useState(handleResize);

  useState(() => {
    const onResize = () => setItemsPerPageState(handleResize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPagesResponsive = Math.ceil(totalItems / itemsPerPageState);
  const itemWidth = 100 / itemsPerPageState;
  const transformValue = `translateX(-${currentIndex * itemWidth}%)`;

  const teamList = team.map((item, index) => (
    <div key={item.id} className={`w-${100 / itemsPerPageState}% p-3`}>
      <div className="flex bg-slate-100 overflow-hidden border">
        <div className="flex-shrink-0 w-[60%] md:w-1/2">
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-auto object-cover border"
          />
        </div>
        <div className="p-3 w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-lg font-thin">{item.position}</div>
          <h3 className="text-xl">{item.name}</h3>
          <p className="text-sm leading-6">{item.description}</p>
          <div className="flex gap-5 py-3">
            <img src={item.facebook} alt="facebook" className="w-3 " />
            <img src={item.twitter} alt="twitter" className="w-5 " />
            <img src={item.linkedin} alt="linkedin" className="w-5 " />
            <img src={item.google} alt="google" className="w-6 " />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="px-4 md:px-48 flex flex-wrap">
      <div className="relative overflow-hidden w-full">
        <div className="text-center">
          <div className="py-2 text-3xl font-semibold uppercase">
            Meet our <span className="text-[#CE6021]">team</span>
          </div>
          <div className="text-sm">
            We Have Best Professional Team To Care Your Eyes
          </div>
        </div>
        <div
          className="flex py-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: transformValue,
            width: `${totalPagesResponsive * 100}%`,
          }}
        >
          {teamList}
        </div>
        <div className="absolute inset-x-0 bottom-36 flex justify-between py-2">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            className="border border-[#CE6021] hover:bg-[#CE6021] hover:text-white text-[#CE6021] p-2"
          >
            {"<"}
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(prev + 1, totalPagesResponsive - 1)
              )
            }
            className="border border-[#CE6021] hover:bg-[#CE6021] hover:text-white text-[#CE6021] p-2"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamModule;
