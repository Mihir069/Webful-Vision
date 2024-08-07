import "@fontsource/raleway"
import "./style.css"
import HomePage from "./pages/home-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;