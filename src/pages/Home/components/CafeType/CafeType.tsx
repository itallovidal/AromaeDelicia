import './cafeType.css'
interface CafeTypeProps{
    src: string,
    cafeType: string,
    text: string
}

function CafeType({src, cafeType, text} : CafeTypeProps) {
    return (
        <div className={'container_cafeType'}>
            <picture>
                <img src={src} alt=""/>
            </picture>

            <h3>{cafeType}</h3>
            <p>{text}</p>
        </div>
    );
}

export default CafeType;