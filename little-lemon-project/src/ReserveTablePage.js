import styles from "./ReserveTablePage.module.css"
import Dropdown from "./utils/Dropdown";
import { useState} from "react";
import Button from "./utils/Button";
import restaraunt_image from "./assets/restaurant.jpg";
import dropdown_image from "./assets/dropdown.svg"
import { fetchAPI,submitAPI } from "./mockAPI";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ReserveTablePage = () =>{
    const [occasionOptions,setOccasionOptions] = useState(["Birthday","osss","SSS"]);
    const [noOfGuestsOptions,setNoOfGuestOptions] = useState([1,2,3,4]);
    const [reservationTimes,setReservationTimes] = useState(['No times'])
    const [formData,setFormData] = useState({
      name:"",
      email:"",
      password:""
    })
    const navigate = useNavigate();
    const handleOccasionSelection = temp =>{
      setOccasionOptions(temp);
    }

    const handleGuestsNoSelection = temp =>{
      setNoOfGuestOptions(temp);
    }

    const handleReservationTimesSelection = temp =>{
      setReservationTimes(temp);
    }
    
    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]:value
        }))
    }

    const isFormValid = () =>{
      const nameHasInteger = /\d/.test(formData['name']);
      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData['email']);
      const phoneHasNonDigits = /\D/.test(formData['phone']);
      
      if (reservationTimes[0] != 'No times' && !nameHasInteger && emailIsValid && !phoneHasNonDigits)
        return true;
      else
        return false;
    }

    const handleSubmit = async () => {
      try {
        await submitAPI(formData);
        navigate("/confirmation");
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    const fetchData = async (date) => {
      try {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        const times = await fetchAPI(formattedDate);
        setReservationTimes([...times])
      } catch (error) {
        console.error('Error fetching reservation times:', error);
      }
    };

    return(
      <>
      <Header/>
     <section id={styles["ReserveTable"]}>
      <div>
        <form>
           <h1>Reserve a table</h1>
           <h2>Personal details</h2>
           <div>
            <div>
              <label htmlFor="name">Name*</label>
              <input type="text"id="name" name="name" value={formData.name} onChange={handleInputChange}/>
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input type="email"id="email" name="email" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div>
              <label htmlFor="phone">Phone*</label>
              <input type="tel"id="phone" name="phone" value={formData.phone} onChange={handleInputChange}/>
            </div>
           </div>
           <h2>Booking details</h2>
           <div>
            <div>
              <label>Occasion*</label>
              <Dropdown options={occasionOptions} onSelect={handleOccasionSelection} image={dropdown_image}/>
            </div>
            <div>
              <label htmlFor="date">Date*</label>
              <input type="date"id="date" name="date" onChange={(event)=>fetchData(event.target.value)} />
            </div>
            <div>
              <label htmlFor="name">Time*</label>
              <Dropdown options={reservationTimes} onSelect={handleReservationTimesSelection} image={dropdown_image}/>
            </div>
            <div>
              <label>No of guests*</label>
              <Dropdown options={noOfGuestsOptions} onSelect={handleGuestsNoSelection} image={dropdown_image}/>
            </div>
           </div>
           <Button text="confirm reservation" isDisabled={!isFormValid()} onClick={handleSubmit}/>
        </form>
        <img src={restaraunt_image}/>
      </div>
     </section>
     <Footer/>
     </>
    );
}

export default ReserveTablePage;