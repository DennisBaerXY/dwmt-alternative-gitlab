//Import d3
import React from "react";
import "./FruiteEmissionGraph.sass";
import { useEffect, useRef, useState, useContext } from "react";
import * as d3 from "d3";
import { schemeGnBu } from "d3";
import { userContext } from "../context/userContext";

const FruiteEmissionGraph = ({
	//array of month numbers [1,2,3,4,5,6,7,8,9,10,11,12]
	passed,
}) => {
	const ref = useRef();
	const { selection } = useContext(userContext);

	const [componentHeight, setComponentHeight] = useState(0);
	const [componentWidth, setComponentWidth] = useState(0);
	const [localData, setLocalData] = useState([]);
	const [localSelectedMonths, setLocalSelectedMonths] = useState([]);

	useEffect(() => {
		const { emissionsMonthArray, selectedMonths } = passed;

		let displayedMonths = [];

		for (let monthIndex in selectedMonths) {
			displayedMonths.push(emissionsMonthArray[selectedMonths[monthIndex] - 1]);
		}

		setLocalData(displayedMonths);
		setLocalSelectedMonths(selectedMonths);
	}, [passed]);

	useEffect(() => {
		setComponentHeight(ref.current.clientHeight);
		setComponentWidth(ref.current.clientWidth);
	}, [ref, document.body.clientWidth, document.body.clientHeight]);

	useEffect(() => {
		const margin = { top: 20, right: 20, bottom: 20, left: 40 };

		const svg = d3.select(ref.current);
		const width = componentWidth - margin.left - margin.right;
		const height = componentHeight - margin.top - margin.bottom;

		const x = d3
			.scaleBand()
			.range([0, width])
			.padding(0.1)
			.domain(localData.map((d) => d.month));
		const y = d3
			.scaleLinear()
			.range([height, 0])
			.domain([0, d3.max(localData, (d) => d.emission)]);

		const graph = svg
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		graph
			.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
			.attr("class", "xAxis");

		graph.append("g").call(d3.axisLeft(y));

		graph
			.selectAll("bar")
			.data(localData)
			.enter()
			.append("rect")
			.attr("x", function (d) {
				return x(d.month);
			})
			.attr("y", function (d) {
				return y(d.emission);
			})
			.attr("width", x.bandwidth())
			.attr("height", function (d) {
				return height - y(d.emission);
			})
			.attr("class", "bar");

		return () => {
			svg.selectAll("*").remove();
			svg.selectAll("g").remove();
		};

		//Create the mouseover event
	}, [componentHeight, componentWidth, localData]);

	return (
		<>
			<svg ref={ref} className="fruiteEmissionGraph"></svg>
		</>
	);
};

export default FruiteEmissionGraph;
