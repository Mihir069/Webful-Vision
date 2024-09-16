const Error = () => (
  <div className="px-48 py-12">
    <div className="text-center font-customFont">
      <div className="text-9xl font-bold py-3">404!</div>
      <p className="text-2xl py-3">Page is not found!</p>

      <div className="py-6 flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter your search term here so we can help you..."
          className="px-3 py-2 text-sm border border-b-[#15568E] w-2/5 focus:outline-none shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md focus:shadow-lg"
        />
        <button className=" px-3 py-2 bg-[#15568E] text-white font-bold uppercase hover:bg-[#CE6021] transition-colors duration-300 ease-in-out">
          Search
        </button>
      </div>
    </div>
  </div>
);

export default Error;
