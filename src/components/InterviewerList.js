import React from "react";
import PropTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem.js";
import "components/InterviewerList.scss";

//Try sending a string to the interviewers prop that is now required to be an array (e.g. try the .toString() function). Check the console to find the warning. When you see the error, revert the code and ensure that the prop is an array again.w8d2-2
function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const interviewersList = interviewers.map(interviewer =>
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      spots={interviewer.spots}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer={() => onChange(interviewer.id)} />
  )

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersList}
      </ul>
    </section>
  )
};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;