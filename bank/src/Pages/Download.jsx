import Buttons from "../components/Buttons";
import './Download.css'

const Download = () => {
  return (
    <div className="download xs:w-full">
        <div className="download_image">
            <img className="download_image_img" src="/Images/woman.png"/>
        </div>
        <div className="download_card">
          <div className="download_card_inner">
            <div className="download_card_inner__heading">
             <h1 className="download_card_inner_h1">Ready for the Future?</h1>
            <h2 className="download_card_inner_h1">Download The App!</h2>
            </div>
            <div className="download_card_inner_bottom">
             <p className="download_card_inner_bottom_text">Download the banking app to easily manage your finances, check account balances, transfer money, pay bills, and access a range of banking services from your mobile device.</p>
             
               <Buttons />
             
            </div>
          </div>
        </div>
    </div>
  )
}

export default Download