import React, { useState } from 'react';

import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

const Form = ({ student, interviewer, interviewers, onSave, onCancel }) => {
  const [enteredStudent, setEnteredStudent] = useState(student || '');
  const [selectedInterviewerId, setSelectedInterviewerId] = useState(interviewer || null);

  const reset = () => {
    setEnteredStudent('');
    setSelectedInterviewerId(null);
  };

  const changeHandler = (event) => setEnteredStudent(event.target.value);
  const saveHandler = (event) => onSave();
  const cancelHandler = (event) => {
    reset();
    onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={enteredStudent}
            onChange={changeHandler}
          />
        </form>
        <InterviewerList
          onChange={setSelectedInterviewerId}
          selectedInterviewerId={selectedInterviewerId}
          interviewers={interviewers}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancelHandler}>
            Cancel
          </Button>
          <Button confirm onClick={saveHandler}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
