import Banner from "../../components/banner";
import Header from "../../components/header";
import Services from "../../components/services";
import TeamModule from "../../components/team-module";
import WelcomeMessage from "../../components/welcome-message";

const HomePage = () => (
  <>
    <Header />
    <Banner />
    <WelcomeMessage />
    <Services />
    <TeamModule />
  </>
);
export default HomePage;
