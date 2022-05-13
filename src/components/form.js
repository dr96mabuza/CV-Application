import React, { useState, useEffect } from "react";
import Display from "./display";

function Form() {
  return (
    <div>
      <form onSubmit={this.onSubmitForm}>
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              onChange={this.handleChange}
              value={surname}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Example@email.com"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="012 3456 789"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              value={institute}
            />
          </div>
          <div>
            <label>Course name</label>
            <input
              type="text"
              name="courseName"
              placeholder="Bsc Example"
              onChange={this.handleChange}
              value={courseName}
            />
          </div>
          <div>
            <label>Course start date</label>
            <input
              type="date"
              name="courseStartDate"
              onChange={this.handleChange}
              value={courseStartDate}
            />
          </div>
          <div>
            <label>Course end date</label>
            <input
              type="date"
              name="courseEndDate"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              value={companyName}
            />
          </div>
          <div>
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              placeholder="General worker"
              onChange={this.handleChange}
              value={jobTitle}
            />
          </div>
          <div>
            <label>Job Start Date</label>
            <input
              type="date"
              name="jobStartDate"
              onChange={this.handleChange}
              value={jobStartDate}
            />
          </div>
          <div>
            <label>Job End Date</label>
            <input
              type="date"
              name="jobEndDate"
              onChange={this.handleChange}
              value={jobEndDate}
            />
          </div>
        </fieldset>

        <button type="submit">Submit Form</button>
      </form>
      <Display cv={cv} />
    </div>
  );
}

export default Form;
