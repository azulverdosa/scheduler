import React from 'react';

import InterviewerListItem from './InterviewerListItem';
import './InterviewerList.scss';

const InterviewerList = (props) => {
  const interviewers = props.interviewers.map((interviewer) => {
    const clickHandler = (event) => props.onChange(interviewer.id);
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.selectedInterviewerId}
        setInterviewer={clickHandler}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
};

export default InterviewerList;
