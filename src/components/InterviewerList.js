import React from "react";
import classNames from "classnames";
import InterviewerList from "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem.js";

export default function InterviewerList(props) {
  const interviewers = props.interviewer.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        spots={interviewer.spots}
        selected={interviewer.id === props.value}
        setInterviewer={props.onChange} />
    )
  });
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )
}