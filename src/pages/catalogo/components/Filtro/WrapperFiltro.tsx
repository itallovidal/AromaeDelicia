import React, {ReactNode} from 'react';
import './Filtro.css'
import {filtro} from "../Interfaces.tsx";

interface WrapperFiltroProps{
    children: ReactNode,
    setFiltro:  React.Dispatch<React.SetStateAction<filtro>>
  }

  export const FiltroContext = React.createContext<React.Dispatch<React.SetStateAction<filtro>> | null >(null)

function WrapperFiltro({ children, setFiltro} : WrapperFiltroProps) {
    const filtro = React.useRef<HTMLDivElement>(null)

    function handleNav(e: React.PointerEvent<HTMLButtonElement>){
        filtro.current!.classList.toggle('openNav')
        const i = e.target as HTMLButtonElement
        const btn = i.parentNode! as HTMLButtonElement
        btn.classList.toggle('btnNavOpen')
    }

  return (
        <div ref={filtro} id={"wrapper_filtro"}>
            <button onClick={handleNav} id={'btnFilterNav'}><i className="fa-solid fa-chevron-down"></i></button>
            <div className={'showing'} id={"container_filtro"}>

                <FiltroContext.Provider value={setFiltro}>
                    {children}
                </FiltroContext.Provider>
            </div>
        </div>
    )
}

export default WrapperFiltro;