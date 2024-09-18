import ServicesCard from "../common/service-card";

const Services = () => (
  <div className="relative bg-[url('/img/footer-bg.jpg')] bg-cover bg-center h-auto text-center px-4 sm:px-8 lg:px-48">
    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
    <div className="relative z-10 px-4 sm:px-8 py-10 sm:py-14">
      <h1 className="text-slate-100 text-2xl sm:text-4xl uppercase font-bold">
        Our Eye Services
      </h1>
      <p className="text-sm sm:text-md text-slate-100">
        Our Services To Give Best Care For Your Eyes
      </p>
    </div>
    <div className="pb-12">
      <ServicesCard />
    </div>
  </div>
);

export default Services;
