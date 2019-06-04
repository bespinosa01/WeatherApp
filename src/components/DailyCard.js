import React from "react";

const DailyCard = ({ day, onDaySelect }) => {
	return (
		<div onClick={() => onDaySelect(day)} className="ui segment">
			<div className="ui center grey aligned header">{day}</div>
			<div className="ui center grey aligned header">
				<i className="sun icon" />
			</div>

			<div className="ui center grey aligned sub header">75° 80°</div>
		</div>
	);
};

export default DailyCard;
