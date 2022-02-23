import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={

        <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />    
         
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
