import React from 'react';
import * as styles from './styles'
import { ContactForm } from './ContactForm';
import { ContactFormProps } from './App';


export const NavBar = (props: ContactFormProps) =>{
    return(
      <header className = {styles.header}>
        <div className = {styles.navBarContainer}>
          <a href='#'className = {styles.logo}>Orange<span>Spark</span></a>
          <div className = {styles.navBarButtons}>
            <a href='#' onClick={() => props.setIsOpen(true)}>
              <p>Contact Us</p>
            </a>
            <a href="#">
              <p>Our Services</p>
            </a>
            <a href="#">
              <p>Past Work</p>
            </a>
            <a href="#">
              <p>Meet Us</p>
            </a>
          </div>
        </div>
      </header>
          )
}