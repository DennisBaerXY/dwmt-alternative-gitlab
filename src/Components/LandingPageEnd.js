import React from "react";
import "./LandingPageEnd.sass";

const LandingPageEnd = () => {
  return (
    <div className='landingPageEnd'>
      <div className='landingPageEnd__content'>
        <div className='landingPageEnd_imageContainer'>
          <img
            className='landingPageEnd_imageContainer__image'
            src='https://via.placeholder.com/800x500'
            alt='placeholder'
          />
        </div>
        <div className='landingPageEnd__content__text'>
          <h2 className='landingPageEnd__content__text__title'>
            Warum saisonale Ernährung gut ist!
          </h2>
          <p className='landingPageEnd__content__text__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque natus
            provident quidem corrupti quae fugit tenetur. Nam, eum iusto!
            Cupiditate velit beatae recusandae impedit perferendis corrupti ad,
            fugit ipsam quasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageEnd;
