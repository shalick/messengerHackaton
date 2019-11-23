import React from 'react'
import s from './CurrentChat.module.css'
import SendMessageForm from './SendMessageForm/SendMessageForm'
import ChatHeader from './ChatHeader/ChatHeader'
import Messages from './Messages/Messages';

class CurrentChat extends React.Component {
  render() {
    return (
      <div className={s.currentChat}>
        <ChatHeader />
        <Messages />
        <SendMessageForm />
      </div>
    )
  }
}

export default CurrentChat