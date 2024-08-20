import testimonal from "../../../data/testiminal.json";
const Testimonials = () => {
  return (
    <>
      <div className="">
        {testimonal.map((items) => (
          <div className="p-2" key={items.id}>
            <div className="bg-slate-300 text-sm p-3">
              <p>{items.quotes}</p>
            </div>
            <div className="flex py-5 justify-center items-center">
              <div className="w-16">
                <img
                  src={items.img}
                  alt={items.alt}
                  className="w-full rounded-full"
                />
              </div>
              <div className="px-2 ">
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
    </>
  );
};
export default Testimonials;
