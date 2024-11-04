"use client"
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { openSans } from '../../app/fonts'

const theme = createTheme({
  typography:{
    fontFamily:openSans.style.fontFamily
  }
})
export default function SearchInput() {
  return (
    <Box
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',backgroundColor:'#E0E0E0', width: 600,borderRadius:'10px' }}
    >
      <ThemeProvider theme={theme}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Pesquisar Cliente"
          inputProps={{ 'aria-label': 'Pesquisar Cliente' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </ThemeProvider>
    </Box>
  );
}
