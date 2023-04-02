import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutIconLink() {
  return (
    <Link to={'/about/:name/:lName'}>
        <div className='about-link'>?</div>
    </Link>
  )
}
