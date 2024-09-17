import Appointment from "../../components/appointment";
import Blog from "../../components/blog";
import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Footer from "../../components/footer";
import Header from "../../components/header";

const AppointmentPage = () => (
  <>
    <Header />
    <PageBanner
      title="Get An Appointment"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <Appointment />
    <Blog />
    <Connect />
    <Footer />
  </>
);
export default AppointmentPage;
