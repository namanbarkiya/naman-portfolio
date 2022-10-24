import React, { Component } from "react";
import myInfoData from "../data/myInfo.data";
import Footer from "./Footer";

export class Layout extends Component {
    render() {
        console.log(this.props.children);
        return (
            <>
                {this.props.children}
                <Footer sharedBasicInfo={myInfoData.basic_info} />
            </>
        );
    }
}

export default Layout;
