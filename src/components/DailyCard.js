import React from "react";

class DailyCard extends React.Component {
	render() {
		return (
			<div className="ui segment">
				<div className="ui center grey aligned header">Monday</div>
				<div className="ui center grey aligned header">
					<i class="sun icon" />
				</div>

				<div className="ui center grey aligned header">72° 60°</div>
			</div>
		);
	}
}

export default DailyCard;
