import styles from '../styleComponents/card.module.css';
import {montserrat} from '../app/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'; 
import Image from 'next/image';

export default function Card(){
    return(
        <>
            <main className={styles.container1}>
                <div  className={styles.imagePromo}>
                <Image
                  src="/creatinha.png"
                  alt="Descrição da Imagem"
                  width={245}
                  height={238}
                />
                </div>
                <div className={`${montserrat.className} ${styles.info}`}>
                    <div className={styles.containerTitle}>
                        <p className={styles.textTitle}>Creatina full transformer </p>
                    </div>
                    <div className={styles.preco}>
                        <div>
                            <div className={styles.corta}></div>
                            <p className={styles.precoAnterior}>R$ 115,00</p>
                        </div>
                    </div>
                        <div className={styles.saiba}>
                                <p className={styles.mais}>Saiba mais</p>
                                <FontAwesomeIcon
                                icon={faAnglesDown}
                                className={styles.icones}
                                aria-label="Saiba mais"
                            />
                            
                        </div>
                </div>

            </main>
        </>
    )
}
