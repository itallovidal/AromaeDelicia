import FiltroItem from "./FiltroItem.tsx";


function PrecoFiltro() {
    return (
        <div id={'container_preco'}>
            <h2> Preço </h2>

            <FiltroItem categoria={'preco'} itemName={'$'} type={'checkbox'}/>
            <FiltroItem categoria={'preco'} itemName={'$$'} type={'checkbox'}/>
            <FiltroItem categoria={'preco'} itemName={'$$$'} type={'checkbox'}/>
            <FiltroItem categoria={'preco'} itemName={'$$$$'} type={'checkbox'}/>
        </div>
    );
}

export default PrecoFiltro;