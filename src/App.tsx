import React from 'react';
import { NavBar } from './NavBar';
import { MainSection} from './MainSection';
import { OurServices } from './OurServices';
import { OurWork } from './OurWork';
import { ContactUs } from './ContactUs';
//import { useWindowSize } from 'toolkit/react/layoutHooks';
import { useEffect, useRef, useState } from 'react';

type DeviceSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
const calcDeviceSize = () =>{
  
}

export const useWindowSize = () => {
    const body = document.getElementsByTagName('body')[0];
    let [width, setWidth] = useState<number>(body.clientWidth);
    let [height, setHeight] = useState<number>(body.clientHeight);
    let [deviceSize, setDeviceSize] = useState<DeviceSize>();
    const clockRef = useRef<any>();
    useEffect(() => {
        
        body.onresize = () => {

            const w = body.clientWidth;
            const h = body.clientHeight;

            //creates variable to capture device size of each screen resize 
            let deviceSize: DeviceSize;
            clearTimeout(clockRef.current)
            clockRef.current = setTimeout(() => {
              setWidth(w);
              setHeight(h);
                if (w < 600) {
                    console.log('Extra small device: ' + w + ' x ' + h)
                    deviceSize = 'xSmall';
                    setDeviceSize('xSmall');
                }
                else if (w >= 600 && w < 768) {
                    console.log('Small device: ' + w + ' x ' + h)
                    deviceSize = 'small';
                    setDeviceSize('small');
                }
                else if (w >= 768 && w < 992) {
                    console.log('Medium device: ' + w + ' x ' + h)
                    deviceSize = 'medium';
                    setDeviceSize('medium');
                }
                else if (w >= 992 && w < 1200) {
                    console.log('Large device: ' + w + ' x ' + h)
                    deviceSize = 'large';
                    setDeviceSize('large');
                }
                else if (w <= 1200) {
                    console.log('Extra large device: ' + w + ' x ' + h)
                    deviceSize = 'xLarge';
                    setDeviceSize('xLarge');
                }
            }, 3000)


        }
    }, []);



    return ({
        width,
        height,
        deviceSize
    })
}

function App() { 
   const windowSize = useWindowSize() ||{};
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