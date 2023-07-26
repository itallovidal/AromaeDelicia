import headerPic from "../../../../assets/Home/header.jpg";
import './header.css'

function Header() {
    return (
        <header className={'wrapper'}>
            <picture>
                <img src={headerPic} alt=""/>
            </picture>


            <div id={'container_content'}>
                <h1>Cafés com a cara <br/> do Brasil</h1>
                <p> Direto das fazendas de minas gerais</p>
            </div>
        </header>
    );
}

export default Header;