import React, { Component } from "react";
import { hot } from "react-hot-loader";
import DayList from "./DayList";
import DailyCard from "./DailyCard";
import DailyDetails from "./DailyDetails";
class App extends Component {
	state = {
		days: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday"
		],
		selectedDay: null
	};

	onDaySelect = day => {
		this.setState({ selectedDay: day });
	};

	render() {
		//	console.log(`App.js State: ${this.state.days}`);
		return (
			<div className="App">
				<h1 className="ui center aligned header"> Weather App </h1>
				<div className="ui container horizontal segments">
					<DayList
						onDaySelect={this.onDaySelect}
						days={this.state.days}
					/>
				</div>
				<DailyDetails day={this.state.selectedDay} />
			</div>
		);
	}
}

export default hot(module)(App);
