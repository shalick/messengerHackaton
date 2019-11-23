import React from 'react'
import './App.css'
import CurrentChat from './components/CurrentChat/CurrentChat'
import SidePanel from './components/SidePanel/SidePanel';
import {api} from "./DAL/Api";
import openSocket from "socket.io-client";

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
    };

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
