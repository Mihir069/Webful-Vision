const TestimonalForm = () => (
  <form>
    <div className="bg-slate-100 p-4">
      <div className="text-xl font-customFont text-slate-800 ">
        Submit Testimonial
      </div>
      <div className="w-full gap-7 py-3">
        <div className="w-full flex flex-col py-2">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            className="border p-2 my-1"
          />
        </div>
        <div className="w-full flex flex-col py-2">
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            className="border p-2 my-1"
          />
        </div>
      </div>
      <div className="flex w-full gap-7 py-3">
        <div className="w-full flex flex-col">
          <select name="star" className="border p-2 my-1">
            <option value="4 Star">Select ratingsss</option>
            <option value="1 Star">1 Star</option>
            <option value="2 Star">2 Star</option>
            <option value="3 Star">3 Star</option>
            <option value="4 Star">4 Star</option>
            <option value="5 Star">5 Star</option>
          </select>
        </div>
      </div>
      <div className="flex w-full gap-7 py-3">
        <div className="w-full flex flex-col">
          <select name="service" className="border p-2 my-1">
            <option value="">Select Service</option>
            <option value="vet 1">Service 1</option>
            <option value="vet 2">Service 2</option>
          </select>
        </div>
      </div>
      <div className="flex w-full gap-7 py-3">
        <div className="w-full flex flex-col">
          <select name="doctor" className="border p-2 my-1">
            <option value="">Select Doctor</option>
            <option value="vet 1">Doctor 1</option>
            <option value="vet 2">Doctor 2</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="message">Your message</label>
        <textarea
          name="message"
          placeholder="Your message"
          className="border p-2 my-1"
          rows="4"
        />
      </div>
      <div className="py-3">
        <button className="py-3 px-4 uppercase text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300">
          Send From!
        </button>
      </div>
    </div>
  </form>
);
export default TestimonalForm;
