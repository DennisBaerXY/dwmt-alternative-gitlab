import React, { useContext, useRef } from "react";
import "./InfoGraphic.sass";
import { userContext } from "../context/userContext";
import CarGif from "../gifs/auto_5.gif";
const InfoGraphic = ({ name }) => {
  const { selection, getEmissionPerKG } = useContext(userContext);
  const trackRef = useRef();
  const carRef = useRef();
  const greenTrackRef = useRef();

  const trackStyle = {
    backgroundColor: "#363636",
    width: "100%",
    height: "2rem",

    color: "white",
  };

  function moveCar() {
    const track = trackRef.current;
    const greenTrack = greenTrackRef.current;

    const car = carRef.current;
    const emission = getEmissionPerKG(selection);
    //Calculate the distance the car has to move in px from the emission and the width of the track
    let distance = emission * (track.offsetWidth / 100) * 10;
    const duration = distance / 10;

    console.log(`distance: ${distance}`);
    console.log(`duration: ${duration}`);

    //Color the track green for the distance the car has to move

    //Move the car

    const carAnimation = car.animate(
      [
        { transform: `translateX(0)` },
        { transform: `translateX(${distance}px)` },
      ],
      {
        duration: 100 * duration,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );

    carAnimation.onfinish = () => {
      console.log("animation finished");
      car.style.transform = `translateX(${track.offsetWidth}px)`;
    };

    //Set the green track to the same width as the car has moved
    //Add the car width to the green track distance

    distance += car.offsetWidth / 3;

    greenTrack.style.width = `${distance}px`;

    // const greenTrackAnimation = greenTrack.animate(
    //   [{ width: `0%` }, { width: `${distance}px` }],
    //   {
    //     duration: 100 * duration,
    //     easing: "ease-in-out",
    //     fill: "forwards",
    //   }
    // );

    // greenTrackAnimation.onfinish = () => {
    //   console.log("animation finished");
    //   greenTrack.style.width = `${track.offsetWidth}px`;
    // };
  }

  function resetCar() {
    const car = carRef.current;
    car.animate(
      [{ transform: "translateX(0px)" }, { transform: "translateX(0px)" }],
      {
        duration: 0,
        fill: "forwards",
      }
    );
    const greenTrack = greenTrackRef.current;
    greenTrack.style.width = "0px";
  }

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
        <p className='InfoText'>
          Das Auto kann {(getEmissionPerKG(selection) * 3.5).toFixed(1)}km
          Fahren mit den Emission pro kg von {selection.name}
        </p>

        <img src={CarGif} alt='' srcset='' ref={carRef} />
        {
          //add dashed line to the track
        }

        <div className='track' ref={trackRef} style={trackStyle}>
          <div className='greenTrack' ref={greenTrackRef}>
            <div className='greenTrack__line'></div>
          </div>
        </div>
        <span>
          <button onClick={() => moveCar()}>Play </button>
          <button onClick={() => resetCar()}>Reset </button>
        </span>
      </div>
    </div>
  );
};

export default InfoGraphic;
