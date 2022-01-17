import React, { useContext, useRef } from "react";
import "./App.sass";
import ContextDebugPrint from "./Components/ContextDebugPrint";
import Footer from "./Components/Footer";
import InfoScreen from "./Components/InfoScreen";
import LandingPageEnd from "./Components/LandingPageEnd";
import NavBar from "./Components/NavBar";
import SelectionScreen from "./Components/SelectionScreen";

import { userContext } from "./context/userContext";
//Seasions northern hemisphere: Winter, Spring, Summer, Autumn

function App() {
	const { seasion, changeSeasion, selection } = useContext(userContext);
	const scroll = useRef(null);

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
							}}
						>
							Frühling
						</button>
						<button
							className="landingButton"
							onClick={() => {
								changeSeasion("Sommer");
							}}
						>
							Sommer
						</button>
						<button
							className="landingButton"
							onClick={() => {
								changeSeasion("Herbst");
							}}
						>
							Herbst
						</button>
						<button
							className="landingButton"
							onClick={() => {
								changeSeasion("Winter");
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
