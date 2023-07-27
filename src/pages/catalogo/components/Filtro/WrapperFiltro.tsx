import React, {ReactNode} from 'react';
import './Filtro.css'
import {filtro} from "../Interfaces.tsx";

interface WrapperFiltroProps{
    children: ReactNode,
    setFiltro:  React.Dispatch<React.SetStateAction<filtro>>
  }

  export const FiltroContext = React.createContext<React.Dispatch<React.SetStateAction<filtro>> | null >(null)

function WrapperFiltro({ children, setFiltro} : WrapperFiltroProps) {

  return (

        <div className={'showing'}  id={"container_filtro"}>
            <FiltroContext.Provider value={setFiltro}>
                {children}
            </FiltroContext.Provider>
        </div>
    )
}

export default WrapperFiltro;