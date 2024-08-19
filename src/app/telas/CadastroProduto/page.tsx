import Header from "@/componentes/headerAdm";
import styles from "./cadProd.module.css";
import { montserrat } from '../../fonts';

export default function CadastroProd(){
    return(
        <div className={`${montserrat.className} ${styles.container}`}>
            <header>
                 <Header/>
            </header>

            <div className={styles.title}>
                <h2>Cadastrar Produto</h2>
            </div>

            <form className={styles.forme}>
                <div className={styles.primaMetade}>
                    <input className={styles.selectImg} type="file"/>
                </div>
                <div className={styles.segunMetade}>

                </div>
            </form>

        
        </div>
    )
}