import ShopCard from "../shop-card";

const Shop = () => (
  <div className="px-4 py-5 md:px-48 flex flex=wrap">
    <div className="relative overflow-hidden w-full">
      <div className="text-center">
        <div className="py-2 text-3xl font-semibold uppercase">
          Our <span className="text-[#CE6021]">Shop</span>
        </div>
        <div className="text-sm text-slate-700">
          We Have Wide Range Of Glasses And Lenses
        </div>
      </div>
      <div className="py-3">
        <ShopCard />
      </div>
    </div>
  </div>
);
export default Shop;
