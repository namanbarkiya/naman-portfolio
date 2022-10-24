import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { BsChevronDoubleDown } from "react-icons/bs";
class Header extends Component {
    titles = [];

    constructor() {
        super();
        this.state = { checked: false };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    }

    onThemeSwitchChange(checked) {
        this.setState({ checked });
        this.setTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    render() {
        if (this.props.sharedData) {
            var name = this.props.sharedData.name;
            this.titles = this.props.sharedData.titles
                .map((x) => [x.toUpperCase(), 1500])
                .flat();
        }

        const HeaderTitleTypeAnimation = React.memo(
            () => {
                return (
                    <Typical
                        className="title-styles"
                        steps={this.titles}
                        loop={50}
                    />
                );
            },
            (props, prevProp) => true
        );

        return (
            <header
                id="home"
                style={{ height: window.innerHeight, display: "block" }}
            >
                <div className="row aligner" style={{ height: "100%" }}>
                    <div className="col-md-0">
                        <div>
                            {/* <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span> */}
                            <br />
                            <h1 className="mb-0">
                                <Typical steps={[name]} wrapper="p" />
                            </h1>
                            <div className="title-container">
                                <HeaderTitleTypeAnimation />
                            </div>
                            <div className="mb-5"></div>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.onThemeSwitchChange}
                                offColor="#baaa80"
                                onColor="#353535"
                                className="react-switch mx-auto"
                                width={90}
                                height={40}
                                uncheckedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="bi:moon-fill"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 20,
                                            textAlign: "end",
                                            marginLeft: "15px",
                                            color: "#353239",
                                        }}
                                    ></span>
                                }
                                checkedIcon={
                                    <span
                                        className="iconify"
                                        data-icon="akar-icons:sun-fill"
                                        data-inline="false"
                                        style={{
                                            display: "block",
                                            height: "100%",
                                            fontSize: 20,
                                            textAlign: "end",
                                            marginLeft: "20px",
                                            color: "#fff",
                                        }}
                                    ></span>
                                }
                                id="icon-switch"
                            />
                        </div>
                    </div>
                    <BsChevronDoubleDown
                        size={30}
                        color={this.state.checked ? "#fff" : "#444"}
                        style={{
                            position: "absolute",
                            left: "auto",
                            right: "auto",
                            bottom: 30,
                        }}
                    />
                </div>
            </header>
        );
    }
}

export default Header;
