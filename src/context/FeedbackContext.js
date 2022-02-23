import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This item is from context 1',
            rating:10
        },
         {
            id:2,
            text:'This item is from context 2',
            rating:6
        },
        {
            id:3,
            text:'This item is from context 3',
            rating:3
        }
    ])
    const [editFeedback, setEditFeedback] = useState([
        {
            item: {},
            edit:false,
        }
    ])
    // Add Feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    // Delete Feedback
    const deleteFeedback = (id) =>{
        if(window.confirm("Are you sure you want to delete the items?")){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
      // Edit Feedback
    const feedbackEdit = (item) =>{
        setEditFeedback({
            item,
            edit:true,
        })
    }

return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    feedbackEdit,
    editFeedback
}}>
    {children}
</FeedbackContext.Provider>
}
export default FeedbackContext