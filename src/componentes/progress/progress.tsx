import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons'; 
import styles from "../../app/telas/CadastroProduto/cadProd.module.css";
import { montserrat, openSans } from '../../app/fonts';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { InputAdornment, InputLabel, MenuItem, OutlinedInput, SvgIcon } from '@mui/material';

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

const steps = ['Primeiro passo', 'Segundo passo', 'Terceiro passo'];

export default function Progress() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <div>
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
      case 1:
        return <div>
          <form onSubmit={handleSubmit} className={styles.secondStep}>
                      <div>
                          <FormControl sx={{ m: 1, width: '50ch',marginTop:'30px' }} variant="standard">
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
                          <FormControl sx={{ m: 1, width: '50ch',marginTop:'30px' }} variant="standard">
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
                          <div>
                          <FormControl sx={{ m: 1, width: '50ch',marginTop:'30px' }} variant="standard">
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
                          <FormControl sx={{ m: 1, width: '50ch',marginTop:'30px' }} variant="standard">
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
        </div>
        
      case 2:
        return <div></div>;
      default:
        return 'Passo desconhecido';
    }
  };

  return (
    <Box sx={{ width: '100%',marginTop:'20px'}}>
      <Stepper activeStep={activeStep} sx={{ width: '60%',marginLeft:'20%'}}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} sx={{color:'black'}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Todos os passos foram completados - você terminou!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Resetar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Voltar
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Pular
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
