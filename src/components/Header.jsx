import React from 'react'

const Header = (props)=> {
    const {text} = props
  return (
    <header className='header'>
        <div>{text}</div>
    </header>
  )
}

export default Header