import React, { useEffect, useState } from "react";
import "./SelectionBox.sass";

const FruiteDisplayButton = ({ fruite, setSelection }) => {
	const [image, setImage] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		//Import the image file asynchronously
		// const fetchImage = async () => {
		// 	try {
		// 		const response = require("../images/" + fruite.image);
		// 		setImage(response.default);
		// 		setLoading(false);
		// 	} catch (error) {
		// 		console.log(error);
		// 		setError(true);
		// 	}
		// };
		// fetchImage();
	}, [fruite.image]);

	useEffect(() => {}, [fruite]);

	if (loading && !error) {
		return (
			<button
				className="selectVegtableRound"
				style={{
					backgroundColor: fruite.color,
				}}
				onClick={() => {
					setSelection(fruite);
				}}
			>
				{fruite.name}
			</button>
		);
	} else {
		console.log(`url(../images/${fruite.image})`);
		return (
			<button
				className="selectVegtableRound"
				style={{
					backgroundColor: fruite.image !== "#" ? `#fff` : fruite.color,
					backgroundImage:
						fruite.image !== "#" ? `url(../images/${fruite.image})` : "",
				}}
				onClick={() => {
					setSelection(fruite);
				}}
			>
				{fruite.image !== "#" ? <></> : <>{fruite.name}</>}
			</button>
		);
	}
};

export default FruiteDisplayButton;
