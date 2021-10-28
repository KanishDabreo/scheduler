import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const DayListItemClass = classNames("DayListItem", {
    "day-list__item": props,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.full
  });
  return (
    <li 
      className={DayListItemClass}
      onClick={props.selected}
      disabled={props.full}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
      {props.children}
    </li>
  );
};

export default function formatSpots(props) {

};