import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'

export default function SearchInput() {
  return (
    <Box
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',backgroundColor:'#E0E0E0', width: 600,borderRadius:'10px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar Cliente"
        inputProps={{ 'aria-label': 'Pesquisar Cliente' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
