import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import feedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import {FeedbackContext, FeedbackProvider} from './context/FeedbackContext'

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
    <FeedbackProvider>
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={

        <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats />
        <FeedbackList handleDelete={deleteFeedback}/>    
         
        </div>
         
      }>
        
      
      </Route>
      <Route path='/about' element={

          <AboutPage/>

      }/>
       
      </Routes>
      <AboutIconLink/>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
