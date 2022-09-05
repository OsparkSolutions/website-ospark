import React from 'react';
import { NavBar } from './NavBar';
import { MainSection} from './MainSection';
import { OurServices } from './OurServices';
import { OurWork } from './OurWork';
import { ContactUs } from './ContactUs';
//import { useWindowSize } from 'toolkit/react/layoutHooks';
import { useEffect, useRef, useState } from 'react';


type DeviceSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';

//takes the width and returns he device size as text
const calcDeviceSize = (w: number) =>{
    if (w < 600) {
        return 'xSmall';
    }
    else if (w >= 600 && w < 768) {
        return 'small';
    }
    else if (w >= 768 && w < 992) {
        return 'medium';
    }
    else if (w >= 992 && w < 1200) {
        return 'large';
    }
    else{
        return 'xLarge';
    }
}

export const useWindowSize = () => {
    const body = document.getElementsByTagName('body')[0];
    let [width, setWidth] = useState<number>(body.clientWidth);
    let [height, setHeight] = useState<number>(body.clientHeight);
    let [deviceSize, setDeviceSize] = useState<DeviceSize>(calcDeviceSize(body.clientWidth));
    const clockRef = useRef<any>();
    useEffect(() => {
        
        body.onresize = () => {

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
    }, []);
    return ({
        width,
        height,
        deviceSize
    })
}

function App() { 
   const windowSize = useWindowSize();
  useEffect(()=>{
    console.log(`${windowSize.width} x ${windowSize.height}, device size: ${windowSize.deviceSize}`)
  },[windowSize.width, windowSize.height, windowSize.deviceSize])
  
  return (
    <div>
     {windowSize.deviceSize === 'medium' && <NavBar></NavBar> }
      <MainSection />
      <OurServices />
      <OurWork /> 
      <ContactUs />
    </div> 
  );
}


export default App; 