import React, { useEffect, useState } from "react";
import sstyle from './sstyle.module.css'

const Sidebar =({socket})=>{
    const [users,setUsers] = useState([])
    useEffect(()=>{
        socket.on('responseNewUser',(data)=>setUsers(data))
    },[socket,users])
    return(
        <div className={sstyle.sidebar}>
            <h3 className={sstyle.header}>Users</h3>
            <ul className={sstyle.users}>
                {users.map(element=>(<li key={element.socketID}>{element.user}</li>))}
            </ul>
        </div>
    )
}

export default Sidebar;