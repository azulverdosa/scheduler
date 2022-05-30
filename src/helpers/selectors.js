export const getAppointmentsForDay = (state, selectedDay) => {
  const found = state?.days?.find((day) => selectedDay === day.name);

  return found
    ? found?.appointments?.map((appointmentId) => state.appointments[appointmentId])
    : [];
};
