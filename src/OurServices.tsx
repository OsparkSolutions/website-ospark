import { mergeStyles } from '@fluentui/merge-styles';
import React, { PropsWithChildren } from 'react';
import { isPropertySignature } from 'typescript';
import { DeviceSize, useWindowSize } from './useWindowSize';
import * as styles from './styles';
import startup from './images/startup.svg'
import reporting from './images/reporting.svg'
import web from './images/web.svg'
import phone3 from './images/phone3.svg'
import ReactLogo from './images/logos/react.svg'
import typescript from './images/logos/typescript.svg'
import node from './images/logos/node.png'
import powerbi from './images/logos/powerbi.png'
import sql from './images/logos/sql.png'
import html from './images/logos/html.png'
import css from './images/logos/css.png'
import azure from './images/logos/azure.png'
import databricks from './images/logos/databricks.png'
import { ReactComponent as HeaderService } from './images/parts/header-service.svg'
import 'animate.css'
import { useInView } from 'react-intersection-observer';

const levert = 'data:image/jpeg;base64,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';
export const OurServices = () => {

    
    const { ref: myRef, inView: myElementIsVisible } = useInView({ threshold: 1, triggerOnce: true });

    return (
        <div>

            <MyComponent frontTitle='Mobile Web & App Development' mainImg={phone3} backTitle='Back Title' isImageLeft={true} boxes={boxes1}/>
            <MyComponent frontTitle='Website Design & Management' mainImg={startup} backTitle='Back Title' isImageLeft={false} boxes={boxes2}/>
            <MyComponent frontTitle='Reporting, BI & Data Warehousing' mainImg={reporting} backTitle='Back Title' isImageLeft={true} boxes={boxes3}/>


            <OurServicesComponent title='Mobile & Web App Development' uri={reporting} isImageRight={false}>
                We embrace the new app philosophy (HTML5, Javascript, Node JS, CSS) and build platform agnostic app logic. This allows us to build iOS, Android, web, and desktop apps with mostly a single code base. Basically, that just means we build apps quickly and at a lower cost. Let us know how we can help you with your app development needs.
            </OurServicesComponent>
            <OurServicesComponent title='Websites, Portals & UI/UX Design' uri={startup} isImageRight={true}>
                We embrace the new app philosophy (HTML5, Javascript, Node JS, CSS) and build platform agnostic app logic. This allows us to build iOS, Android, web, and desktop apps with mostly a single code base. Basically, that just means we build apps quickly and at a lower cost. Let us know how we can help you with your app development needs.
            </OurServicesComponent>
            <OurServicesComponent title='Reporting, BI & Data Warehousing' uri={web} isImageRight={false}>
                We embrace the new app philosophy (HTML5, Javascript, Node JS, CSS) and build platform agnostic app logic. This allows us to build iOS, Android, web, and desktop apps with mostly a single code base. Basically, that just means we build apps quickly and at a lower cost. Let us know how we can help you with your app development needs.
            </OurServicesComponent>
        </div>
    );
}

interface OurServicesComponent {
    title: string,
    uri: string,
    isImageRight?: boolean,
}
type BoxComponent = {
    name: string,
    color?: string,
    img?: string,
    size?: string,
}
type MyComponent = {
    frontTitle?: string,
    backTitle?: string,
    mainImg?: string,
    boxes?: BoxComponent[],
    isImageLeft?: boolean
}

const boxes1: BoxComponent[] = [{name: 'Typescript', img: typescript, size: '75%', color: 'rgb(0,122,204)'},{name: 'React', img: ReactLogo, color: 'rgb(97,218,251)'},{name: 'Node', img: node, size: '50%', color: 'rgb(83,158,67)'}]
const boxes2: BoxComponent[] = [{name: 'HTML', img: html, size: '70%'},{name: 'CSS', img: css, size: '50%'},{name: 'Azure', img: azure, size: '75%'}]
const boxes3: BoxComponent[] = [{name: 'Power BI', img: powerbi, size: '75%'},{name: 'Sql Server', img: sql, size: '60%'},{name: 'Databricks', img: databricks, size: '75%'}]

