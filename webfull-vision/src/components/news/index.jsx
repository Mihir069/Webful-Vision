import NewsContent from "../news-content";

const News = () => (
  <div className="px-4 py-5 md:px-48">
    <div className="relative overflow-hidden w-full">
      <div className="text-center mb-5">
        <div className="py-2 text-2xl md:text-3xl font-semibold uppercase font-customFont">
          Recent <span className="text-[#CE6021]">News</span>
        </div>
        <div className="text-xs md:text-sm text-slate-700">
          What's Going On In Our Blog?
        </div>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-full max-w-6xl">
          <NewsContent />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="py-2 border border-black hover:bg-black w-full sm:w-[60%] md:w-[30%] lg:w-[15%] text-center text-slate-900 font-bold hover:text-white">
          Load More...
        </button>
      </div>
    </div>
  </div>
);

export default News;
