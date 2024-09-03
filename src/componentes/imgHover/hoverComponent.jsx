import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {openeSans} from '../../app/fonts';
import styles from './style.module.css'

export default function Hover(props){
    return(
  <div className={styles.vantagensContainer}>
        <div className={styles.section}>
            <Image
            src={props.image1}
            alt="Descrição da Imagem"
            width={300}
            height={360}
            className={styles.imgFull}
            >
            </Image>
            <div className={styles.vantagensText}>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
            </div>
      </div>

      <div className={styles.section}>
      <Image
          src={props.image2}
          alt="Descrição da Imagem"
          width={300}
          height={360}
          className={styles.imgFull}
          />
          <div className={styles.vantagensText}>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
            </div>
      </div>
      <div className={styles.section}>
      <Image
          src={props.image3}
          alt="Descrição da Imagem"
          width={300}
          height={360}
          className={styles.imgFull}
          />
          <div className={styles.vantagensText}>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
            </div>
      </div>
      <div className={styles.section}>
      <Image
          src={props.image4}
          alt="Descrição da Imagem"
          width={300}
          height={360}
          className={styles.imgFull}
          />
          <div className={styles.vantagensText}>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
              <section> 
                  <p className={`${openeSans.className} ${styles.greenCheck}`}>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "green", width: 25,height: 25, cursor: 'pointer', }}
                      aria-label="Carrinho de compras"
                  />
                  </span> 
                    Aumento da Força Muscular</p>
              </section>
            </div>
      </div>
    </div>
    );
}