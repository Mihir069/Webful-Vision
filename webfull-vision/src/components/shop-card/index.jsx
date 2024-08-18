import { Link } from "react-router-dom";
import shopItem from "../../../data/shopItem.json";
import AddTocart from "../add-to-card";

const ShopCard = () => {
  return (
    <ul className="flex flex-wrap list-none p-0 m-0">
      {shopItem.map((item) => (
        <li key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="relative border rounded-lg p-4 overflow-hidden group">
            <Link to={item.path}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            {item.sale && (
              <div className="absolute top-1 left-1 p-2 bg-[#CE6021] text-white uppercase font-bold text-xs sm:text-sm md:text-lg">
                Sale
              </div>
            )}
            <div className="absolute bottom-1 left-2 opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
              <AddTocart />
            </div>
          </div>
          <div className="text-center py-3">
            <div className="text-lg text-gray-700">{item.title}</div>
            <div className="flex justify-center space-x-2 mt-2">
              <div className="text-gray-700">{item.discount}</div>
              <div className="text-gray-700 line-through">{item.price}</div>
            </div>
            <div className="flex justify-center mt-2">
              {Array.from({ length: item.ratings }, (_, index) => (
                <img
                  key={index}
                  src="/svg/star-solid.svg"
                  alt="star"
                  className="w-4"
                />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShopCard;
