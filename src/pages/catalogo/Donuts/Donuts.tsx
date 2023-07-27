import React from "react";
import {getProducts} from "../../../Utilities/fetch.tsx";
import Produto from "../components/Produto/Produto.tsx";
import {filtro} from "../components/Interfaces.tsx";
import Filtro from "../components/Filtro/filtroIndex.tsx";
import {filtraValores} from "../../../Utilities/filtra.tsx";

interface DonutsProduct {
  id: string,
  nome: string,
  preco: string,
  srcFoto: string,
  categoria: string,
  tamanho: string
}

function Donuts() {
    const [produtos, setProdutos] = React.useState<Array<DonutsProduct> | null>(null);
    const [filtro, setFiltro] = React.useState<filtro>({
        nome: '',
        categoria: '',
    });

    React.useEffect(() => {
        getProducts("donuts").then((res) => setProdutos(res));
    }, []);

    let lista: Array<DonutsProduct> | null = null;

    if (produtos === null)
        return <p className={"showing"}> carregando.. </p>

    lista = produtos

    if(filtro.nome !== '')
        lista = produtos.filter((item) => {
            if(filtro.categoria === 'preco'){
                return filtraValores(Number(item.preco), filtro.nome)
            }
            return item[filtro.categoria as keyof DonutsProduct].includes(filtro.nome.toLowerCase())
        })

    return  (
        <>
            <Filtro.Wrapper setFiltro={setFiltro}>
                <Filtro.Preco />
                <Filtro.Tamanho />
            </Filtro.Wrapper>

            <div id={"container_listagemProdutos"}>
                {lista.map((item) => (
                    <Produto key={item.id} produto={item} />
                ))}
            </div>
        </>
    )
}

export default Donuts;
