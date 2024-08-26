const InformationCard1 = () => (
  <div className="relative bg-[#15568E] w-full sm:w-[400px] h-auto sm:h-[320px] p-4">
    <div className="text-white text-lg sm:text-2xl font-normal">
      Lenses & Frames
    </div>
    <p className="text-white text-sm py-2 sm:py-4 w-[60%]">
      Our wide range of lenses and frames help you choose the best suitable
      items for you.
    </p>
    <ul className="list-none pl-5 text-white text-sm">
      <li>
        <span>&#10004;</span> Latest Fashion
      </li>
      <li>
        <span>&#10004;</span> High Quality and Branded
      </li>
      <li>
        <span>&#10004;</span> Best for your Eyes
      </li>
    </ul>
    <div className="mt-4 sm:mt-6 py-2 px-3 bg-[#CE6021] w-[30%] text-center">
      <button className="text-slate-100 font-bold">Read more</button>
    </div>
    <div className="absolute bottom-0 right-0 w-24 sm:w-[250px] opacity-60 hover:opacity-100">
      <img src="/img/lenseandframe.png" alt="lensframe" className="w-full" />
    </div>
  </div>
);

export default InformationCard1;
