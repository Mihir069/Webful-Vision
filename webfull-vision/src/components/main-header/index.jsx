import mainHeader from "../../../data/mainHeader.json";

const MainHeader = () => {
  const header = mainHeader.map((items) => (
    <div
      key={items.id}
      className="relative flex items-center px-3 flex-col md:flex-row md:items-center"
    >
      <div className="hidden md:flex items-center justify-center p-3 rounded-full border border-[#CE6021]">
        <div className="flex items-center justify-center bg-white rounded-full">
          <img src={items.src} alt={items.alt} className="w-7 h-7" />
        </div>
      </div>
      <div className="px-5 py-1 flex flex-col md:text-left font-customFont">
        <div className="font-light">{items.title1}</div>
        <div className="font-semibold text-sm">{items.title2}</div>
      </div>
    </div>
  ));
  return (
    <div className="px-4 sm:px-48 py-3">
      <div className="flex flex-col sm:flex-row md:justify-between">
        <div className="flex items-center justify-center py-5">
          <img
            src="/img/webful-vision-logo.png"
            alt="logo"
            className="w-4/5 sm:w-[360px]"
          />
        </div>
        <div className="flex sm:flex-row space-y-0 sm:space-y-0 sm:space-x-4 justify-between">
          {header}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
