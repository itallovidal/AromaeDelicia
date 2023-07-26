import {ReactNode} from "react";
import './wrapper.css'
interface WrapperProps {
    children: ReactNode,
    idName: string
}

function Wrapper({children, idName} : WrapperProps) {
    return (
        <article id={idName} className={'wrapper_externo'}>
            <section className={'wrapper_interno'}>
                {children}
            </section>
        </article>
    );
}

export default Wrapper;