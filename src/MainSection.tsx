import React from 'react';
import * as styles from './styles';

export const MainSection = () =>{
    return(
        <div className = {styles.mainBackground}>
            <div className = {styles.mainSection}>
                <p className={styles.mainParagraph}> Orange Spark Solutions, LLC is a technology solutions provider. We work with Startups, Small & Mid-sized businesses on specialized projects or as a full-service technologypartner. We work closely with you to provide effiecient, scalable, right-sized technology solutions at reasonable costs.</p>
                <p className={styles.slogan}>Got tech problems. We have the solutions.</p>
            </div>
        </div>
    )
}