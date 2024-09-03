import AboutUsBanner from "../../components/about-us/about-us-banner";
import AboutUsContent from "../../components/about-us/about-us-content";
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Header from "../../components/header";
import OptometristFeature from "../../components/optometrist-feature";
import TeamModule from "../../components/team-module";

const AboutUsPage = () => (
  <>
    <Header />
    <AboutUsBanner />
    <OptometristFeature />
    <AboutUsContent />
    <TeamModule />
    <Connect />
    <Footer />
  </>
);
export default AboutUsPage;
