const Connect = () => (
  <div className="relative bg-[#CE6021] p-6 md:p-8">
    <div className="relative flex flex-col md:flex-row items-center">
      <div className="absolute -bottom-10 left-4 md:left-8 w-24 md:w-32">
        <img src="img/doctor.png" alt="doctor" className="w-full h-auto" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-slate-100 text-xs md:text-lg lg:text-xl px-4 md:px-6 lg:px-56">
        <div className="border border-white p-2 md:p-3 w-12 md:w-10 flex-shrink-0 mb-4 md:mb-0">
          <img
            src="svg/phone-solid-white.svg"
            alt="phone"
            className="w-full h-auto"
          />
        </div>
        <div className="font-customFont flex-grow text-center md:text-left px-4 md:px-6 lg:px-7 lg:pr-48 mb-4 md:mb-0">
          If you Have Any Questions Call Us On {"(010)"}123-456-7890
        </div>
        <button className="py-2 px-4 text-xs md:text-sm border border-white text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300 mt-4 md:mt-0">
          Get Appointment
        </button>
      </div>
    </div>
  </div>
);
export default Connect;
