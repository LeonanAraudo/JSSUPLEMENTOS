"use client"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { openSans } from '../../app/fonts';
import { useEffect, useState } from 'react';

export default function ArrayList(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      async function fetchPosts() {
        const response = await fetch('/api/getCliente/buscarCliente');
        const data = await response.json();
        setPosts(data);
      }
  
      fetchPosts();
      
    }, []);
    return(
        <>
        {posts.map((post) => (
            <div key={post.User_id} className="w-full flex items-center justify-center flex-col">
            <div className="w-[40%] lex items-center justify-center flex-col ">
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