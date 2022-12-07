import React, { Component } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

import basicInfoData from "../data/basicInfo.data";
import myInfoData from "../data/myInfo.data";
import Layout from "../components/Layout";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header sharedData={myInfoData.basic_info} />
                    {/* <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-poland"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div> */}
                    <About
                        resumeBasicInfo={basicInfoData.basic_info}
                        sharedBasicInfo={myInfoData.basic_info}
                    />
                    <Experience
                        resumeExperience={basicInfoData.experience}
                        resumeBasicInfo={basicInfoData.basic_info}
                    />
                    <Projects
                        resumeProjects={basicInfoData.projects.slice(0, 3)}
                        resumeBasicInfo={basicInfoData.basic_info}
                        page={"home"}
                    />
                    <Skills
                        sharedSkills={myInfoData.skills}
                        resumeBasicInfo={basicInfoData.basic_info}
                    />
                </Layout>
            </div>
        );
    }
}

export default HomePage;
