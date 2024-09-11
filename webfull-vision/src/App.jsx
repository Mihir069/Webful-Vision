import "@fontsource/raleway";
import { lazy, Suspense } from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestimoanalPage from "./pages/testimonal-page";
const HomePage = lazy(() => import("./pages/home-page/home-page-version-1"));
const HomePageVersion2 = lazy(() =>
  import("./pages/home-page/home-page-version-2")
);
const FaqPage = lazy(() => import("./pages/faq-page"));
const AboutUsPage = lazy(() => import("./pages/about-us-page"));
const PricingPage = lazy(() => import("./pages/pricing-page"));
const AppointmentPage = lazy(() => import("./pages/appointment-page"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading....</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-version-2" element={<HomePageVersion2 />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/pricing-list" element={<PricingPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/testimonal" element={<TestimoanalPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
