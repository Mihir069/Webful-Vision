import AboutUs from "../../components/about-us";
import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Header from "../../components/header";
import OptometristFeature from "../../components/optometrist-feature";
import TeamModule from "../../components/team-module";

const AboutUsPage = () => (
  <>
    <Header />
    <PageBanner
      title="About Us"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <OptometristFeature />
    <AboutUs />
    <TeamModule />
    <Connect />
    <Footer />
  </>
);
export default AboutUsPage;
