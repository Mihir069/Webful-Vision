import testimonal from "../../../data/testiminal.json";

const Testimonials = () => {
  return (
    <div className="space-y-4">
      {testimonal.map((items) => (
        <div className="p-4 bg-slate-100 rounded-lg shadow-md" key={items.id}>
          <div className="bg-slate-300 text-sm p-3 rounded-md">
            <p>{items.quotes}</p>
          </div>
          <div className="flex flex-col md:flex-row py-5 items-center">
            <div className="w-16 h-16 md:w-24 md:h-24">
              <img
                src={items.img}
                alt={items.alt}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="mt-3 md:mt-0 md:ml-4 text-center md:text-left">
              <div className="text-sm uppercase text-slate-800 font-semibold">
                {items.name}
              </div>
              <div className="text-xs uppercase text-slate-600">
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
