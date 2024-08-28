import Consultation from "./consultation";
import Medication from "./medication";
import Surgery from "./surgery";

const Price = () => (
  <div className="px-4 py-5 md:px-48">
    <div className="relative overflow-hidden w-full">
      <div className="text-center mb-5">
        <div className="py-2 text-2xl md:text-3xl font-semibold uppercase font-customFont">
          Our <span className="text-[#CE6021]">Prices</span>
        </div>
        <div className="text-xs md:text-sm text-slate-700">
          We Have Wide Range Of Glasses And Lenses
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7">
        <Consultation />
        <Medication />
        <Surgery />
      </div>
    </div>
  </div>
);
export default Price;
