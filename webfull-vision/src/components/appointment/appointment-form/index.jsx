const AppointmentForm = () => (
  <form>
    <div className="text-2xl font-customFont text-slate-800 ">
      Fill in the From Below to get appointment
    </div>
    <div className="flex w-full gap-7 py-1">
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
    <div className="flex w-full gap-7 py-1">
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
  </form>
);
export default AppointmentForm;
