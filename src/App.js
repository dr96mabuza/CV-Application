import React, { Component } from "react";
import GeneralInformation from "./components/personalDetails";
import EducationDetails from "./components/education";
import WorkExperience from "./components/workExperience";

class App extends Component {
  render() {
    return (
      <div>
        <GeneralInformation />
        <EducationDetails />
        <WorkExperience />
      </div>
    );
  }
}

export default App;
