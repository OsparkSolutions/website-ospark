import React from 'react';
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { DeviceSize, useWindowSize } from './useWindowSize'
import { WorkGrid } from './WorkGrid';
import * as styles from './styles'

library.add(fas, faTwitter, faFacebook, faGithub, faLinkedin, faLocationDot, faPhone, faEnvelope)

export interface ContactFormProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function App() {

    const [isOpen, setIsOpen] = useState(false);


    const windowSize = useWindowSize();
    useEffect(() => {
        console.log(`${windowSize.width} x ${windowSize.height}, device size: ${windowSize.deviceSize}`)

        return () => {
            //console.log('i am cleaning up!' + windowSize.width);
        }
    }, [windowSize.width, windowSize.height, windowSize.deviceSize])


    //Scroll positioning
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const previousScrollPosition = useRef(lastKnownScrollPosition)
    document.addEventListener('scroll', (e) => {
        if(Math.abs(window.scrollY - previousScrollPosition.current) > 100){
            previousScrollPosition.current = window.scrollY
            console.log('large gap')
        }
        previousScrollPosition.current = window.scrollY
    });



    return (
        <div className={styles.bodyContainer}>
            {windowSize.deviceSize >= DeviceSize.medium && <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>}
                <MainSection />
                <OurServices />
                <OurWork />
                <WorkGrid />
                <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
                <Footer />
            
        </div>
    );
}
export default App; 