import PageBanner from "../../components/common/page-banner";
import Connect from "../../components/connect";
import Error from "../../components/error";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ErrorPage = () => (
  <>
    <Header />
    <PageBanner
      title="404 Error!"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <Error />
    <Connect />
    <Footer />
  </>
);
export default ErrorPage;
