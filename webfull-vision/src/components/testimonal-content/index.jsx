import Testimonials from "../testimonal";

const TestimonalContent = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-48">
    <div className="py-5 flex flex-col md:flex-row md:flex-wrap">
      <div className=" py-8 md:py-1 flex flex-col md:flex-row w-full gap-5">
        <div className="w-full md:w-[68%]">
          <Testimonials />
        </div>
        <div className=" w-full md:w-[32%]"></div>
      </div>
    </div>
  </div>
);
export default TestimonalContent;
