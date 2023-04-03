import {createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    // Feedback that bein edited
    const [feedbackEditNow, setFeedbackEditNow]= useState({item: {}, edit: false})

    useEffect(()=>{
        fetechFeedback()
    },[])


    // Fetch feedback
    const fetechFeedback = async()=>{
        // using the proxy
        const res = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        // const res = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await res.json()
        // console.log(data)
        setFeedback(data)
        setIsLoading(false)
    } 

    // delte feedback
    const deleteFeedback = async(id)=>{
        if(window.confirm('Are you sure?')){
            await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE'})
            setFeedback( feedback.filter(item=> item.id !== id))
        }
    }

    // add feedback
    const addFeedback = async(newFeedback) => {
        const res = await fetch(`http://localhost:5000/feedback`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        const data = await res.json()
        setFeedback(prev => [data,...prev])             // my way
    }

    // set item to be update
    const editFeedback = (item)=> {
        setFeedbackEditNow({ item, edit:true})
    }

    // Update feedback item
    const updateFeedback = async(id, updItem)=>{
        const res = await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await res.json()

        setFeedback(
            feedback.map(item => (
                item.id === id ? {...item,...data} : item
            ))
        )
    }


    return (
    <FeedbackContext.Provider value={{
        feedback, feedbackEditNow, isLoading,deleteFeedback, addFeedback, editFeedback, updateFeedback}}
    >
            {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext