import React, { useState, useEffect } from "react";
import Display from "./display";

const initialValues = {
  firstName: "",
  surname: "",
  email: "",
  phone: "",
  institute: "",
  courseName: "",
  courseStartDate: "",
  courseEndDate: "",
  companyName: "",
  jobTitle: "",
  jobStartDate: "",
  jobEndDate: "",
};

function Form() {
  const [values, setValues] = useState(initialValues);
  const [cv, setCV] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmitForm = (e) => {
    setCV({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              firstNname="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.firstName}
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              value={values.surname}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Example@email.com"
              onChange={handleChange}
              value={values.email}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="012 3456 789"
              onChange={handleChange}
              value={values.phone}
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
              onChange={handleChange}
              value={values.institute}
            />
          </div>
          <div>
            <label>Course name</label>
            <input
              type="text"
              name="courseName"
              placeholder="Bsc Example"
              onChange={handleChange}
              value={values.courseName}
            />
          </div>
          <div>
            <label>Course start date</label>
            <input
              type="date"
              name="courseStartDate"
              onChange={handleChange}
              value={values.courseStartDate}
            />
          </div>
          <div>
            <label>Course end date</label>
            <input
              type="date"
              name="courseEndDate"
              onChange={handleChange}
              value={values.courseEndDate}
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
              onChange={handleChange}
              value={values.companyName}
            />
          </div>
          <div>
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="General worker"
              onChange={handleChange}
              value={values.jobTitle}
            />
          </div>
          <div>
            <label>Job Start Date</label>
            <input
              type="date"
              name="jobStartDate"
              onChange={handleChange}
              value={values.jobStartDate}
            />
          </div>
          <div>
            <label>Job End Date</label>
            <input
              type="date"
              name="jobEndDate"
              onChange={handleChange}
              value={values.jobEndDate}
            />
          </div>
        </fieldset>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default Form;
