import React, { useEffect, useRef, useState } from 'react';
import { Spark } from 'spark_app_v2'
import * as styles from './styles';
import { DeviceSize, useWindowSize } from './useWindowSize';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import InputSlider from './InputSlider';
import * as  THREE from 'three'
import { renderIntoDocument } from 'react-dom/test-utils';
import { Color } from 'three';
import { alpha } from '@mui/material';
import { useHotkeys } from 'react-hotkeys-hook';


type Shell = [
    number,
    number,
    number,
    number,
]

const newBaseShell: Shell = [0.25, 0xff7700, 1, 2];
export const MainSection = () => {
const parentRef = useRef<HTMLDivElement>(null);


    //BUTTON TO ADD DEFAULT SHELL
    // const [rValue, setRValue] = useState<string>('1000');
    // const [shells, setShells] = useState<Shell[]>([[...newBaseShell]]);
    // const [sliderValueX, setSliderValueX] = useState<number | number[]>(50);
    // const [rotation, setRotation] = useState<number>(1);
    // const [pulseRate, setPulseRate] = useState<number>(1);
    // const [isOpen, setIsOpen] = useState<boolean>(false)
    // const [translateX, setTranslateX] = useState<number>(50)
    // const [translateY, setTranslateY] = useState<number>(50)
    // const [numberOfLines, setNumberOfLines] = useState<number>(1500)
    // const [backgroundColor, setBackgroundColor] = useState<number>(0xffffff)
    // const [alpha, setAlpha] = useState<number>(0)


    // useEffect(()=>{
    //     console.log(parentRef.current)
    //     if(parentRef.current !== null && parentRef.current !== undefined){
    //         parentRef.current.addEventListener('mousedown', drag_start, false)
    //         document.body.addEventListener('mousemove', drag_over, false)
    //         document.body.addEventListener('mouseup', drop, false);
    //     }
    // })
    // const drag_start = (event: any) => {
    //     console.log('mouse down')
    //     const style = window.getComputedStyle(event.target, null)
    // }
    // const drag_over = (event: any) => {
    //     event.preventDefault();
    //     return false;
    // }
    // const drop = (event: any) => {
    //     console.log('mouse up')
    //     console.log(windowSize.width)
    //     // var offset = event.dataTransfer.getData("text/plain").split(',');
    //     // var dm = document.getElementById('dragme');
    //     // dm!.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    //     // dm!.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    //     event.preventDefault();
    //     return false;
    //     console.log('i dropped that bitch')
    // }


    // const addDefaultShell = () => {
    //     setShells((existingShells) => [...existingShells, [...newBaseShell]]);
    //     console.log(shells.length)
    // }
    // const removeShell = (index: number) =>{
    //     shells.splice(index, index+1);
    //     setShells((existingShells) =>[...existingShells]);
    // }
 
    // const handleSliderChangeX: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined = (ev, value, activeThumb) => {
    //     setSliderValueX(value as number * 10)
    // }
 

    const mainRef = useRef<HTMLDivElement>(null);
    // useSpark(mainRef, Number(rValue), shells, sliderValueX as number, rotation as number, pulseRate as number, translateX as number, translateY as number, numberOfLines as number, backgroundColor as number, alpha as number)

    return (
        <div id='dragme' ref={parentRef} className={styles.mainBackground}>

            <Spark parentElementRef={parentRef} scale={1000} pulseRate={10} />

            {/* Start of main section */}
            <div className={styles.mainSection}>
                <p className={styles.mainParagraph}> Orange Spark Solutions, LLC is a <span className={styles.orangeText}>technology solutions</span> provider. We work with <span className={styles.blueText}>Startups, Small</span> & <span className={styles.blueText}>Mid-sized</span> businesses on <span className={styles.orangeText}>specialized projects</span> or as a <span className={styles.orangeText}>full-service technology partner</span>. We work closely with you to provide <span className={styles.blueText}>efficient, scalable, right-sized</span> technology solutions at <span className={styles.orangeText}>reasonable costs</span>.</p>
                <p className={styles.slogan}><i>Got tech problems? We have the solutions.</i></p>
            </div>
        </div>
    )
}