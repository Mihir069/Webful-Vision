const AppointmentForm = () => (
  <form>
    <div className="text-2xl font-customFont text-slate-800 ">
      Fill in the From Below to get appointment
    </div>
    <div className="flex w-full gap-7 py-2">
      <div className="w-full flex flex-col">
        <label htmlFor="fullName">Your Full Name *</label>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className="border p-2 my-1"
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="fullName">Your Phone#*</label>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          className="border p-2 my-1"
        />
      </div>
    </div>
    <div className="flex w-full gap-7 py-2">
      <div className="w-full flex flex-col">
        <label htmlFor="fullName">Your Email *</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 my-1"
        />
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="fullName">Preffered Date*</label>
        <input type="text" name="date" className="border p-2 my-1" />
      </div>
    </div>
    <div className="flex w-full gap-7 py-2">
      <div className="w-full flex flex-col">
        <label htmlFor="optometrist">Select Optometrist</label>
        <select name="optometrist" className="border p-2 my-1">
          <option value="">Select Doctor</option>
          <option value="vet 1">vet 1</option>
          <option value="vet 2">vet 2</option>
        </select>
      </div>
    </div>
    <div className="flex w-full gap-7 py-2">
      <div className="w-full flex flex-col">
        <label htmlFor="service">Select Service</label>
        <select name="service" className="border p-2 my-1">
          <option value="">Select Service</option>
          <option value="vet 1">Service 1</option>
          <option value="vet 2">Service 2</option>
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
    <div className="py-2">
      <button className="py-2 px-4 uppercase text-slate-100 font-semibold bg-[#CE6021] hover:bg-[#15568E] ease-in-out duration-300">
        Send From!
      </button>
    </div>
  </form>
);
export default AppointmentForm;
