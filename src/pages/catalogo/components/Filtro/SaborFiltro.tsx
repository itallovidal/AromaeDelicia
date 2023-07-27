import FiltroItem from "./FiltroItem.tsx";

function SaborFiltro() {
    return (
        <div id={"container_recheio"}>
            <h2> Sabor </h2>
            <FiltroItem categoria={'sabor'} itemName={"Forte"} type={"checkbox"} />
            <FiltroItem categoria={'sabor'} itemName={"Fraco"} type={"checkbox"} />
            <FiltroItem categoria={'sabor'} itemName={"Cappuccinos"} type={"checkbox"} />
        </div>
    );
}

export default SaborFiltro;