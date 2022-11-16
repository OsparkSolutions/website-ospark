import * as styles from './styles';



export const WorkGrid = () => {
    return(
        <div className={styles.workGridContainer}>
            <a className={styles.sportfolioGridImage}></a>
            <a className={styles.wayMarkGridImage}></a>
            <a className={styles.gridImageTemplate}></a>
            <a className={styles.gridImageTemplate}></a> 

            <div className={styles.largeGridImage}>Image 1</div>
            <div className={styles.largeGridImage}>image 2</div>
        </div>
        
    )
}