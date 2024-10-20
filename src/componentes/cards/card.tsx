import styles from '../../styleComponents/card.module.css';
import {montserrat} from '../../app/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'; 
import Image from 'next/image';



interface Produto {
    Nome: string;
    Preco: string;
    Preco_Antes: string;
    Foto: string ;
    descricaoImagem: string;
  }
  interface CardProps {
    produto: Produto; 
  }

export default function Card({ produto }:CardProps){

    return(
        <>
            <main className={styles.container1}>
                <div  className={styles.imagePromo}>
                <Image
                  src={produto.Foto}
                  alt="Descrição da Imagem"
                  width={245}
                  height={238}
                />
                </div>
                <div className={`${montserrat.className} ${styles.info}`}>
                    <div className={styles.containerTitle}>
                        <p className={styles.textTitle}>{produto.Nome}</p>
                    </div>
                    <div className={styles.prece}>
                            <div className={styles.notDescont}>
                                <div className={styles.corta}></div>
                                <p className={styles.precoAntes}>De: R$ {produto.Preco_Antes}</p>
                            </div>
                            <div>
                                <p className={styles.precoAgora}>Por: R$ {produto.Preco}</p>
                            </div>
                    </div>
                </div>
            </main>
        </>
    )
}
