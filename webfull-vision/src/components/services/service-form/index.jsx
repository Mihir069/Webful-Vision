const ServiceForm = () => (
  <form>
    <div className="flex flex-col sm:flex-row w-full gap-4 py-1">
      <div className="flex-1">
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className="border p-2 my-1 w-full"
        />
      </div>
      <div className="flex-1">
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          className="border p-2 my-1 w-full"
        />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row w-full gap-4 py-1">
      <div className="flex-1">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 my-1 w-full"
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          name="date"
          placeholder="Preferred Date..."
          className="border p-2 my-1 w-full"
        />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row w-full gap-4 py-1">
      <div className="flex-1">
        <select name="optometrist" className="border p-2 my-1 w-full">
          <option value="">Select Doctor</option>
          <option value="vet 1">Vet 1</option>
          <option value="vet 2">Vet 2</option>
        </select>
      </div>
      <div className="flex-1">
        <select name="service" className="border p-2 my-1 w-full">
          <option value="">Select Service</option>
          <option value="service 1">Service 1</option>
          <option value="service 2">Service 2</option>
        </select>
      </div>
    </div>

    <div className="w-full flex flex-col">
      <textarea
        name="message"
        placeholder="Your message"
        className="border p-2 my-1 w-full"
        rows="4"
      />
    </div>
    <div className="py-2">
      <button className="py-2 px-4 uppercase text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300">
        Send Form!
      </button>
    </div>
  </form>
);

export default ServiceForm;
