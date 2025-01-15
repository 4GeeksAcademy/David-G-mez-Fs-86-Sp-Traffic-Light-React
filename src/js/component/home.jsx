import React, {useState} from "react";

//create your first component
const Home = () => {

	const [actualColor, setActualColor] = useState("");
	console.log[actualColor];

	return (
		<div className="trafficLight">
			<div className="pole"></div>
			<div className="trafficLight">
				<div className={`light green ${actualColor === "green" ? "glow" : ""}`} onClick={() => setActualColor("green")}></div>
				<div className={`light yellow ${actualColor === "yellow" ? "glow" : ""}`} onClick={() => setActualColor("yellow")}></div>
				<div className={`light red ${actualColor === "red" ? "glow" : ""}`} onClick={() => setActualColor("red")}></div>
			</div>
		</div>
	);
};

export default Home;
