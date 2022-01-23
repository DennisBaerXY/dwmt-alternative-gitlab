import React from "react";
import "./Footer.sass";
import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="SiteFooter">
			{
				//Create a thin line to separate the footer from the rest of the page
			}
			<hr className="footerLine" />

			<div className="footerLogoContainer">
				<Logo fontColor={"#000"} />
			</div>
			<div className="SiteFooter__content">
				<ul className="SiteFooter_listContainer">
					<li>Startseite</li>
					<li>Impressum</li>
					<li>Quellen</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
