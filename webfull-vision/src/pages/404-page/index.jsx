import Connect from "../../components/connect";
import Error from "../../components/error";
import ErrorBanner from "../../components/error/error-banner";
import Footer from "../../components/footer";
import Header from "../../components/header";

const ErrorPage = () => (
  <>
    <Header />
    <ErrorBanner />
    <Error />
    <Connect />
    <Footer />
  </>
);
export default ErrorPage;
