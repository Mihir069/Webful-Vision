import Testimonials from "../testimonal";
import TestimonalForm from "./testimonal-form";

const TestimonalContent = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-48">
    <div className=" py-8 md:py-20 flex flex-col md:flex-row w-full gap-10">
      <div className="w-full md:w-[68%]">
        <Testimonials />
      </div>
      <div className=" w-full md:w-[25%]">
        <TestimonalForm />
      </div>
    </div>
  </div>
);
export default TestimonalContent;
