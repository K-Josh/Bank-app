

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero___text">
        <h1 className="hero__text__heading">
          Discover Financial Freedom with LegacyLine
        </h1>
        <p className="hero__text__paragraph">Welcome to our bank&apos;s website, where we provide secure financial solutions tailored to meet your unique needs.</p>
        <div className="hero__text__button">
            <button className="hero__text__button__btn1">Open Bank Account</button>
            <button className="hero__text__button__btn2">Learn More</button>
        </div>
        <div className="hero__text__feature">
            <div className="hero__text__feature__feature1">
              <p className="hero__text__feature__feature1__stats">0.1%</p>
              <p className="hero__text__feature__feature1__description">Transaction Fees</p>
            </div>
            <div className="hero__text__feature__feature2">
                <p className="hero__text__feature__feature1__stats">+14%</p>
               <p className="hero__text__feature__feature1__description">Savings Percentage</p>
            </div>
            <div className="hero__text__feature__feature3">
                <p className="hero__text__feature__feature1__stats">+2.9M</p>
                <p className="hero__text__feature__feature1__description">Buisness Owner</p>
            </div>
        </div>
      </div>
      <div className="hero___image">
            <img src="/Images/phone.png" alt="phone" className="hero__image__image1"/>
      </div>
    </div>
  );
};

export default Hero;
