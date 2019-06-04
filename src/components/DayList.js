import React from "react";
import DailyCard from "./DailyCard";

const DayList = ({ days, onDaySelect }) => {
	const renderedDays = days.map(day => {
		return <DailyCard onDaySelect={onDaySelect} day={day} />;
	});

	return (
		<div className="ui container horizontal segments">{renderedDays}</div>
	);
};

export default DayList;
