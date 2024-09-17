import PropTypes from "prop-types";

const InformationBoxCard = ({
  title,
  description,
  listItems,
  imageSrc,
  buttonText,
}) => (
  <div className="relative bg-[#15568E] w-full sm:w-[400px] h-auto sm:h-[320px] p-4">
    <div className="text-white text-lg sm:text-2xl font-normal">{title}</div>
    <p className="text-white text-sm py-2 sm:py-4 w-[60%]">{description}</p>
    <ul className="list-none pl-5 text-white text-sm">
      {listItems.map((item, index) => (
        <li key={index}>
          <span>&#10004;</span> {item}
        </li>
      ))}
    </ul>
    <div className="mt-4 sm:mt-6 py-2 px-3 bg-[#CE6021] w-[30%] text-center">
      <button className="text-slate-100 font-bold">{buttonText}</button>
    </div>
    <div className="absolute bottom-0 right-0 w-24 sm:w-[250px] opacity-60 hover:opacity-100">
      <img src={imageSrc} alt="Information" className="w-full" />
    </div>
  </div>
);

InformationBoxCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default InformationBoxCard;
