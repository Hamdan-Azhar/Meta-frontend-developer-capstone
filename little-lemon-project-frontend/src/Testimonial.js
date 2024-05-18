import TestimonialCard from "./utils/TestimonialCard";
import styles from "./Testimonial.module.css";

const Testimonial = () =>{
    return(
        <section id={styles['Testimonials']}>
          <div>
            <h1>Testimonials</h1>
                <div>
                <TestimonialCard
                starNo={5}
                name="John"
                secondName="Doe"
                photo={require("./assets/greek salad.jpg")}
                content= "Such a chilled out atmosphere - love it!"/> 
                <TestimonialCard
                starNo={3}
                name="John"
                secondName="Doe"
                photo={require("./assets/greek salad.jpg")}
                content= "Such a chilled out atmosphere - love it!"/> 
                <TestimonialCard
                starNo={5}
                name="John"
                secondName="Doe"
                photo={require("./assets/greek salad.jpg")}
                content= "Such a chilled out atmosphere - love it!"/> 
                <TestimonialCard
                starNo={5}
                name="John"
                secondName="Doe"
                photo={require("./assets/greek salad.jpg")}
                content= "Such a chilled out atmosphere - love it!"/>  
            </div>
          </div> 
        </section>
    );
}

export default Testimonial;