import React, { Component } from "react";
import { hot } from "react-hot-loader";
import DailyCard from "./components/DailyCard";
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1> Weather App </h1>
				<div className="ui container horizontal segments">
					<DailyCard />
					<DailyCard />
					<DailyCard />
					<DailyCard />
					<DailyCard />
					<DailyCard />
					<DailyCard />
				</div>
			</div>
		);
	}
}

export default hot(module)(App);
