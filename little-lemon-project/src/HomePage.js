import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonial from "./Testimonial";

const HomePage = () =>{
    return(
        <>
        <Header/>
        <main>
            <Hero/>
            <Highlights/>
            <Testimonial/>
            <About/>
        </main>
        <Footer/>
        </>
    );
}

export default HomePage;