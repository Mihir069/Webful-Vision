import testimonal from "../../../data/testiminal.json";

const Testimonials = () => {
  return (
    <div className="space-y-4">
      {testimonal.map((items) => (
        <div className="p-2" key={items.id}>
          <div className="bg-slate-300 text-sm p-3">
            <p>{items.quotes}</p>
          </div>
          <div className="flex flex-col md:flex-row py-5 items-center">
            <div className="w-16 mb-3 md:mb-0">
              <img
                src={items.img}
                alt={items.alt}
                className="w-full rounded-full"
              />
            </div>
            <div className="text-center md:text-left px-2">
              <div className="text-sm uppercase text-slate-800 font-semibold">
                {items.name}
              </div>
              <div className="text-sm uppercase text-slate-600">
                {items.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
