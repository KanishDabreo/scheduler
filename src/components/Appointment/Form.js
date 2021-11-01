import React, { useState } from 'react';
import Button from "components/Button.js";
import InterviewerList from "components/InterviewerList.js";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
 
  const reset = function () {
    setInterviewer(null);
    setStudent("");
  }

  const cancel = function() {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
          /*
            This must be a controlled component
            your code goes here
            */
         value={student}
         onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
        /* your code goes here */
        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger {/* your code goes here */}>Cancel</Button>
          <Button confirm {/* your code goes here */}>Save</Button>
        </section>
      </section>
    </main>
  )
}