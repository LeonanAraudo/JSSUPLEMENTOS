"use client";
import * as React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { IMaskInput } from 'react-imask';
import Alert from '@mui/material/Alert';
import Link from 'next/link';
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    warning: {
      main: "#FF4D00",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  shape: {
    borderRadius: 7,
  },
});

interface CustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { inputRef, onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(+00) 00 00000-0000" 
        definitions={{
          '0': /[0-9]/,
        }}
        inputRef={inputRef}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

interface FormData {
  Nome: string;
  Senha: string;
  Telefone: string;
}
interface Mensage{
  type: "error" | "sucess";
  action: JSX.Element
}
export default function Cadastrar() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassworde, setShowPassworde] = useState(false);
  const [loadingButon, setLoadingButon] = useState(false); 
  const [messagem, setMessagem] = useState<Mensage | null>(null); 
  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Senha: '',
    Telefone: '',
  });
  const [confirmarSenha, setConfirmarSenha] = useState(''); 
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();
  
  const handleClickShowPassword = () => {
    setShowPassworde(!showPassworde);
  };

  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmarSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.Senha !== confirmarSenha) {
      setMessagem({ type:"error" , action: (<div><Alert severity="error">This is an error Alert.</Alert></div>)});
      return;
    }
    if(formData.Telefone.length < 19){
      setMessage({type:"error",text:'Escreva o telefone no formato (+00) 00 00000-0000'});
      return;
    }
    try {
      const response = await axios.post('/api/user/user', formData);
      setMessage({ type: 'success', text: 'Usuário criado com sucesso!' });
      router.push('/telas/login');
    } catch (error) {
      if (error instanceof Error) {
        setMessage({ type: 'error', text: 'Erro ao criar usuário: ' + error.message });
      }
    }
  };

  return (
    <div>
      <div className={styles.logo}>
        <Image
          src="/suples.png"
          alt="Descrição da Imagem"
          width={300}
          height={163}
        />
      </div>
      <div className={`${montserrat.className} ${styles.centralizador}`}>
        <div className={styles.container}>
          <div className={styles.cadastro}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Cadastro</p>
          </div>
          <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit} className={styles.forme}>
              <Box
                sx={{ '& > :not(style)': { m: 1, width: '29ch' }, }}
                className={styles.box}
              >
                <TextField
                  className={styles.colors}
                  id="nomeUser"
                  name="Nome"
                  label="Nome"
                  color="primary"
                  variant="standard"
                  size="small"
                  onChange={handleChange}
                  value={formData.Nome}
                  required
                />
                <TextField
                  id="telefoneUser"
                  name="Telefone"
                  label="Telefone"
                  color="primary"
                  variant="standard"
                  size="small"
                  value={formData.Telefone}
                  onChange={handleChange}
                  required
                  slotProps={{
                    input: {
                      inputComponent: TextMaskCustom as any, 
                    },
                  }}
                />
                <TextField
                  id="senhaUser"
                  name="Senha"
                  label="Senha"
                  color="primary"
                  type={showPassword ? 'text' : 'password'}
                  variant="standard"
                  size="small"
                  value={formData.Senha}
                  onChange={handleChange}
                  required
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswords}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  id="confirmarSenha"
                  name="ConfirmarSenha"
                  label="Confirmar Senha"
                  color="primary"
                  type={showPassworde ? 'text' : 'password'}
                  variant="standard"
                  size="small"
                  value={confirmarSenha}
                  onChange={handleConfirmarSenhaChange}
                  required
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassworde ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <div className={styles.alingButton}>
                  {loadingButon ? (
                    <LoadingButton
                      type="submit"
                      size="small"
                      loading={loadingButon}
                      variant="outlined"
                      name="loading"
                      sx={{
                        backgroundColor: '#FF4D00',
                        '& .MuiCircularProgress-root': {
                          color: 'white',
                          width: '24px',
                          height: '24px',
                        },
                      }}
                      className={styles.botao}
                    />
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      color="warning"
                      className={styles.botao}
                      sx={{ textTransform: 'none', fontSize: '17px' }}
                    >
                      Cadastrar
                    </Button>
                  )}
                <div className={styles.logar}>
                  <p className={styles.textLogar}>Já possui conta?<span style={{color:'#FF4D00'}}><Link className={styles.hovered} href='/telas/login'>Login</Link></span></p>
                </div>
                </div>
              </Box>
            </form>
          </ThemeProvider>
          {messagem && messagem.action}
          {message && <p className={message.type}>{message.text}</p>}
        </div>
      </div>
    </div>
  );
}
