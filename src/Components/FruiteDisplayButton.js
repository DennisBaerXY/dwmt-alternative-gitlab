import React, { useContext, useEffect, useState } from "react";
import "./SelectionBox.sass";

import { refContext } from "../context/refContext";

const FruiteDisplayButton = ({ fruite, setSelection }) => {
	const [image, setImage] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const { addRef, removeRef, getRef, refList } = useContext(refContext);
	const [scrollDown, setscrollDown] = useState(false);

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

	function scrollToNextScreen() {
		if (getRef("infoScreen")) {
			getRef("infoScreen").current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			setscrollDown(false);
		} else {
			setscrollDown(true);
		}
	}

	useEffect(() => {
		if (scrollDown) {
			scrollToNextScreen();
		}
	}, [scrollDown, refList]);

	if (loading && !error) {
		return (
			<button
				className="selectVegtableRound"
				style={{
					backgroundColor: fruite.color,
				}}
				onClick={() => {
					setSelection(fruite);
					setscrollDown(true);
				}}
			>
				{fruite.name}
			</button>
		);
	} else {
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
					setscrollDown(true);
				}}
			>
				{fruite.image !== "#" ? <></> : <>{fruite.name}</>}
			</button>
		);
	}
};

export default FruiteDisplayButton;
