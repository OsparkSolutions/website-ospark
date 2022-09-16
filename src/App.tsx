import React from 'react';
import { NavBar } from './NavBar';
import { MainSection } from './MainSection';
import { OurServices } from './OurServices';
import { OurWork } from './OurWork';
import { ContactUs } from './ContactUs';
import { ContactForm } from './ContactForm'
//import { useWindowSize } from 'toolkit/react/layoutHooks';
import { useEffect, useRef, useState } from 'react';




//type DeviceSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
export enum DeviceSize {
    xSmall = 0,
    small = 1,
    medium = 2,
    large = 3,
    xLarge = 4,
}


//takes the width and returns he device size as text
const calcDeviceSize = (w: number) => {
    if (w < 600) {
        return DeviceSize.xSmall;
    }
    else if (w >= 600 && w < 768) {
        return DeviceSize.small;
    }
    else if (w >= 768 && w < 992) {
        return DeviceSize.medium;
    }
    else if (w >= 992 && w < 1200) {
        return DeviceSize.large;
    }
    else {
        return DeviceSize.xLarge;
    }
}

export const useWindowSize = () => {
    const body = document.getElementsByTagName('body')[0];
    let [width, setWidth] = useState<number>(body.clientWidth);
    let [height, setHeight] = useState<number>(body.clientHeight);
    let [deviceSize, setDeviceSize] = useState<DeviceSize>(calcDeviceSize(body.clientWidth));
    const clockRef = useRef<any>();
    useEffect(() => {
        let eventListener = () => {
            
            const w = body.clientWidth;
            const h = body.clientHeight;

            //creates variable to capture device size of each screen resize 
            clearTimeout(clockRef.current)
            clockRef.current = setTimeout(() => {
                setWidth(w);
                setHeight(h);
                const deviceSize = calcDeviceSize(w);
                setDeviceSize(deviceSize);
            }, 300)
        }

        window.addEventListener('resize', eventListener)

        const cleanup = () => {
            window.removeEventListener('resize', eventListener)
            } 
        return cleanup;
        
    }, []);
    return ({
        width,
        height,
        deviceSize
    })
}

export interface ContactFormProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
function App() {

    const [isOpen, setIsOpen] = useState(false);


    const windowSize = useWindowSize();
    useEffect(() => {
        console.log(`${windowSize.width} x ${windowSize.height}, device size: ${windowSize.deviceSize}`)

        return () =>{
            console.log('i am cleaning up!' + windowSize.width);

        }

    }, [windowSize.width, windowSize.height, windowSize.deviceSize])



    
    return (
        <div>
            { windowSize.deviceSize >= DeviceSize.medium &&  <NavBar isOpen={isOpen} setIsOpen={setIsOpen}></NavBar>}
            <MainSection />
            <OurServices />
            <OurWork />
            <ContactUs />
            <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
export default App; 