import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import Header from "../../components/header";

const FaqPage = () => (
  <>
    <Header />
    <PageBanner
      title="Frequently asked question"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <Faq />
    <Connect />
    <Footer />
  </>
);
export default FaqPage;
