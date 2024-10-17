import { Box, TextField } from "@mui/material";

export default function Form3(){
    return(
        <form>
            <Box>
            <TextField
                id="outlined-multiline-static"
                label="Componentes do Produto"
                multiline
                rows={7}
                />
                <TextField
                id="outlined-multiline-static"
                label="Modo de Usar"
                multiline
                rows={7}
                />
            </Box>
        </form>
    )
}