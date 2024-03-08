import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import './styles/Button.css'

 const Buttons = () => {
  return (
    <div className="download_card_inner_bottom_buttons">
        <button className="download_card_inner_bottom_buttons1">
                 <div className="download_card_inner_bottom_button1_content">
                  <IoLogoGooglePlaystore className="download_card_icon"/>
                  <span className="download_card_button_text">
                     <span className="first_text">Get it on</span>
                     <span className="second_text">Google Play</span>
                     </span>
                 </div>
               </button>
               <button className="download_card_inner_bottom_buttons2">
                 <div className="download_card_inner_bottom_button1_content">
                  <FaApple className="download_card_icon"/>
                  <span className="download_card_button_text">
                     <span className="first_text_button2">Download on the</span>
                     <span className="second_text">App Store</span>
                     </span>
                 </div>
               </button>
    </div>
  )
}

export default Buttons