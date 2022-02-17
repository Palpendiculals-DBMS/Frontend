import React from "react";
import Modal from "../../components/Dashboard/Modal";
import BottomSVG from '../../components/Login/Group 8.svg';
import classes from './DashBoard.module.css';


const Dashboard = () => {


  return (
    <div>
      <div className={classes.gridContainer}>
        <div className={classes.recentsContainer}>
          <div className={classes.recentHeading}>
            <h2>Recent</h2>
          </div>
          <div className={classes.recentModals}>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
          </div>
        </div>
        <div className={classes["all-forms"]}>
          <div className={classes.recentHeading}>
            <h2>All Forms</h2>
          </div>
          <div className={classes["all-forms-grid"]}>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
            <Modal></Modal>
          </div>
        </div>
      </div>
      <img className={classes["bottom-svg"]} src={BottomSVG} alt="Bottom SVG" />
    </div>
  )
};

export default Dashboard;
