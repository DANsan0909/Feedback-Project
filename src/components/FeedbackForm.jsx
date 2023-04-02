import React, {useContext, useEffect, useState} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

export default function FeedbackForm( ) {
    const { addFeedback, feedbackEditNow, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msg, setMsg] = useState('')


    useEffect(()=> {
        if(feedbackEditNow.edit) {
            setBtnDisabled(false)
            setText(feedbackEditNow.item.text)
            setRating(feedbackEditNow.item.Rating)
        }

    },[feedbackEditNow])

    const handleTextChange = (e)=> {
        if(text === ''){
            setBtnDisabled(true)
            setMsg(null)
        } else if( text !== ''&& text.trim().length <=10){
            setMsg('Text must be at lease 10 characters')
            setBtnDisabled(true)
        } else {
            setMsg(null)
            setBtnDisabled(false)
        }
        
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            // update or add new item
            feedbackEditNow.edit? updateFeedback(feedbackEditNow.item.id, newFeedback) : addFeedback(newFeedback)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component */}
                <RatingSelect select={(rating)=> setRating(rating)} />
                <div className="input-group">
                    <input type="text" value={text} onChange={handleTextChange} placeholder='Write a review' />
                    <Button type='submit' version='secondary' isDisabled={btnDisabled}>Submit</Button>
                </div>
                {msg && <div className='message'>{msg}</div>}
            </form>
        </Card>
    )
}
