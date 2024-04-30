import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import Body from './components/body';
import MessageBlock from './components/message-block';
import style from './style.module.css'

const ChatPage = ({socket}) => {
    const [messages,setMessages] = useState([])
    const [status, setStatus] = useState('')

    useEffect(()=>{
        socket.on('response',(data)=> setMessages([...messages,data]))
    },[socket,messages])

    useEffect(()=>{
        socket.on('responseTyping',(data)=>{
        setStatus(data + '...')
        setTimeout(()=> setStatus(''),1000)}
    )
    },[socket])
    return (
        <div className={style.chat}>
            <Sidebar socket={socket}/>
            <main className={style.main}>
                <Body messages={messages} status={status}/>
                <MessageBlock socket={socket}/>
            </main>
        </div>
    );
};

export default ChatPage;