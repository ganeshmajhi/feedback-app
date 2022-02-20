import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
function FeedbackForm() {
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

  return (
      <Card>
          <form>
            <h2>How would you rate our service?</h2>
            {/* {@todo - rating select component} */}
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