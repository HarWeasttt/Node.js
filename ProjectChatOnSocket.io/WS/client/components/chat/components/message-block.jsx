import React from 'react';
import mstyle from './mstyle.module.css'
import { useState } from 'react';

const MessageBlock =({socket}) =>{
    const [message,setMessage] = useState('')

    const isTyping = () => socket.emit('typing',`${localStorage.getItem('user',isTyping)}`)

    const handleSend = (e) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem('user')){
            socket.emit('message',{
                text:message,
                name:localStorage.getItem('user'),
                id: `${socket.id}-${Math.random()}}`,
                socketID: socket.id
            })
        }
        setMessage('')
    }
    return(
        <div className={mstyle.messageBlock}>
            <form className={mstyle.form} onSubmit={handleSend}>
                <input 
                type="text" 
                className={mstyle.userMessage} 
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                onKeyDown={isTyping}
                />
                <button className={mstyle.btn}>Send</button>
            </form>
        </div>
    )
}

export default MessageBlock;
