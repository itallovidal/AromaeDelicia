import FiltroItem from "./FiltroItem.tsx";

function TempoFiltro() {
    return (
        <div id={"container_recheio"}>
            <h2> Tempo de Preparo </h2>
            <FiltroItem categoria={'tempoPreparo'} itemName={"+15min"} type={"checkbox"} />
            <FiltroItem categoria={'tempoPreparo'} itemName={"+25min"} type={"checkbox"} />
            <FiltroItem categoria={'tempoPreparo'} itemName={"+35min"} type={"checkbox"} />
        </div>
    );
}

export default TempoFiltro;