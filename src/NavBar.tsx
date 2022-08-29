import React from 'react';
import * as styles from './styles';

export const NavBar = () =>{
    return(
      <header className = {styles.header}>
        <div className = {styles.logo}>OrangeSpark</div>
        <div className = {styles.navBarButtons}>
          <a href="#">Services</a>
          <a href="#">Our Work</a>
          <a href="#">Contact Us</a>
        </div>
      </header>
          )
}