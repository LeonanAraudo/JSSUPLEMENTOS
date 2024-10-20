import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import styles from '../../../app/telas/CadastroProduto/cadProd.module.css'
import { montserrat } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material";
import {useForm} from 'react-hook-form'
import useForm1 from "../../../../hook/formsProduto/form1/form1";

 type FormDataProps = {
    Nome: string;
    Preco: string;
    Descricao: string;
    Marca: string;
    Preco_Antes: string;
    Tipo_produto:string;
    Foto: FileList | null;
  }

export default function Form1(){
  const {handleSubmit,register,setValue,onSubmit} = useForm1()
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
        setValue('Foto', event.target.files);
      }
    }
  
    const handleDivClick = () => {
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      fileInput.click();
    };

    
    return(
           <form onSubmit={handleSubmit(onSubmit)} className={`${montserrat.className}`}>
                <div className={styles.forme}>
                    <div className={styles.primaMetade} >
                        <input
                            id="fileInput"
                            type="file"
                            required
                            className={styles.inputImag}
                            {...register('Foto',{
                              onChange: (e) => {
                                  handleFileChange(e); // Chama sua função de manipulação de arquivo
                                  // Aqui, você também pode adicionar lógica adicional, se necessário
                              }}
                              ,)}
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
                            <FormControl sx={{ m: 1, width: '50ch',marginTop:'30px' }} variant="standard">
                             <TextField 
                             id="NomeProd"
                             label="Nome do produto"
                             variant="outlined" 
                             {...register('Nome')}
                             />
                            </FormControl>
                            <FormControl  sx={{ m: 1, width: '50ch'}} variant="standard">
                            <TextField
                                id='Descricao'
                                required
                                label="Descrição do produto"
                                {...register('Descricao')}
                                multiline
                                rows={2}
                                />
                            </FormControl>
                        <div className={styles.dinheiros}>
                            <FormControl fullWidth sx={{ m: 1, width:'166px' }}>
                                <InputLabel htmlFor="IdPrecoVenda">Preço de Venda</InputLabel>
                                <OutlinedInput
                                    id='IdPrecoVenda'
                                    required       
                                    {...register('Preco')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Preço de Venda"
                                />
                                </FormControl> 
                                <FormControl fullWidth sx={{ m: 1, width:'166px' }}>
                                <InputLabel htmlFor="IdPrecoMercado">Preço de Mercado</InputLabel>
                                <OutlinedInput
                                    id='IdPrecoMercado'
                                    required
                                    {...register('Preco_Antes')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Preço de Mercado"
                                />
                                </FormControl>                                                         
                                <FormControl fullWidth sx={{ m: 1, width:'167px' }}>
                                    <InputLabel id="SelectType">Tipo de Produto</InputLabel>
                                    <Select
                                    labelId="SelectType"
                                    id="SelectType" 
                                    {...register('Tipo_produto')}
                                    label='Tipo de Produto'
                                    >
                                    <MenuItem value='Creatina'>Creatina</MenuItem>
                                    <MenuItem value='Whey'>Whey</MenuItem>
                                    <MenuItem value='Promoção'>Promoção</MenuItem>
                                    </Select>
                              </FormControl>
                        </div>
                    </div>
                </div>

                {message && (
                    <div className={styles.message} style={{ color: message.type === 'error' ? 'red' : 'green' }}>
                        {message.text}
                    </div>
                )}
    
               
            </form> 
    )
}