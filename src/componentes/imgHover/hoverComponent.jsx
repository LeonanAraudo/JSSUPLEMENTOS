import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { openeSans } from '../../app/fonts';
import styles from './style.module.css';
import { useState } from "react";
import Link from "next/link";

export default function Hover(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    function Handle(){
        
    }
    return (
        <div className={styles.vantagensContainer}>
            <div 
                className={styles.prime}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)
                }
            >
                {isHovered ? (
                    <div className={styles.section}>
                       <Image
                       src="/roxo.webp"
                       width={300}
                       height={360}
                       className={styles.imgOut}
                       />
                    </div>
                ) : (
                    <div className={styles.section}>
                        <Image
                            src={props.image1}
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
                                            style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                            aria-label="Carrinho de compras"
                                        />
                                    </span> 
                                    Aumento da Força Muscular
                                </p>
                            </section>
                            <section> 
                                <p className={`${openeSans.className} ${styles.greenCheck}`}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                            aria-label="Carrinho de compras"
                                        />
                                    </span> 
                                    Aumento da Força Muscular
                                </p>
                            </section>
                            <section> 
                                <p className={`${openeSans.className} ${styles.greenCheck}`}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                            aria-label="Carrinho de compras"
                                        />
                                    </span> 
                                    Aumento da Força Muscular
                                </p>
                            </section>
                        </div>
                    </div>
                )}
            </div>

            <div 
                className={styles.prime}
                onMouseEnter={() => setIsHovered2(true)} 
                onMouseLeave={() => setIsHovered2(false)}
            >
                {isHovered2 ? (
                    <div className={styles.section}>
                    <Image
                    src="/roxo.webp"
                    width={300}
                    height={360}
                    className={styles.imgOut}
                    />
                 </div>
                ) : (
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
                                            style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                            aria-label="Carrinho de compras"
                                        />
                                    </span> 
                                    Aumento da Força Muscular
                                </p>
                            </section>
                            <section> 
                                <p className={`${openeSans.className} ${styles.greenCheck}`}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                            aria-label="Carrinho de compras"
                                        />
                                    </span> 
                                    Aumento da Força Muscular
                                </p>
                            </section>
                            <section> 
                                <p className={`${openeSans.className} ${styles.greenCheck}`}>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                            aria-label="Carrinho de compras"
                                        />
                                    </span> 
                                    Aumento da Força Muscular
                                </p>
                            </section>
                        </div>
                    </div>
                )}
            </div>
            <div 
                className={styles.prime}
                onMouseEnter={() => setIsHovered3(true)} 
                onMouseLeave={() => setIsHovered3(false)}
            >
                {isHovered3 ? (
               <div className={styles.section}>
                  <Image
                  src="/roxo.webp"
                  width={300}
                  height={360}
                  className={styles.imgOut}
                  />
               </div>
                ):(
            
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
                                    style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                    aria-label="Carrinho de compras"
                                />
                            </span> 
                            Aumento da Força Muscular
                        </p>
                    </section>
                    <section> 
                        <p className={`${openeSans.className} ${styles.greenCheck}`}>
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                    aria-label="Carrinho de compras"
                                />
                            </span> 
                            Aumento da Força Muscular
                        </p>
                    </section>
                    <section> 
                        <p className={`${openeSans.className} ${styles.greenCheck}`}>
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                    aria-label="Carrinho de compras"
                                />
                            </span> 
                            Aumento da Força Muscular
                        </p>
                    </section>
                </div>
            </div>
                )
            }
            </div>
            <div 
                className={styles.prime}
                onMouseEnter={() => setIsHovered4(true)} 
                onMouseLeave={() => setIsHovered4(false)}
            >
                {isHovered4 ? (
                      <div className={styles.section}>
                      <Image
                      src="/roxo.webp"
                      width={300}
                      height={360}
                      className={styles.imgOut}
                      />
                   </div>
                )
                : (
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
                                    style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                    aria-label="Carrinho de compras"
                                />
                            </span> 
                            Aumento da Força Muscular
                        </p>
                    </section>
                    <section> 
                        <p className={`${openeSans.className} ${styles.greenCheck}`}>
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                    aria-label="Carrinho de compras"
                                />
                            </span> 
                            Aumento da Força Muscular
                        </p>
                    </section>
                    <section> 
                        <p className={`${openeSans.className} ${styles.greenCheck}`}>
                            <span>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ color: "#5dff00", width: 25, height: 25, cursor: 'pointer' }}
                                    aria-label="Carrinho de compras"
                                />
                            </span> 
                            Aumento da Força Muscular
                        </p>
                    </section>
                </div>
            </div>
                )
            }
            </div>
        </div>
    );
}
