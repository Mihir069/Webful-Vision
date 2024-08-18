import Banner from "../../components/banner";
import Header from "../../components/header";
import Services from "../../components/services";
import Shop from "../../components/shop";
import TeamModule from "../../components/team-module";
import WelcomeMessage from "../../components/welcome-message";

const HomePage = () => (
  <>
    <Header />
    <Banner />
    <WelcomeMessage />
    <Services />
    <TeamModule />
    <Shop />
  </>
);
export default HomePage;
