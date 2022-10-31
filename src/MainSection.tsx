import React, { useEffect, useRef, useState } from 'react';
import * as styles from './styles';
import { DeviceSize, useWindowSize } from './useWindowSize';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import InputSlider from './InputSlider';


// import './resources/Three'
//colors, pulse rate, #of shells
const useSpark = (mainRef: React.RefObject<HTMLDivElement>, rValue: number, newParameters: Shell[], sliderValueX: number, rotation: number, pulseRate: number) => {

    const windowSize = useWindowSize();
    useEffect(() => {
        // if (!THREE.Supports.webgl) {
        //     document.getElementById("oldie").style.display = "block";
        // }

        let SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight,

            r = rValue,

            mouseX = 0, mouseY = 0,

            windowHalfX = window.innerWidth / 2,
            windowHalfY = window.innerHeight / 2,

            camera: any, scene: any, renderer: any,

            stats;

        init();
        const interval = setInterval(loop, 3000 / 60);

        function init() {

            var container;

            container = mainRef.current
            //mainRef.current?.appendChild(container);


            // camera = new THREE.Camera(80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000);
            camera = new THREE.Camera(80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000);

            camera.position.z = 1000;

            scene = new THREE.Scene();

            //This array is the layers of the sphere, delete a subArray to remove a layer
            var i, line: any, vector1, vector2, material, p,
                // parameters = [[0.25, 0xff7700, 1, 2], [0.5, 0xff9900, 1, 1], [0.75, 0xffaa00, 0.75, 1], [1, 0xffaa00, 0.5, 1], [1.25, 0x000833, 0.8, 1],
                // [3.0, 0xaaaaaa, 0.75, 2], [3.5, 0xffffff, 0.5, 1], [4.5, 0xffffff, 0.25, 1], [5.5, 0xffffff, 0.125, 1]],

                // parameters = [[0.25, 0xff7700, 1, 2], [0.5, 0xff9900, 1, 1], [0.75, 0xffaa00, 0.75, 1], [1, 0xffaa00, 0.5, 1], [1.25, 0x000833, 0.8, 1],
                // [3.0, 0xaaaaaa, 0.75, 2], [3.5, 0xffffff, 0.5, 1], [4.5, 0xffffff, 0.25, 1], [5.5, 0xffffff, 0.125, 1]],
                parameters = newParameters,
                geometry = new THREE.Geometry();


            for (i = 0; i < 1500; ++i) {

                vector1 = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
                vector1.normalize();
                vector1.multiplyScalar(r);

                vector2 = vector1.clone();
                vector2.multiplyScalar(Math.random() * 0.09 + 1);

                geometry.vertices.push(new THREE.Vertex(vector1));
                geometry.vertices.push(new THREE.Vertex(vector2));

            }

            for (i = 0; i < parameters.length; ++i) {
                p = parameters[i];

                material = new THREE.LineBasicMaterial({ color: p[1], opacity: p[2], linewidth: p[3] });
                line = new THREE.Line(geometry, material, THREE.LinePieces);
                line.scale.x = line.scale.y = line.scale.z = p[0];
                line.originalScale = p[0];
                line.rotation.y = Math.random() * Math.PI;


                line.updateMatrix();

                // line.position.x = 400
                // line.position.y = -400

                scene.addObject(line);


            }

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
            if (container)
                container.innerHTML = ''
            container?.appendChild(renderer.domElement);

            /*
            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            container.appendChild(stats.domElement);
            */

            document.addEventListener('mousemove', onDocumentMouseMove, false);
            document.addEventListener('touchstart', onDocumentTouchStart, false);
            document.addEventListener('touchmove', onDocumentTouchMove, { passive: false });

        }

        function onDocumentMouseMove(event: any) {

            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;

        }

        function onDocumentTouchStart(event: any) {

            if (event.touches.length > 1) {

                event.preventDefault();

                mouseX = event.touches[0].pageX - windowHalfX;
                mouseY = event.touches[0].pageY - windowHalfY;
            }

        }

        function onDocumentTouchMove(event: any) {

            if (event.touches.length == 1) {

                event.preventDefault();

                mouseX = event.touches[0].pageX - windowHalfX;
                mouseY = event.touches[0].pageY - windowHalfY;
            }

        }
        // camera.position.x = 1000;
        // camera.position.y = 1000;
        //

        function loop() {

            //  camera.position.x += ( mouseX - camera.position.x ) * .05;
            //  camera.position.y += (- mouseY + 200 - camera.position.y) * .05;
            camera.updateMatrix();

            renderer.render(scene, camera);

            var time = new Date().getTime() * 0.0001;

            for (var i = 0; i < scene.objects.length; i++) {
                //Rotation controller
                scene.objects[i].rotation.y = time * (i < 4 ? i + 1 : - (i + 1)) * rotation;

                if (i < 5)
                    scene.objects[i].scale.x =
                        scene.objects[i].scale.y =
                        scene.objects[i].scale.z =
                        (scene.objects[i].originalScale * (i / 5 + 1) * (1 + 0.5 * Math.sin(7 * time * pulseRate)));

            }

            //stats.update();

        }

        const cleanUp = () => {
            clearInterval(interval);
        }
        return cleanUp;
    }, [rValue, windowSize.width, windowSize.height, newParameters, mainRef, sliderValueX, rotation, pulseRate])
}

