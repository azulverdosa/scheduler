import React from 'react';
import DayListItem from './DayListItem.js';

const DayList = (props) => {
  const days = props.days.map((day) => {
    return <DayListItem key={day.id} name={day.name} spots={day.spots} />;
  });
  return <ul>{days}</ul>;
};

export default DayList;
