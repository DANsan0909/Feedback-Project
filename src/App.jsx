import React, {useState} from 'react'
import {BrowserRouter as Router, Route,Routes  } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'

import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


const App = () => {


  return (
    <FeedbackProvider>
      <Router>
        <div className="App">
          <Header text='Feedback UI' />

          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats/>
                  <FeedbackList /> 
                </> }
              >
              </Route>
              <Route path='/about/:name/:lName/*' element={<AboutPage /> } /> 
            </Routes>
            <AboutIconLink />
            </div>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
