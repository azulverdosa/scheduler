import React from 'react';
import cx from 'classnames';
import './DayListItems.scss';

const formatSpots = (spots) => {
  switch (true) {
    case spots === 0:
      return 'no spots';

    case spots === 1:
      return '1 spot';

    default:
      return `${spots} spots`;
  }
};

export default function DayListItem({ name, selected, setDay, spots }) {
  const clickHandler = (event) => setDay(name);
  const dayClass = cx('day-list__item', {
    'day-list__item--selected': selected,
    'day-list__item--full': spots === 0,
  });

  return (
    <li onClick={clickHandler} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)} remaining</h3>
    </li>
  );
}
