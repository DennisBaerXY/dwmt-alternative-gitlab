import React, { useContext, useRef } from "react";
import "./App.sass";
import ContextDebugPrint from "./Components/ContextDebugPrint";
import Footer from "./Components/Footer";
import InfoScreen from "./Components/InfoScreen";
import LandingPageEnd from "./Components/LandingPageEnd";
import NavBar from "./Components/NavBar";
import SelectionScreen from "./Components/SelectionScreen";

import { useState, useEffect } from "react";

import { userContext } from "./context/userContext";
import { refContext } from "./context/refContext";
//Seasions northern hemisphere: Winter, Spring, Summer, Autumn

function App() {
	const { seasion, changeSeasion, selection } = useContext(userContext);
	const { addRef, removeRef, getRef, refList } = useContext(refContext);
	const [clickedToGoDown, setclickedToGoDown] = useState(false);

	function scrollToSelectionScreen() {
		if (getRef("selectionScreen")) {
			getRef("selectionScreen").current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			setclickedToGoDown(false);
		} else {
			setclickedToGoDown(true);
		}
	}

	useEffect(() => {
		if (clickedToGoDown) {
			scrollToSelectionScreen();
		}
	}, [clickedToGoDown, refList]);

	return (
		//Main Page
		<div className="App">
			<NavBar displaySeason={seasion} />
			<section className="startMedia">
				<div className="landingPageHeaderContainer">
					<h1 className="saisoDecoFont">Saiso</h1>
					<div>
						<button
							className="landingButton "
							onClick={() => {
								changeSeasion("Frühling");
								setclickedToGoDown(true);
							}}
						>
							Frühling
						</button>
						<button
							className="landingButton"
							onClick={() => {
								changeSeasion("Sommer");
								setclickedToGoDown(true);
							}}
						>
							Sommer
						</button>
						<button
							className="landingButton"
							onClick={() => {
								changeSeasion("Herbst");
								scrollToSelectionScreen();
							}}
						>
							Herbst
						</button>
						<button
							className="landingButton"
							onClick={() => {
								changeSeasion("Winter");
								scrollToSelectionScreen();
							}}
						>
							Winter
						</button>
					</div>
				</div>
			</section>
			{
				//<ContextDebugPrint />
			}
			{seasion ? (
				<>
					<SelectionScreen />
					{selection.name ? <InfoScreen /> : <></>}
				</>
			) : (
				<></>
			)}
			<LandingPageEnd />
			<Footer />
		</div>
	);
}

export default App;
