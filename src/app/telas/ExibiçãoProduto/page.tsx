"use client"
import styles from './exibPro.module.css' 
import Image from 'next/image'
import { openeSans } from '../../fonts'
import { openSans } from '../../fonts'
import Header from '@/componentes/Header/headerUser/header'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faCartShopping } from '@fortawesome/free-solid-svg-icons'; 

export default function MostrarProduto(){
  const [count,setCount] = useState(0)
  const Handle = () => {
    setCount(count + 1)
  }
  return (
    <div className={styles.container}>
      <header>
        <Header/>
      </header>
      <div className={styles.areaDeExibicao}>
        <div className={styles.imgProduto}>
          <div className={styles.Border}>
            <Image
              src="/roxo.webp"
              alt="Descrição da Imagem"
              width={360}
              height={363}
            />
          </div>
        </div>
        <div>
          <div className={styles.infosGerais}>
              <div className={`${openSans.className} ${styles.title}`}>
                <h2>Creatina hiper mega blaster ultra intra</h2>
                <p className={styles.desc}>creatina da canibal inc 300 gramas  sem sabor</p>
              </div>
              <div className={styles.preco}>
                <div className={styles.diminui}>
                  <div className={styles.corta}></div>
                  <p className={`${styles.acinza} ${openSans.className}`}>De: R$ 100,00</p>
                </div>
                
                <div className={styles.precoVenda}>
                  <p className={openSans.className}>Por: <span className={`${openeSans.className} ${styles.laranja}`}>R$ 89,99</span></p>
                  <p className={openSans.className}>à vista no Pix</p>
                </div>
                
                <div className={styles.precoVenda}>
                  <p className={openSans.className}>ou <strong>R$ 95,00</strong></p>
                  <p className={openSans.className}>em até <span className={`${styles.alaranja} ${openeSans.className}`}>2x</span> de <span className={`${styles.alaranja} ${openeSans.className}`}>R$ 47,50</span></p>
                </div>
                <div className={styles.infos}>
                  <div className={styles.sabor}>
                    <div className={styles.spaceLeft}><p className={openeSans.className}>Sabor</p></div>
                    <div className={`${openSans.className} ${styles.black}`}><p>chocolate</p></div>
                  </div>
                  <div className={styles.marca}>
                    <div className={styles.spaceLeft}><p className={openeSans.className}>Marca</p></div>
                    <div className={`${openSans.className} ${styles.black}`}><p>Black skull</p></div>
                  </div>
                </div>
            </div>
              
            </div>
        </div>
        <div className={styles.carrinho}>
          <div className={styles.borda}>
            <div className={styles.quantidade}>
              <button className={`${openSans.className} ${styles.quantes}`} onClick={Handle}>Quantidade:<span> </span>{count} 
            <span>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#000000", width: 18,height: 13, cursor: 'pointer' }}
              aria-label="Carrinho de compras"
          />       
            </span>
              </button>
                    
            </div>           
              <div className={styles.divCarrinho}>
                  <button className={`${openSans.className} ${styles.inserirCarrinho}`}> 
                    <span>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#ffffff", width: 19,height: 15, cursor: 'pointer' }}
                      aria-label="Carrinho de compras"
                  />
                    </span>    
                    Adicionar ao Carrinho</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}