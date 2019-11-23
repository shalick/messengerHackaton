import React from 'react'
import s from './ChatHeader.module.css'

class ChatHeader extends React.Component {
  render() {
    return (
      <div className={s.chatHeader}>
        <p className={s.name}>Tima</p>
        <p className={s.lastSeenTime}>last seen just now</p>
      </div>
    )
  }
}


export default ChatHeader