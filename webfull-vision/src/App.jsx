import "@fontsource/raleway";
import { lazy, Suspense } from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestimonialPage from "./pages/testimonial-page";
import Loader from "./components/common/loader";
const HomePage = lazy(() => import("./pages/home-page/home-page-version-1"));
const HomePageVersion2 = lazy(() =>
  import("./pages/home-page/home-page-version-2")
);
const FaqPage = lazy(() => import("./pages/faq-page"));
const AboutUsPage = lazy(() => import("./pages/about-us-page"));
const PricingPage = lazy(() => import("./pages/pricing-page"));
const AppointmentPage = lazy(() => import("./pages/appointment-page"));
const ErrorPage = lazy(() => import("./pages/404-page"));
const GalleryPage = lazy(() => import("./pages/gallery-page"));
const ServicesPage = lazy(() => import("./pages/services-page"));

const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div>
          {" "}
          <Loader />{" "}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-version-2" element={<HomePageVersion2 />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing-list" element={<PricingPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
