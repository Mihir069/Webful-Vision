import ServicesCard from "../service-card";

const Services = () => (
  <div className="relative bg-[url('/img/footer-bg.jpg')] bg-cover bg-center h-auto text-center px-48">
    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
    <div className="relative z-10 px-20 py-14">
      <h1 className="text-slate-100 text-4xl uppercase font-bold">
        Our Eye Services
      </h1>
      <p className="text-md text-slate-100">
        Our Services To Give Best Care For Your Eyes
      </p>
    </div>
    <div className="pb-12">
      <ServicesCard />
    </div>
  </div>
);

export default Services;
