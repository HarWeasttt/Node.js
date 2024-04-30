import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

const Home = ({socket}) =>{
    const navigate = useNavigate()
    const[user,setUser] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('user',user)
        socket.emit('newUser',{user,socketID:socket.id})
        navigate('/chat')
    }

    return (
        <form onSubmit={handleSubmit} className={style.container}>
            <h2>Inter in chat</h2>
            <label htmlFor='user'></label>
            <input type='text' id='user' value={user} onChange={(e)=>setUser(e.target.value)}
            className={style.userInput}/>
            <button type='submit' className={style.homebtn}></button>
        </form>
    );
};

export default Home;