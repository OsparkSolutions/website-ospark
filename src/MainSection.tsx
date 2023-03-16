import { mergeStyles } from '@fluentui/merge-styles';
import * as styles from './styles';

export const MainSection = () => {

    return (
        <div className={mergeStyles(styles.widthConstrained, {
        })}>
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
                    <div className={mergeStyles({ textAlign: "right" })}>
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
                            padding: "32px"
                        }
                    })} >
                        <li><a>What We Do</a></li>
                        <li className={mergeStyles({
                            marginLeft: "64px"
                        })}><a>What We've Done</a></li>
                        <li><a>Get in Touch!</a></li>
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