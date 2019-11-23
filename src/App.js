import React from 'react'
import './App.css'
import CurrentChat from './components/CurrentChat/CurrentChat'
import SidePanel from './components/SidePanel/SidePanel';
import {api} from "./DAL/Api";

class App extends React.Component {
    componentDidMount() {
        api.getToken().then((res)=>{
        })
    }

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
