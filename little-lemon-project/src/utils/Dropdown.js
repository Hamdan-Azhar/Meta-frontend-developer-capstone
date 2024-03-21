import styles from "./Dropdown.module.css";
import { useState } from "react";
import dropdown_image from "../assets/dropdown.svg"

const Dropdown = ({options,onSelect,image}) =>{
    const [isOpen,setIsOpen] = useState(false);

    const showDropdown = () =>{
        setIsOpen(true);
    };

    const setDropDown = (index) =>{
        setIsOpen(false);
        let temp = [...options];
        let tempOption = temp[index];
        temp[index] = temp[0];
        temp[0] = tempOption;
        onSelect(temp);
    };

    return(
        <div className={styles["Dropdown-main"]}>
            <div className={styles["Dropdown"]} onClick={isOpen ? ()=>setDropDown(0) : showDropdown}>
                <div>
                  <p>{options[0]}</p>
                </div>
               <img src={image}/>
            </div>
            {isOpen && 
            (options.map((option,index)=>{
                return(
                    <div key={index} className={`${styles["Dropdown"]}`}
                    style={{position:'absolute',zIndex:'12',top:`${35*(index)}px`}} onClick={()=>setDropDown(index)}>
                        <p>{option}</p>
                    </div>
                );
            })).slice(1)}
        </div>
    );
}

export default Dropdown;