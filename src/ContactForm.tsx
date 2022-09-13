import { Stylesheet } from "@fluentui/merge-styles";
import { MouseEventHandler, useState } from "react";
import * as styles from "./styles";


export const ContactForm = () => {
    //tracks the state of contact form overlay whether or not its open
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selection, setSelection] = useState('0');
    const [textArea, setTextArea] = useState('');

    
    const clearForm: MouseEventHandler<HTMLButtonElement> = (ev) => {
        setFirstName('');
        setLastName('');
        setTextArea('');
        setSelection('0')
        ev.preventDefault()
    }

    const formSubmissionalert = () =>{
        alert(
            `First name: ${firstName} \nLast name: ${lastName} \nSelection: ${selection} \nMessage: ${textArea}`
        );
    }
    return (
        <div>
            <div className={isOpen ? styles.openFormStyle : styles.closedFormStyle}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={() => setIsOpen(false)}>&times;</a>
            
                <form className = {styles.formContainer}>
                    <label className = {styles.labels} htmlFor="firstName">First Name</label><br></br>
                    <input className = {styles.nameInput} id='firstName' value = {firstName} onInput={(ev)=> {
                        setFirstName(ev.currentTarget.value)}}></input>
                    <label className = {styles.labels} htmlFor="lastName">Last Name</label><br></br>
                    <input className = {styles.nameInput} id='lastName' value = {lastName} onInput={(ev)=> {
                        setLastName(ev.currentTarget.value)}}></input>

                    <label className = {styles.labels} htmlFor="lastName">Select One...</label><br></br>
                    <select value = {selection} onInput = {(ev) =>{ 
                        setSelection(ev.currentTarget.value)}} className = {styles.dropDown} name="options" id="cars">
                        <option value="0"></option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select><br></br>

                    <label className = {styles.labels} htmlFor = 'message'>What can we help you with?</label>
                    <textarea className = {styles.messageInput} id = 'message' value = {textArea} onInput={(ev)=> {
                        setTextArea(ev.currentTarget.value)}}></textarea>
                    <div className = {styles.buttonContainer}>
                        <button onClick={formSubmissionalert} className={styles.submit}>Submit</button>
                        <button onClick={clearForm} className={styles.clear}>Clear</button>
                    </div>
                    
                </form>
            </div>
            <div className = {styles.contactButtonContainer}>      
                <button className = {styles.contactButton} onClick={() => setIsOpen(true)}>Contact Us</button>
            </div>
        </div>
    );

}