import { NavLink, Outlet} from "react-router-dom";
import { Section } from "../../GlobalComponents/Section/SectionIndex.tsx";
import "./catalogo.css";

function Catalogo() {
  return (
    <main className={'showing'} id={"catalogo"}>
      <Section.wrapper idName={"container_filtrosNav"}>
        <h1>Aroma e Delícias</h1>

        <nav id={"nav_filtros"}>
          <NavLink end to={"/catalogo"}>cafes</NavLink>
          <NavLink to={"/catalogo/donuts"}>Donuts</NavLink>
          <NavLink to={"/catalogo/cupcakes"}>cupcakes</NavLink>
        </nav>

      </Section.wrapper>
      <Section.wrapper  idName={"container_filtrosContent"}>
        <Outlet />
      </Section.wrapper>
    </main>
  );
}

export default Catalogo;
