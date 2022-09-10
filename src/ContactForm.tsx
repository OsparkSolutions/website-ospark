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
                <div>
                    <input></input>
                </div>
            </div>


            
            <button onClick={() => setIsOpen(true)}>Contact Us</button>
          
        </div>
    );

}