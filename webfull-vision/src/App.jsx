import "@fontsource/raleway";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page-version-1";
import HomePageVersion2 from "./pages/home-page/home-page-version-2";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-version-2" element={<HomePageVersion2 />} />
    </Routes>
  </BrowserRouter>
);
export default App;
