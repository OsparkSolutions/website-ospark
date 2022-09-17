import { Stylesheet } from "@fluentui/merge-styles";
import { MouseEventHandler, useState } from "react";
import { ContactFormProps } from "./App";
import { runAsync } from "./helper";
import * as styles from "./styles";


export const ContactForm = (props: ContactFormProps) => {
    //tracks the state of contact form overlay whether or not its open
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selection, setSelection] = useState('0');
    const [textArea, setTextArea] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)


    const clearForm: MouseEventHandler<HTMLButtonElement> = (ev) => {
        setFirstName('');
        setLastName('');
        setTextArea('');
        setSelection('0');
        ev.preventDefault();
    }

    const formSubmissionalert = (ev: any) => {
        runAsync(async () =>{
            const requestURL = `/contactform?firstName=${firstName}&lastName=${lastName}&selection=${selection}&textArea=${textArea}`
            console.log(requestURL)
            const response = await fetch(requestURL)
            if(response.ok){
                console.log('is ok')
                const responseText = await response.text()
                console.log(JSON.parse(responseText));
            }
          })
        setIsSubmitted(true);
        ev.preventDefault();
    }
    return (
        <div>
            <div className={props.isOpen ? styles.openFormStyle : styles.closedFormStyle}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={() => props.setIsOpen(false)}>&times;</a>

                <form className={styles.formContainer}>
                    <label className={styles.labels} htmlFor="firstName">First Name</label><br></br>
                    <input className={styles.nameInput} id='firstName' value={firstName} onInput={(ev) => {
                        setFirstName(ev.currentTarget.value)
                    }}></input>
                    <label className={styles.labels} htmlFor="lastName">Last Name</label><br></br>
                    <input className={styles.nameInput} id='lastName' value={lastName} onInput={(ev) => {
                        setLastName(ev.currentTarget.value)
                    }}></input>

                    <label className={styles.labels} htmlFor="lastName">Select One...</label><br></br>
                    <select value={selection} onInput={(ev) => {
                        setSelection(ev.currentTarget.value)
                    }} className={styles.dropDown} name="options" id="cars">
                        <option value="0"></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select><br></br>

                    <label className={styles.labels} htmlFor='message'>What can we help you with?</label>
                    <textarea className={styles.messageInput} id='message' value={textArea} onInput={(ev) => {
                        setTextArea(ev.currentTarget.value)
                    }}></textarea>
                    <div className={styles.buttonContainer}>
                        <button onClick={formSubmissionalert} className={styles.submit}>Submit</button>
                        <button onClick={clearForm} className={styles.clear}>Clear</button>
                    </div>

                </form>
                {isSubmitted && <h1 style={{ color: 'white' }} className={styles.successMessageShown} >Success!</h1>}
            </div>
        </div>
    );

}