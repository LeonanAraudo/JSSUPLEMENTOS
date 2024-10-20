import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import styles from '../../../app/telas/CadastroProduto/cadProd.module.css'
import { montserrat } from "@/app/fonts";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateForm2 } from "../../../../hook/formsProduto/form2/form2";

interface FormDataProps{
    Marca: string,
    Sabor: string,
    Peso_Produto: string,
    Quantidade: string
}
export default function Form2(){

    const { register, handleSubmit } =useForm<FormDataProps>()
  
    async function handleCreateForm2(data: FormDataProps) {
      await useCreateForm2({
        Marca: data.Marca,
        Sabor: data.Sabor,
        Peso_Produto: data.Peso_Produto,
        Quantidade: data.Quantidade
      })

    }
    return(
          <form onSubmit={handleSubmit(handleCreateForm2)} className={styles.secondStep}>
                      <div className={styles.verticalInputs}>
                          <FormControl sx={{ m: 1, width: '50ch'}} variant="standard">
                             <TextField 
                              id="IdMarca"
                              label="Marca"
                              required
                              {...register('Marca')}
                              variant="outlined"
                               />
                          </FormControl>
                          <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
                             <TextField 
                              id="IdSabor" 
                              label="Sabor"
                              required                       
                              {...register('Sabor')}
                              variant="outlined"
                               />
                          </FormControl>
                      </div>
                      <div className={styles.verticalInputs}>
                          <FormControl sx={{ m: 1, width: '50ch'}} variant="standard">
                             <TextField 
                              id="IdPesoProduto" 
                              label="Peso do Produto"
                              required
                             {...register('Peso_Produto')}
                              variant="outlined"
                               />
                          </FormControl>
                          <FormControl sx={{ m: 1, width: '50ch'}} variant="standard">
                             <TextField 
                              id="IdQuantidade" 
                              label="Quantidade"
                              required
                              {...register('Quantidade')}
                              variant="outlined"
                               />
                          </FormControl>
                    </div>             
                    <button type="submit">
                    alerta
                    </button>           
          </form>
    )
}