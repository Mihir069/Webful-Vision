import TalkToUs from "../talk-to-us";
import AppointmentForm from "./appointment-form";

const Appointment = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-48">
    <div className="py-8 md:py-14 flex flex-col md:flex-row w-full gap-5">
      <div className="w-full">
        <AppointmentForm />
      </div>
      <div className="w-full md:w-[32%]">
        <div className="space-y-4">
          <TalkToUs />
        </div>
      </div>
    </div>
  </div>
);
export default Appointment;
