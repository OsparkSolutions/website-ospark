import React from 'react';
import * as styles from './styles'
import { ContactForm } from './ContactForm';
import { ContactFormProps } from './App';


export const NavBar = (props: ContactFormProps) =>{
    return(
      <header className = {styles.header}>
        <div className = {styles.navBarContainer}>
          <div className = {styles.logo}>OrangeSpark</div>
          <div className = {styles.navBarButtons}>
            <a href='#' onClick={() => props.setIsOpen(true)}>Contact Us</a>
            <a href="#">Our Solution</a>
            <a href="#">Past Projects</a>
            <a href="#">Meet Us</a>
          </div>
        </div>
      </header>
          )
}