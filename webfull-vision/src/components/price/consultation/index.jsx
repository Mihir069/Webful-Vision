const Consultation = () => (
  <div className="text-white">
    <div className="bg-[#15568E]">
      <div className="p-5 text-center">
        <div className="text-2xl md:text-3xl">Consultation</div>
        <div className="text-4xl md:text-7xl">$20.20</div>
      </div>
    </div>
    <div className="p-5 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-5 border-b-2 py-4">
        <img src="/svg/check-solid.svg" alt="check-mark" className="w-3" />
        <p className="text-sm text-slate-700">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 border-b-2 py-4">
        <img src="/svg/check-solid.svg" alt="check-mark" className="w-3" />
        <p className="text-sm text-slate-700">
          Consectetur adipiscing elit, sed do
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 border-b-2 py-4">
        <img src="/svg/check-solid.svg" alt="check-mark" className="w-3" />
        <p className="text-sm text-slate-700">
          <span className="font-semibold">Eiusmod</span> tempor incididunt
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 border-b-2 py-4">
        <img src="/svg/xmark-solid.svg" alt="x-mark" className="w-3" />
        <p className="text-sm text-slate-700">
          Ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 py-4">
        <img src="/svg/xmark-solid.svg" alt="x-mark" className="w-3" />
        <p className="text-sm text-slate-700">Ut enim ad minim veniam</p>
      </div>
      <div className="flex py-3 justify-center">
        <button className="py-2 px-4 uppercase text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300">
          Get Appointment
        </button>
      </div>
    </div>
  </div>
);
export default Consultation;
