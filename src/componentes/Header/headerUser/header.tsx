import Image from "next/image";
import styles from '../../../styleComponents/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faAnglesDown} from '@fortawesome/free-solid-svg-icons'; 
import { faUser} from '@fortawesome/free-regular-svg-icons'; 
import {openSans, openeSans} from '../../../app/fonts';
import DropdownMenuDemo from "../Contatos/contatos";
import Link from "next/link";
export default function Header () {
    return (
        <>
        <header className={styles.heade}>
            <div className={styles.logo}>
                <Link href={"/telas/principalUser"}>
                <Image
                    src='/suples.png'
                    width={300} 
                    height={150}
                    alt='Logo image'
                />
                </Link>
            </div>
            <div className={styles.altur}>
                <input className={styles.inpu} type="search" />
            </div>
            <nav className={styles.estencao}>
                <ul className={styles.opcoes}>
                    <li className={openSans.className}><a className={styles.opt}>Home</a></li>
                    <li className={openSans.className}><a className={styles.opt}>Categorias</a></li>
                    <li className={openSans.className}><a className={styles.opt}><DropdownMenuDemo/></a></li>
                    <li className={styles.alinhaIconText}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{ color: "#FF4D00", width: 45,height: 21 }}
                                aria-label="User"
                            />
                        </div>
                        <div className={styles.alinha}>
                            <p className={`${openSans.className} ${styles.noTem}`}>Faça <a href="/telas/login" className={styles.cadastre}>Login</a> ou</p>
                            <a className={`${openSans.className} ${styles.cadastre}`} href="/telas/cadastro">Cadastre-se</a>
                        </div>
                    </li>
                    <li>
                        {/* <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{ color: "#ff8b00", width: 25,height:21, cursor: 'pointer', }}
                            aria-label="Carrinho de compras"
                        /> */}
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

