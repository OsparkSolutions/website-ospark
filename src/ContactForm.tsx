import { Stylesheet } from "@fluentui/merge-styles";
import { MouseEventHandler, useEffect, useState } from "react";
import { ContactFormProps } from "./App";
import { runAsync } from "./helper";
import * as styles from "./styles";


export const ContactForm = (props: ContactFormProps) => {
    //tracks the state of contact form overlay whether or not its open
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [categoryCode, setCategoryCode] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [email, setEmail] = useState('');
    const [categoryCodeOptions, setCategoryCodeOptions] = useState<any[]>([]);
  
    
    const clearForm: MouseEventHandler<HTMLButtonElement> = (ev) => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setComment('');
        setCategoryCode('');
        setIsSubmitted(false);
        ev.preventDefault();
    }

    useEffect(() => {
        const categoryCodeURL = `/categoryCode`
        const categoryCodeResponse = runAsync(async () => {
            const requestURL = `/categoryCode`
            const response = await fetch(requestURL)
            if (response.ok) {
                console.log('the categoryCode fetch is working kinda')
                const responseText = await response.text()
                console.log(`This is the response text from categoryState: ${JSON.parse(responseText)}`)
                setCategoryCodeOptions(JSON.parse(responseText))
               // setCategoryCode('SELECT ONE')
                //add value of 'select one' in sql
                console.log(categoryCodeOptions[0])
            }
        })
    }, [])



    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const validEmail = regex.test(email)


    const formSubmissionalert = (ev: any) => {
        if (validEmail) {
            alert(`You should recieve an email to ${email}`)
            runAsync(async () => {
                const requestURL = `/contactform?firstName=${firstName}&lastName=${lastName}&categoryCode=${categoryCode}&comment=${comment}&email=${email}`
                console.log(requestURL)
                const response = await fetch(requestURL)
                if (response.ok) {
                    setIsSubmitted(true);
                    console.log('is ok')
                    const responseText = await response.text()
                    console.log(JSON.parse(responseText));
                }
            })
            ev.preventDefault();
        }
        else {
            setIsSubmitted(false);
            ev.preventDefault();
            alert('Please enter a valid email.')
        }
    }
    return (
        <div>
            <div className={props.isOpen ? styles.openFormStyle : styles.closedFormStyle}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={() => props.setIsOpen(false)}>&times;</a>
                <h1 className = {styles.contactHeading}>Contact Us Today!</h1>
                <form className={styles.formContainer}>
                    <label className={styles.labels} htmlFor="firstName">{ firstName ? 'First Name' : <>&nbsp;</>}</label><br></br>
                    <input placeholder='First Name' className={styles.nameInput} id='firstName' value={firstName} onInput={(ev) => {
                        setFirstName(ev.currentTarget.value)
                    }}></input>
                    <label className={styles.labels} htmlFor="lastName">{ lastName ? 'Last Name': <>&nbsp;</>}</label><br></br>
                    <input placeholder='Last Name' className={styles.nameInput} id='lastName' value={lastName} onInput={(ev) => {
                        setLastName(ev.currentTarget.value)
                    }}></input>

                    <label className={styles.labels} htmlFor="email">{ email ? 'Email' : <>&nbsp;</> }</label><br></br>
                    <input placeholder="Email" className={styles.emailInput} id='email' value={email} onInput={(ev) => {
                        setEmail(ev.currentTarget.value)
                    }}></input>

                    {/* <label className={styles.labels} htmlFor="lastName">Select One...</label><br></br> */}
                    <br></br>
                    <br></br>
                    <select value={categoryCode} onInput={(ev) => {
                        setCategoryCode(ev.currentTarget.value)
                    }} className={styles.dropDown} name="options" id="options">
                        <option>SELECT ONE</option>
                        {categoryCodeOptions.map((value)=>{
                            return <option value={value.categoryCode}>{value.categoryCode}</option>
                        })
                        }</select><br></br>

                    <label className={styles.labels} htmlFor='message'>What can we help you with?</label>
                    <textarea className={styles.messageInput} id='message' value={comment} onInput={(ev) => {
                        setComment(ev.currentTarget.value)
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