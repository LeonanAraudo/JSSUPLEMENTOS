"use client"
import styles from './style.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  Nome: string;
  Senha: string;
  Telefone: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    Nome: '',
    Senha: '',
    Telefone: '',
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user', formData);
      setMessage({ type: 'success', text: 'Usuário criado com sucesso!' });
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
            <h2>Cadastro</h2>
          </div>
          <form onSubmit={handleSubmit} className={styles.forme}>
            <div className={styles.labelInput}>
              <label htmlFor='nomeUser' className={styles.label}>Nome</label>
              <input
                id='nomeUser'
                name='Nome'
                className={styles.input}
                type='text'
                required
                value={formData.Nome}
                onChange={handleChange}
              />
            </div>
            <div className={styles.labelInput}>
              <label htmlFor='telefoneUser' className={styles.label}>Telefone</label>
              <input
                id='telefoneUser'
                name='Telefone'
                className={styles.input}
                type='tel'
                required
                value={formData.Telefone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.labelInput}>
              <label htmlFor='senhaUser' className={styles.label}>Senha</label>
              <input
                id='senhaUser'
                name='Senha'
                className={styles.input}
                type='password'
                required
                value={formData.Senha}
                onChange={handleChange}
              />
            </div>
            <div className={styles.labelInput}>
              <label htmlFor='confirmarSenha' className={styles.label}>Confirmar senha</label>
              <input
                id='confirmarSenha'
                name='ConfirmarSenha'
                className={styles.input}
                type='password'
                required
              />
            </div>
            <div>
              <button type='submit' className={styles.botao}>Cadastrar</button>
            </div>
          </form>
          {message && <p className={message.type}>{message.text}</p>}
        </div>
      </div>
    </div>
  );
}
