"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-regular-svg-icons'; 
import Header from "@/componentes/headerAdm";
import styles from "./cadProd.module.css";
import { montserrat } from '../../fonts';
import React, { useState, ChangeEvent } from 'react';

export default function CadastroProd() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
        }
    };

    return (
        <div className={`${montserrat.className} ${styles.container}`}>
            <header>
                <Header />
            </header>

            <div className={styles.title}>
                <h2>Cadastrar Produto</h2>
            </div>

            <form className={styles.forme}>
                <div className={styles.primaMetade}>
                        <input
                            onChange={handleFileChange}
                            id="Files"
                            name="selectFile"
                            className={styles.selectImg}
                            type="file"
                        />
                    <label htmlFor="Files" className={styles.labels}>
                      {imageSrc && (
                              <img
                                  src={imageSrc}
                                  alt="Preview"
                                  className={styles.imagePreview}
                              />
                          )}
                          
                          <p className={styles.selectText}>Selecione a imagem do produto 
                            <FontAwesomeIcon
                                        icon={faImage}
                                        style={{ color: "white", width: 18,height: 13,  }}
                                        aria-label="Carrinho de compras"
                                    /></p>
                    </label>
                </div>
                <div className={styles.segunMetade}>
                    <div className={`${styles.NomeProduto} ${styles.padrao}`}>
                        <label htmlFor='NomeProd' className={styles.labelPadrao}>Nome</label>
                        <input 
                        type='text'
                        name='NomeProduto'
                        id='NomeProd'
                        className={`${styles.inputNP} ${styles.backgroundInputs}`}
                        placeholder='Insira o nome do produto'
                        />
                    </div>
                    <div className={`${styles.DescicaoProduto} ${styles.padrao}`} >
                        <label htmlFor='Descricao' className={styles.labelPadrao}>Descrição</label>
                        <textarea 
                        id='Descricao'
                        name='DescProduto' 
                        placeholder='Descreva o produto'
                        className={`${styles.inputDesc} ${styles.backgroundInputs} ${montserrat.className}`}
                        ></textarea>
                    </div>
                    <div className={styles.dinheiros}>
                        <div className={styles.Gap}>
                            <label htmlFor='IdPrecoVenda' className={styles.labelPadrao}>Preço de Venda</label>
                            <div className={`${styles.alingPadrao}`}>
                                <div className={styles.simbolDinheiro}>
                                    <p>R$</p>
                                </div>
                                <div>
                                    <input 
                                    className={styles.moneyInput} 
                                    type='number' 
                                    name='namePrecoVenda' 
                                    id='IdPrecoVenda'/>
                                </div>
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
                                    name='namePrecoMercado' 
                                    id='IdPrecoMercado'/>
                                </div>
                          </div>
                        </div>
                        <div className={styles.Gap}>
                            <label htmlFor='SelectType' className={styles.labelPadraoOut}>Tipo de Produto</label>
                            <select className={styles.optionsTipo} name="Selecione" id="SelectType">
                                <option>Ame</option>
                            </select>
                        </div>    
                    </div>
                    <div className={styles.content}>
                        <div className={styles.padrao}>
                            <label htmlFor="IdMarca" className={styles.labelPadrao}>Marca</label>
                            <input 
                            className={styles.inputMarSab} 
                            type="text" 
                            name="nameMarca" 
                            id="IdMarca" 
                            placeholder='Insira a Marca do produto'
                            />
                        </div>
                        <div className={styles.padrao}>
                            <label htmlFor='IdSabor' className={styles.labelPadrao}>Sabor</label>
                            <input 
                            className={styles.inputMarSab} 
                            type="text" 
                            name="nameSabor" 
                            id="IdSabor" 
                            placeholder='Insira o Sabor do produto'
                            />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.padrao}>
                            <label htmlFor='IdPesoProduto' className={styles.labelPadrao}>Peso do Produto</label>
                            <input 
                            type="text" 
                            name="namePesoProduto" 
                            id="IdPesoProduto" 
                            className={styles.inputNumbers}
                            />
                        </div>
                        <div className={styles.padrao}>
                            <label htmlFor='IdUnidadesDisponiveis' className={styles.labelPadrao}>Unidades Disponiveis</label>
                            <input 
                            type="number" 
                            name="nameUnidadesDisponivei" 
                            id="IdUnidadesDisponiveis" 
                            className={styles.inputNumbers}
                            />
                        </div>
                    </div>
                        <div className={styles.content2}>
                            <div className={styles.padrao}>
                                <label htmlFor='IdQuantidadeReserva' className={styles.labelPadrao}>Quantidades para reserva</label>
                                <input 
                                type="number" 
                                name="nameQuantidadeReserva" 
                                id="IdQuantidadeReserva" 
                                className={styles.inputNumbers}
                                />
                            </div>
                            <div className={styles.padrao}>
                                <label htmlFor='IdDiaReserva' className={styles.labelPadrao}>Dias de reserva</label>
                                <input 
                                type="number" 
                                name="nameDiaReserva" 
                                id="IdDiaReserva" 
                                className={styles.inputNumbers}
                                />
                            </div>
                        </div>
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    );
}
