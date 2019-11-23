import React from 'react'
import './App.css'
import Chats from './components/Chats/Chats'
import CurrentChat from './components/CurrentChat/CurrentChat'
import {api} from "./DAL/Api";
import openSocket from "socket.io";

class App extends React.Component {
    async componentDidMount() {
       /* debugger*/
        await api.getToken().then((res)=>{
            localStorage.setItem('token', res.data)
            /*debugger;*/
        })
        const socket = openSocket('http://messenger-hackathon.herokuapp.com');
        socket.on('get-chats-success', (chats)=>{console.log(chats)});
        socket.emit("get-chats", {token: localStorage.getItem("token")})
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
