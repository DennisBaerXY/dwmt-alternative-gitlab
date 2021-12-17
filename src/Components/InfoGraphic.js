import React from "react";
import "./InfoGraphic.sass";
const InfoGraphic = ({ name }) => {
  return (
    <div className='infoGraphic'>
      <div className='infoGraphic__title'>
        <h1>{name}</h1>
      </div>
      <div className='infoGraphic__content'>
        <div className='infoGraphic__content__text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisi vel consectetur interdum, nisl nunc aliquet nunc, eget
            egestas nisl nunc euismod nunc. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
        <img
          src='https://via.placeholder.com/300'
          alt='Strawberry'
          className='infoGraphic__content__image'
        />
      </div>
    </div>
  );
};

export default InfoGraphic;
