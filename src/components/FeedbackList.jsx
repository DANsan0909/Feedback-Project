import React, { useContext } from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'




function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  if(!feedback || feedback.length ===0){
    return <p>No Feed back Yet</p>
  }
  return (
    <div>
      <AnimatePresence>
        {feedback.map(item=>(  
          <motion.div 
            key={item.id}
            initial={{ opacity: 0}}  
            animate={{ opacity: 1}}  
            exit={{ opacity: 0}}  
          >
              <FeedbackItem key={item.id} item={item}  /> 
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList