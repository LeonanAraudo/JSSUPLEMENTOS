"use client";
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { montserrat,openeSans,openSans } from '../../fonts';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [Nome, setUsername] = useState('');
  const [Senha, setPassword] = useState('');
  const router = useRouter();

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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '29ch'} } }
            className={styles.box}
          >
              <TextField 
              id="nomeUser" 
              label="Nome" 
              variant="outlined" 
              color='black'
              size='small'
              onChange={(e) => setUsername(e.target.value)}
              value={Nome}/>
          <TextField
              id='senhaUser'
              name=''
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              size='small'
              color='a'
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
          <div>
            <button type="submit" className={styles.botao}>
              Entrar
            </button>
          </div>
          <div className={styles.notCount}>
            <p style={{ fontWeight: 'bold' }}>Não tem conta?</p>
            <Link className={styles.link} href="/telas/cadastro">
              <p className={styles.colore}>Cadastre-se</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
