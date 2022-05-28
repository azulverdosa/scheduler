import React from 'react';

import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import './styles.scss';

const Appointment = (props) => {
  return (
    <article className="appointment">
      <Header time={props.time} />

      {props.interview?.student && props.interview?.interviewer ? (
        <Show student={props.interview.student} interviewer={props.interview.interviewer} />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
