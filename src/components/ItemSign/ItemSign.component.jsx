
import './itemSign.styles.css';

const ItemSign = (props) => {
    // eslint-disable-next-line react/prop-types
    const { sign, classes, img, handleChoice, id } = props;
    return (
        <div onClick={handleChoice} id={id} className={`${sign} ${classes} item-sign`} >
            <div className="inner-circle">
                <img src={img} alt="rock" />
            </div>
        </div>
    )
}

export default ItemSign