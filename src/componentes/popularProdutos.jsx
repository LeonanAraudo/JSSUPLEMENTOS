import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '@/componentes/card';
import styles from '../styleComponents/popularProduto.module.css'

export default function Popular(){
    return(
    <div className={styles.spaceSlide}>
        <Splide
            options={{
              perPage: 5,
              perMove: 1,
              rewind:true
            }}
            >
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
        </Splide>
    </div>
)}