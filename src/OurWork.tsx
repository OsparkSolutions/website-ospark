
import React, { useEffect, useState } from 'react';
import { runAsync } from './helper';
import * as styles from './styles';


export const OurWork = () => {

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    runAsync(async () => {
      
      const response = await fetch(`/get_pet?pet_name=${inputValue}`)
      const responseText = await response.text();
      const animal = JSON.parse(responseText);

      if(inputValue === animal['name']){  
        alert('We have a match!')
      }

      if(response.ok){
        console.log('Its ok!')
        // const responseText = await response.text();
        // const animal = JSON.parse(responseText);
        console.log("My name is: " + animal['name'])
      
      }
      else{
        console.log('response not ok :(')
    }

  })}, [inputValue])
  

  return (
    <div>
      <div className={styles.ourWork}>Our Work</div>
      <input onInput={(ev)=>{
        setInputValue(ev.currentTarget.value)}}></input>
    </div>
    
  )
}