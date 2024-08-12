import mainHeader from "../../../data/mainHeader.json";
const MainHeader = () => (
  <div className="container">
    <div className="flex justify-between items-center px-48 p-2">
      <div className=" flex items-center space-x-4 list-none py-5 ">
        <img
          src="/img/webful-vision-logo.png"
          alt="logo"
          className="w-[360px]"
        />
      </div>
      <div className=" flex items-center space-x-4 list-none ">
        {mainHeader.map((items) => (
          <div key={items.id} className="relative flex px-2">
            <div className="p-3 flex items-center justify-center rounded-full border border-[#CE6021]">
              <div className="flex items-center justify-center bg-white rounded-full ">
                <img src={items.src} alt={items.alt} className="w-7 h-7" />
              </div>
            </div>
            <div className="px-5 py-1 flex flex-col font-customFont">
              <div className="font-light ">{items.title1}</div>
              <div className="font-semibold text-sm">{items.title2}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default MainHeader;
