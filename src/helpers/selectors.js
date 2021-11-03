//appointments for a specific day in an array 
export function getAppointmentsForDay(state, day) {
  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === day) {
      return state.days[i].appointments.map((appointment) => {
        return state.appointments[appointment]
      })
    }
  }
  return [];
}
//interviewers for a specific day in an array 
export function getInterviewersForDay(state, day) {
  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === day) {
      return state.days[i].interviewers.map((interviewer) => {
        return state.interviewers[interviewer];
      })
    }
  }
  return [];
}
//state of interview in an object
export function getInterview(state, interview) {
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    }
  }
  return null;
}