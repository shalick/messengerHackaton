import React from 'react'
import s from './Search.module.css'

class Search extends React.Component {
    render() {
        return (
            <div className={s.search}>
                <label for="search"><i aria-hidden="true"></i></label>
                <input id='search' type="text" placeholder="Search contacts..." />
            </div>
        )
    }
}


export default Search
