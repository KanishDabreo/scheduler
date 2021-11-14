import React from "react";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode.js";
import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  //SAVE APPOINTMENT
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING, true);
    props
      .bookInterview(props.id, interview)
      //shows booked interview 
      .then(() => transition(SHOW))
      // throw error message
      .catch(error => transition(ERROR_SAVE, true));
  }

  //DELETE APPOINTMENT
  function deleteInterview(event) {
    transition(DELETING, true);
    props
     .cancelInterview(props.id)
     //shows new empty slot interview after deleting
     .then(() => transition(EMPTY))
     // throw error message
     .catch(error => transition(ERROR_DELETE, true));
   }
  //CONFIRM APPOINTMENT
  function confirm() {
    transition(CONFIRM);
  }
    
  //EDIT APPOINTMENT
  function edit() {
    transition(EDIT);
  }

    return (
      <article className="appointment">
      {props.time ? <Header time={props.time} /> : <p>No Appointments</p>}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={edit}
          onDelete={confirm}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()} />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()} />
      )}
      {mode === SAVING && (
      <Status message="Saving" />
      )}
      {mode === CONFIRM && (
        <Confirm 
          message="Delete the appointment?"
          onConfirm={deleteInterview} 
          onCancel={() => back()}
        />)}
      {mode === DELETING && (
      <Status message="Deleting" />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message="Could not add appointment"
          onClose={() => back()}
        />)}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not cancel appointment"
          onClose={() => back()}
        />)}
    </article>
  )
}