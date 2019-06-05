import React from "react";
import axios from "axios";
import { hot } from "react-hot-loader";
import DayList from "./DayList";
import DailyCard from "./DailyCard";
import DailyDetails from "./DailyDetails";
import Spinner from "./Spinner";

const API_KEY = "7da066e8f1118f76450059957bf8cad7";

class App extends React.Component {
	state = {
		days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
		selectedDay: null,
		lat: null,
		long: null,
		forecast: []
	};

	onDaySelect = day => {
		this.setState({ selectedDay: day });
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position =>
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				}),
			err => this.setState({ errorMessage: err.message })
		);
	}

	getWeather(lat, long) {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${
					this.state.lat
				}&lon=${this.state.long}&appid=${API_KEY}`
			)
			.then(response => {
				const forecast = response.data;
				this.setState({ forecast });
			});
		console.log(this.state);
	}

	render() {
		// this.getWeather();
		if (!this.state.lat && !this.state.long) {
			return <Spinner />;
		}

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
