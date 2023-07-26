import './misturaItem.css'
interface MisturaItemProps{
    src: string,
    text: string
}

function MisturaItem({src, text} : MisturaItemProps) {
    return (
        <div className={'container_misturaItem'}>
            <picture>
                <img src={src} alt=""/>
            </picture>
            <span className={'title'}>{text}</span>
        </div>
    );
}

export default MisturaItem;