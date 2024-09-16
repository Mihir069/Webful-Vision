import BlogContent from "./blog-content";
import Testimonials from "../testimonials";

const Blog = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-48">
    <div className="py-5 flex flex-col md:flex-row md:flex-wrap">
      <div className="relative overflow-hidden w-full">
        <div className="text-center">
          <div className="py-2 text-2xl sm:text-3xl font-semibold uppercase">
            Why Chose <span className="text-[#CE6021]">Us?</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-700">
            We Have Best Professional Team To Care Your Eyes
          </div>
        </div>
        <div className=" relative py-8 md:py-1 flex flex-col md:flex-row w-full gap-5">
          <div className="w-full md:w-[68%]">
            <BlogContent />
          </div>
          <div className="hidden md:block absolute right-0 w-full md:w-[32%]">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
