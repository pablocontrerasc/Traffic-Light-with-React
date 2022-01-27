import React, { useState } from "react";

//create your first componen
const Home = () => {
	const [color, setColor] = useState("");
	let colorRed = color === "red" ? "brillo" : "";
	let colorYellow = color === "yellow" ? "brillo" : "";
	let colorGreen = color === "green" ? "brillo" : "";
	return (
		<>
			<div className="trafficTop"></div>
			<div id="contenedor">
				<div
					onClick={() => setColor("red")}
					className={"red " + colorRed}></div>

				<div
					onClick={() => setColor("yellow")}
					className={"yellow " + colorYellow}></div>
				<div
					onClick={() => setColor("green")}
					className={`green ${colorGreen}`}></div>
			</div>
		</>
	);
};

export default Home;
