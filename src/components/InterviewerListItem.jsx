import React from 'react';
import './InterviewerListItem.scss';
import cx from 'classnames';

const InterviewerListItem = ({ name, avatar, selected, setInterviewer }) => {
  const interviewersClass = cx('interviewers__item', {
    'interviewers__item--selected': selected,
  });

  return (
    <li onClick={setInterviewer} className={interviewersClass}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;
