import { Link } from "react-router-dom";
import news from "../../../data/news.json";

const NewsContent = () => {
  const newModule = news.map((item, index) => (
    <div
      key={index}
      className="relative w-full sm:w-[48%] md:w-[32%] lg:w-[30%] h-full flex flex-col justify-between"
    >
      <div className="bg-slate-100">
        <div className="w-full overflow-hidden">
          <Link to={item.link}>
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-48 md:h-64 object-cover"
            />
          </Link>
        </div>
        <div className="bg-slate-100  p-4 m-1">
          <h2 className="text-lg md:text-xl font-semibold mb-2 font-customFont">
            {item.title}
          </h2>
          <p className="text-xs md:text-xs text-slate-600 mb-2 border-y">
            <strong>Date:</strong> {item.date} | <strong>Category:</strong>
            {item.category} | <strong>Author:</strong> {item.author}
          </p>
          <p className="mb-4 text-sm">
            {item.description}{" "}
            <a href={item.link} className="hover:text-[#CE6021]">
              Read more {">>"}
            </a>
          </p>
        </div>
      </div>
    </div>
  ));
  return <div className="flex flex-wrap justify-center gap-4">{newModule}</div>;
};

export default NewsContent;
