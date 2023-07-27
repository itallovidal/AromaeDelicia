import React from "react";
import {getProducts} from "../../../Utilities/fetch.tsx";
import Produto from "../components/Produto/Produto.tsx";
import {filtro } from "../components/Interfaces.tsx";
import Filtro from "../components/Filtro/filtroIndex.tsx";
import {filtraTempo, filtraValores} from "../../../Utilities/filtra.tsx";

interface CafeProduct {
  id: string,
  nome: string,
  preco: string,
  tempoPreparo: string,
  sabor: string,
  srcFoto: string,
  categoria: string
}

function Cafes() {
  const [produtos, setProdutos] = React.useState<Array<CafeProduct> | null>(null);
  const [filtro, setFiltro] = React.useState<filtro>({
    nome: '',
    categoria: '',
  });

  React.useEffect(() => {
    getProducts("cafes").then((res) => setProdutos(res));
  }, []);

  let lista: Array<CafeProduct> | null = null;

  if (produtos === null)
    return <p className={"showing"}> carregando.. </p>

  lista = produtos

  if(filtro.nome !== '')
    lista = produtos.filter((item) => {
      if(filtro.categoria === 'preco'){
        return filtraValores(Number(item.preco), filtro.nome)
      }
      if(filtro.categoria === 'tempoPreparo'){
        console.log(item)
        return filtraTempo(Number(item.tempoPreparo), filtro.nome)
      }

      return item[filtro.categoria as keyof CafeProduct].includes(filtro.nome.toLowerCase())
    })

  return  (
      <>
        <Filtro.Wrapper setFiltro={setFiltro}>
          <Filtro.Preco />
          <Filtro.TempoPreparo />
          <Filtro.Sabor />
        </Filtro.Wrapper>

        <div id={"container_listagemProdutos"}>
          {lista.map((item) => (
              <Produto key={item.id} produto={item} />
          ))}
        </div>
      </>
  )
}

export default Cafes;
