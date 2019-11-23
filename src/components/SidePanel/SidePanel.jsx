import React from 'react'
import s from './SidePanel.module.css'
import Chats from '../Chats/Chats';
import Profile from './Profile/Profile';
import Search from './Search/Search';

class SidePanel extends React.Component {
    render() {
        return (
            <div className={s.sidePanel}>
                <Profile />
                <Search />
                <Chats />
            </div>
        )
    }
}


export default SidePanel