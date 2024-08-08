import Image from "next/image";
import styles from '../styleComponents/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import {montserrat} from '../app/fonts';

export default function Header () {
    return (
        <>
        <header className={styles.heade}>
            <div className={styles.logo}>
                <Image
                    src='/suples.png'
                    width={300} 
                    height={150}
                    alt='Logo image'
                />
            </div>
            <div className={styles.altur}>
                <input className={styles.inpu} type="search" />
            </div>
            <nav className={styles.estencao}>
                <ul className={styles.opcoes}>
                    <li>
                        <div className={styles.alinha}>
                            <p className={`${montserrat.className} ${styles.noTem}`}>Não tem conta?</p>
                            <a className={`${montserrat.className} ${styles.cadastre}`} href="#">Cadastre-se</a>
                        </div>
                    </li>
                    <li>
                        <a className={`${montserrat.className} ${styles.opc}`} href="#">Inicio</a>
                    </li>
                    <li>
                        <a className={`${montserrat.className} ${styles.opc}`} href="#">Contatos</a>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "#ff8b00", width: 25, cursor: 'pointer', }}
                            aria-label="Carrinho de compras"
                        />
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

