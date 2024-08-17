import Slider from "react-slick";
import bannerList from "../../../data/bannerList.json";
import InformationBox from "../infromation-box";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const banner = bannerList.map((item) => (
    <div key={item.id} className="relative w-full h-[300px] sm:h-[500px]">
      <img
        src={item.src}
        alt={item.alt}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-8 bg-gradient-to-t from-slate-900 to-transparent z-10">
        <div className="bg-[#CE6021] text-white text-xs sm:text-sm font-bold p-2 uppercase mb-2 sm:mb-4">
          {item.title}
        </div>
        <div className="text-white text-xl sm:text-4xl mt-2 sm:mt-4 px-2 sm:px-4 font-customFont font-bold leading-snug w-[90%] sm:w-[600px]">
          {item.text}
        </div>
        <div className="mt-4 sm:mt-6 py-1 sm:py-2 px-2 sm:px-3 border border-white hover:bg-[#CE6021] hover:border-[#CE6021] duration-300 ease-in-out">
          <button className="text-slate-100 text-sm sm:text-base font-bold">
            Read more
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="relative w-full overflow-hidden sm:pb-56">
      <Slider {...settings}>{banner}</Slider>
      <div className="absolute bottom-0 left-0 sm:left-24 z-50 w-full sm:w-auto hidden sm:block">
        <InformationBox />
      </div>
    </div>
  );
};

export default Banner;
