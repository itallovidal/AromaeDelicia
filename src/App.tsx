import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Navbar from "./GlobalComponents/Navbar/Navbar.tsx";
import Footer from "./GlobalComponents/Footer/footer.tsx";
import './reset.css'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>

        <Routes>
            <Route index element={<Home/>}/>
        </Routes>

        <Footer/>

    </BrowserRouter>
  )
}

export default App
