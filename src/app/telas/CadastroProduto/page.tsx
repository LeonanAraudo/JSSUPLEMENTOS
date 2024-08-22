"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-regular-svg-icons'; 
import Header from "@/componentes/headerAdm";
import styles from "./cadProd.module.css";
import { montserrat } from '../../fonts';
import React, { useState, ChangeEvent,FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface FormData{
    Nome:string;
    Preco:string;
    Descricao:string;
    Marca:string;
    Sabor:string;
    Peso_Produto:string;
    Quantidade:string;
    Foto:string;
    Tipo_produto:string;
    Preco_Antes:string;
}

export default function CadastroProd() {
        
    const [formData,setFormData] = useState<FormData>({
        Nome:"",
        Preco:"",
        Descricao:"",
        Marca:"",
        Sabor:"",
        Peso_Produto:"",
        Quantidade:"",
        Foto:"",
        Tipo_produto:"",
        Preco_Antes:"",
    })

    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const router = useRouter()

    const handleChange =(e: ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = e.target;
        setFormData((prev) => ({...prev,[name]:value}));
    }
    const handleChangere =(e: ChangeEvent<HTMLTextAreaElement>) =>{
        const { name, value} = e.target;
        setFormData((prev) => ({...prev,[name]:value}));
    }
    const handleChangese =(e: ChangeEvent<HTMLSelectElement>) =>{
        const { name, value} = e.target;
        setFormData((prev) => ({...prev,[name]:value}));
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cadProduto', formData);
      setMessage({ type: 'success', text: 'produto criado com sucesso!' });
      router.push('/telas/principalAdm');
    } catch (error) {
      if (error instanceof Error) {
        setMessage({ type: 'error', text: 'Erro ao criar rpoduto: ' + error.message });
      }
    }
  };
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
        }
    };
    const handleDivClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        fileInput.click(); 
    };

    return (
        <div className={`${montserrat.className} ${styles.container}`}>
            <header>
                <Header />
            </header>

            <div className={styles.title}>
                <h2>Cadastro de Produto</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.forme}>
                    <div className={styles.primaMetade}>
                            <input
                                id="Files"
                                name="Foto"
                                type="file"
                                required
                                className={styles.inputImag}
                                value={formData.Foto}
                                onChange={(event) => {
                                    handleFileChange(event);
                                    handleChange(event); 
                                }}
                            />
                        <div onChange={handleDivClick} style={{
                            backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '50%',
                            height: '75%', 
                            border: '1px solid #ccc', 
                            marginTop: '10px', 
                        }}></div>
                        <label htmlFor="Files" className={styles.labelImg}>
                            <p className={styles.selectText}>Selecione a imagem do produto 
                                <FontAwesomeIcon
                                            icon={faImage}
                                            style={{ color: "black", width: 18,height: 13,  }}
                                            aria-label="img icon"
                                        /></p>
                        </label>
                    </div>
                    <div className={styles.segunMetade}>
                        <div className={`${styles.NomeProduto} ${styles.padrao}`}>
                            <label htmlFor='NomeProd' className={styles.labelPadrao}>Nome</label>
                            <input 
                            type='text'
                            name='Nome'
                            id='NomeProd'
                            className={`${styles.inputNP} ${styles.backgroundInputs}`}
                            placeholder='Insira o nome do produto'
                            value={formData.Nome}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className={`${styles.DescicaoProduto} ${styles.padrao}`} >
                            <label htmlFor='Descricao' className={styles.labelPadrao}>Descrição</label>
                            <textarea 
                            id='Descricao'
                            name='Descricao' 
                            placeholder='Descreva o produto'
                            className={`${styles.inputDesc} ${styles.backgroundInputs} ${montserrat.className}`}
                            required
                            value={formData.Descricao}
                            onChange={handleChangere}
                            ></textarea>
                        </div>
                        <div className={styles.dinheiros}>
                            <div className={styles.Gap}>
                                <label htmlFor='IdPrecoVenda' className={styles.labelPadrao}>Preço de Venda</label>
                                <div className={`${styles.alingPadrao}`}>
                                    <div className={styles.simbolDinheiro}>
                                        <p>R$</p>
                                    </div>
                                        <input 
                                        className={styles.moneyInput} 
                                        type='number' 
                                        name='Preco' 
                                        id='IdPrecoVenda'
                                        required
                                        value={formData.Preco}
                                        onChange={handleChange}
                                        />                                                                 
                               </div>
                            </div>
                            <div className={styles.Gap}>
                                <label htmlFor='IdPrecoMercado' className={styles.labelPadrao}>Preço de Mercado</label>
                            <div className={`${styles.alingPadrao}`}>
                                    <div className={styles.simbolDinheiro}>
                                        <p>R$</p>
                                    </div>
                                    <div >
                                        <input 
                                        className={styles.moneyInput} 
                                        type='number' 
                                        name='Preco_Antes' 
                                        id='IdPrecoMercado'
                                        required
                                        value={formData.Preco_Antes}
                                        onChange={handleChange}
                                        />
                                    </div>
                            </div>
                            </div>
                            <div className={styles.Gap}>
                                <label htmlFor='SelectType' className={styles.labelPadraoOut}>Tipo de Produto</label>
                                <select 
                                className={styles.optionsTipo} 
                                name="Tipo_produto" 
                                id="SelectType" 
                                required
                                value={formData.Tipo_produto}
                                onChange={handleChangese}
                                >
                                    <option>Ame</option>
                                </select>
                            </div>    
                        </div>
                        <div className={styles.content}>
                            <div className={styles.a}>
                                <label htmlFor="IdMarca" className={styles.labelPadrao}>Marca</label>
                                <input 
                                className={styles.inputMarSab} 
                                type="text" 
                                name="Marca" 
                                id="IdMarca" 
                                placeholder='Insira a Marca do produto'
                                required
                                value={formData.Marca}
                                onChange={handleChange}
                                />
                            </div>
                            <div className={styles.a}>
                                <label htmlFor='IdSabor' className={styles.labelPadrao}>Sabor</label>
                                <input 
                                className={styles.inputMarSab} 
                                type="text" 
                                name="Sabor" 
                                id="IdSabor" 
                                placeholder='Insira o Sabor do produto'
                                required
                                value={formData.Sabor}
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.content2}>
                            <div className={styles.padrao}>
                                <label htmlFor='IdPesoProduto' className={styles.labelPadrao}>Peso do Produto</label>
                                <input 
                                type="text" 
                                name="Peso_Produto" 
                                id="IdPesoProduto" 
                                className={styles.inputNumbers}
                                required
                                value={formData.Peso_Produto}
                                onChange={handleChange}
                                />
                            </div>
                            <div className={styles.padrao}>
                                <label htmlFor='IdUnidadesDisponiveis' className={styles.labelPadrao}>Unidades Disponiveis</label>
                                <input 
                                type="number" 
                                name="Quantidade" 
                                id="IdUnidadesDisponiveis" 
                                className={styles.inputNumbers}
                                required
                                value={formData.Quantidade}
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.divButton}>
                    <button className={styles.submitButton} type='submit'>Cadastrar Produto</button>
                </div>
            </form>
        </div>
    );
}
