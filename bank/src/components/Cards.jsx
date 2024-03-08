import { BsBank } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import './styles/Cards.css'

export const Cards1 = () => {
  return (
    <div className="benefits__card container">
     <div className="benefits__card__bank">
        <BsBank className="benefits__card__bank__icon"/>
        <h2 className="benefits__card__subheading">Financial Services</h2>
        <p className="benefits__card__bank__text">
        Banks provide a wide range of financial services, including checking and savings accounts, loans, credit cards, and investment production...  
        </p>
        <div className="benefits__card__link">
            <a href="#" className="benefits__card__link__text">Read More</a>
            <FaArrowRightLong className="benefits__card__link__icon active"/>
        </div>
     </div>
     <div className="benefits__card__safety">
       <AiOutlineSafety className="benefits__card__stats__icon"/>
       <h2 className="benefits__card__subheading">Safety and Security</h2>
        <p className="benefits__card__safety__text">
        Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance<br/> Corporation (FDIC.....)  
        </p>
        <div className="benefits__card__link">
            <a href="#" className="benefits__card__link__text">Read More</a>
            <FaArrowRightLong className="benefits__card__link__icon"/>
        </div>
     </div>
     <div className="benefits__card__stats">
       <TfiStatsUp className="benefits__card__stats__icon"/>
       <h2 className="benefits__card__subheading">Economic Stability</h2>
        <p className="benefits__card__stats__text">
        Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance<br/> Corporation (FDIC.....)
        </p>
        <div className="benefits__card__link">
            <a href="#" className="benefits__card__link__text">Read More</a>
            <FaArrowRightLong className="benefits__card__link__icon"/>
        </div>
     </div>
     </div>
  )
}

export const Cards2 = () => {
    return (
        <div className="about_cards">
          <div>
            <p>
            I&apos;ve been using LegacyLine for several years now, and I couldn&apos;t be happier with their services. The mobile banking app they provide is an absolute game-changer. It&apos;s incredibly user-friendly and has made managing my finances a breeze.
            </p>
          </div>
          <div>
            
          </div>
        </div>
    )
}