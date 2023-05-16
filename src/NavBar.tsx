import React from 'react';
import * as styles from './styles'
import { ContactForm } from './ContactForm';
import { ContactFormProps, NavBarProps } from './App';

export const NavBar = (props: ContactFormProps & NavBarProps) =>{
    return(
      <header className = {props.navOpen ? styles.header : styles.headerClosed}>
        <div className = {styles.navBarContainer}>
          <a href='#'className = {styles.logo}>Orange<span>Spark</span></a>
          <div className = {styles.navBarButtons}>
          {props.item1Open && <a href='#' onClick={() => props.setIsOpen(true)} style={{display: props.item1Open ? 'inline' : 'none'}}>
              <p>Test</p>
            </a>}
            <a href='#' onClick={() => props.setIsOpen(true)} style={{display: props.item1Open ? 'inline' : 'none'}}>
              <p>What We Do</p>
            </a>
            <a href="#" style={{display: props.item2Open ? 'inline' : 'none'}}>
              <p>What We've Done</p>
            </a>
            <a href="#" style={{display: props.item3Open ? 'inline' : 'none'}} className={styles.navBarButton}>
              <p>Get In Touch</p>
            </a>
          </div>
        </div>
      </header>
          )
}