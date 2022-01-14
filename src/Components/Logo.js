import React from "react";

const Logo = ({height, width }) => {

	return (
		<div
			style={{
				//Center the logo
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: {width},
				height: {height}
			}}
		>
			<img
				src="images/Logo3.jpg"
				alt=""
				id = "logo"
			>
			</img>
		</div>
	);
};

export default Logo;
