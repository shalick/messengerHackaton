import React from 'react'
import './App.css'
import Chats from './components/Chats/Chats'
import CurrentChat from './components/CurrentChat/CurrentChat'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Chats />
        <CurrentChat />
      </div>
    )
  }
}


export default App
