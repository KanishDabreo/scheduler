import React from "react";
import { Fragment } from 'react';
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";
import "components/Appointment/styles.scss"

export default function Appointment(props) {
  return (
    <Fragment>
      <header>{props.time}</header>
      {props.interview ? <article className="appointment">
        <Show interviewer={props.interview.interviewer.name} student={props.interview.student} /></article>
        : <article className="appointment"><Empty /></article>}
    </Fragment>
  )
}