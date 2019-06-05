import React from "react";

const DailyDetails = ({ day }) => {
	if (!day) {
		return (
			<div className="ui container segment">
				To see hourly forcast please click on a day...
			</div>
		);
	}
	return (
		<div className="ui container">
			<div className="ui segments">
				<div className="ui segment">
					<h2>{day}</h2>
					<p style={{ paddingLeft: "1.5em" }}>
						TIME
						<span style={{ paddingLeft: "5em" }}>DESCRIPTION</span>
						<span style={{ paddingLeft: "5em" }}>HIGH</span>
						<span style={{ paddingLeft: "5em" }}>LOW</span>
					</p>
				</div>

				<div className="ui segments">
					<div className="ui segment">
						<p>
							5:00 pm
							<span style={{ paddingLeft: "5em" }}>
								Sunny
							</span>{" "}
							<span style={{ paddingLeft: "7.5em" }}>75˚</span>
							<span style={{ paddingLeft: "7.5em" }}>60˚</span>
						</p>
					</div>
					<div className="ui segment">
						<p>6:00 pm</p>
					</div>
					<div className="ui segment">
						<p>7:00 pm</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DailyDetails;
