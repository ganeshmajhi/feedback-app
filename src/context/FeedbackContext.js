import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([])
    useEffect(()=>{
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async() => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
    }

    const [editFeedback, setEditFeedback] = useState([
        {
            item: {},
            edit:false,
        }
    ])
    // Add Feedback
    const addFeedback = async(newFeedback) =>{
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
      }
    // Delete Feedback
    const deleteFeedback = async(id) =>{
        if(window.confirm("Are you sure you want to delete the items?")){
            await fetch(`/feedback/${id}`,{method:'DELETE'})
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    // Update Feedback
    const updateFeedback = async(id, feditem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify(feditem)

        })
        const data = await response.json()
       setFeedback(feedback.map((item)=>(item.id === id ? {
           ...item,...data
       }:item)))
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
    editFeedback,
    deleteFeedback,
    addFeedback,
    feedbackEdit,
    updateFeedback,
    
}}>
    {children}
</FeedbackContext.Provider>
}
export default FeedbackContext