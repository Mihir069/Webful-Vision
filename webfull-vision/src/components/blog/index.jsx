import BlogContent from "../blog-content";
import Testimonials from "../testimonal";

const Blog = () => (
  <div className="px-48">
    <div className="py-5 flex flex=wrap">
      <div className="relative overflow-hidden w-full">
        <div className="text-center">
          <div className="py-2 text-3xl font-semibold uppercase">
            Why Chose <span className="text-[#CE6021]">Us?</span>
          </div>
          <div className="text-sm text-slate-700">
            We Have Best Professional Team To Care Your Eyes
          </div>
        </div>
        <div className="py-14 flex w-full gap-5">
          <div className=" w-[68%]">
            <BlogContent />
          </div>
          <div className="w-[32%]">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Blog;
