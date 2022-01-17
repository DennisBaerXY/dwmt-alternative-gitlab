import React, { useRef, useState } from "react";
import { useContext } from "react";
const refContext = React.createContext({});

const RefContext = (props) => {
	const { children } = props;
	let [refList, setRefList] = useState({});

	const addRef = ({ name, ref }) => {
		console.log("addRef", name, ref);
		setRefList({
			...refList,
			[name]: ref,
		});
	};

	const removeRef = ({ name }) => {
		let newRefList = { ...refList };
		delete newRefList[name];
		setRefList(newRefList);
	};

	const getRef = (name) => {
		return refList[name];
	};

	let options = {
		refList,
		addRef,
		removeRef,
		getRef,
	};
	const context = useContext(refContext);
	return <refContext.Provider value={options}>{children}</refContext.Provider>;
};

export default RefContext;
export { refContext, RefContext };
