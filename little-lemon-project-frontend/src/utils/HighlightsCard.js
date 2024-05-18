import delivery from "../assets/delivery.svg";
import styles from "./HighlightsCard.module.css";

const HighlightsCard = ({image,item,price,content}) =>{
    return (
      <div className={styles['Highlights-card']}>
        <img src={image} alt="card image"/>
        <div>
            <div>
                <h3>{item}</h3>
                <p>{price}</p>
            </div>
            <p>{content}</p>
            <div>
                <p>Order a delivery&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <img src={delivery}/>
            </div>
        </div>
      </div>
    );
}

export default HighlightsCard;