import React, { useState, useEffect } from "react";
import Display from "./display";

function Form() {
  const [
    firstName,
    setFirstName,
    surname,
    setSurname,
    email,
    setEmail,
    phone,
    setPhone,
    institute,
    setIntitute,
    courseName,
    setCourseName,
    courseStartDate,
    setCourseStartDate,
    courseEndDate,
    setCourseEndDate,
    companyName,
    setCompanyName,
    jobTitle,
    setJobTitle,
    jobStartDate,
    setJobStartDate,
    jobEndDate,
    setJobEndDate,
  ] = useState("");

  useEffect(() => {});

  return (
    <div>
      <form>
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              firstNname="name"
              placeholder="Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="012 3456 789"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>
            Education<small>(Highest Completed Course/Schooling)</small>
          </legend>

          <div>
            <label>Institute</label>
            <input
              type="text"
              name="institute"
              placeholder="Central Open Source University"
              onChange={(e) => setIntitute(e.target.value)}
              value={institute}
            />
          </div>
          <div>
            <label>Course name</label>
            <input
              type="text"
              name="courseName"
              placeholder="Bsc Example"
              onChange={(e) => setCourseName(e.target.value)}
              value={courseName}
            />
          </div>
          <div>
            <label>Course start date</label>
            <input
              type="date"
              name="courseStartDate"
              onChange={(e) => setCourseStartDate(e.target.value)}
              value={courseStartDate}
            />
          </div>
          <div>
            <label>Course end date</label>
            <input
              type="date"
              name="courseEndDate"
              onChange={(e) => setCourseEndDate(e.target.value)}
              value={courseEndDate}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Employment History<small>(Last place of employment)</small>
          </legend>

          <div>
            <label>companyName</label>
            <input
              type="text"
              name="companyName"
              placeholder="Stock LTD"
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
          </div>
          <div>
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="General worker"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
            />
          </div>
          <div>
            <label>Job Start Date</label>
            <input
              type="date"
              name="jobStartDate"
              onChange={(e) => setJobStartDate(e.target.value)}
              value={jobStartDate}
            />
          </div>
          <div>
            <label>Job End Date</label>
            <input
              type="date"
              name="jobEndDate"
              onChange={(e) => setJobEndDate(e.target.value)}
              value={jobEndDate}
            />
          </div>
        </fieldset>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Form;
