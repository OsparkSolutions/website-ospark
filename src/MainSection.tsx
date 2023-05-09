import { mergeStyles } from '@fluentui/merge-styles';
import * as styles from './styles';
import { Shell, useSpark } from 'spark_app_v2';
import { useRef, useState, useEffect } from 'react';

export const MainSection = () => {
    const titleRef = useRef<HTMLDivElement>(null)
    const parentRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const [myShells, setShells] = useState<Shell[]>([
        // [1, 0xff7700, 1, 2],
        // [1, 0xff7700, 1, 2]
        [0.69, 0xff7700, 1, 2],
        [1.5, 0xff7700, 1, 2]]
    )
    
    const { Spark, sparkPosition } = useSpark({parentElementRef: parentRef, defaults: {
        numberOfLines: 500,
        pulseRate: 20,
        rotation: 2,
        scale: 10,
        translateX: -446,
        translateXPx: true,
        translateY: 48.5
    }, shells: myShells})

    useEffect(()=>{
        if(parentRef.current && titleRef.current){
            const titleRect = titleRef.current?.getBoundingClientRect()
            const boundingRect = parentRef.current.getBoundingClientRect()
           
            // mousePosition.current = {x: titleRect.left - boundingRect.left, y: titleRect.top-boundingRect.top-15}
            // sparkPosition.current = {x: (boundingRect.width/2)-448, y: (boundingRect.height/2)-15}

        }

    },[])
    
    const handleMouseLeave = (event:any) => {
        if(sparkPosition.current){
            sparkPosition.current = undefined
        }
    }

    const handleMouseMove = (event: any) =>{
        if(parentRef.current){
            const boundingRect = parentRef.current.getBoundingClientRect();
            const rect = event.currentTarget.getBoundingClientRect();
            console.log('im triggered')
            sparkPosition.current = {x: rect.left - (boundingRect.width/2) -80, y: (boundingRect.height/2)-rect.top+25}
            // console.log(rect)
        }
        
    }

    return (
        <div onMouseLeave={handleMouseLeave} id='main div' ref={parentRef} className={mergeStyles(styles.widthConstrained, {
        })}>
            <Spark />

            <div className={mergeStyles(
                styles.innerShadow,
                {
                    display: "flex",
                    height: "100%",
                    margin: "5rem 0",
                    padding: "5rem 0",
                    //border:"1px solid #ccc",
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    //blurs nav bar

                }
            )}>
                <div className={mergeStyles("animate__animated animate__flipInX", {
                    boxSizing: "border-box",
                    flexGrow: 1,
                    flexBasis: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                })}>
                    <div ref={titleRef} className={mergeStyles({ textAlign: "right" })}>
                        <a href='#' className={mergeStyles(styles.logo, {
                            textShadow: "0px 0px 50px white, 0px 0px 50px white, 0px 0px 50px white, 0px 0px 50px white",
                            //backdropFilter: 'blur(2px)',
                            fontSize: 75,
                            alignSelf: "center",
                        })}>Orange<span>Spark</span></a>
                    </div>
                    <ul className={mergeStyles(styles.fieldwork, {
                        listStyle: "none",
                        fontSize: "40px",
                        "li": {
                            padding: "32px",
                        }
                    })} >
                        <li onMouseMove={handleMouseMove} className={styles.listItem}><a>What We Do</a></li>
                        <li onMouseMove={handleMouseMove} className={mergeStyles({
                            marginLeft: "64px"
                        }, styles.listItem)}><a>What We've Done</a></li>
                        <li onMouseMove={handleMouseMove} className={styles.listItem}><a>Get in Touch!</a></li>
                    </ul>
                </div>
            </div>
            {/* <div className={styles.mainSection}>
                <p className={styles.mainParagraph}>Orange Spark Solutions, LLC is a <span className={styles.orangeText}>technology solutions</span> provider. We work with <span className={styles.blueText}>Startups, Small</span> & <span className={styles.blueText}>Mid-sized</span> businesses on <span className={styles.orangeText}>specialized projects</span> or as a <span className={styles.orangeText}>full-service technology partner</span>. We work closely with you to provide <span className={styles.blueText}>efficient, scalable, right-sized</span> technology solutions at <span className={styles.orangeText}>reasonable costs</span>.</p>
                <p className={styles.slogan}><i>Got tech problems? We have the solutions.</i></p>
            </div> */}
        </div>
    )
}