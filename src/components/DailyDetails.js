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
		<div className="ui container segment">
			<h1>{day}</h1>
		</div>
	);
};
export default DailyDetails;
