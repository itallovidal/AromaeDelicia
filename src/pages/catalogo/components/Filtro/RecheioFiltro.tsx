import FiltroItem from "./FiltroItem.tsx";

function RecheioFiltro() {
    return (
      <div id={"container_recheio"}>
        <h2> Recheio </h2>
        <FiltroItem categoria={'recheio'}itemName={"Maracujá"} type={"checkbox"} />
        <FiltroItem categoria={'recheio'}itemName={"Morango"} type={"checkbox"} />
        <FiltroItem categoria={'recheio'}itemName={"Chocolate"} type={"checkbox"} />
      </div>
    );
}

export default RecheioFiltro;