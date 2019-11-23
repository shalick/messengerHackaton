import React from 'react'
import s from './SendMessageForm.module.css'

class SendMessageForm extends React.Component {
  render() {
    return (
      <div className={s.form}>
        <form>
            <textarea></textarea>
            <button>Send</button>
        </form>
      </div>
    )
  }
}


export default SendMessageForm