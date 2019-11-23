import React from 'react'
import s from './Messages.module.css'
import Message from './Message/Message'

class Messages extends React.Component {
  render() {
    return (
      <div className={s.messages}>
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    )
  }
}

export default Messages