import Slider from 'react-slick';
import bannerList from "../../../data/bannerList.json";
import InformationBox from '../infromation-box';


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

    return (
        <div className="relative w-full overflow-hidden pb-20">
            <Slider {...settings}>
                {bannerList.map((item) => (
                    <div key={item.id} className="relative w-full h-[500px]">
                        <img src={item.src} alt={item.alt} className="object-cover w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-gradient-to-t from-slate-900 to-transparent z-10">
                            <div className="bg-[#CE6021] text-white text-sm font-bold p-2 uppercase mb-4">
                                {item.title}
                            </div>
                            <div className="text-white text-4xl mt-4 px-4 font-customFont font-bold leading-snug w-[600px]">
                                {item.text}
                            </div>
                            <div className='mt-6 py-2 px-3 border border-white hover:bg-[#CE6021] hover:border-[#CE6021] duration-300 ease-in-out'>
                                <button className='text-slate-100 font-bold'>
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='absolute -bottom-32 left-24 z-20'>
                <InformationBox/>
            </div>
        </div>
    );
};

export default Banner;
