import styles from '../styleComponents/card.module.css';
import {montserrat} from '../app/fonts';

export default function Card(){
    return(
        <>
            <main className={styles.container1}>
                <div  className={styles.imagePromo}>

                </div>
                <div className={`${montserrat.className} ${styles.info}`}>
                    <div className={styles.containerTitle}>
                        <p className={styles.textTitle}>Creatina full transformer ultra power de cavalo</p>
                    </div>
                </div>

            </main>
        </>
    )
}