import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./output.css"
import HomePage from "./pages/home-page";
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