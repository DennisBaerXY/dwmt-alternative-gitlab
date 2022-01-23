import React, { useContext, useRef } from "react";
import "./InfoGraphic.sass";
import { userContext } from "../context/userContext";
import CarGif from "../gifs/car.gif";
const InfoGraphic = ({ name }) => {
	const { selection, getEmissionPerKGMonth, month } = useContext(userContext);
	const trackRef = useRef();
	const carRef = useRef();
	const greenTrackRef = useRef();

	const trackStyle = {
		backgroundColor: "#363636",
		width: "100%",
		height: "2rem",
		color: "white",
	};

	//Moves the Car with an animation
	function moveCar() {
		const track = trackRef.current;
		const greenTrack = greenTrackRef.current;

		const car = carRef.current;
		const emission = getEmissionPerKGMonth(selection, month);

		//Max distance is the max emission per month + max emission per month / 2
		let maxEmissionMonths = selection.carbonEmissionPerMonthPerKG;

		//Finds the Max emission per month
		let maxEmission = Math.max(...Object.values(maxEmissionMonths));

		//Max distance is the track.offsetWidth  * scale from 0 to 1 (0 is the start and 1 is the end)
		let carDistance = (emission / maxEmission) * track.offsetWidth;

		const duration = carDistance / 2;

		// console.log(`distance: ${distance}`);
		// console.log(`duration: ${duration}`);

		const carAnimation = car.animate(
			[
				{ transform: `translateX(0) ` },
				{ transform: `translateX(${carDistance}px)` },
			],
			{
				duration: duration * 10,
				easing: "ease-in-out",
				fill: "forwards",
			}
		);

		carAnimation.onfinish = () => {
			console.log("animation finished");
			car.style.transform = `translateX(${track.offsetWidth}px)`;
		};

		let distance = car.offsetWidth / 2 + carDistance;

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
			[{ transform: "translateX(0px)" }, { transform: "translateX(0px) " }],
			{
				duration: 0,
				fill: "forwards",
			}
		);
		const greenTrack = greenTrackRef.current;
		greenTrack.style.width = "0px";
	}

	return (
		<div className="infoGraphic">
			<img
				src={`./images/${selection.infoGraphic}`}
				alt="baum"
				className="infoImage"
			/>

			<div className="carContainer">
				{
					// 1 mile = 1.60934 km
					// 1kg co2 are 3.5km
				}

				<img
					src={CarGif}
					alt=""
					ref={carRef}
					className="car"
					onClick={() => {
						moveCar();
					}}
				/>

				{
					//add dashed line to the track
				}

				<div className="track" ref={trackRef} style={trackStyle}>
					<div className="greenTrack" ref={greenTrackRef}>
						<div className="greenTrack__line"></div>
					</div>
				</div>

				<div className="InfoText">
					Das Auto kann{" "}
					{(getEmissionPerKGMonth(selection, month) * 3.5).toFixed(1)}km Fahren
					im {month}
					mit den Emission pro kg von {selection.name} in diesem Monat.
				</div>

				<div className="graphicButtons">
					<button onClick={() => moveCar()}>Play </button>
					<button onClick={() => resetCar()}>Reset </button>
				</div>
			</div>
			{/* end carContainer */}
		</div>
	);
};

export default InfoGraphic;
