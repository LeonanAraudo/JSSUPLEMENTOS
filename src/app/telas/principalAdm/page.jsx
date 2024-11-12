"use client"
import Header from '../../../componentes/Header/headerAdm/headerAdm'
import styles from './adm.module.css'
import {openSans,openeSans} from '../../fonts';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Popular from '../../../componentes/produtsSlide/popularProdutos';
import Hover from '../../../componentes/imgHover/hoverComponent'
import Image from 'next/image';
import Footer from '../../../componentes/footer/footer'

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
      <div className={styles.storyImage}>
        <Image 
        src='/corre.jpg'
        width={200}
        height={200}
        ></Image>
      </div>
      <div className={styles.storyText}>
            <div className={`${openSans.className}} ${styles.aling} `}>
                <h1 style={{fontSize:"20px",marginBottom:"25px"}}>Story of Josy</h1>
                <p className={openSans.className}>A aplicação prática dos conhecimentos adquiridos ao longo do curso proporcionará à equipe uma visão clara de como esses aprendizados se aplicam no mundo real. Além disso, a experiência obtida por meio do estudo e da preparação para a palestra servirá como um alicerce para o desenvolvimento pessoal e colaborativo dos membros. Para o público-alvo, composto por estudantes do ensino médio, esperamos que nossa atuação desperte o interesse pela tecnologia e incentive a busca por mais conhecimento na área de desenvolvimento de software.</p>
            </div>
      </div>
    </div>
    <Footer/>   
    </main>
  );
}
