import React from "react";

function Display(props) {
  return (
    <div>
      <h2>Form Results</h2>
      <div>Name: {props.name}</div>
      <div>Surname: {props.surname}</div>
      <div>Phone number: {props.phone}</div>
      <div>Email address: {props.email}</div>
      <div>Institute: {props.institute}</div>
      <div>Course name: {props.courseName}</div>
      <div>Course start date: {props.courseStartDate}</div>
      <div>Course end date: {props.courseEndDate}</div>
      <div>Company name: {props.companyName}</div>
      <div>Job title: {props.jobTitle}</div>
      <div>Job tasks: {props.jobTasks}</div>
      <div>Job start date: {props.jobStartDate}</div>
      <div>Job end date: {props.jobEndDate}</div>
    </div>
  );
}

export default Display;
