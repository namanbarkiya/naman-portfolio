import React, { Component } from "react";

import projectsData from "../data/projects.data";
import basicInfoData from "../data/basicInfo.data";
import Projects from "../components/Projects";
import Layout from "../components/Layout";

export class ProjectsPage extends Component {
    render() {
        return (
            <Layout>
                <Projects
                    resumeProjects={projectsData}
                    resumeBasicInfo={basicInfoData.basic_info}
                />
            </Layout>
        );
    }
}

export default ProjectsPage;