type Shell = [
    number,
    number,
    number,
    number,
]

const initialArray: Shell = [0.25, 0xff7700, 1, 2];
export const MainSection = () => {


    //BUTTON TO ADD DEFAULT SHELL
    const [rValue, setRValue] = useState<string>('1000');
    const [shells, setShells] = useState<Shell[]>([[...initialArray]]);
    const [sliderValueX, setSliderValueX] = useState<number | number[]>(50);
    const [rotation, setRotation] = useState<number>(1);
    const [pulseRate, setPulseRate] = useState<number>(1);
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const addDefaultShell = () => {
        setShells((prevParameters) => [...prevParameters, [...initialArray]]);
        console.log(shells.length)
    }
    // const addCustomShell = (ev: any) => {
    //     setShells((prevParameters) => [...prevParameters, [aValue as number, Number(color), Number(bValue), Number(cValue)]]);
    //     ev.preventDefault();
    // }
    const handleSliderChangeX: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined = (ev, value, activeThumb) => {
        setSliderValueX(value as number * 10)
    }
    // const handleAValueChange: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined = (ev, value) => {
    //     setAValue(value as number)
    //     console.log(shells)
    // }

    const mainRef = useRef<HTMLDivElement>(null);
    useSpark(mainRef, Number(rValue), shells, sliderValueX as number, rotation as number, pulseRate as number)
    return (
        <div className={styles.mainBackground}>
            {/* Parameter Box */}
            {isOpen && <div className={styles.parameterContainer}>
                <label htmlFor='rVal'> Universal Radius Scale
                    <input style={{ width: '60px' }} value={rValue} id='rVal' onInput={(ev) => {
                        setRValue(ev.currentTarget.value)
                    }}></input>
                </label><br></br>
                <button onClick={addDefaultShell}>Add shell</button><br />
                <div className={styles.sliderContainer}>
                    {shells.map((shell, index) => {
                        return (
                            <div className={styles.subSliderContainer}>
                                <h2>{'Shell: ' + (index + 1)}</h2>

                                <p>Scale:</p>
                                <Slider className={styles.slider} onChange={(ev, value) => {
                                    shell[0] = value as number / 100;
                                    setShells([...shells])
                                }} min={0} max={100} value={shell[0] * 100} />
                                <input value={shell[0] * 100} onInput={(ev) => {
                                    shell[0] = Number(ev.currentTarget.value) / 100
                                    setShells([...shells])
                                }} style={{ width: '25px' }}></input>

                                <p>Opacity:</p>
                                <Slider className={styles.slider} onChange={(ev, value) => {
                                    shell[2] = value as number / 100;
                                    setShells([...shells])
                                }} min={0} max={100} value={shell[2] * 100} />
                                <input value={shell[2] * 100} onInput={(ev) => {
                                    shell[2] = Number(ev.currentTarget.value) / 100
                                    setShells([...shells])
                                }} style={{ width: '25px' }}></input>

                                <p>Rotation Speed</p>
                                <Slider className={styles.slider} value={rotation} onChange={(ev, value) => {
                                    setRotation(value as number)
                                }} min={0} max={20} />
                                <input type='number' value={rotation} onInput={(ev) => {
                                    setRotation(Number(ev.currentTarget.value))
                                }} style={{ width: '40px' }}></input>

                                <p>Pulse Rate:</p>
                                <Slider min={0} max={100} className={styles.slider} onChange={(ev, value) => {
                                    setPulseRate(value as number * .05)
                                }} />
                                <input type='number' value={pulseRate} onInput={(ev) => {
                                    setPulseRate(Number(ev.currentTarget.value))
                                }} style={{ width: '40px' }}></input>

                                <p>Color: </p>
                                <input type='color' value={'#' + shell[1].toString(16)} onChange={(ev) => {
                                    let hexValue = parseInt(ev.currentTarget.value.substring(1), 16)
                                    shell[1] = Number(hexValue)
                                    setShells([...shells])
                                }}></input>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {/* End Parameter Box */}
            <button onClick={() => {
                setIsOpen(!isOpen)
                console.log(isOpen)
            }}>Settings</button>
            <div className={styles.dynamicSpark} ref={mainRef}></div>

            {/* Start of main section */}
            <div className={styles.mainSection}>
                <p className={styles.mainParagraph}> Orange Spark Solutions, LLC is a <span className={styles.orangeText}>technology solutions</span> provider. We work with <span className={styles.blueText}>Startups, Small</span> & <span className={styles.blueText}>Mid-sized</span> businesses on <span className={styles.orangeText}>specialized projects</span> or as a <span className={styles.orangeText}>full-service technology partner</span>. We work closely with you to provide <span className={styles.blueText}>efficient, scalable, right-sized</span> technology solutions at <span className={styles.orangeText}>reasonable costs</span>.</p>
                <p className={styles.slogan}><i>Got tech problems? We have the solutions.</i></p>
            </div>
        </div>
    )
}