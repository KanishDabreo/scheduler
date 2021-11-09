import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  function formatSpots() {
    let spotsRemaining;
    spotsRemaining = `${spots} spots remaining`
    if (spots === 0) {
      spotsRemaining = "no spots remaining";
    } if (spots === 1) {
      spotsRemaining = "1 spot remaining";
    }
    return spotsRemaining;
  }

  return (
    <li className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()} remaining</h3>
    </li>
  );
}