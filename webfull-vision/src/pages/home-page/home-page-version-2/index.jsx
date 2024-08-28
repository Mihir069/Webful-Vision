import Banner from "../../../components/banner";
import Blog from "../../../components/blog";
import BranchModule from "../../../components/branch-module";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import News from "../../../components/news";
import OptometristFeature from "../../../components/optometrist-feature";
import OurServices from "../../../components/our-service";
import Price from "../../../components/price/price";
import Services from "../../../components/services";
import TeamModule from "../../../components/team-module";

const HomePageVersion2 = () => (
  <>
    <Header />
    <Banner />
    <OptometristFeature />
    <Services />
    <TeamModule />
    <Price />
    <Blog />
    <OurServices />
    <News />
    <BranchModule />
    <Footer />
  </>
);
export default HomePageVersion2;
