import React from 'react';
import bstyle from './bstyle.module.css'
import { useNavigate } from 'react-router-dom';
const Body =({messages,status})=>{
    const navigate = useNavigate()

    const handleave=()=>{
        localStorage.removeItem('user')
        navigate('/')
    }
    return(
        <>
            <header className={bstyle.header}>
                <button className={bstyle.btn} onClick={handleave}>Leave chat</button>
            </header>

            <div className={bstyle.container}>
                {
                    messages.map(element=>
                        element.name === localStorage.getItem('user') ? (
                        <div className={bstyle.chats} key={element.id}>
                            <p>You</p>
                            <div className={bstyle.messageSender}>
                                <p>{element.text}</p>
                            </div>
                        </div>
                    ) : (
                    <div className={bstyle.chats} key={element.id}>
                    <p>{element.name}</p>
                    <div className={bstyle.messageRecipient}>
                        <p>{element.text}</p>
                    </div>
                </div>
                ))
                }
            <div className={bstyle.status}>
                <p>{status}</p>
            </div>
                
            </div>
        </>
    )
}

export default Body;
