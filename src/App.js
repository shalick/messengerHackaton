import React from 'react'
import './App.css'
import Chats from './components/Chats/Chats'
import CurrentChat from './components/CurrentChat/CurrentChat'
import {api} from "./DAL/Api";

class App extends React.Component {
    componentDidMount() {
        debugger
        api.getToken().then((res)=>{
            debugger;
        })
    }

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
