import FiltroItem from "./FiltroItem.tsx";

function TamanhoFiltro() {
    return (
        <div id={"container_recheio"}>
            <h2> Tamanho </h2>
            <FiltroItem categoria={'tamanho'} itemName={"Pequeno"} type={"checkbox"} />
            <FiltroItem categoria={'tamanho'} itemName={"Médio"} type={"checkbox"} />
            <FiltroItem categoria={'tamanho'} itemName={"Grande"} type={"checkbox"} />
        </div>
    );
}

export default TamanhoFiltro;