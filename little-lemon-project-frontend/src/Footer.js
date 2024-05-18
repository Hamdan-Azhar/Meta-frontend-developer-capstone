import pic from "./assets/restaurant chef B.jpg"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
      <footer>
        <div>
            <img src={pic} alt="logo" />
            <ul>
                <li>Dormant navigation</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li>Social media links</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </div>
      </footer>
    );
}

export default Footer;



