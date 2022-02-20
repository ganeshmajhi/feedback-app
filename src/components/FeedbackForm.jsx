import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e)=>{
        setText(e.target.value)
    }

  return (
      <Card>
          <form>
            <h2>How would you rate our service?</h2>
            {/* {@todo - rating select component} */}
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"/>
                <Button type="submit" version='secondary'>Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm