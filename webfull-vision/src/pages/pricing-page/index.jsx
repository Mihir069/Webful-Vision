import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Price from "../../components/price/price";

const PricingPage = () => (
  <>
    <Header />
    <PageBanner
      title="Price List"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <Price />
    <Connect />
    <Footer />
  </>
);
export default PricingPage;
