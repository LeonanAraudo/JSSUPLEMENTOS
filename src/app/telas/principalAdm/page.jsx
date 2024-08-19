"use client"
import Header from '../../../componentes/header'
import styles from './adm.module.css'
import {openSans} from '../../fonts';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Popular from '@/componentes/popularProdutos';
import Drawer from '../../../componentes/drawer'

export default function MainAdm() {
  return (
    <main className={styles.container}> 
    <header className={styles.heder}>
       <Header/>
    </header>
    <nav className={styles.opcoes}>
      <ul className={`${openSans.className}  ${styles.alinhas}`}>
        <li>
          <Drawer/>
        </li>
        <li>
          <a className={styles.pointer}>Whey</a>
        </li>
        <li>
          <a className={styles.pointer}>Creatina</a>
        </li>
        <li>
          <a className={styles.pointer}>Pré-treino</a>
        </li>
        <li>
          <a className={styles.pointer2}>Promoções</a>
        </li>
      </ul>
    </nav>
    <div className={styles.slide}>
          <Splide 
            className={styles.ca} 
            aria-label="My Favorite Images"
            options={{
              type:'loop',
              autoplay:true,
              interval:3000,
              arrows:false,
            }}
            >
              <SplideSlide className={styles.imag1}>
              </SplideSlide>
              <SplideSlide className={styles.imag2}>
              </SplideSlide>
        </Splide>
    </div>
    <div className={styles.linha}></div>
    <div className={styles.produtos}>
          <Popular/>
    </div>
    <div className={styles.acre}></div>
    </main>
  );
}
