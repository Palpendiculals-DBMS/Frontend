import React from "react";
import YangLogo from "../../Assets/YangLOGO.svg";
import BottomSVG from "./Group 8.svg";
import classes from "./Login.module.css";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @return {React.Component}
 */
function MainWindow(props) {
  return (
    <div className={classes.mainWindow}>
      <section className={classes.mainBody}>
        <nav className={classes.navbar}>
          <img src={YangLogo} alt="Yang Logo" />
        </nav>
        {props.children}
        <img
          className={classes["bottom-svg"]}
          src={BottomSVG}
          alt="Bottom SVG"
        />
      </section>
    </div>
  );
}

MainWindow.propTypes = {
  children: PropTypes.any,
};

export default MainWindow;
