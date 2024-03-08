import { FaCircleArrowRight, FaCircleArrowLeft } from 'react-icons/fa6'
import './About.css'

const About = () => {
  return (
    <div className='about'>
     <div className='about_heading'>
       <h1>What Our Clients Say About Us</h1>
       <span className='about_heading_icons'>
        <span><FaCircleArrowLeft className='about_heading_icons1'/></span>
        <span><FaCircleArrowRight className='about_heading_icons2'/></span>
       </span>
     </div>
     <div>

     </div>
    </div>
  )
}

export default About