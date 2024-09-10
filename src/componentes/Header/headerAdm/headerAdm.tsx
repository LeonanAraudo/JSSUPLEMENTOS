import Image from "next/image";
import styles from '../../../styleComponents/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faAnglesDown} from '@fortawesome/free-solid-svg-icons'; 
import { faUser} from '@fortawesome/free-regular-svg-icons'; 
import {openSans, openeSans} from '../../../app/fonts';
import Drawer from "@/componentes/Drawers/DrawerAdm/drawer";
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
                    <li className={openSans.className}><a className={styles.opt}>Contatos</a></li>
                    <li className={styles.alinhaIconText}>
                        <div className={styles.icon}>
                            <Drawer/>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

