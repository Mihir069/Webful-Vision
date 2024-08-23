import process from "../../../data/process.json";

const OurServices = () => (
  <div className="relative bg-[url('/img/footer-bg.jpg')] bg-cover bg-center h-auto text-center px-4 sm:px-8 lg:px-48">
    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
    <div className="flex flex-col lg:flex-row relative z-10">
      <div className="relative lg:right-40 ">
        <img
          src="/img/banner-doctor.png"
          alt="doctor"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="pt-8 lg:pt-24 lg:w-[80%]">
        <h1 className="text-[#CE6021] bg-white py-1 text-2xl sm:text-3xl lg:text-3xl uppercase font-bold">
          Consultation, Pre Procedure, Treatment!
        </h1>
        <div className="py-4 lg:py-5">
          {process.map((item) => (
            <div
              className="py-3 lg:py-4 flex flex-col lg:flex-row items-center lg:items-start"
              key={item.id}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center border border-white bg-white font-bold text-lg lg:text-3xl text-[#CE6021] rounded-full mb-3 lg:mb-0">
                {item.id}
              </div>
              <div className="text-start text-white px-5">
                <h3 className="text-lg lg:text-2xl pb-1">{item.title}</h3>
                <p className="text-xs lg:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OurServices;
