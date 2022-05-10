import React, { Component } from "react";
import Display from "./display";

class EducationDetails extends Component {
  constructor() {
    super();

    this.state = {
      institute: "",
      courseName: "",
      courseStartDate: "",
      courseEndDate: "",
      eduInfor: "",
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
      eduInfor: { ...this.state, [e.target.name]: e.target.value },
    });
    this.setState({
      institute: "",
      courseName: "",
      courseStartDate: "",
      courseEndDate: "",
      eduInfor: "",
    });
  };

  onEdit = () => {
    const { eduInfor } = this.state;

    this.setState({
      institute: eduInfor.institute,
      courseName: eduInfor.courseName,
      courseStartDate: eduInfor.courseStartDate,
      courseEndDate: eduInfor.courseEndDate,
    });
  };

  render() {
    const { institute, courseName, courseStartDate, courseEndDate } =
      this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        {" "}
        <fieldset>
          <legend>Education</legend>
          <div>
            <label>Institute</label>
            <input
              type="text"
              name="institute"
              onChange={this.handleChange}
              value={institute}
            />
          </div>
          <div>
            <label>Course name</label>
            <input
              type="text"
              name="courseName"
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
        <button onClick={this.onEdit}>Edit</button>
        <button type="submit">Add Education Information</button>
      </form>
    );
  }
}

export default EducationDetails;
