import InformationCard2 from "./information-thumb-card2";
import InformationCard1 from "./infromation-thumb-card1";
import InformationCard3 from "./infromation-thumb-card3";

const InformationBox = () => {
    return (
        <div className="flex">
            <InformationCard1/>
            <InformationCard2/>
            <InformationCard3/>
        </div>
    )
}
export default InformationBox;