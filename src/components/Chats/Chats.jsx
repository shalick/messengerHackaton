import React from 'react'
import s from './Chats.module.css'
import Chat from './Chat/Chat'

class Chats extends React.Component {
    render() {
        return (
            <div className={s.chats}>
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        )
    }
}


export default Chats