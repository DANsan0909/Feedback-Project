import {createContext, useState } from 'react'
import {v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
            {id:1,rating:9, text:'lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem'},
            {id:2,rating:10, text:'lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem'},
            {id:3,rating:4, text:'lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem'}
        ]
    )
    // Feedback that bein edited
    const [feedbackEditNow, setFeedbackEditNow]= useState({item: {}, edit: false})

    // delte feedback
    const deleteFeedback = (id)=>{
        if(window.confirm('Are you sure?')){
        setFeedback( feedback.filter(item=> item.id !== id))
        }
    }

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id =uuidv4()
        setFeedback(prev => [newFeedback,...prev])             // my way
    }

    // set item to be update
    const editFeedback = (item)=> {
        setFeedbackEditNow({ item, edit:true})
    }

    // Update feedback item
    const updateFeedback = (id, updItem)=>{
        setFeedback(
            feedback.map(item => (
                item.id === id ? {...item,...updItem} : item
            ))
        )
    }


    return (
    <FeedbackContext.Provider value={{
        feedback, feedbackEditNow,deleteFeedback, addFeedback, editFeedback, updateFeedback}}
    >
            {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext