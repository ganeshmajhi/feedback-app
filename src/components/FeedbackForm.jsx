import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackForm() {
    const {addFeedback, editFeedback, updateFeedback} = useContext(FeedbackContext)
    useEffect(()=>{
        if(editFeedback.edit === true){
            setBtnDisabled(false)
            setText(editFeedback.item.text)
            setReting(editFeedback.item.rating)
        }
    },[editFeedback])
    const [text, setText] = useState('')
    const [rating, setReting] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const handleTextChange = (e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <=10){
            setBtnDisabled(true)
            setMessage('Text must be atleast more than 10 characters')
        } else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(editFeedback.edit === true){
                updateFeedback(editFeedback.item.id, newFeedback)
            }else{
            addFeedback(newFeedback)
            }

            setText('')
        }

        
    }

  return (
      <Card>
          <form onSubmit={handleSubmit}>
            <h2>How would you rate our service?</h2>
            <RatingSelect select={(rating)=>setReting(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"/>
                <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
            </form>
        </Card>
  )
}

export default FeedbackForm