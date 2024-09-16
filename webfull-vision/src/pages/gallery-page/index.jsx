import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Gallery from "../../components/gallery";
import GalleryBanner from "../../components/gallery/gallery-banner";
import Header from "../../components/header";

const GalleryPage = () => (
  <>
    <Header />
    <GalleryBanner />
    <Gallery />
    <Connect />
    <Footer />
  </>
);
export default GalleryPage;
