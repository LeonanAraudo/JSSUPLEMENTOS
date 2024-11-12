"use client"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { openSans } from '../../app/fonts';
import { useEffect, useState } from 'react';
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography:{
    fontFamily:openSans.style.fontFamily
  }
})
export default function ArrayList(){
    const [posts, setPosts] = useState([]);
    const [searchs,SetSearch] = useState('')
    useEffect(() => {
      async function fetchPosts() {
        const response = await fetch('/api/getCliente/buscarCliente');
        const data = await response.json();
        setPosts(data);
      }
  
      fetchPosts();
      
    }, []);

    const filteredPost = posts.filter(post => post.Nome.toLowerCase().includes(searchs.toLowerCase()))
    return(
        <>
        <div className='w-full flex items-center justify-center mb-10'>
         <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',backgroundColor:'#E0E0E0', width: 600,borderRadius:'10px' }}
            >
            <ThemeProvider theme={theme}>
                <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Pesquisar Cliente"
                inputProps={{ 'aria-label': 'Pesquisar Cliente' }}
                value={searchs}
                onChange={(e) => SetSearch(e.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
                </IconButton>
            </ThemeProvider>
        </Box>
        </div>
        
        {filteredPost.map((post) => (
            <div key={post.User_id} className="w-full flex items-center justify-center flex-col">
            <div className="w-[44%] lex items-center justify-center flex-col ">
                <div className="w-full bg-gray-500 h-[1px]"></div>
                <div className='bg-white transition duration-300 cursor-pointer flex flex-row justify-between items-center w-full hover:bg-gray-200'>
                    <p className={`m-3 font-bold ${openSans.className}`}>{post.Nome}</p>
                    <KeyboardArrowRightIcon sx={{fontSize: 30}}/>
                </div>
            </div>
        </div>
        ))}
        
        </>
    )
}