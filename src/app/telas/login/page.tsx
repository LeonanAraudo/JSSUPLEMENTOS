import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {montserrat} from '../../fonts';

export default function Login() {
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
                <form method='post' action={''} className={styles.forme}>
                    <div className={styles.labelInput}>
                        <label htmlFor='nomeUser' className={styles.label}>Nome</label>
                        <input id='nomeUser' className={styles.input} type='text' required/>
                    </div>
                    <div className={styles.labelInput}>
                        <label htmlFor='senhaUser' className={styles.label}>Senha</label>
                        <input id='senhaUser' className={styles.input} type='password' required/>
                    </div>
                    <div>
                        <Link href="/telas/principalUser">
                            <button  type='submit' className={styles.botao}>Entrar</button>
                        </Link>
                    </div>
                        <div className={styles.notCount}>
                             <p style={{fontWeight:'bold'}}>Não tem conta?</p><Link className={styles.link} href="/telas/caadastro"><p className={styles.colore}>Cadastre-se</p></Link>
                        </div>
                </form>
                
        </div>
    </div>

  );
}

