import React, { useContext } from "react";
import "./InfoGraphic.sass";
import { userContext } from "../context/userContext";
import CarGif from "../gifs/auto_5.gif";
const InfoGraphic = ({ name }) => {
  const { selection, getEmissionPerKG } = useContext(userContext);

  let mon = [];
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
      <div className='carContainer'>
        {
          // 1 mile = 1.60934 km
          // 1kg co2 are 3.5km
        }
        The car can drive for {getEmissionPerKG(selection) * 3.5}km
        <img src={CarGif} alt='' srcset='' />
      </div>
    </div>
  );
};

export default InfoGraphic;
