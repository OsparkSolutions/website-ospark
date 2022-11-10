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



// import './resources/Three' 
//colors, pulse rate, #of shells
const useSpark = (mainRef: React.RefObject<HTMLDivElement>, rValue: number, shells: Shell[], sliderValueX: number, rotation: number, pulseRate: number, translateX: number, translateY: number, numberOfLines: number, backgroundColor: number, alpha: number) => {

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

            camera: any, scene: THREE.Scene, renderer: THREE.WebGLRenderer,

            stats;

        
        const lines: THREE.LineSegments[] = [];
        const scales: number[] = [];

        init();
        const interval = setInterval(loop, 3000 / 60);

        function init() {

            var container;

            container = mainRef.current
            //mainRef.current?.appendChild(container);


            // camera = new THREE.Camera(80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000);
            camera = new THREE.PerspectiveCamera(80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000);

            camera.position.z = 1000;

            scene = new THREE.Scene();

            //This array is the layers of the sphere, delete a subArray to remove a layer
            var i, line: any, vector1, vector2, material, p,
                // parameters = [[0.25, 0xff7700, 1, 2], [0.5, 0xff9900, 1, 1], [0.75, 0xffaa00, 0.75, 1], [1, 0xffaa00, 0.5, 1], [1.25, 0x000833, 0.8, 1],
                // [3.0, 0xaaaaaa, 0.75, 2], [3.5, 0xffffff, 0.5, 1], [4.5, 0xffffff, 0.25, 1], [5.5, 0xffffff, 0.125, 1]],

                // parameters = [[0.25, 0xff7700, 1, 2], [0.5, 0xff9900, 1, 1], [0.75, 0xffaa00, 0.75, 1], [1, 0xffaa00, 0.5, 1], [1.25, 0x000833, 0.8, 1],
                // [3.0, 0xaaaaaa, 0.75, 2], [3.5, 0xffffff, 0.5, 1], [4.5, 0xffffff, 0.25, 1], [5.5, 0xffffff, 0.125, 1]],
                parameters = shells,
                //geometry = new THREE.Geometry();
                geometry = new THREE.BufferGeometry()


            const points: THREE.Vector3[] = []
            for (i = 0; i < numberOfLines; ++i) {

                vector1 = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
                vector1.normalize();
                vector1.multiplyScalar(r);

                vector2 = vector1.clone();
                vector2.multiplyScalar(Math.random() * 0.09 + 1);

                //LJ: geometry.vertices.push(new THREE.Vertex(vector1));
                //LJ: geometry.vertices.push(new THREE.Vertex(vector2));
                points.push(vector1);
                points.push(vector2); points.push()

            }
            geometry.setFromPoints(points);


            for (i = 0; i < parameters.length; ++i) {
                p = parameters[i];

                material = new THREE.LineBasicMaterial({ color: p[1], opacity: p[2], linewidth: 30/* p[3]*/ });
                //LJ:line = new THREE.Line(geometry, material, THREE.LinePieces);
                //line = new THREE.LineSegments(geometry, material);
                lines.push(
                    line = new THREE.LineSegments(geometry, material /*THREE.LinePieces*/));
                line.scale.x = line.scale.y = line.scale.z = p[0];
                //LJ: line.originalScale = p[0];
                scales.push(p[0]);
                line.rotation.y = Math.random() * Math.PI;


                line.updateMatrix();

                // line.position.x = 400
                // line.position.y = -400



                //LJ:scene.addObject(line);
                scene.add(line);

            }

            renderer = new THREE.WebGLRenderer({
                //LJ: Added
                antialias: true
            });

            renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
            if (container)
                container.innerHTML = ''
            container?.appendChild(renderer.domElement);


            let xTranslateMod = (translateX - 50)/100 * SCREEN_WIDTH
            let yTranslateMod = (translateY - 50)/100 * SCREEN_HEIGHT

            //Translat  es rendered object(s)
            renderer.setViewport(xTranslateMod, yTranslateMod, SCREEN_WIDTH, SCREEN_HEIGHT)
            renderer.setClearColor(backgroundColor, alpha)
            

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

            // for (var i = 0; i < scene.objects.length; i++) {
            //     //Rotation controller
            //     scene.objects[i].rotation.y = time * (i < 4 ? i + 1 : - (i + 1)) * rotation;

            //     if (i < 5)
            //         scene.objects[i].scale.x =
            //             scene.objects[i].scale.y =
            //             scene.objects[i].scale.z =
            //             (scene.objects[i].originalScale * (i / 5 + 1) * (1 + 0.5 * Math.sin(7 * time * pulseRate)));

            // }
            for (var i = 0; i < lines.length; i++) {
                //Rotation controller
                lines[i].rotation.y = time * (i < 4 ? i + 1 : - (i + 1)) * rotation;
                if (i < shells.length) {
                    lines[i].scale.x =
                        lines[i].scale.y =
                        lines[i].scale.z =
                        (scales[i] * (i / 5 + 1) * (1 + 0.5 * Math.sin(7 * time * pulseRate/20)));

                }
            }

            //stats.update();

        }

        const cleanUp = () => {
            clearInterval(interval);
        }
        return cleanUp;
    }, [rValue, windowSize.width, windowSize.height, shells, mainRef, sliderValueX, rotation, pulseRate, translateX, translateY, numberOfLines, backgroundColor, alpha])
}

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
    const [rValue, setRValue] = useState<string>('1000');
    const [shells, setShells] = useState<Shell[]>([[...newBaseShell]]);
    const [sliderValueX, setSliderValueX] = useState<number | number[]>(50);
    const [rotation, setRotation] = useState<number>(1);
    const [pulseRate, setPulseRate] = useState<number>(1);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [translateX, setTranslateX] = useState<number>(50)
    const [translateY, setTranslateY] = useState<number>(50)
    const [numberOfLines, setNumberOfLines] = useState<number>(1500)
    const [backgroundColor, setBackgroundColor] = useState<number>(0xffffff)
    const [alpha, setAlpha] = useState<number>(0)


    const addDefaultShell = () => {
        setShells((existingShells) => [...existingShells, [...newBaseShell]]);
        console.log(shells.length)
    }
    const removeShell = (index: number) =>{
        shells.splice(index, index+1);
        setShells((existingShells) =>[...existingShells]);
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
    useSpark(mainRef, Number(rValue), shells, sliderValueX as number, rotation as number, pulseRate as number, translateX as number, translateY as number, numberOfLines as number, backgroundColor as number, alpha as number)
    
    return (
        <div ref={parentRef} className={styles.mainBackground}>
            {/* <Spark parentElementRef={parentRef} scale={1000} pulseRate={10}/> */}
            {/* Start of main section */}
            <div className={styles.mainSection}>
                <p className={styles.mainParagraph}> Orange Spark Solutions, LLC is a <span className={styles.orangeText}>technology solutions</span> provider. We work with <span className={styles.blueText}>Startups, Small</span> & <span className={styles.blueText}>Mid-sized</span> businesses on <span className={styles.orangeText}>specialized projects</span> or as a <span className={styles.orangeText}>full-service technology partner</span>. We work closely with you to provide <span className={styles.blueText}>efficient, scalable, right-sized</span> technology solutions at <span className={styles.orangeText}>reasonable costs</span>.</p>
                <p className={styles.slogan}><i>Got tech problems? We have the solutions.</i></p>
            </div>
        </div>
    )
}