import React, {ChangeEvent} from "react";
import {FiltroContext} from "./WrapperFiltro.tsx";

interface FiltroItemProps{
    type: string,
    itemName: string,
    categoria: string,
}
function FiltroItem({type, itemName, categoria} : FiltroItemProps) {
    const setFilter = React.useContext(FiltroContext)!

    function handleFilter(e: ChangeEvent<HTMLInputElement>){
        const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('input[type=checkbox]')!)
        const wasChecked = !e.target.checked

        inputs.forEach(item => item.checked = false)
        console.log(wasChecked)
        if(wasChecked){
            e.target.checked = false
            setFilter({
                nome: '',
                categoria: ''
            })
        }else{
            e.target.checked = true
            setFilter({
                nome: e.target.value,
                categoria: categoria
            })
        }
    }

    return (
        <div className={'item'}>
            <label htmlFor={itemName}>{itemName}</label>
            <input id={itemName} value={itemName} onChange={handleFilter} type={type}/>
        </div>
    );
}

export default FiltroItem;