import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Navbar from "./GlobalComponents/Navbar/Navbar.tsx";
import Footer from "./GlobalComponents/Footer/footer.tsx";
import "./reset.css";
import Catalogo from "./pages/catalogo/Catalogo.tsx";
import Cafes from "./pages/catalogo/Cafes/Cafes.tsx";
import Cupcakes from "./pages/catalogo/Cupcakes/Cupcakes.tsx";
import Donuts from "./pages/catalogo/Donuts/Donuts.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index element={<Home />}/>
        <Route path={"/catalogo"} element={<Catalogo />}>
          <Route path={""} element={<Cafes />} />
          <Route path={"donuts"} element={<Donuts />} />
          <Route path={"cupcakes"} element={<Cupcakes />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
