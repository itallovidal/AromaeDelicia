import "./Home.css";
import Header from "./components/Header/Header.tsx";
import MisturaItem from "./components/MisturaItem/MisturaItem.tsx";
import { Section } from "../../GlobalComponents/Section/SectionIndex.tsx";
import { cafeTypes, misturaItens, restaurantes } from "./homeData.tsx";
import CafeType from "./components/CafeType/CafeType.tsx";
import Restaurante from "./components/restaurante/Restaurante.tsx";
import {useLocation} from "react-router-dom";
import React from "react";

function Home() {
    const { hash } = useLocation();
    const sobre = React.useRef<HTMLDivElement>(null)!
    const lojas = React.useRef<HTMLParagraphElement>(null)!

    React.useEffect(()=>{
        switch (hash){
            case '#sobre':
                sobre.current!.scrollIntoView({behavior: "smooth"})
                break

            case '#lojas':
                lojas.current!.scrollIntoView({behavior: "smooth"})
                break
            default:
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                break

        }
    }, [hash])


  return (
    <main className={'showing'} id={"wrapper"}>
      <Header />
      <Section.wrapper idName={"container_mistura"}>
        <h1>Uma Mistura de..</h1>
        <div id={"wrapper_itens"}>
          {misturaItens.map((item, i) => (
            <MisturaItem key={i} src={item.src} text={item.text} />
          ))}
        </div>
        <p>
          O café é uma bebida produzida a partir dos grãos torrados do fruto do
          cafeeiro. É servido tradicionalmente quente,mas também pode ser
          consumido gelado - apesar de menos comum. Ele é um estimulante,por
          possuir cafeína — geralmente 80 a 140mg para cada 207ml dependendo do
          método de preparação
        </p>
      </Section.wrapper>
      <Section.wrapper idName={"container_tiposCafe"}>
        <div ref={sobre} id={"wrapper_types"}>
          {cafeTypes.map((item, i) => (
            <CafeType
              key={i}
              src={item.src}
              cafeType={item.type}
              text={item.text}
            />
          ))}
        </div>
      </Section.wrapper>
      <Section.wrapper  idName={"container_restaurantes"}>
          <p ref={lojas}></p>
        {restaurantes.map((item, i) => (
          <Restaurante
            key={i}
            src={item.src}
            name={item.name}
            text={item.text}
          />
        ))}
      </Section.wrapper>
    </main>
  );
}

export default Home;
