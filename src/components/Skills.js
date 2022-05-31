import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var lg_skills = this.props.sharedSkills.icons.map(function (skills, i) {
        if (skills.type == "lg") {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skills.class} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skills.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        } else {
          return null;
        }
      });

      var fw_skills = this.props.sharedSkills.icons.map(function (skills, i) {
        if (skills.type == "fw") {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skills.class} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skills.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        } else {
          return null;
        }
      });

      var be_skills = this.props.sharedSkills.icons.map(function (skills, i) {
        if (skills.type == "be") {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skills.class} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skills.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        } else {
          return null;
        }
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title-2">
              <span className="section-span">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12">
            <h1 className="section-sub-title">
              <span>Language:</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{lg_skills}</ul>
          </div>
          <div className="col-md-12">
            <h1 className="section-sub-title">
              <span>Framework:</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{fw_skills}</ul>
          </div>
          <div className="col-md-12">
            <h1 className="section-sub-title">
              <span>Backend:</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{be_skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
