
import React, { useEffect, useRef, useState } from 'react';
import { runAsync } from './helper';
import * as styles from './styles';
import crack2 from './images/crack2.png'


export const OurWork = () => {
  const aRef = useRef<HTMLInputElement>(null)
  const bRef = useRef<HTMLInputElement>(null)
  

    return (
      <div className={styles.ourWorkContainer}>
        <img src={crack2} style={{width: '100%',}}></img>
        <div className={styles.ourWorkHeaderBox}>
          <h1>OUR WORK</h1>
          <p>We will ask your needs, brainstorm the solution and create a project timeline by identifying benchmarks for the weeks to come. </p>
          <a>
            <div>
              See Our Work
            </div>
          </a>
        </div>
      </div>
      
    )
  }
  



// export const OurWork = () => {
// const[a, setA] = useState('');
// const[b, setB] = useState('');

//   useEffect(()=>{
//     runAsync(async () =>{
//       const requestURL = `/add?a=${a}&b=${b}`
//       console.log(requestURL)
//       const response = await fetch(requestURL)
//       if(response.ok){
//         const responseText = await response.text()

//         console.log(JSON.parse(responseText).result);
//       }
//     })
//   })
//   return (
//     <div>
//       <input onInput={(ev) =>{setA(ev.currentTarget.value)}}></input><br></br>
//       <input onInput={(ev) =>{setB(ev.currentTarget.value)}}></input><br></br>
//       <button>Submit</button>
//     </div>
    
//   )
// }









// export const OurWork = () => {

//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     runAsync(async () => {
      
//       const response = await fetch(`/get_pet?pet_name=${inputValue}`)
//       const responseText = await response.text();

//       if(response.ok){
//         const animal = JSON.parse(responseText);
//         if(inputValue === animal['name']){  
//           alert('We have a match!')
//         }
//         console.log('Its ok!')
//         // const responseText = await response.text();
//         // const animal = JSON.parse(responseText);
//         console.log("My name is: " + animal['name'])
      
//       }
//       else{
//         console.log('response not ok :(')
//     }

//   })}, [inputValue])
  

//   return (
//     <div>
//       <div className={styles.ourWork}>Our Work</div>
//       <input onInput={(ev)=>{
//         setInputValue(ev.currentTarget.value)}}></input>
//     </div>
    
//   )
// }