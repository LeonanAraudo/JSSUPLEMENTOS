"use client"
import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { montserrat } from '../../fonts';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'; 

export default function Login() {
  const [Nome, setUsername] = useState('');
  const [Senha, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', {
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
                <div className={styles.labelInput}>
                    <label htmlFor='nomeUser' className={styles.label}>Nome</label>
                    <input
                      id='nomeUser'
                      className={styles.input}
                      type='text'
                      required
                      onChange={(e) => setUsername(e.target.value)}
                      value={Nome}
                    />
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor='senhaUser' className={styles.label}>Senha</label>
                    <input
                      id='senhaUser'
                      className={styles.input}
                      type='password'
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      value={Senha}
                    />
                </div>
                <div>
                    <button type='submit' className={styles.botao}>Entrar</button>
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
