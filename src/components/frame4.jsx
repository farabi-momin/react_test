import React, {useState} from "react";
import validator from "validator";
import background from "../assets/frame4.jpg"

function Frame4(){
    const onDateFocus = (e) => (e.target.type = "date");
    const onDateBlur = (e) => (e.target.type = "text");

    const [formValues, setFormValues] = useState({
        customerName: '',
        customerEmail: '',
        rsrvDate: '',
        totalPeople: '',
        message:''
    });

    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e)=>{
        const {name, value} =  e.target;
        setFormValues({...formValues, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const errors = {}
        if(!formValues.customerName.trim()){
            errors.customerName = "Name is required"
        }
        if(!formValues.customerEmail.trim()){
            errors.customerEmail = "Email is required"
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formValues.customerEmail)){
            errors.customerEmail = "Invalid email"
        } 
        if (!formValues.rsrvDate.trim()){
            errors.rsrvDate = "Reservation Date Required"
        }
        if(!formValues.totalPeople){
            errors.totalPeople = "Required"
        } else if(formValues.totalPeople <= 0){
            errors.totalPeople = "Invalid"
        }

        setFormErrors(errors)

        if(Object.keys(errors).length===0){
            alert("Booking Confirmed!")
        }
    }

    return(
        <div className="frame4" id="bookTable">
            <div className="container">
                <h3>&#9632; Book Now</h3>
                <h1>BOOK YOUR TABLE</h1>
                <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name*" name="customerName" onChange={handleChange}/>
                        {formErrors.customerName && <span>{formErrors.customerName}</span>}
                        <input type="text" placeholder="Your Email" name="customerEmail"onChange={handleChange}/>
                        {formErrors.customerEmail && <span>{formErrors.customerEmail}</span>}<br/>
                        <input type="text" placeholder="Reservaton Date" onFocus={onDateFocus} name="rsrvDate" onChange={handleChange}/>
                        {formErrors.rsrvDate && <span>{formErrors.rsrvDate}</span>}
                        <input type="number" placeholder="Total People" name="totalPeople" onChange={handleChange}/>
                        {formErrors.totalPeople && <span>{formErrors.totalPeople}</span>}<br/>
                        <textarea placeholder="Message" name="message"/><br/>
                        <button type="submit" className="button">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Frame4;