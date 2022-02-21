import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <div class="contanier">
    <Card>
      
        <h2>About Us</h2>
        <p className="text-center">We build a feedback app</p>
        <div className="text-center">
        <Link to="/">Go to home</Link>
        </div>
        
    </Card>
    </div>
  )
}

export default AboutPage