const MyComponent = (props: any) => {
    const { ref: myRef, inView: myElementIsVisible } = useInView({ threshold: 1, triggerOnce: true });

    return (
        <div className={mergeStyles({
            flexDirection: props.isImageLeft ? 'row' : 'row-reverse',
            display: "flex", ">*": {
                flexGrow: 1,
                flexBasis: "10px",
                
            }
        })}>
            <div className={mergeStyles(styles.cardFlip.flipCard, { position: "relative" })}>
                <div className={mergeStyles(styles.cardFlip.flipCardInner, {
                    height: "25rem"
                })}>
                    <div className={mergeStyles(styles.boxedShadow, {
                        //overflow: "auto"
                        display: "flex",
                        flexDirection: "column",
                        overflow: "auto",
                        height: "100%"
                    })}>

                        <div className={mergeStyles({
                            flexGrow: 1,
                            backgroundImage: `url(${props.mainImg})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        })} />
                        <h3 className={mergeStyles(styles.fieldwork, { margin: "1rem", textAlign: "right" })}>{props.frontTitle ? props.frontTitle : "Placeholder Title"}</h3>
                    </div>
                    <div className={mergeStyles(styles.cardFlip.flipCardBack, styles.boxedShadow, {
                        // minHeight: "25rem",
                        // overflow: "auto"
                    })}>
                        <h3 className={mergeStyles(styles.fieldwork, { margin: "1rem" })}>{props.backTitle ? props.backTitle : 'Placeholder Back Title'}</h3>
                    </div>
                </div>
            </div>


            <div ref={myRef} className={mergeStyles(
                {
                    boxSizing: "border-box",
                    padding: "2rem",
                    position: "relative",
                    display: "flex",
                    flexWrap: "wrap",
                    //justifyContent: "space-evenly",
                    alignItems: "flex-start"
                }
            )}>
                {props.boxes.map((box: any, i: any) => {
                    const duration = 0.333;
                    const animationDelay = `${2 + duration * i}s`
                    const animationDuration = `${duration}s !important`

                    return <div style={{ aspectRatio: 1 }}
                        className={mergeStyles(
                            styles.innerShadowSmall,
                            {
                                overflow: "hidden",
                                width: "8rem",
                                marginRight: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                ":hover": {
                                    cursor: "pointer",
                                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 5px 10px -2px inset, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px inset",
                                }
                            })}>
                        {myElementIsVisible && <><div className={mergeStyles(
                            "animate__animated",
                            "animate__slideInDown",
                            {
                                backgroundImage: `url(${box.img})`,
                                backgroundSize: box.size ? box.size : 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                flexGrow: 1,
                                width: "100%",
                                animationDelay: '.25s',
                                animationDuration,
                                ":hover": {
                                    //    filter: "drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)"
                                    //filter: "drop-shadow(0 0 0.25rem #ccc)"
                                }
                            })} />
                            <div className={mergeStyles(
                                "animate__animated",
                                "animate__slideInUp",
                                {
                                    color: "white",
                                    backgroundColor: box.color ? `${box.color}` : 'red',
                                    textAlign: "center",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    animationDelay: '.25s',
                                    animationDuration,
                                    
                                })
                            }>{box.name}</div></>}
                        {/* <ReactLogo height={"100%"} width={"100%"} /> */}
                    </div>
                })}
            </div>
        </div>
    )
}



const OurServicesComponent = (props: PropsWithChildren<OurServicesComponent>) => {
    const windowSize = useWindowSize();
    // let imageClass = windowSize.deviceSize <= DeviceSize.medium ? styles.largeScreenImageContainer : mergeStyles({float: props.isImageRight ? 'right' : 'left', width: '30%', display:'flex',alignItems: 'center', flexDirection:'column'});

    let imageClass = windowSize.deviceSize <= DeviceSize.medium ? styles.largeScreenImageContainer : mergeStyles({ width: '30%', display: 'flex', alignItems: 'center', flexDirection: 'column' });
    let textClass = windowSize.deviceSize <= DeviceSize.medium ? styles.mainSectionTitle : mergeStyles({ fontFamily: 'fieldwork, sans-serif', color: 'white' });
    let containerClass = windowSize.deviceSize <= DeviceSize.medium ? styles.smallScreenImageContainer : mergeStyles({ clear: 'both', marginBottom: '300px', display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '20px', marginRight: '20px' })
    return (
        <div className={containerClass}>
            {!props.isImageRight && <img className={imageClass} src={props.uri} />}
            <div className={styles.subTextContainer}>
                <h1 className={textClass}>{props.title}</h1>
                <p className={styles.servicesParagraph}>{props.children}</p>
            </div>
            {props.isImageRight && <img className={imageClass} src={props.uri} />}

        </div>
    )
}


/**
 * 
 * { mergeStyles({float: props.isImageRight ? 'right' : 'left'}) }
 * 
 * 
 * float: 'none'
 * width: '100%'
 */
