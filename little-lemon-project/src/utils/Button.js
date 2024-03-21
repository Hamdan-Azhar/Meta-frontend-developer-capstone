import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({text,isDisabled = false,onClick}) =>{
    const navigate = useNavigate(); 
    const handleClick = () => {
        if (!isDisabled && onClick) {
            onClick(); 
        }
    };

    return(
       <div className={`${styles["Button"]} ${isDisabled ? styles["Disabled"] : ""}` } 
       onClick={handleClick} >
        <p>{text}</p>
       </div>
    );
}

export default Button;