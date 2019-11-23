import React from 'react'
import s from './Search.module.css'

class Search extends React.Component {
    render() {
        return (
            <div className={s.search}>
                <input type="text" placeholder="Search contacts..." />
            </div>
        )
    }
}

export default Search
