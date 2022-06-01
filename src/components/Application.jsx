import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { getAppointmentsForDay, getInterview } from 'helpers/selectors.js';

import Appointment from './Appointment';
import DayList from './DayList';
import './Application.scss';

export default function Application(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prevState) => ({ ...prevState, day }));
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const schedule = dailyAppointments.map(({ id, time, interview }) => {
    return <Appointment key={id} id={id} time={time} interview={getInterview(state, interview)} />;
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then(([daysResponse, appointmentsResponse, interviewersResponse]) => {
      setState((prev) => ({
        ...prev,
        days: daysResponse.data,
        appointments: appointmentsResponse.data,
        interviewers: interviewersResponse.data,
      }));
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} selectedDay={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
