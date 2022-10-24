import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import "./App.scss";
import ProjectsPage from "./pages/ProjectsPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route
                            path="home"
                            element={<Navigate to="/" replace />}
                        />
                        <Route path="projects" element={<ProjectsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
