import team from "../../../data/team.json";

const TeamModule = () => (
  <div className="px-4 md:px-48 flex flex-wrap">
    {team.map((item, index) => (
      <div key={item.id} className="w-full md:w-1/2 p-3">
        <div
          className={`flex ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } bg-slate-100 overflow-hidden border`}
        >
          <div className="flex-shrink-0 w-[60%] md:w-1/2">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-auto object-cover border"
            />
          </div>
          <div className="p-3 w-full md:w-1/2 flex flex-col  justify-center">
            <div className="text-lg font-thin">{item.postion}</div>
            <h3 className="text-xl">{item.name}</h3>
            <p className="text-sm leading-6">{item.description}</p>
            <div className="flex gap-5 py-3">
              <img src={item.facebook} alt="facebook" className="w-3 " />
              <img src={item.twitter} alt="facebook" className="w-5 " />
              <img src={item.linkedin} alt="facebook" className="w-5 " />
              <img src={item.google} alt="facebook" className="w-6 " />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TeamModule;
