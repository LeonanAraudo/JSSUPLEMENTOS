"use client"
import { FC, useEffect, useState } from 'react';
import styles from './exibPro.module.css'
import Header from '@/componentes/Header/headerUser/header';
import Image from 'next/image';
import { openSans,openeSans} from '@/app/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import 'ldrs/ring'
import { bouncy } from 'ldrs'

interface PageProps {
  params: {
    id: string; 
  };
}

bouncy.register()

interface Produto {
  Nome: string;
  Preco: string;
  Descricao: string;
  Marca: string;
  Sabor: string;
  Peso_Produto: string;
  Quantidade: number;
  Tipo_produto: string;
  Preco_Antes: string;
  Foto:string;
}

const Page: FC<PageProps> = ({ params }) => {
  const { id } = params; 
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [count,setCount] = useState(0)
  const Handle = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`/api/getProdutoId/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar o produto');
        }
        const data: Produto = await response.json();
        setProduto(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduto();
  }, [id]);
  
 
  if (loading) {
    return <div className={styles.loading}>
<l-bouncy
  size="45"
  speed="1.75" 
  color="black" 
></l-bouncy>
  <p className={`${openeSans.className} ${styles.carrega}`}>Carregando informações</p>
  </div>;
  }

  if (!produto) {
    return ;
  }

  return(
    <div className={styles.container}>
      <Header />
      <div className={styles.areaDeExibicao}>
        <div className={styles.imgProduto}>
          <div className={styles.Border}>
            <Image
              src={produto.Foto}
              alt="Descrição da Imagem"
              width={360}
              height={363}
            />
          </div>
        </div>
        <div>
          <div className={styles.infosGerais}>
            <div className={`${openSans.className} ${styles.title}`}>
              <h2 className={styles.titleProduct}>{produto.Nome}</h2>
              <p className={styles.desc}>{produto.Descricao}</p>
            </div>
            <div className={styles.preco}>
              <div className={styles.diminui}>
                <div className={styles.corta}></div>
                <p className={`${styles.acinza} ${openSans.className}`}>De: R$ {produto.Preco_Antes}</p>
              </div>
              <div className={styles.precoVenda}>
                <p className={openSans.className}>Por: <span className={`${openSans.className} ${styles.laranja}`}>R$ {produto.Preco}</span></p>
                <p className={openSans.className}>à vista no Pix</p>
              </div>
              <div className={styles.precoVenda}>
                <p className={openSans.className}>ou <strong>R$ 95,00</strong></p>
                <p className={openSans.className}>em até <span className={`${styles.alaranja} ${openSans.className}`}>2x</span> de <span className={`${styles.alaranja} ${openSans.className}`}>R$ 47,50</span></p>
              </div>
              <div className={styles.infos}>
                <div className={styles.sabor}>
                  <div className={styles.spaceLeft}><p className={openSans.className}>Sabor</p></div>
                  <div className={`${openSans.className} ${styles.black}`}><p>{produto.Sabor}</p></div>
                </div>
                <div className={styles.marca}>
                  <div className={styles.spaceLeft}><p className={openSans.className}>Marca</p></div>
                  <div className={`${openSans.className} ${styles.black}`}><p>{produto.Marca}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carrinho}>
          <div className={styles.borda}>
            <div className={styles.quantidade}>
              <button className={`${openSans.className} ${styles.quantes}`} onClick={Handle}>
                Quantidade:<span> </span>{count} 
                <span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ color: "#000000", width: 18, height: 13, cursor: 'pointer' }}
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
                    style={{ color: "#ffffff", width: 19, height: 15, cursor: 'pointer' }}
                    aria-label="Carrinho de compras"
                  />
                </span>    
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
