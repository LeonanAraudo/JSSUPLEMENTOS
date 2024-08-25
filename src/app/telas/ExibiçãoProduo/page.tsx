import styles from './exibPro.module.css' 
import Header from '@/componentes/header'
import Image from 'next/image'
import { openeSans } from '../../fonts'
import { openSans } from '../../fonts'

export default function MostrarProduto(){
  
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
          <div>
              <div className={`${openSans.className} ${styles.title}`}>
                <h2>CREATINA CANIBAL INC
                MONOHYDRATE 300G</h2>
                <p className={styles.desc}>creatina da canibal inc 300 gramas  sem sabor</p>
              </div>
              <div className={styles.preco}>
                <div className={styles.diminui}>
                  <div className={styles.corta}></div>
                  <p className={`${styles.acinza} ${openSans.className}`}>De: R$ 100,00</p>
                </div>
                
                <div className={styles.precoVenda}>
                  <p className={openSans.className}>Por: <span className={`${openSans.className} ${styles.laranja}`}>R$ 89,99</span></p>
                  <p className={openSans.className}>à vista no Pix</p>
                </div>
                
                <div className={styles.precoVenda}>
                  <p className={openSans.className}>ou <strong>R$ 95,00</strong></p>
                  <p className={openSans.className}>em até <span className={`${styles.alaranja} ${openeSans.className}`}>2x</span> de <span className={`${styles.alaranja} ${openeSans.className}`}>R$ 47,50</span></p>
                </div>
                <div className={styles.infos}>
                  <div className={styles.sabor}>
                    <div><p className={openeSans.className}>Sabor</p></div>
                    <div className={`${openSans.className} ${styles.black}`}><p>chocolate</p></div>
                  </div>
                  <div className={styles.marca}>
                    <div><p className={openeSans.className}>Marca</p></div>
                    <div className={`${openSans.className} ${styles.black}`}><p>Black skull</p></div>
                  </div>
                </div>
            </div>
              
            </div>
        </div>
      </div>
    </div>
  )
}