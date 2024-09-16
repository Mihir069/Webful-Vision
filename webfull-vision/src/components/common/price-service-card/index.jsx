import PropTypes from "prop-types";

const PriceServiceCard = ({ title, price, items }) => (
  <div className="text-white">
    <div className="bg-[#15568E]">
      <div className="p-5 text-center">
        <div className="text-2xl md:text-3xl">{title}</div>
        <div className="text-4xl md:text-7xl">{price}</div>
      </div>
    </div>
    <div className="p-5 bg-slate-100">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row gap-5 border-b-2 ${
            item.isPositive ? "py-4" : "py-4"
          }`}
        >
          <img
            src={
              item.isPositive ? "/svg/check-solid.svg" : "/svg/xmark-solid.svg"
            }
            alt={item.isPositive ? "check-mark" : "x-mark"}
            className="w-3"
          />
          <p className="text-sm text-slate-700">{item.text}</p>
        </div>
      ))}
      <div className="flex py-3 justify-center">
        <button className="py-2 px-4 uppercase text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300">
          Get Appointment
        </button>
      </div>
    </div>
  </div>
);

PriceServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isPositive: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PriceServiceCard;
