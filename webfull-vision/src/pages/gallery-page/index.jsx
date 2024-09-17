import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Gallery from "../../components/gallery";
import Header from "../../components/header";

const GalleryPage = () => (
  <>
    <Header />
    <PageBanner
      title="Our Pictures Gallery"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <Gallery />
    <Connect />
    <Footer />
  </>
);
export default GalleryPage;
