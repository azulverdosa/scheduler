import React from 'react';

export default function DayListItem({ name, selected, setDay, spots }) {
  const clickHandler = (event) => setDay(name);

  return (
    <li onClick={clickHandler} className={name}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
}

// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day
