/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.sass";
import React from "react";
import Logo from "./Logo.js";

const navBar = ({ displaySeason }) => {
	return (
		<div className="TopBar">
			<div className="TopBar_Logo">
				<Logo width={"10rem"} />
			</div>
			<div className="TopBar_Nav">
				{displaySeason ? (
					// eslint-disable-next-line jsx-a11y/anchor-is-valid
					<a href="#">
						<p className="NormalDisplayText">
							<span>{`${displaySeason}   Saison`}</span>
						</p>
					</a>
				) : (
					<>
						<p className="NormalDisplayText">Wähle eine Saison</p>
						{/* <ul className="TopBar_Nav_ul_seasons">
							<li>Frühling</li>
							<li>Sommer</li>
							<li>Herbst</li>
							<li>Winter</li>
						</ul> */}
					</>
				)}
			</div>

			<a href="#">
				<button className="backToLandingPage">Startseite</button>
			</a>
		</div>
	);
};

export default navBar;
