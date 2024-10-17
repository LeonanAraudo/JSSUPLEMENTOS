import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import styles from '../../../app/telas/CadastroProduto/cadProd.module.css'
import { montserrat } from "@/app/fonts";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material";

interface FormData {
    Peso_Produto: string;
    Quantidade: number;
    Marca: string;
    Sabor: string;
  }

export default function Form2(){
    const [formData, setFormData] = useState<FormData>({
      Peso_Produto:"",
      Quantidade:0,
      Marca:"",
      Sabor:""
    });

    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const router = useRouter();
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement  >) => {
        const { name, value } = e.target; //desestrutura name e value
        setFormData(prev => ({ ...prev, [name]: value })); // O campo name e atualizado com o novo value
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
    
        // Adiciona os dados do formulário ao FormData
        (Object.keys(formData) as (keyof FormData)[]).forEach(key => {
            const value = formData[key as keyof FormData];
            formDataToSend.append(key, value.toString()); // Converte o valor para string
        });
    
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
    return(
          <form onSubmit={handleSubmit} className={styles.secondStep}>
                      <div className={styles.verticalInputs}>
                          <FormControl sx={{ m: 1, width: '50ch'}} variant="standard">
                             <TextField 
                              name="Marca" 
                              id="IdMarca"
                              label="Marca"
                              required
                              value={formData.Marca}
                              onChange={handleChange}
                              variant="outlined"
                               />
                          </FormControl>
                          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                             <TextField 
                              name="Sabor" 
                              id="IdSabor" 
                              label="Sabor"
                              required
                              value={formData.Sabor}
                              onChange={handleChange}
                              variant="outlined"
                               />
                          </FormControl>
                      </div>
                      <div className={styles.verticalInputs}>
                          <FormControl sx={{ m: 1, width: '50ch'}} variant="standard">
                             <TextField 
                              name="Peso_Produto" 
                              id="IdPesoProduto" 
                              label="Peso do Produto"
                              required
                              value={formData.Peso_Produto}
                              onChange={handleChange}
                              variant="outlined"
                               />
                          </FormControl>
                          <FormControl sx={{ m: 1, width: '50ch'}} variant="standard">
                             <TextField 
                              name="Quantidade" 
                              id="IdQuantidade" 
                              label="Quantidade"
                              required
                              value={formData.Quantidade}
                              onChange={handleChange}
                              variant="outlined"
                               />
                          </FormControl>
                    </div>                        
          </form>
    )
}