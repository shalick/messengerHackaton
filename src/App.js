import React from 'react'
import './App.css'
import Chats from './components/Chats/Chats'
import CurrentChat from './components/CurrentChat/CurrentChat'
import SidePanel from './components/SidePanel/SidePanel';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SidePanel />
        <CurrentChat />
      </div>
    )
  }
}


export default App
