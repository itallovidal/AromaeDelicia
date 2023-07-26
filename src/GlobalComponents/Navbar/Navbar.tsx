import {Link} from "react-router-dom";
import './navbar.css'
import React from "react";

function Navbar() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
        <div id={`navbar_container`}>
            <div id={'navbar_wrapper'} >
                <span id={'navbar_icon'}>Aroma & Delícia</span>

                <button onClick={()=>setIsOpen(!isOpen)} id={'btn_open'}><i className="fa-solid fa-bars"></i></button>
                <nav className={isOpen ? 'navOpen' : ''}>
                    <button onClick={()=>setIsOpen(!isOpen)} id={'btn_close'}><i className="fa-solid fa-circle-xmark"></i></button>
                    <Link to={''}> Produtos </Link>
                    <Link to={''}> Sobre </Link>
                    <Link to={''}> Lojas </Link>
                    <Link to={''}> Contato </Link>
                </nav>

            </div>

        </div>
    );
}

export default Navbar;