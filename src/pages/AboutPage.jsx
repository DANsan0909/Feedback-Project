import React from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Card from '../components/shared/Card'
import { useParams } from 'react-router-dom'
import AboutIconLink from '../components/AboutIconLink'

export default function AboutPage() {
  const params = useParams()

  const status =200

  const navigate = useNavigate()

  const onClick = ()=> {
    console.log('useNavigate is working')
    navigate('/about/:name/:lName')
  }
  if(status ===404) <Navigate to='/notFound'/>
  return (
    <Card>
        <div className="about">
            {params.name && params.lName  && <h2> Hi: {params.name} {params.lName}</h2> }

            <h1>About This Project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>
            <p>Thanks for coming {params.name} {params.lName}</p>
            <button onClick={onClick}>navigate Around</button>
            <p>
              <Link to='/'>
                Back to Home 
              </Link>
            </p>
        </div>
        <Routes>
          <Route exact path='/iconLink' element={ <AboutIconLink />}/>
        </Routes>
    </Card>
  )
}
