import FaqContent from "./faq-content";
import FaqList from "./faq-list";

const Faq = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-48">
    <div className="py-8 md:py-14 flex flex-col md:flex-row w-full gap-5">
      <div className="w-full">
        <FaqList />
      </div>
      <div className="w-full md:w-[32%]">
        <FaqContent />
      </div>
    </div>
  </div>
);
export default Faq;
