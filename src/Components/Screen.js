import React, { useRef } from "react";
import { useEffect, useContext } from "react";
import { refContext } from "../context/refContext";

const Screen = (props) => {
	let myRef = useRef(null);
	let { addRef, removeRef } = useContext(refContext);

	let { children } = props;
	let { name } = props;

	useEffect(() => {
		addRef({ name, ref: myRef });
		return () => {
			removeRef({ name });
		};
	}, []);

	return (
		<div
			style={{
				minHeight: "100vh",
				width: "100%",
			}}
			ref={myRef}
		>
			{children}
		</div>
	);
};

export default Screen;
