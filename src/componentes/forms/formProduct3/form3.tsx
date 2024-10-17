import { Box, TextField } from "@mui/material";
import styles from '../../../app/telas/CadastroProduto/cadProd.module.css'
export default function Form3(){
    return(
        <form className={styles.ultimoForm}>
            <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <TextField
               sx={{ m: 1, width: '80ch'}}
                id="outlined-multiline-static"
                label="Componentes do Produto"
                multiline
                rows={7}
                />
                <TextField
                sx={{ m: 1, width: '80ch'}}
                id="outlined-multiline-static"
                label="Modo de Usar"
                multiline
                rows={7}
                />
            </Box>
        </form>
    )
}