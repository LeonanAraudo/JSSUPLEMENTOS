import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '@/componentes/card';
import styles from '../styleComponents/popularProduto.module.css'

export default function Popular(){
    return(
    <div className={styles.spaceSlide}>
        <Splide
        className={styles.slidesCon}
            options={{
              perPage: 5,
              perMove: 1,
              rewind:true,
              pagination:false,
              fixedWidth:245,
              gap:10,
              fixedHeight:350
              
            }}
            >
              <SplideSlide  className={styles.slidesInicio}>
                <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide >
                 <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide >
                <Card/>
              </SplideSlide>
              <SplideSlide className={styles.slidesFim} >
                <Card/>
              </SplideSlide>
        </Splide>
    </div>
)}