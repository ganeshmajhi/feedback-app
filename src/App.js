import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) =>{
    if(window.confirm("Are you sure you want to delete the items?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback = {feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
