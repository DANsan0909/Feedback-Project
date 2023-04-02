import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'


function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={()=>deleteFeedback(item.id)}>x</button>
        <button className='edit' onClick={ ()=> editFeedback(item)}>💱</button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem