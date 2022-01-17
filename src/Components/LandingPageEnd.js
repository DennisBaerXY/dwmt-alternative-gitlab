import React from "react";
import "./LandingPageEnd.sass";

const LandingPageEnd = () => {
	return (
		<div className="landingPageEnd">
			<div className="landingPageEnd__content">
				<div className="landingPageEnd_imageContainer">
					<div
						className="landingPageEnd_imageContainer__image"
						alt="baum"
					></div>
				</div>
				<div className="landingPageEnd__content__text">
					<h2 className="landingPageEnd__content__text__title">
						Warum saisonale Ernährung gut ist!
					</h2>
					<p className="landingPageEnd__content__text__paragraph">
						Saisonale Ernährung ist nicht nur durch die kürzeren Transportwege,
						den reduzierten Verpackungsmüll und den geringeren Energieverbrauch
						deutlich ökologischer, sondern tatsächlich auch nährstoffreicher und
						geschmacksintensiver, da das Obst und Gemüse erst geerntet wird,
						wenn es reif ist.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPageEnd;
