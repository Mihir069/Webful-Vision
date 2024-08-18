import InformationCard2 from "./information-thumb-card2";
import InformationCard1 from "./infromation-thumb-card1";
import InformationCard3 from "./infromation-thumb-card3";

const InformationBox = () => (
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full overflow-x-auto sm:overflow-visible">
    <InformationCard1 />
    <InformationCard2 />
    <InformationCard3 />
  </div>
);

export default InformationBox;
