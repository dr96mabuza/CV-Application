import React from "react";

function Display(props) {
  const { cv } = props;
  return (
    <div>
      <h2>Form Results</h2>
      <div>Name: {cv.firstName}</div>
      <div>Surname: {cv.surname}</div>
      <div>Phone number: {cv.phone}</div>
      <div>Email address: {cv.email}</div>
      <div>Institute: {cv.institute}</div>
      <div>Course name: {cv.courseName}</div>
      <div>Course start date: {cv.courseStartDate}</div>
      <div>Course end date: {cv.courseEndDate}</div>
      <div>Company name: {cv.companyName}</div>
      <div>Job title: {cv.jobTitle}</div>
      <div>Job tasks: {cv.jobTasks}</div>
      <div>Job start date: {cv.jobStartDate}</div>
      <div>Job end date: {cv.jobEndDate}</div>
    </div>
  );
}

export default Display;
