import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import styles from '../../../app/telas/CadastroProduto/cadProd.module.css'
import { montserrat } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material";

interface FormData {
    Nome: string;
    Preco: string;
    Descricao: string;
    Marca: string;
    Preco_Antes: string;
    Tipo_produto:string;
  }

export default function Form1(){
      const [formData, setFormData] = useState<FormData>({
          Nome: "",
          Preco: "",
          Descricao: "",
          Marca: "",
          Preco_Antes:"",
          Tipo_produto:""
      });
  
      const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
      const router = useRouter();
      const [imageSrc, setImageSrc] = useState<string | null>(null);
  
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement  >) => {
          const { name, value } = e.target; //desestrutura name e value
          setFormData(prev => ({ ...prev, [name]: value })); // O campo name e atualizado com o novo value
      };
  
      const handleSelectChange = (event: SelectChangeEvent<string>) => {
          const { name, value } = event.target;
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
    return(
        <div>
           <form onSubmit={handleSubmit} className={`${montserrat.className}`}>
                <div className={styles.forme}>
                    <div className={styles.primaMetade}>
                        <input
                            id="fileInput"
                            name="Foto"
                            type="file"
                            required
                            className={styles.inputImag}
                            onChange={handleFileChange}
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
                             name="Nome"
                             label="Nome do produto"
                             value={formData.Nome}
                             onChange={handleChange}
                              variant="outlined" />
                            </FormControl>
                            <FormControl  sx={{ m: 1, width: '50ch'}} variant="standard">
                            <TextField
                                id='Descricao'
                                name='Descricao' 
                                required
                                value={formData.Descricao}
                                onChange={handleChange}
                                label="Descrição do produto"
                                multiline
                                rows={2}
                                />
                            </FormControl>
                        <div className={styles.dinheiros}>
                            <FormControl fullWidth sx={{ m: 1, width:'166px' }}>
                                <InputLabel htmlFor="IdPrecoVenda">Preço de Venda</InputLabel>
                                <OutlinedInput
                                    id='IdPrecoVenda'
                                    name='Preco' 
                                    required
                                    value={formData.Preco}
                                    onChange={handleChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Preço de Venda"
                                />
                                </FormControl> 
                                <FormControl fullWidth sx={{ m: 1, width:'166px' }}>
                                <InputLabel htmlFor="IdPrecoMercado">Preço de Mercado</InputLabel>
                                <OutlinedInput
                                    id='IdPrecoMercado'
                                    name='Preco_Antes' 
                                    required
                                    value={formData.Preco_Antes}
                                    onChange={handleChange}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Preço de Mercado"
                                />
                                </FormControl>                                                         
                                <FormControl fullWidth sx={{ m: 1, width:'167px' }}>
                                    <InputLabel id="SelectType">Tipo de Produto</InputLabel>
                                    <Select
                                    labelId="SelectType"
                                    name="Tipo_produto" 
                                    id="SelectType" 
                                    value={formData.Tipo_produto}
                                    onChange={handleSelectChange}
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
        </div>
    )
}