import team from "../../../data/team.json";

const TeamModule = () => (
  <div className="px-48 flex">
    {team.map((item) => (
      <div key={item.id} className="flex items-center mb-4">
        <img src={item.img} alt={item.name} className="w-full h-auto" />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p>{item.position}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TeamModule;
