import styles from "./Highlights.module.css";
import Button from "./utils/Button";
import HighlightsCard from "./utils/HighlightsCard";

const Highlights = () =>{
    return(
      <section id={styles["Highlights"]}>
        <div>
          <div>
              <h1>This weeks specials!</h1>
              <Button text="Online Menu" />
          </div>
          <div>
          <HighlightsCard image={require("./assets/greek salad.jpg")} item="Greek salad" price="18.9"content="The famous greek salad of crispy lettuce, 
            peppers, olives and our Chicago style feta cheese, garnished with 
            crunchy garlic and rosemary croutons. "/>
            <HighlightsCard image={require("./assets/greek salad.jpg")} item="Greek salad" price="18"content="The famous greek salad of crispy lettuce, 
            peppers, olives and our Chicago style feta cheese, garnished with 
            crunchy garlic and rosemary croutons. "/>
            <HighlightsCard image={require("./assets/greek salad.jpg")} item="Greek salad" price="17.9"content="The famous greek salad of crispy lettuce, 
            peppers, olives and our Chicago style feta cheese, garnished with 
            crunchy garlic and rosemary croutons. "/>
          </div>
        </div>
      </section>
    );
}

export default Highlights;