import './restaurante.css'
interface RestauranteProps{
    src: string,
    name: string,
    text: string
}

function Restaurante({src, name, text} : RestauranteProps) {
    return (
        <div className={'restaurante_container'}>
            <picture>
                <img src={src} alt=""/>
            </picture>

            <div className={'restaurante_infos'}>
                <h3>{name}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Restaurante;