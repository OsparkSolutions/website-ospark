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