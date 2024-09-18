import servicesList from "../../../../data/servicesList.json";
import TalkToUs from "../../talk-to-us";
import ServiceForm from "../service-form";

const ServicesGallery = () => {
  return (
    <div className="py-3">
      <div className="px-4 sm:px-8 lg:px-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {servicesList.map((service) => (
          <div className="bg-white overflow-hidden shadow-md" key={service.id}>
            <a href={service.path}>
              <img
                className="w-full h-48 object-cover"
                src={service.img}
                alt={service.alt}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                  <span className="px-1">Read More {">>"}</span>
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="relative bg-[url('/img/footer-bg.jpg')] bg-cover bg-center h-auto text-center px-4 sm:px-8 lg:px-48">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 px-4 sm:px-8 py-10 sm:py-14">
          <h1 className="text-slate-100 text-2xl sm:text-4xl uppercase font-bold">
            Get Appointment
          </h1>
          <p className="text-sm sm:text-md text-slate-100">
            Fill in the Form Below
          </p>
          <div className="py-12">
            <ServiceForm />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-48 py-20">
        <TalkToUs />
      </div>
    </div>
  );
};

export default ServicesGallery;
