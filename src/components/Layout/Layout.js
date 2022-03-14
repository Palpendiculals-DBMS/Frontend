import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Layout = props => {
  return (
    <>
      {/* <MainNavigation /> */}
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
