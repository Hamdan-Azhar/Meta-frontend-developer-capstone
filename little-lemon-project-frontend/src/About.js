import styles from "./About.module.css";
import image_2 from "./assets/Mario and Adrian b.jpg"
import image_1 from "./assets/Mario and Adrian A.jpg"

const About = () => {
    return(
     <section id={styles["About"]}>
       <div>
        <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.
            </p>
        </article>
        <div>
            <img src={image_1} alt="Mario and Adrian B"/>
            <img src={image_2} alt="Mario and Adrian A"/>
        </div>
      </div>
     </section>
    );
}

export default About;