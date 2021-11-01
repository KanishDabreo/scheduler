import React from "react";
import classNames from "classnames";
import DayListItem from "./DayListItem.scss";

export default function DayListItem(props) {
  
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots left"
    }
    
    if (spots === 1) {
      return "1 spot left"
    }
    return `${spots} spots left`
  }

  const spots = formatSpots(props.spots)

  return (
    <li className={dayClass} onClick={() => setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}