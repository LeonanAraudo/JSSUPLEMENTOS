"use client"
import Header from '../../../componentes/Header/headerAdm/headerAdm'
import styles from './adm.module.css'
import {openSans,openeSans} from '../../fonts';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Popular from '../../../componentes/popularProdutos';
import Drawer from '../../../componentes/Drawers/DrawerUser/drawer'
import Hover from '../../../componentes/imgHover/hoverComponent'
import Image from 'next/image';

export default function Main() {
  return (
    <main className={styles.container}> 
    <header className={styles.heder}>
       <Header/>
    </header>
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
    <div className={styles.branco}>
      <div className={styles.recentPost}>
        <p className={`${openeSans.className} ${styles.recentString}`}>Recent Posts</p>
      </div>
      <div className={styles.produtos}>
            <Popular/>
      </div>
    </div>
    <div>
            <Hover image1="/ba.webp" image2="/bull.jpg" image3="/corre.jpg" image4="/valha.webp"  />
    </div>
    <div className={styles.story}>
      <div>
        <Image></Image>
      </div>
      <div>
        <h2></h2>
        <p></p>
      </div>
    </div>
        
    </main>
  );
}
