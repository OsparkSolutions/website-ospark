import { mergeStyles } from '@fluentui/merge-styles';
import * as styles from './styles';
import { Shell, useSpark } from 'spark_app_v2';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavBarProps, ContactFormProps } from './App';
import { distances } from './styles';

export const fieldwork = mergeStyles({
    fontFamily: 'fieldwork, sans-serif',
})
//distances used to calc travel speed of nav bar anchor animations

export const MainSection = (props: NavBarProps & ContactFormProps) => {
    const titleAnchorRef = useRef<HTMLAnchorElement>(null)
    const parentRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const anchor1ref = useRef<HTMLAnchorElement>(null)
    const anchor2ref = useRef<HTMLAnchorElement>(null)
    const anchor3ref = useRef<HTMLAnchorElement>(null)

    const anchor1Dist = useRef<number>()
    const anchor2Dist = useRef<number>()
    const anchor3Dist = useRef<number>()

    const fixedBox = useRef<HTMLDivElement>(null)
    const [sparkFixed, setSparkFixed] = useState(true)

    const [scrollY, setScrollY] = useState<number>(0)

    
    useEffect(() => {
        if (titleAnchorRef.current && parentRef.current && fixedBox.current) {
            if(sparkPosition.current){
                // sparkPosition.current = {x: 0, y: 0}
            }
            //Runs after animation ends
            titleAnchorRef.current.addEventListener('animationend', (event) => {
                if (titleAnchorRef.current && parentRef.current && fixedBox.current) {
                    const titleRect = titleAnchorRef.current.getBoundingClientRect()
                    const box = parentRef.current.getBoundingClientRect()
                    const fixedRect = fixedBox.current.getBoundingClientRect()
                    if (sparkPosition.current) {
                        // sparkPosition.current = { x: -fixedRect.width/2 + titleRect.left + 15, y: (box.height/2)-fixedRect.height/2}
                    }
                }
            })
        }
        return () => {
            titleAnchorRef.current?.removeEventListener('animationend', (event)=>{})

        }
    }, [])

    function getDistance(x1:number, y1:number, x2:number, y2:number){
        let y = x2 - x1;
        let x = y2 - y1;   
        return Math.sqrt(x * x + y * y);
    }
    //point after animation: (window.innerWidth-{right input}, 0)
    useEffect(() => {
        if (anchor1ref.current && anchor2ref.current && anchor3ref.current) {
            const anchorCords = { x: anchor1ref.current.getBoundingClientRect().x, y: anchor1ref.current?.getBoundingClientRect().y }
            // console.log(anchorCords.x, anchorCords.y)
            anchor1Dist.current = getDistance(anchorCords.x, anchorCords.y, window.innerWidth-distances.anchor1, 0)
            anchor2Dist.current = getDistance(anchorCords.x, anchorCords.y, window.innerWidth-distances.anchor2, 0)
            anchor3Dist.current = getDistance(anchorCords.x, anchorCords.y, window.innerWidth-distances.anchor3, 0)
        }
    }, [])
    
    const { ref: titleRef, inView: titleAnchorVisible} = useInView({
        threshold: 1,
        onChange: () => {
            // setSparkFixed(!sparkFixed)
            if (titleAnchorVisible && titleAnchorRef.current && parentRef.current && fixedBox.current) {
                const titleRect = titleAnchorRef.current.getBoundingClientRect()
                const box = parentRef.current.getBoundingClientRect()
                const fixedRect = fixedBox.current.getBoundingClientRect()
                console.log('i ran')
                // sparkPosition.current = { x: (-box.width / 2)+24, y: (box.height/2)-25}
                // sparkPosition.current = { x: 100, y: -100}

                setSparkFixed(!sparkFixed)
                // setScrollY(-window.scrollY)
                // setScrollY(-window.pageYOffset)
                if(sparkFixed){
                    sparkPosition.current = {x: (-box.width / 2)+24, y: 2}
                }else{
                    sparkPosition.current = undefined

                }

            }
            console.log(titleAnchorVisible)
            if (titleAnchorRef.current) {
            }
            if (titleAnchorRef.current && titleAnchorVisible === true) {
                const titleRect = titleAnchorRef.current.getBoundingClientRect()
                titleAnchorRef.current.style.position = 'fixed'
                titleAnchorRef.current.style.top = `${titleRect.y}px`
                titleAnchorRef.current.style.left = `${titleRect.x}px`
                const range = titleAnchorRef.current.querySelector("#range") as HTMLSpanElement
                const rangeWidth = range.getBoundingClientRect().width
                range.style.width = `${rangeWidth}px`
            }
            else {
                sparkPosition.current = undefined
                if (titleAnchorRef.current && parentRef.current && titleAnchorVisible === false) {
                    titleAnchorRef.current.style.top = ''
                    titleAnchorRef.current.style.left = ''
                    titleAnchorRef.current.style.position = ''
                    titleAnchorRef.current.style.textShadow = ''
                    titleAnchorRef.current.style.alignSelf = ''
                }
            }
        }
    })
    useEffect(()=>{
        if(titleAnchorRef.current && parentRef.current && titleAnchorVisible === false){

            const box = parentRef.current.getBoundingClientRect()
            const titleBox = titleAnchorRef.current.getBoundingClientRect()
            // sparkPosition.current = {x: -box.width/2, y: box.height}

        }
        else{
            // sparkPosition.current = undefined
        }
    },[titleAnchorVisible])


    const { ref: listItem1Ref, inView: listItem1Visible } = useInView({
        threshold: 1,
        onChange: (inView, entry) =>{
            if(anchor1ref.current && listItem1Visible === true){
                const anchor1Box = anchor1ref.current.getBoundingClientRect()

                anchor1ref.current.style.position = 'fixed'
                anchor1ref.current.style.top = `${anchor1Box.y}px`
                // anchor1ref.current.style.left = `${anchor1Box.x}px`
                anchor1ref.current.style.right = `${window.innerWidth-anchor1Box.right}px`
            }
            else{
                if(anchor1ref.current){
                    anchor1ref.current.style.top = ''
                    anchor1ref.current.style.right = ''
                    anchor1ref.current.style.position = ''
                }
            }
        }
    });
    const { ref: listItem2Ref, inView: listItem2Visible } = useInView({ threshold: 1,
        onChange: (inView, entry) =>{
            if(anchor2ref.current && listItem2Visible === true){
                const anchor2Box = anchor2ref.current.getBoundingClientRect()
                anchor2ref.current.style.position = 'fixed'
                anchor2ref.current.style.top = `${anchor2Box.y}px`
                anchor2ref.current.style.right = `${window.innerWidth-anchor2Box.right}px`

            }
            else{
                if(anchor2ref.current){
                    anchor2ref.current.style.top = ''
                    anchor2ref.current.style.right = ''
                    anchor2ref.current.style.position = ''
                }
            }
        } });
    const { ref: listItem3Ref, inView: listItem3Visible } = useInView({ threshold: 1,
        onChange: (inView, entry) =>{
            if(anchor3ref.current && listItem3Visible === true){
                const anchor3Box = anchor3ref.current.getBoundingClientRect()
                anchor3ref.current.style.position = 'fixed'
                anchor3ref.current.style.top = `${anchor3Box.y}px`
                anchor3ref.current.style.right = `${window.innerWidth-anchor3Box.right}px`

            }
            else{
                if(anchor3ref.current){
                    anchor3ref.current.style.top = ''
                    anchor3ref.current.style.right = ''
                    anchor3ref.current.style.position = ''
                }
            }
        } });

    
    props.setNavOpen(!listItem1Visible)
    props.setItem1Visible(!listItem1Visible)
    props.setItem2Visible(!listItem2Visible)
    props.setItem3Visible(!listItem3Visible)

    // if(anchor1ref.current && anchor2ref.current && anchor3ref.current && !listItem1Visible){
    //     console.log(listItem1Visible)
    //     const anchor1Box = anchor1ref.current.getBoundingClientRect()
    //     const anchor2Box = anchor2ref.current.getBoundingClientRect()
    //     const anchor3Box = anchor3ref.current.getBoundingClientRect()
    //     console.log(anchor1Box.top, anchor1Box.left)
    //     anchor1ref.current.style.top = '30px'
    //     anchor1ref.current.style.left = '623px'
    //     anchor1ref.current.style.position = 'fixed'
    // }

    const [myShells, setShells] = useState<Shell[]>([
        // [1, 0xff7700, 1, 2],
        // [1, 0xff7700, 1, 2]
        [0.69, 0xff7700, 1, 2],
        [1.5, 0xff7700, 1, 2]]
    )

    const { Spark, sparkPosition } = useSpark({
        titleAnchorVisible: titleAnchorVisible, 
        parentElementRef: fixedBox,
        defaults: {
            numberOfLines: 500,
            pulseRate: 20,
            rotation: 2,
            scale: 10,
            translateX: -446,
            translateXPx: true,
            translateY: 48.5
        }, shells: myShells
    })



    const handleMouseLeave = (event: any) => {
        if (sparkPosition.current) {
            // sparkPosition.current = undefined
        }
    }

    const handleMouseMove = (event: any) => {
        if (parentRef.current) {
            const boundingRect = parentRef.current.getBoundingClientRect();
            const rect = event.currentTarget.getBoundingClientRect();
            if(sparkFixed){
                sparkPosition.current = { x: rect.left - (boundingRect.width / 2) - 110, y: (boundingRect.height / 2) + (boundingRect.top - rect.top) - 45 }
            }else{
                sparkPosition.current = undefined
            }
        }

    }
    return (
        <div id='this is the big one' ref={parentRef} style={{ position: 'relative'}} className={mergeStyles({
            
        })}>

            <div id="canvas" ref={fixedBox} style={{}} className={mergeStyles({
                position: sparkFixed ? 'absolute' : 'fixed',
                zIndex: '1000',
                top: sparkFixed ? '' : `0`,
                height: sparkFixed ? '100%' : '50px',
                width: '100%',
                // height: titleAnchorVisible ? '100%' : '50px',
                
                '& canvas':{
                    // backgroundColor: 'aqua',
                    // opacity: .3
                } 
            })}>
                <Spark />

            </div>

            <header className={props.item1Open ? styles.header : styles.headerClosed}>
                <div className={styles.navBarContainer}>
                    {/* <a href='#' className={styles.logo}>Orange<span>Spark</span></a> */}
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

            <div onMouseLeave={handleMouseLeave} id='main div'  className={mergeStyles(styles.widthConstrained, props.navOpen ? styles.navOpenStyle : styles.widthConstrained)}>
                {/* <Spark /> */}
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
                        <div ref={titleRef} className={mergeStyles({ textAlign: "right", display: 'flex'})}>
                            <a ref={titleAnchorRef} href='#' className={mergeStyles(titleAnchorVisible ? styles.logo : styles.animateTitle, {
                                position: 'absolute',
                                alignSelf: "center",
                                

                            })}>O<span id='range'>range</span><span id='spark'>Spark</span> </a>
                            <span  className={mergeStyles(fieldwork, {
                                textDecoration: 'none',
                                fontSize: 75,
                                alignSelf: "center",
                                visibility: 'hidden', 
                                color: 'orange',
                            })}>Orange<span className='spark'>Spark</span></span>

                           
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
                            <AnchorItem animationTime={()=>{if(anchor1Dist.current){return anchor1Dist.current/1000}}} anchorRef={anchor1ref} listItemVisible={listItem1Visible} title='What We Do' itemStyleName={styles.staticListItem1} myItemRef={listItem1Ref} handleMouseMove={handleMouseMove} itemOpen={props.item1Open} />
                            <AnchorItem animationTime={()=>{if(anchor2Dist.current){return anchor2Dist.current/1000}}} anchorRef={anchor2ref} listItemVisible={listItem2Visible} title="What We've Done" itemStyleName={styles.staticListItem2} myItemRef={listItem2Ref} handleMouseMove={handleMouseMove} itemOpen={props.item2Open} leftMargin={true} />
                            <AnchorItem animationTime={()=>{if(anchor3Dist.current){return anchor3Dist.current/1000}}} anchorRef={anchor3ref} listItemVisible={listItem3Visible} title="Get In Touch" itemStyleName={styles.staticListItem3} myItemRef={listItem3Ref} handleMouseMove={handleMouseMove} itemOpen={props.item3Open} />
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
    anchorRef: any,
    animationTime: () => number | undefined
}

const AnchorItem = (props: AnchorItemProps) => {
    // if(!props.listItemVisible){
    //     const element = props.myItemRef.getBoundingClientRect()
    //     console.log(element.top)
    // }
    return (
    
        <li ref={props.myItemRef} onMouseEnter={props.handleMouseMove} className={props.leftMargin ? mergeStyles({ marginLeft: '64px', zIndex:'1005' }) : undefined}>
            <span style={{ position: 'relative' }}>
                <a ref={props.anchorRef} className={props.itemOpen ? mergeStyles({animationDuration: `${props.animationTime()}s`}, props.itemStyleName) : styles.anchorItem}>{props.title}</a>
                <span style={{visibility:'hidden', color: 'orange' }}>{props.title}</span>
            </span>
        </li>
        
    )

}