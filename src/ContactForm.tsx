import { Stylesheet } from "@fluentui/merge-styles";
import { MouseEventHandler, useState } from "react";
import * as styles from "./styles";


export const ContactForm = () => {
    //tracks the state of contact form overlay whether or not its open
    const [isOpen, setIsOpen] = useState(false);


    //CLEAR BUTON
    // const clearForm: MouseEventHandler<HTMLButtonElement> = (ev) => {
    //     setFirstName('');
    //     setLastName('');
    //     ev.preventDefault()
    // }

    return (
        <div>
            <div className={isOpen ? styles.openFormStyle : styles.closedFormStyle}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={() => setIsOpen(false)}>&times;</a>
            
                <form className = {styles.formContainer}>
                    <label className = {styles.labels} htmlFor="firstName">First Name</label><br></br>
                    <input className = {styles.nameInput} id='firstName'></input>
                    <label className = {styles.labels} htmlFor="lastName">Last Name</label><br></br>
                    <input className = {styles.nameInput} id='lastName'></input>

                    <label className = {styles.labels} htmlFor="lastName">Select One...</label><br></br>
                    <select className = {styles.dropDown} name="options" id="cars">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </form>
            </div>

            <button onClick={() => setIsOpen(true)}>Contact Us</button>
          
        </div>
    );

}