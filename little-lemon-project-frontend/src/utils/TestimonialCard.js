import star from "../assets/star.png";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({starNo,name,photo,secondName,content}) =>{
    return (
      <div className={styles['Testimonial-card']}>
        <div>
            <div>
                {[...Array(starNo)].map((_,index)=>(
                    <img key={index} src={star}/>
                ))}
            </div>
            <div>
                <img src={photo}/>
                <div>
                    <p>{name}</p>
                    <p>{secondName}</p>
                </div>
            </div>
            <p>{content}</p>
        </div>
      </div>
    );
}

export default TestimonialCard;