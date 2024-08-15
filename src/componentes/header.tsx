import Image from "next/image";
import styles from '../styleComponents/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faAnglesDown} from '@fortawesome/free-solid-svg-icons'; 
import { faUser} from '@fortawesome/free-regular-svg-icons'; 
import {openSans} from '../app/fonts';

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
                    <li className={styles.alinhaIconText}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{ color: "#ff8b00", width: 45,height: 21 }}
                                aria-label="User"
                            />
                        </div>
                        <div className={styles.alinha}>
                            <p className={`${openSans.className} ${styles.noTem}`}>Faça <a href="/telas/login" className={styles.cadastre}>Login</a> ou</p>
                            <a className={`${openSans.className} ${styles.cadastre}`} href="/telas/cadastro">Cadastre-se</a>
                        </div>
                    </li>
                    <li className={styles.alinhaTexts}>
                       <div className={styles.icon}>
                            <p  className={`${openSans.className} ${styles.noTem}`}>Fale conosco</p>
                       </div>
                        <div className={styles.alinha2}>
                            <div>
                                <a className={`${openSans.className} ${styles.cadastre}`} href="#">Contatos</a>
                            </div>
                            <div>
                                <FontAwesomeIcon
                                        icon={faAnglesDown}
                                        style={{ color: "#ff8b00", width: 18,height: 13, cursor: 'pointer',marginTop:5 }}
                                        aria-label="Carrinho de compras"
                                    />
                            </div>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "#ff8b00", width: 25,height:21, cursor: 'pointer', }}
                            aria-label="Carrinho de compras"
                        />
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

