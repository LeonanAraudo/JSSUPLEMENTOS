"use client";

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
                          <p className={styles.selectText}>Selecione a imagem do produto</p>
                    </label>
                </div>
                <div className={styles.segunMetade}>
                    {/* Conteúdo da segunda metade do formulário */}
                </div>
            </form>
        </div>
    );
}
