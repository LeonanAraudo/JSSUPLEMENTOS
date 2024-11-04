"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'; // Ícone de menu
import Link from 'next/link';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
type Anchor = 'right'; // Aqui definimos o tipo como 'right'

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false, // Mantém o estado apenas para o 'right'
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
    sx={{width:'300px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <CloudUploadIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                <Link href='/telas/CadastroProduto'>
                  Cadastrar Produto
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <BorderColorIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                <Link href='/telas/CadastroProduto'>
                    Atualizar Produto
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <PersonSearchIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>
                <Link href='/telas/CadastroProduto'>
                  Buscar Cliente
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer('right', true)}>
          <MenuIcon sx={{ color: '#e2d9d9' }} />
        </IconButton>
        <Drawer
          anchor="right" 
          open={state.right}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
