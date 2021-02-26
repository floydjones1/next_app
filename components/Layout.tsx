import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <>
    <Header />
    <div className="Layout" style={layoutStyle}>
      <NavBar />
      <div className="Content" style={contentStyle}>
        {props.children}
      </div>
    </div>
  </>
);

export default Layout;