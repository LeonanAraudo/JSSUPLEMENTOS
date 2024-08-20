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
                          
                          <p className={styles.selectText}>Selecione a imagem do produto <FontAwesomeIcon
                                        icon={faImage}
                                        style={{ color: "white", width: 18,height: 13,  }}
                                        aria-label="Carrinho de compras"
                                    /></p>
                    </label>
                </div>
                <div className={styles.segunMetade}>
                    <div>
                        <label htmlFor='NomeProd'>Nome</label>
                        <input 
                        type='text'
                        placeholder='Insira o nome do produto'
                        name='NomeProduto'
                        id='NomeProd'
                        />
                    </div>
                    <div>
                        <label htmlFor='Descricao'>Descrição</label>
                        <textarea id='Descricao' name='DescProduto'></textarea>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='IdPrecoVenda'>Preço de Venda</label>
                            <div>
                                <p>R$</p>
                            </div>
                            <div>
                                <input type='number' name='namePrecoVenda' id='IdPrecoVenda'/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor='IdPrecoMercado'>Preço de Mercado</label>
                            <div>
                                <p>R$</p>
                            </div>
                            <div>
                                <input type='number' name='namePrecoMercado' id='IdPrecoMercado'/>
                            </div>
                        </div>
                        <div>
                            <select name="Selecione" id="">
                                <label>Tipo de Produto</label>
                                <option>Ame</option>
                            </select>
                        </div>    
                    </div>
                    <div>
                        <div>
                            <label htmlFor="IdMarca">Marca</label>
                            <input type="text" name="nameMarca" id="IdMarca" />
                        </div>
                        <div>
                            <label htmlFor='IdSabor'>Sabor</label>
                            <input type="text" name="nameSabor" id="IdSabor" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='IdPesoProduto'>Peso do Produto</label>
                            <input type="number" name="namePesoProduto" id="IdPesoProduto" />
                        </div>
                        <div>
                            <label htmlFor='IdUnidadesDisponiveis'>Unidades Disponiveis</label>
                            <input type="number" name="nameUnidadesDisponivei" id="IdUnidadesDisponiveis" />
                        </div>
                        <div>
                            <label htmlFor='IdQuantidadeReserva'>Quantidades para reserva</label>
                            <input type="number" name="nameQuantidadeReserva" id="IdQuantidadeReserva" />
                        </div>
                        <div>
                            <label htmlFor='IdDiaReserva'>Dias de reserva</label>
                            <input type="number" name="nameDiaReserva" id="IdDiaReserva" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
