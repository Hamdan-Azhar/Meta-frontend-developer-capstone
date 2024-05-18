import  image from './assets/restaurant_food.jpg'
import styles from "./Hero.module.css"
import Button from './utils/Button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return(
    <section id={styles.Hero} >
      <div>
        <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <Button text="Reserve a table" onClick={()=>{ navigate("/reservation")}}/>
        </article>
        <img src={image} alt="restaurant food"/>
      </div>
    </section>
   );
}
export default Hero;