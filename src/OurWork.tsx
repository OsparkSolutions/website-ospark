
import React, { useEffect, useRef, useState } from 'react';
import { runAsync } from './helper';
import * as styles from './styles';

export const OurWork = () => {
  const aRef = useRef<HTMLInputElement>(null)
  const bRef = useRef<HTMLInputElement>(null)
  

    return (
      <div>
        <input ref={aRef}></input><br></br>
        <input ref={bRef} ></input><br></br>
        <button onClick={()=>{
          const a = aRef.current?.value
          const b = bRef.current?.value
          runAsync(async () =>{
            const requestURL = `/add?a=${a}&b=${b}`
            console.log(requestURL)
            const response = await fetch(requestURL)
            if(response.ok){
              const responseText = await response.text()
              console.log(JSON.parse(responseText).result);
            }
          })
        }} >Add</button>
        <button onClick={()=>{
          const a = aRef.current?.value
          const b = bRef.current?.value
          runAsync(async () =>{
            const requestURL = `/subtract?a=${a}&b=${b}`
            console.log(requestURL)
            const response = await fetch(requestURL)
            if(response.ok){
              const responseText = await response.text()
              console.log(JSON.parse(responseText).result);
            }
          })
        }}>Subtract</button>
        <button onClick={()=>{
            const a = aRef.current?.value
                const b = bRef.current?.value
          runAsync(async () =>{
            const requestURL = `/multiply?a=${a}&b=${b}`
            console.log(requestURL)
            const response = await fetch(requestURL)
            if(response.ok){
              const responseText = await response.text()
              console.log(JSON.parse(responseText).result);
            }
          })
        }}>Multiply</button>
        <button onClick={()=>{
          const a = aRef.current?.value
          const b = bRef.current?.value
          runAsync(async () =>{
            const requestURL = `/divide?a=${a}&b=${b}`
            console.log(requestURL)
            const response = await fetch(requestURL)
            if(response.ok){
              const responseText = await response.text()
              console.log(JSON.parse(responseText).result);
            }
          })
        }}>Divide</button>
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