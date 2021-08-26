import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        <header className='header'>
             <h1>{title}</h1>
             <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
