"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons'; 
import Header from "@/componentes/Header/headerAdm/headerAdm";
import styles from "./cadProd.module.css";
import { montserrat } from '../../fonts';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface FormData {
    Nome: string;
    Preco: string;
    Descricao: string;
    Marca: string;
    Sabor: string;
    Peso_Produto: string;
    Quantidade: number;
    Tipo_produto: string;
    Preco_Antes: string;
}

export default function CadastroProd() {
    const [formData, setFormData] = useState<FormData>({
        Nome: "",
        Preco: "",
        Descricao: "",
        Marca: "",
        Sabor: "",
        Peso_Produto: "",
        Quantidade: 0,
        Tipo_produto: "",
        Preco_Antes: "",
    });

    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const router = useRouter();
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
    
        // Adiciona os dados do formulário ao FormData
        (Object.keys(formData) as (keyof FormData)[]).forEach(key => {
            const value = formData[key as keyof FormData];
            formDataToSend.append(key, value.toString()); // Converte o valor para string
        });
    
        // Adiciona o arquivo de imagem ao FormData
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput.files) {
            const file = fileInput.files[0];
            formDataToSend.append('Foto', file); 
        }
    
        try {
            const response = await axios.post('/api/cadProduto/cadProduto', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage({ type: 'success', text: 'Produto criado com sucesso!' });
            router.push('/telas/principalAdm');
        } catch (error) {
            if (error instanceof Error) {
                setMessage({ type: 'error', text: 'Erro ao criar produto: ' + error.message });
            }
        }
    };
    

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
            setFormData(prev => ({ ...prev, Foto: file.name })); // Aqui apenas armazene o nome da imagem, o arquivo é enviado diretamente no FormData
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
                            id="fileInput"
                            name="Foto"
                            type="file"
                            required
                            className={styles.inputImag}
                            onChange={handleFileChange} // Remova o value aqui
                        />
                        <div onClick={handleDivClick} style={{
                            backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '50%',
                            height: '75%', 
                            border: '1px solid #ccc', 
                            marginTop: '10px', 
                        }}></div>
                        <label htmlFor="fileInput" className={styles.labelImg}>
                            <p className={styles.selectText}>Selecione a imagem do produto 
                                <FontAwesomeIcon
                                    icon={faImage}
                                    style={{ color: "black", width: 18, height: 13 }}
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
                        <div className={`${styles.DescicaoProduto} ${styles.padrao}`}>
                            <label htmlFor='Descricao' className={styles.labelPadrao}>Descrição</label>
                            <textarea 
                                id='Descricao'
                                name='Descricao' 
                                placeholder='Descreva o produto'
                                className={`${styles.inputDesc} ${styles.backgroundInputs} ${montserrat.className}`}
                                required
                                value={formData.Descricao}
                                onChange={handleChange}
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
                                    <div>
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
                                    onChange={handleChange}
                                >
                                    <option value="">Selecione</option>
                                    <option value="Creatina">Creatina</option>
                                    <option value="Whey">Whey</option>
                                    <option value="Promoção">Promoção</option>
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
                                    placeholder='Insira o sabor do produto'
                                    required
                                    value={formData.Sabor}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.a}>
                                <label htmlFor='IdPesoProduto' className={styles.labelPadrao}>Peso do Produto</label>
                                <input 
                                    className={styles.inputMarSab} 
                                    type="text" 
                                    name="Peso_Produto" 
                                    id="IdPesoProduto" 
                                    placeholder='Insira o peso do produto' 
                                    required
                                    value={formData.Peso_Produto}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.a}>
                                <label htmlFor='IdQuantidade' className={styles.labelPadrao}>Quantidade</label>
                                <input 
                                    className={styles.inputMarSab} 
                                    type="number" 
                                    name="Quantidade" 
                                    id="IdQuantidade" 
                                    placeholder='Insira a quantidade do produto'
                                    required
                                    value={formData.Quantidade}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {message && (
                    <div className={styles.message} style={{ color: message.type === 'error' ? 'red' : 'green' }}>
                        {message.text}
                    </div>
                )}
                <div className={styles.divButton}>
                    <button className={styles.submitButton}>Cadastrar Produto</button>
                </div>
            </form>
        </div>
    );
}
