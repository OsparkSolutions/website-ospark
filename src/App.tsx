import React, { PropsWithChildren } from 'react';
import { NavBar } from './NavBar';
import { MainSection } from './MainSection';
import { OurServices } from './OurServices';
import { OurWork } from './OurWork';
import { ContactUs } from './ContactUs';
import { ContactForm } from './ContactForm'
//import { useWindowSize } from 'toolkit/react/layoutHooks';
import { useEffect, useRef, useState } from 'react';
import { Footer } from './Footer';
import './fonts.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useWindowSize } from './useWindowSize'
import { WorkGrid } from './WorkGrid';
import * as styles from './styles'
import { mergeStyles } from '@fluentui/merge-styles';
import 'animate.css'
//library.add(fas, faTwitter, faFacebook, faGithub, faLinkedin, faLocationDot, faPhone, faEnvelope)
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons()
export interface ContactFormProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface NavBarProps {
    navOpen: boolean;
    bullet1Visible: boolean;
    bullet2Visible: boolean;
    bullet3Visible: boolean;
    item1Open: boolean;
    item2Open:boolean;
    item3Open: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    setItem1Visible: React.Dispatch<React.SetStateAction<boolean>>
    setItem2Visible: React.Dispatch<React.SetStateAction<boolean>>
    setItem3Visible: React.Dispatch<React.SetStateAction<boolean>>

}

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [item1Open, setItem1Visible] = useState(false)
    const [item2Open, setItem2Visible] = useState(false)
    const [item3Open, setItem3Visible] = useState(false)
    const [bullet1Visible, setBullet1Visibile] = useState(false)
    const [bullet2Visible, setBullet2Visibile] = useState(false)
    const [bullet3Visible, setBullet3Visibile] = useState(false)
    const windowSize = useWindowSize();
    useEffect(() => {
        return () => {
        }
    }, [windowSize.width, windowSize.height, windowSize.deviceSize])

    //Scroll positioning
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const previousScrollPosition = useRef(lastKnownScrollPosition)
    document.addEventListener('scroll', (e) => {
        if (Math.abs(window.scrollY - previousScrollPosition.current) > 100) {
            previousScrollPosition.current = window.scrollY
            console.log('large gap')
        }
        previousScrollPosition.current = window.scrollY
    });


 
        
    return (
        <>
            <div className={mergeStyles({
                width: "100%",
                backgroundColor: "white"
            })}>
                {/* NavBar now inside MAINSECTION */}
                
                {/* <NavBar 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                navOpen={navOpen} 
                setNavOpen={setNavOpen} 
                bullet1Visible={bullet1Visible} 
                bullet2Visible={bullet2Visible} 
                bullet3Visible={bullet3Visible}
                setItem1Visible={setItem1Visible}
                setItem2Visible={setItem2Visible}
                setItem3Visible={setItem3Visible}
                item1Open={item1Open}
                item2Open={item2Open}
                item3Open={item3Open}
                /> */}

                
                <MainSection 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                navOpen={navOpen} 
                setNavOpen={setNavOpen} 
                bullet1Visible={bullet1Visible} 
                bullet2Visible={bullet2Visible} 
                bullet3Visible={bullet3Visible}
                setItem1Visible={setItem1Visible}
                setItem2Visible={setItem2Visible}
                setItem3Visible={setItem3Visible}
                item1Open={item1Open}
                item2Open={item2Open}
                item3Open={item3Open}/>
            </div>
            <div className={mergeStyles(styles.fieldwork, {
                position: "relative",
                width: "100%",
                height: "7rem",
                backgroundColor: "#0D47A1",
                backgroundImage: "linear-gradient(45deg, #2A5AA0, #0D47A1 50%, #0D47A1 75%, #2A5AA0);",
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                color: "white",
                fontSize: "3rem",
                alignItems: "center"
            })}>You bring the ideas. We've got the Solutions.</div>
            <div
                className={
                    mergeStyles(
                        styles.widthConstrained,
                        {
                            margin: "3rem auto",
                            marginTop: "5rem",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        })
                }>{[0, 0, 0, 0, 0].map(() => {
                    return <div
                        className={mergeStyles(
                            styles.boxedShadow,
                            {
                                height: "7rem",
                                width: "17.25%",
                            })}>
                    </div>
                })}</div>
            <SiteSection title='Our Services'>
                <OurServices />
            </SiteSection>
            <div className={styles.bodyContainer}>
                <OurWork />
                <WorkGrid />
                <ContactForm 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
                navOpen={navOpen} 
                setNavOpen={setNavOpen} 
                bullet1Visible={bullet1Visible} 
                bullet2Visible={bullet2Visible} 
                bullet3Visible={bullet3Visible}
                setItem1Visible={setItem1Visible}
                setItem2Visible={setItem2Visible}
                setItem3Visible={setItem3Visible}
                item1Open={item1Open}
                item2Open={item2Open}
                item3Open={item3Open}/>
            </div>
            <Footer />
        </>
    );
}

const SiteSection = (props: PropsWithChildren<{ title: string }>) => {
    const { title } = props;
    return <div >
        <h1 className={mergeStyles(styles.sectionHeader, {
            backgroundColor: "ghostwhite",
            padding: "4rem 0", top: 0, left: 0, height: "100%", width: "100%"
        })}>
            <span className={styles.orange}>{title[0]}</span>{title.substring(1)}</h1>
        <div className={styles.bodyContainer} >
            {props.children}
        </div>
    </div>
}
export default App; 