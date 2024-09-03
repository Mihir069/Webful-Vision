import "@fontsource/raleway";
import { lazy, Suspense } from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/home-page/home-page-version-1"));
const HomePageVersion2 = lazy(() =>
  import("./pages/home-page/home-page-version-2")
);
const FaqPage = lazy(() => import("./pages/faq-page"));
const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading....</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-version-2" element={<HomePageVersion2 />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
