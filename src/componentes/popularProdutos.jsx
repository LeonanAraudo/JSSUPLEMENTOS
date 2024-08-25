import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Card from '@/componentes/card';
import styles from '../styleComponents/popularProduto.module.css'
import Link from 'next/link';
// import produtos from "../../models/produtos"
// import GetProdutos from "../../pages/api/getProdutos"
import { useEffect, useState } from 'react';

export default function Popular(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/getProdutos');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);
  console.log(posts)
    return(
        <div className={styles.spaceSlide}>
            <Splide
            className={styles.slidesCon}
                options={{
                  perPage: 5,
                  perMove: 2,
                  rewind:true,
                  pagination:false,
                  fixedWidth:245,
                  gap:10,
                  fixedHeight:340
                }}
                >
                  {posts.map((post) => 
                  <Link key={post.Produto_id} href={"/telas/login"}>          
                    <SplideSlide className={styles.cards}>
                      <Card  produto={{
                          Nome: post.Nome,
                          Preco: post.Preco,
                          Preco_Antes: post.Preco_Antes,
                          descricaoImagem: 'Descrição da imagem' 
                          }} 
                      />
                    </SplideSlide>
                  </Link>
                  )}
            </Splide>
        </div>
)}