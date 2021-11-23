import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  const setDay = day => setState(prev => ({ ...prev, day }));
  // retrieve data with axios get requests to set up an initial state
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
    console.log(all);
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  // function to create new interview state make the put/axios request
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(res => {
        if(state.appointments[id].interview === null){
          const days = state.days.map(day => (
            day.appointments.includes(id)
              ? { ...day, spots: day.spots - 1 }
              : day
          ));
          setState(prev => ({ ...prev, days, appointments }));
        } else {
          setState(prev => ({ ...prev, appointments }));
        }
      });
  }

  // function to delete interview state
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.delete(`/api/appointments/${id}`)
      .then(res => {
        const days = state.days.map(day => (
          day.appointments.includes(id)
            ? { ...day, spots: day.spots + 1 }
            : day
        ));
        setState(prev => ({ ...prev, days, appointments }));
      });
  }

  return { state, setDay, bookInterview, cancelInterview }
}