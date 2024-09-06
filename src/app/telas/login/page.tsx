"use client";
import { useState, FormEvent, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Login() {
  const [Nome, setUsername] = useState('');
  const [Senha, setPassword] = useState('');
  const [loading, setLoading] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    };

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Carregando...</p>
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
        <form onSubmit={handleSubmit} className={styles.forme}>
          <Box
            sx={{ '& > :not(style)': { m: 1, width: '29ch'} }}
            className={styles.box}
          >
              <TextField 
              className={styles.input}
              id="nomeUser" 
              label="Nome" 
              color='a'
              variant="outlined" 
              size='small'
              onChange={(e) => setUsername(e.target.value)}
              value={Nome}
            />
            <TextField
              className={styles.input}
              id='senhaUser'
              label="Senha"
              color='a'
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
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
          <Button type='submit' variant="contained" color="warning" className={styles.botao}>Entrar</Button>
          </div>
          <div className={styles.notCount}>
            <p style={{fontWeight:'bold'}}>Não tem conta?</p>
              <Link className={styles.link} href="/telas/cadastro">
                  <p className={styles.colore}>Cadastre-se</p>
                </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
