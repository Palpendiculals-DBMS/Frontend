import React from "react";
import BlankModal from "../../components/Dashboard/BlankModal";
import Modal from "../../components/Dashboard/Modal";
import BottomSVG from '../../components/Login/Group 8.svg';
import classes from './DashBoard.module.css';


const nameArray = ["Bhadwa", "SAE", "Bewda", "Kasol Scam"];

const Dashboard = () => {

  return (
    <div>
      <div className={ classes.gridContainer }>
        <div className={ classes["all-forms"] }>
          <div className={ classes.recentHeading }>
            <h2>All Forms</h2>
          </div>
          <div className={ classes["all-forms-grid"] }>
            <BlankModal></BlankModal>
            { nameArray.map((item, index) => { return <Modal key={ index } title={ item } /> }) }
          </div>
        </div>
      </div>
      <img className={ classes["bottom-svg"] } src={ BottomSVG } alt="Bottom SVG" />
    </div>
  )
};

export default Dashboard;