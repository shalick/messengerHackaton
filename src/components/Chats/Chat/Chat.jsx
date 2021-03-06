import React from 'react'
import s from './Chat.module.css'

class Chat extends React.Component {
    render() {
        return (
            <div className={s.chat}>
                <div className={s.wrap}>
                    <div className={s.avatar}>
                        <span className={s.contactStatus}></span>
                        <img src='https://s2.cdn.teleprogramma.pro/wp-content/uploads/2018/06/54aedcb5033553e2342843bf8b94e8aa.jpg' alt="avatar" />
                    </div>
                    <div className={s.meta}>
                        <p className={s.name}>Louis Litt</p>
                        <p className={s.preview}>You just got LITT up, Mike. You just got LITT up, Mike.You just got LITT up, Mike.You just got LITT up, Mike.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Chat