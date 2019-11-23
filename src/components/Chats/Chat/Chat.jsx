import React from 'react'
import s from './Chat.module.css'

class Chat extends React.Component {
    render() {
        return (
            <div className={s.chat}>
                <div className={s.avatar}>
                   <img src='' alt="avatar"/>
                </div>
                <div className={s.name}></div>
                <div className={s.lastMessageTime}></div>
                <div className={s.lastMessageBody}></div>
            </div>
        )
    }
}


export default Chat