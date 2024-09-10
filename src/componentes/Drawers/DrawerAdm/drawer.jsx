import { useState } from 'react';
import styles from '../../../styleComponents/drawe.module.css';
import {openSans} from '../../../app/fonts';
import {faBars} from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={openSans.className}>
        <div className={styles.afastaMenu} onClick={toggleDrawer}>
        <a className={styles.menuButton}>
          Menu
        </a>
        <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#FF4D00", width: 45,height: 21,cursor:'pointer' }}
            aria-label="Menu"
                />
        </div>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a className={styles.hoverType} href="/telas/CadastroProduto">Cadastrar Produto</a></li>
          <li><a className={styles.hoverType} href="#">Atualizar Produto</a></li>
          <li><a className={styles.hoverType} href="#">Buscar Clientes</a></li>
        </ul>
        <div className={styles.voltarMenu}>
        <button onClick={toggleDrawer} className={styles.fecharMenu}>
            {isOpen} Fechar Menu
        </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
