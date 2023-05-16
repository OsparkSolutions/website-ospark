import { mergeStyles } from '@fluentui/merge-styles';
import * as styles from './styles';
import { Shell, useSpark } from 'spark_app_v2';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavBarProps, ContactFormProps } from './App';

export const MainSection = (props: NavBarProps & ContactFormProps) => {
    const titleRef = useRef<HTMLDivElement>(null)
    const parentRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const { ref: listItem1Ref, inView: listItem1Visible } = useInView({ threshold: 1 });
    const { ref: listItem2Ref, inView: listItem2Visible } = useInView({ threshold: 1 });
    const { ref: listItem3Ref, inView: listItem3Visible } = useInView({ threshold: 1 });

    props.setNavOpen(!listItem1Visible)
    props.setItem1Visible(!listItem1Visible)
    props.setItem2Visible(!listItem2Visible)
    props.setItem3Visible(!listItem3Visible)

    // if(!listItem1Visible){
    //     const element = 
    //     console.log(element.top)
    // }

    const [myShells, setShells] = useState<Shell[]>([
        // [1, 0xff7700, 1, 2],
        // [1, 0xff7700, 1, 2]
        [0.69, 0xff7700, 1, 2],
        [1.5, 0xff7700, 1, 2]]
    )

    const { Spark, sparkPosition } = useSpark({
        parentElementRef: parentRef, defaults: {
            numberOfLines: 500,
            pulseRate: 20,
            rotation: 2,
            scale: 10,
            translateX: -446,
            translateXPx: true,
            translateY: 48.5
        }, shells: myShells
    })

    useEffect(() => {
        if (parentRef.current && titleRef.current) {
            const titleRect = titleRef.current?.getBoundingClientRect()
            const boundingRect = parentRef.current.getBoundingClientRect()

            // mousePosition.current = {x: titleRect.left - boundingRect.left, y: titleRect.top-boundingRect.top-15}
            // sparkPosition.current = {x: (boundingRect.width/2)-448, y: (boundingRect.height/2)-15}

        }

    }, [])

    const handleMouseLeave = (event: any) => {
        if (sparkPosition.current) {
            sparkPosition.current = undefined
        }
    }

    const handleMouseMove = (event: any) => {
        if (parentRef.current) {
            const boundingRect = parentRef.current.getBoundingClientRect();
            const rect = event.currentTarget.getBoundingClientRect();
            sparkPosition.current = { x: rect.left - (boundingRect.width / 2) - 110, y: (boundingRect.height / 2) + (boundingRect.top - rect.top) - 45 }
        }

    }

    return (
        <div>
            <header className={props.navOpen ? styles.header : styles.headerClosed}>
                <div className={styles.navBarContainer}>
                    <a href='#' className={styles.logo}>Orange<span>Spark</span></a>
                    <div className={styles.navBarButtons}>
                        {/* {props.item1Open && <a href='#' onClick={() => props.setIsOpen(true)} style={{ display: props.item1Open ? 'inline' : 'none' }}>
                            <p>Test</p>
                        </a>}
                        <a href='#' onClick={() => props.setIsOpen(true)} style={{ display: props.item1Open ? 'inline' : 'none' }}>
                            <p>What We Do</p>
                        </a>
                        <a href="#" style={{ display: props.item2Open ? 'inline' : 'none' }}>
                            <p>What We've Done</p>
                        </a>
                        <a href="#" style={{ display: props.item3Open ? 'inline' : 'none' }} className={styles.navBarButton}>
                            <p>Get In Touch</p>
                        </a> */}
                    </div>
                </div>
            </header>

            <div onMouseLeave={handleMouseLeave} id='main div' ref={parentRef} className={mergeStyles(styles.widthConstrained, props.navOpen ? styles.navOpenStyle : styles.widthConstrained)}>
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
                    <div className={props.navOpen ? styles.flipAnimateContainerAfter : styles.flipAnimateContainerInitial}>
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
                                position:"relative",
                                whiteSpace: 'nowrap'
                            }
                        })} >
                            <AnchorItem listItemVisible={listItem1Visible} title='What We Do' itemStyleName={styles.staticListItem1} myItemRef={listItem1Ref} handleMouseMove={handleMouseMove} itemOpen={props.item1Open} />
                            <AnchorItem listItemVisible={listItem2Visible} title="What We've Done" itemStyleName={styles.staticListItem2} myItemRef={listItem2Ref} handleMouseMove={handleMouseMove} itemOpen={props.item2Open} leftMargin={true} />
                            <AnchorItem listItemVisible={listItem3Visible} title="Get In Touch" itemStyleName={styles.staticListItem3} myItemRef={listItem3Ref} handleMouseMove={handleMouseMove} itemOpen={props.item3Open} />
                        </ul>
                    </div>
                    {/* <div style={{ position: 'fixed' }}>TEST</div> */}
                </div>
                {/* <div className={styles.mainSection}>
                <p className={styles.mainParagraph}>Orange Spark Solutions, LLC is a <span className={styles.orangeText}>technology solutions</span> provider. We work with <span className={styles.blueText}>Startups, Small</span> & <span className={styles.blueText}>Mid-sized</span> businesses on <span className={styles.orangeText}>specialized projects</span> or as a <span className={styles.orangeText}>full-service technology partner</span>. We work closely with you to provide <span className={styles.blueText}>efficient, scalable, right-sized</span> technology solutions at <span className={styles.orangeText}>reasonable costs</span>.</p>
                <p className={styles.slogan}><i>Got tech problems? We have the solutions.</i></p>
            </div> */}
            </div>
        </div>

    )
}
type AnchorItemProps = {
    myItemRef: any,
    handleMouseMove: any,
    itemOpen: boolean,
    leftMargin?: boolean,
    title: string,
    itemStyleName: string,
    listItemVisible: boolean,
}

const AnchorItem = (props: AnchorItemProps) => {
    // if(!props.listItemVisible){
    //     const element = props.myItemRef.getBoundingClientRect()
    //     console.log(element.top)
    // }
    return (
        <li ref={props.myItemRef} onMouseEnter={props.handleMouseMove} className={props.leftMargin ? mergeStyles({marginLeft: '64px'}) : undefined}>
            <span style={{ position: 'relative' }}>
                <a className={props.itemOpen ? props.itemStyleName : styles.anchorItem}>{props.title}</a>
                <span style={{ visibility: 'hidden', color: 'orange' }}>{props.title}</span>
            </span>
        </li>
    )

}