import React from "react";
import DayListItem from "./DayListItem.js";

export default function DayList(props) {
// Map through days array
  const days = props.days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}>
      {day}
    </DayListItem>
  ));
  return <ul>{days}</ul>;
}