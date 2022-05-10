import React, { Component } from "react";
import Display from "./display";

class WorkExperience extends Component {
  constructor() {
    super();

    this.state = {
      companyName: "",
      jobTitle: "",
      jobTasks: "",
      jobStartDate: "",
      jobEndDate: "",
      jobInfor: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      jobInfor: { ...this.state, [e.target.name]: e.target.value },
    });
  };

  render() {
    const { companyName, jobTitle, jobTasks, jobStartDate, jobEndDate } =
      this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        {" "}
        <fieldset>
          <legend>Employment History</legend>
          <div>
            <label>companyName</label>
            <input
              type="text"
              name="companyName"
              onChange={this.handleChange}
              value={companyName}
            />
          </div>
          <div>
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              onChange={this.handleChange}
              value={jobTitle}
            />
          </div>
          <div>
            <label>Job Tasks</label>
            <input
              type="text"
              name="jobTasks"
              onChange={this.handleChange}
              value={jobTasks}
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
        <button type="submit">Add Employment History</button>
      </form>
    );
  }
}

export default WorkExperience;
