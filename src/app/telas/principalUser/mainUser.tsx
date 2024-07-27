import Header from '../../../componentes/header'
import styles from './style1.module.css'
import {montserrat} from '../../fonts';

export default function Main() {
  return (
    <main className={styles.container}> 
    <header className={styles.heder}>
       <Header/>
    </header>
    <div className={styles.slide}>
    </div>
    <nav className={styles.opcoes}>
      <ul className={`${montserrat.className}  ${styles.alinhas}`}>
        <li>
          <a className={styles.pointer}>Whey</a>
        </li>
        <li>
          <a className={styles.pointer}>Creatina</a>
        </li>
        <li className={styles.pointer}>Pré-treino</li>
      </ul>
    </nav>
    <div className={styles.linha}></div>
    <div>
      
    </div>
    </main>
  );
}
