import React from 'react';
import * as styles from './styles'
import { ContactForm } from './ContactForm';

export const NavBar = () =>{
    return(
      <header className = {styles.header}>
        <div className = {styles.logo}>OrangeSpark</div>
        <div className = {styles.navBarButtons}>
          <a href="#">Contact Us</a>
          <a href="#">Our Solution</a>
          <a href="#">Past Projects</a>
          <a href="#">Meet Us</a>
        </div>
      </header>
          )
}