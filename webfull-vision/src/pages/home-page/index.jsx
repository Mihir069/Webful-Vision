import Banner from "../../components/banner";
import Blog from "../../components/blog";
import Footer from "../../components/footer";
import Header from "../../components/header";
import News from "../../components/news";
import OurServices from "../../components/our-service";
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
    <News />
    <OurServices />
    <Blog />
    <News />
    <Footer />
  </>
);
export default HomePage;
