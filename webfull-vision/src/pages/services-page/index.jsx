import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ServicesGallery from "../../components/services/service-gallery";

const ServicesPage = () => (
  <>
    <Header />
    <PageBanner
      title="Our Services"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <ServicesGallery />
    <Connect />
    <Footer />
  </>
);
export default ServicesPage;
