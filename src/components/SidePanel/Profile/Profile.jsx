import React from 'react'
import s from './Profile.module.css'

class Profile extends React.Component {
    render() {
        return (
            <div className={s.profile}>
                <div class={s.wrap}>
                    <img className={`${s.profileImg} ${s.online}`} src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                    <p>Mike Ross</p>
                </div>
            </div>
        )
    }
}


export default Profile