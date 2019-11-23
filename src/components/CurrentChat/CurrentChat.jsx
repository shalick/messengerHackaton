import React from 'react'
import s from './CurrentChat.module.css'
import SendMessageForm from './SendMessageForm/SendMessageForm'

class CurrentChat extends React.Component {
  render() {
    return (
      <div className={s.currentChat}>
        <SendMessageForm />
      </div>
    )
  }
}


export default CurrentChat