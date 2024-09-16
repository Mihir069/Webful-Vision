import PageBanner from "../../components/common/page-banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import TestimonialContent from "../../components/testimonial-content";

const TestimonialPage = () => (
  <>
    <Header />
    <PageBanner
      title="What customer says?"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Gene Splicing", path: "/" },
        { label: "Cloning", path: "/" },
      ]}
    />
    <TestimonialContent />
    <Footer />
  </>
);

export default TestimonialPage;
