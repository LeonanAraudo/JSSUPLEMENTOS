"use client";
import { useState, FormEvent, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { montserrat,openeSans } from '../../fonts';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import { bouncy } from 'ldrs'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

bouncy.register()

const theme = createTheme({
  palette:{
    primary:{
      main:"#000000"
  },
    warning:{
      main:"#FF4D00"
    }
  },
  typography: {
    fontFamily: montserrat.style.fontFamily
  },
  shape:{
    borderRadius:7
  }
  
});


export default function Login() {
  const [Nome, setUsername] = useState('');
  const [Senha, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingButon, setLoadingButon] = useState(false);  
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    return () => clearTimeout(timer); 
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    };
  
   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingButon(true);
    try {
      const response = await axios.post('/api/login/login', {
        Nome,
        Senha
      });
      if (response.status === 200) {
        router.push('/telas/principalUser');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;
        alert(data?.error || 'Ocorreu um erro');
      } else {
        alert('Ocorreu um erro');
      }
    }finally {
      setLoadingButon(false); 
    }
  };
  if (loading) {
    return (
      <div className={styles.loading}>
        <l-bouncy
          size="45"
          speed="1.75" 
          color="black" 
        ></l-bouncy>
        
      </div>
    );
  }

  return (
    <div className={`${montserrat.className} ${styles.centralizador}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/vertical.png"
            alt="Descrição da Imagem"
            width={300}
            height={163}
          />
        </div>
        <ThemeProvider theme={theme}>

        <form onSubmit={handleSubmit} className={styles.forme}>
          <Box
            sx={{ '& > :not(style)': { m: 1, width: '29ch'},  }}
            className={styles.box}
          >
              <TextField 
              className={styles.input}
              id="nomeUser" 
              label="Nome" 
              color='primary'
              variant="standard" 
              size='small'
              required
              onChange={(e) => setUsername(e.target.value)}
              value={Nome}
            />
            <TextField
              className={styles.input}
              id='senhaUser'
              label="Senha"
              color='primary'
              required
              type={showPassword ? 'text' : 'password'}
              variant="standard"
              size='small'
              onChange={(e) => setPassword(e.target.value)}
              value={Senha}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <div className={styles.afasta}>
   
         { loadingButon ? (
          <LoadingButton
          type='submit' 
          size="small" //true
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
        > </LoadingButton>) : (
            <Button //false
            type='submit' 
            variant="contained" 
            color="warning"  
            className={styles.botao}
            sx={{ textTransform: 'none', fontSize:'17px' }}
            >Entrar
          </Button>
          )        
          }
          
          </div>

          <div className={styles.notCount}>
            <p style={{fontWeight:'bold'}}>Não tem conta?</p>
              <Link className={styles.link} href="/telas/cadastro">
                  <p className={styles.colore}>Cadastre-se</p>
              </Link>
          </div>
        </form>
        </ThemeProvider>
      </div>
    </div>
  );
}
