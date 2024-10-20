import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '../cards/card';
import styles from '../../styleComponents/popularProduto.module.css'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Popular(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/getAllProduto/getProdutos');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
    
  }, []);
  

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
                  gap:20,
                  fixedHeight:380
                }}
                >
                  {posts.map((post) => 
                    <SplideSlide key={post.Produto_id} className={styles.hovered}>
                      <Link className={styles.retira} href={`/telas/todos/${post.Produto_id}`}>          
                          <Card  produto={{
                              Nome: post.Nome,
                              Preco: post.Preco,
                              Preco_Antes: post.Preco_Antes,
                              Foto: post.Foto,
                              descricaoImagem:'Produto' 
                              }}
                          />
                      </Link>
                    </SplideSlide>
                  )}
            </Splide>
        </div>
)}