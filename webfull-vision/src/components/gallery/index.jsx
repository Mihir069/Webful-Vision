import galleryData from "../../../data/gallery.json";

const Gallery = () => (
  <div className="px-4 py-5 md:px-48">
    <div className="relative overflow-hidden w-full">
      <div className="text-center mb-5">
        <div className="py-2 text-2xl md:text-3xl font-semibold uppercase font-customFont">
          Amazing <span className="text-[#CE6021]">Staff And Services</span>
        </div>
        <div className="text-xs md:text-sm text-slate-700">
          Some Amazing Stuff From Our Clinic
        </div>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-5">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
