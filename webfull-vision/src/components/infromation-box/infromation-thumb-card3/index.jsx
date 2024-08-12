const InformationCard3 = () => (
  <div className="relative pl-3 bg-[#15568E] w-[400px] h-80">
    <div className="pt-5 float-left">
      <div className="text-white  text-2xl font-normal">Lenses & Frames</div>
      <p className="text-white text-sm py-4">
        Our Vide range of Lenses and frames <br /> help you to chose best
        suitable <br /> items for you.
      </p>
      <div className="">
        <ul>
          <li className="text-white">
            <span>&#10004;</span> Latest to Fasion{" "}
          </li>
          <li className="text-white">
            <span>&#10004;</span> High Quality and Branded
          </li>
          <li className="text-white">
            <span>&#10004;</span> Best for your Eyes
          </li>
        </ul>
      </div>
      <div className="mt-6 py-2 px-3 w-28 bg-[#CE6021]">
        <button className="text-slate-100 font-bold">Read more</button>
      </div>
    </div>
    <div className="float-right w-[250px] absolute bottom-0 right-0 opacity-60 hover:opacity-100">
      <img src="/img/lenseandframe.png" alt="lensframe" className="w-[249px]" />
    </div>
  </div>
);
export default InformationCard3;
