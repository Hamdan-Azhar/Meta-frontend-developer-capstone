import logo from "./assets/Logo.svg"
import styles from "./Header.module.css"

const Header = () => {
    return(
      <header>
        <nav>
          <img src={logo} alt="logo"/>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;