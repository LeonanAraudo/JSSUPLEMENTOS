import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {montserrat} from '../../fonts';

export default function Login() {
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
                    <form method='post' action={''} className={styles.forme}>
                        <div className={styles.labelInput}>
                            <label htmlFor='nomeUser' className={styles.label}>Nome</label>
                            <input id='nomeUser' className={styles.input} type='text' required/>
                        </div>
                        <div className={styles.labelInput}>
                            <label htmlFor='senhaUser' className={styles.label}>N.Telefone</label>
                            <input id='senhaUser' className={styles.input} type='tel' required/>
                        </div>
                        <div className={styles.labelInput}>
                            <label htmlFor='senhaUser' className={styles.label}>Senha</label>
                            <input id='senhaUser' className={styles.input} type='password' required/>
                        </div>
                        <div className={styles.labelInput}>
                            <label htmlFor='senhaUser' className={styles.label}>Confirmar senha</label>
                            <input id='senhaUser' className={styles.input} type='password' required/>
                        </div>
                        <div>
                            <Link href="/telas/login">
                                <button  type='submit' className={styles.botao}>Cadastrar</button>
                            </Link>
                        </div>
                    </form>
                    
            </div>
        </div>
    </div>

  );
}

