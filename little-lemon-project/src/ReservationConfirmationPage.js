import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./ReservationConfirmationPage.module.css"
import Button from "./utils/Button";

const ReservationConfirmationPage = () =>{
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <section id={styles['ReservationConfirmation']}>
            <h1>Your Reservation is Confirmed!</h1>
            <Button text="Back to Home Page" onClick={()=>{navigate("/")}}/>
        </section>
        <Footer/>
        </>
    );
}

export default ReservationConfirmationPage;