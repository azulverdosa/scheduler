export const getAppointmentsForDay = (state, selectedDay) => {
  const found = state?.days?.find((day) => selectedDay === day.name);

  return found
    ? found?.appointments?.map((appointmentId) => state.appointments[appointmentId])
    : [];
};

export const getInterviewersForDay = (state, selectedDay) => {
  const found = state?.days?.find((day) => selectedDay === day.name);

  return found
    ? found?.interviewers?.map((interviewerId) => state.interviewers[interviewerId])
    : [];
};

export const getInterview = (state, interview) => {
  const interviewerID = interview?.interviewer;
  const interviewerData = state.interviewers[interviewerID];

  const modifiedInterview = {
    ...interview,
    interviewer: interviewerData,
  };

  return interviewerID ? modifiedInterview : null;
};
