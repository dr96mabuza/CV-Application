import React, { Component } from "react";
import Display from "./display";
import GeneralInformation from "./personalDetails";
import EducationDetails from "./education";
import WorkExperience from "./workExperience";

class Form extends Component {
  constructor() {
    super();
    this.state = { cv: "" };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <GeneralInformation />
          <EducationDetails />
          <WorkExperience />

          <button type="submit">Submit form</button>
        </form>
      </div>
    );
  }
}

export default Form;
